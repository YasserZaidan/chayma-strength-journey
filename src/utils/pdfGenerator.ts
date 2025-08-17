import jsPDF from 'jspdf';
import catCowStretch from '@/assets/stretch-cat-cow.jpg';
import childsPoseStretch from '@/assets/stretch-childs-pose.jpg';
import bridgeStretch from '@/assets/stretch-bridge.jpg';
import forwardFoldStretch from '@/assets/stretch-forward-fold.jpg';
import legsUpWallStretch from '@/assets/stretch-legs-up-wall.jpg';

export interface StretchGuideData {
  name: string;
  email: string;
}

const stretches = [
  {
    name: "Cat-Cow Stretch",
    image: catCowStretch,
    benefits: "Improves spinal mobility, reduces cortisol levels, stimulates reproductive organs",
    instructions: [
      "Start on hands and knees in tabletop position",
      "Inhale, arch your back and look up (Cow pose)",
      "Exhale, round your spine and tuck chin to chest (Cat pose)",
      "Repeat 8-10 times with breath"
    ],
    duration: "2-3 minutes",
    bestTime: "Morning or evening"
  },
  {
    name: "Child's Pose",
    image: childsPoseStretch,
    benefits: "Activates parasympathetic nervous system, reduces stress hormones, calms mind",
    instructions: [
      "Kneel on the floor with big toes touching",
      "Sit back on your heels",
      "Fold forward, extending arms in front",
      "Rest forehead on the ground, breathe deeply"
    ],
    duration: "3-5 minutes",
    bestTime: "Evening or when stressed"
  },
  {
    name: "Bridge Pose",
    image: bridgeStretch,
    benefits: "Stimulates thyroid gland, improves circulation, supports adrenal function",
    instructions: [
      "Lie on your back, knees bent, feet hip-width apart",
      "Press feet into ground, lift hips up",
      "Keep shoulders and head on ground",
      "Hold and breathe deeply"
    ],
    duration: "1-2 minutes",
    bestTime: "Morning for energy boost"
  },
  {
    name: "Seated Forward Fold",
    image: forwardFoldStretch,
    benefits: "Calms nervous system, supports digestion, balances emotions",
    instructions: [
      "Sit with legs extended straight",
      "Inhale, lengthen spine",
      "Exhale, fold forward from hips",
      "Reach towards toes, relax neck and shoulders"
    ],
    duration: "2-3 minutes",
    bestTime: "Evening for relaxation"
  },
  {
    name: "Legs Up the Wall",
    image: legsUpWallStretch,
    benefits: "Improves circulation, reduces cortisol, supports lymphatic drainage",
    instructions: [
      "Lie on your back near a wall",
      "Extend legs up against the wall",
      "Arms relaxed by your sides",
      "Close eyes and focus on breathing"
    ],
    duration: "5-10 minutes",
    bestTime: "Evening before bed"
  }
];

