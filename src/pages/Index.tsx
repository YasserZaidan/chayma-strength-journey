import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Activity, 
  Shield, 
  Star, 
  Phone, 
  Mail, 
  Instagram,
  MessageCircle,
  ArrowUp,
  CheckCircle,
  Sparkles,
  Target,
  Award,
  Smile
} from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import chaymaPortrait from "@/assets/chayma-portrait.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: Heart,
      title: "Menopause Wellness Coaching",
      description: "Specialized support for women navigating hormonal changes with strength-building and wellness strategies.",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Shield,
      title: "Breast Cancer Recovery Programs",
      description: "Gentle rehabilitation programs designed specifically for survivors in their recovery journey.",
      color: "bg-pink-50 text-pink-600"
    },
    {
      icon: Smile,
      title: "Autism Movement for Kids",
      description: "Fun, adaptive movement programs that help children with autism develop coordination and confidence.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Activity,
      title: "Post-Injury/Surgery Training",
      description: "Safe, progressive rehabilitation training to help you regain strength and mobility after injury or surgery.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Target,
      title: "1-on-1 Personal Training",
      description: "Completely personalized training sessions tailored to your unique goals and physical capabilities.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Users,
      title: "Group Fitness for Women",
      description: "Empowering group sessions that build community while achieving fitness goals together.",
      color: "bg-yellow-50 text-yellow-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Breast Cancer Survivor",
      content: "Chayma's gentle approach helped me rebuild my strength and confidence after treatment. She understood exactly what I needed during my recovery.",
      rating: 5
    },
    {
      name: "Maria T.",
      role: "Mother of Autistic Child",
      content: "My son looks forward to every session with Chayma. She's created such a safe, fun environment where he can develop his movement skills naturally.",
      rating: 5
    },
    {
      name: "Ahmed K.",
      role: "Post-Surgery Recovery",
      content: "After my shoulder surgery, I thought I'd never regain full mobility. Chayma's program got me back to better than I was before the injury.",
      rating: 5
    }
  ];

  const certifications = [
    "NASM-CPT Certified Personal Trainer",
    "Breast Cancer Rehabilitation Specialist",
    "Postpartum & Menopause Training Certified",
    "Autism Movement Support Specialist",
    "Injury & Surgery Recovery Programs"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-warm-gradient overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Guiding You to <span className="text-accent">Strength</span>, Confidence, and <span className="text-accent">Healing</span>
              </h1>
              <p className="text-xl mb-8 text-muted-foreground max-w-2xl">
                Specialized personal training for women in menopause, breast cancer survivors, children with autism, and anyone on their healing journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Book a Session
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Explore Programs
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-slide-up">
              <div className="relative">
                <img 
                  src={chaymaPortrait} 
                  alt="Chayma Al Zein - Personal Trainer"
                  className="rounded-2xl shadow-2xl w-80 h-80 object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary p-4 rounded-full shadow-lg">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-gentle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-foreground">About Chayma Al Zein</h2>
            <p className="text-lg text-muted-foreground mb-8">
              My journey into specialized fitness began with a deep understanding that healing comes in many forms. 
              Whether you're navigating the challenges of menopause, recovering from illness, supporting a child with autism, 
              or rebuilding after injury, I believe every body deserves compassionate, expert guidance.
            </p>
            <p className="text-lg text-muted-foreground mb-12">
              With years of specialized training and certifications, I create safe spaces where vulnerability becomes strength, 
              and every small victory is celebrated on your path to wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover-lift border-border/50">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                  <p className="font-medium text-foreground">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Specialized Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every program is designed with compassion, expertise, and understanding of your unique journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift border-border/50 h-full">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Transformations</h2>
            <p className="text-lg text-muted-foreground">
              Real stories from real people on their healing journeys.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift border-border/50">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Start Your Journey</h2>
              <p className="text-lg text-muted-foreground">
                Ready to take the first step? I'm here to support you every step of the way.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>
                    Tell me about your goals and I'll create a personalized plan for you.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Goal</label>
                    <Input
                      name="goal"
                      value={formData.goal}
                      onChange={handleInputChange}
                      placeholder="What would you like to achieve?"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me more about your situation and how I can help..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="border-border/50">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6 text-foreground">Direct Contact</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary p-3 rounded-full">
                          <Mail className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Email</p>
                          <a href="mailto:chayma.al.zein@gmail.com" className="text-muted-foreground hover:text-accent">
                            chayma.al.zein@gmail.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="bg-green-100 p-3 rounded-full">
                          <MessageCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">WhatsApp</p>
                          <a href="https://wa.me/96170462210" className="text-muted-foreground hover:text-accent">
                            +961 70 462 210
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                          <Instagram className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Instagram</p>
                          <a href="https://instagram.com/chayma.al.zein" className="text-muted-foreground hover:text-accent">
                            @chayma.al.zein
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-primary/5">
                  <CardContent className="p-8 text-center">
                    <Sparkles className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Ready to Begin?</h3>
                    <p className="text-muted-foreground mb-4">
                      Your journey to strength and healing starts with a conversation.
                    </p>
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      Free consultation available
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Chayma Al Zein</h3>
            <p className="text-background/80 mb-6">
              Specialized Personal Trainer • Empowering Your Journey to Wellness
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="mailto:chayma.al.zein@gmail.com" className="text-background/80 hover:text-background transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://wa.me/96170462210" className="text-background/80 hover:text-background transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/chayma.al.zein" className="text-background/80 hover:text-background transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            
            <div className="border-t border-background/20 pt-8">
              <p className="text-background/60 text-sm">
                © 2024 Chayma Al Zein. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-accent hover:bg-accent/90 text-accent-foreground p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      </footer>
    </div>
  );
};

export default Index;