import { useState } from 'react';
import { generateStretchGuide } from '@/utils/pdfGenerator';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface LeadMagnetData {
  name: string;
  email: string;
}

export const useLeadMagnet = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitLeadMagnet = async (data: LeadMagnetData) => {
    if (!data.name.trim() || !data.email.trim()) {
      toast.error('Please fill in both name and email');
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    setIsSubmitting(true);
    
    try {
      // Generate PDF
      toast.loading('Generating your personalized guide...');
      const pdfBlob = await generateStretchGuide(data);
      
      // Convert blob to base64
      const reader = new FileReader();
      const base64Data = await new Promise<string>((resolve, reject) => {
        reader.onload = () => {
          const base64 = (reader.result as string).split(',')[1];
          resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(pdfBlob);
      });

      // Send email via edge function
      toast.loading('Sending your guide to your email...');
      const { data: emailData, error: emailError } = await supabase.functions.invoke('send-guide', {
        body: {
          name: data.name,
          email: data.email,
          pdfData: base64Data,
        },
      });

      if (emailError) {
        throw emailError;
      }

      toast.success(`Success! Check your email (${data.email}) for your free guide 📧`);
      return true;
    } catch (error: any) {
      console.error('Error sending guide:', error);
      
      // Fallback: download PDF directly if email fails
      try {
        const pdfBlob = await generateStretchGuide(data);
        const url = URL.createObjectURL(pdfBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `5-Daily-Stretches-for-Hormonal-Balance-${data.name.replace(/\s+/g, '-')}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        toast.error('Email delivery failed, but your guide has been downloaded directly');
      } catch (downloadError) {
        toast.error('Failed to generate or deliver guide. Please try again.');
      }
      
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitLeadMagnet, isSubmitting };
};