const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const generateStretchGuide = async (data: StretchGuideData): Promise<Blob> => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;

  // Colors
  const primaryColor = '#8B5CF6'; // violet-500
  const textColor = '#374151'; // gray-700

  // Title Page
  pdf.setFillColor(139, 92, 246); // violet-500
  pdf.rect(0, 0, pageWidth, 60, 'F');
  
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(28);
  pdf.setFont('helvetica', 'bold');
  pdf.text('5 Daily Stretches', pageWidth / 2, 25, { align: 'center' });
  pdf.text('for Hormonal Balance', pageWidth / 2, 40, { align: 'center' });
  
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'normal');
  pdf.text('A Complete Guide for Women', pageWidth / 2, 50, { align: 'center' });

  // Personalization
  pdf.setTextColor(textColor);
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text(`Prepared for: ${data.name}`, margin, 80);

  // Introduction
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  const intro = `Dear ${data.name},

Welcome to your personalized guide for hormonal balance through gentle stretching. These 5 carefully selected stretches are designed to support your body's natural hormonal rhythms, reduce stress, and promote overall well-being.

Each stretch targets specific areas that influence hormonal health - from supporting your thyroid and adrenal glands to calming your nervous system and improving circulation.

Practice these stretches daily for best results, listening to your body and breathing deeply throughout each movement.`;

  const introLines = pdf.splitTextToSize(intro, contentWidth);
  pdf.text(introLines, margin, 95);

  // Add stretches - one per page
  for (let i = 0; i < stretches.length; i++) {
    const stretch = stretches[i];
    
    // New page for each stretch
    pdf.addPage();
    
    let yPosition = margin;
    
    // Stretch title
    pdf.setTextColor(primaryColor);
    pdf.setFontSize(22);
    pdf.setFont('helvetica', 'bold');
    pdf.text(`${i + 1}. ${stretch.name}`, margin, yPosition);
    yPosition += 15;
    
    // Load and add image
    try {
      const img = await loadImage(stretch.image);
      const imgWidth = 80;
      const imgHeight = 80;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const imgData = canvas.toDataURL('image/jpeg', 0.9);
      
      pdf.addImage(imgData, 'JPEG', margin, yPosition, imgWidth, imgHeight);
      yPosition += imgHeight + 10;
    } catch (error) {
      console.warn(`Could not load image for ${stretch.name}:`, error);
      yPosition += 10;
    }
    
    // Benefits
    pdf.setTextColor(textColor);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Benefits:', margin, yPosition);
    yPosition += 8;
    
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    const benefitsLines = pdf.splitTextToSize(stretch.benefits, contentWidth);
    pdf.text(benefitsLines, margin, yPosition);
    yPosition += benefitsLines.length * 5 + 10;
    
    // Instructions
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('How to do it:', margin, yPosition);
    yPosition += 8;
    
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    stretch.instructions.forEach((instruction, index) => {
      const instructionText = `${index + 1}. ${instruction}`;
      const lines = pdf.splitTextToSize(instructionText, contentWidth);
      pdf.text(lines, margin, yPosition);
      yPosition += lines.length * 5 + 3;
    });
    
    yPosition += 10;
    
    // Duration and best time
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Duration:', margin, yPosition);
    pdf.setFont('helvetica', 'normal');
    pdf.text(stretch.duration, margin + 25, yPosition);
    yPosition += 8;
    
    pdf.setFont('helvetica', 'bold');
    pdf.text('Best Time:', margin, yPosition);
    pdf.setFont('helvetica', 'normal');
    pdf.text(stretch.bestTime, margin + 28, yPosition);
  }
  
  // Final page - tips and contact
  pdf.addPage();
  
  pdf.setTextColor(primaryColor);
  pdf.setFontSize(20);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Tips for Success', margin, margin + 10);
  
  pdf.setTextColor(textColor);
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  
  const tips = [
    "• Practice at the same time each day to create a routine",
    "• Listen to your body - modify poses as needed",
    "• Focus on deep, slow breathing throughout",
    "• Be consistent - even 10 minutes daily makes a difference",
    "• Stay hydrated and eat nourishing foods",
    "• Track how you feel before and after practice"
  ];
  
  let tipY = margin + 25;
  tips.forEach(tip => {
    pdf.text(tip, margin, tipY);
    tipY += 8;
  });
  
  // Contact info
  tipY += 20;
  pdf.setTextColor(primaryColor);
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Continue Your Journey', margin, tipY);
  
  tipY += 15;
  pdf.setTextColor(textColor);
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  
  const contactText = `For personalized guidance and more advanced programs, reach out to me:

Email: chayma.al.zein@gmail.com
WhatsApp: +961 70 462 210
Instagram: @chayma.al.zein

Remember, this guide is just the beginning of your wellness journey. 
I'm here to support you every step of the way.

With love and light,
Chayma Al Zein`;

  const contactLines = pdf.splitTextToSize(contactText, contentWidth);
  pdf.text(contactLines, margin, tipY);

  return pdf.output('blob');
};