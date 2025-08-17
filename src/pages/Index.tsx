import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  ArrowRight,
  CheckCircle,
  Sparkles,
  Target,
  Award,
  Smile,
  Calendar,
  Clock,
  HelpCircle,
  Play,
  Quote,
  Zap,
  Puzzle,
  Download,
  BookOpen,
  Menu,
  X
} from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import chaymaPortrait from "@/assets/chayma-portrait.jpg";
import { useLeadMagnet } from '@/hooks/useLeadMagnet';

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: "",
    message: "",
    contactTime: ""
  });

  const [leadMagnetData, setLeadMagnetData] = useState({
    name: "",
    email: ""
  });

  const { submitLeadMagnet, isSubmitting } = useLeadMagnet();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLeadMagnetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLeadMagnetData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLeadMagnetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitLeadMagnet(leadMagnetData);
    if (success) {
      setLeadMagnetData({ name: "", email: "" });
    }
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
      icon: Puzzle,
      title: "🧩 Movement & Mindfulness for Neurodivergent Kids",
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
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&auto=format"
    },
    {
      name: "Maria T.",
      role: "Mother of Autistic Child",
      content: "My son looks forward to every session with Chayma. She's created such a safe, fun environment where he can develop his movement skills naturally.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&auto=format"
    },
    {
      name: "Ahmed K.",
      role: "Post-Surgery Recovery",
      content: "After my shoulder surgery, I thought I'd never regain full mobility. Chayma's program got me back to better than I was before the injury.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format"
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
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-warm-gradient overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm animate-scale-in"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/30 to-accent-gold/20 animate-fade-in" />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-slide-in-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Guiding You to <span className="text-accent">Strength</span>, Confidence, and <span className="text-accent">Healing</span>
              </h1>
              <p className="text-xl mb-8 text-muted-foreground max-w-2xl">
                Specialized personal training for women in menopause, breast cancer survivors, children with autism, and anyone on their healing journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold cta-pulse smooth-hover" aria-label="Book a training session">
                  <Phone className="mr-2 h-5 w-5" />
                  Book a Session
                </Button>
                <Button size="lg" className="bg-accent-secondary hover:bg-accent-secondary/90 text-accent-secondary-foreground smooth-hover cta-pulse-secondary" aria-label="Schedule free discovery call">
                  <Calendar className="mr-2 h-5 w-5" />
                  Free Discovery Call
                </Button>
              </div>
              <div className="mt-4">
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 smooth-hover" aria-label="Explore training programs">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Explore Programs
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-slide-up">
              <div className="relative">
                <img 
                  src={chaymaPortrait} 
                  alt="Chayma Al Zein - Certified personal trainer specializing in menopause wellness, breast cancer recovery, and autism movement therapy"
                  className="rounded-2xl shadow-2xl w-80 h-80 object-cover"
                  loading="lazy"
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
              <Card key={index} className={`hover-lift border-border/50 animate-fade-in animate-stagger-${Math.min(index + 1, 4)}`}>
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
              <Card key={index} className={`hover-lift border-border/50 h-full smooth-hover group hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-in-up animate-stagger-${Math.min(index % 4 + 1, 4)}`}>
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}>
                    <service.icon className="h-8 w-8" aria-hidden="true" />
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

      {/* Special Programs Section */}
      <section className="py-20 bg-gradient-to-br from-accent-secondary/10 to-accent-tertiary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Featured Programs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized programs designed for your unique health journey and recovery needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="hover-lift border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="bg-accent-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Menopause Wellness</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Hormonal balance through targeted exercise and lifestyle support.
                </p>
                <Badge className="bg-accent-secondary/20 text-accent-secondary">8-week program</Badge>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="bg-accent-tertiary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent-tertiary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Breast Cancer Recovery</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Gentle rehabilitation to rebuild strength and confidence.
                </p>
                <Badge className="bg-accent-tertiary/20 text-accent-tertiary">12-week program</Badge>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smile className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Movement & Mindfulness</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Fun movement activities tailored for neurodivergent children.
                </p>
                <Badge className="bg-primary/20 text-primary">Ongoing sessions</Badge>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Post-Surgery Recovery</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Progressive rehabilitation to restore full mobility.
                </p>
                <Badge className="bg-accent/20 text-accent">Customized duration</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Featured Article</h2>
            <p className="text-lg text-muted-foreground">
              Our most popular wellness guide for your health journey
            </p>
          </div>

          <Card className="max-w-4xl mx-auto hover-lift border-border/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop&auto=format" 
                  alt="5 Stretches Every Woman in Menopause Should Know"
                  className="aspect-video w-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-rose-100 text-rose-600">
                  Menopause Wellness
                </Badge>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    December 18, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    6 min read
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  5 Stretches Every Woman in Menopause Should Know
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Discover targeted stretches specifically designed to ease menopausal symptoms, improve flexibility, and enhance your daily comfort during this important life transition.
                </p>
                
                <Link to="/blog">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* New Blog Articles Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Latest Blog Posts</h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with expert insights and wellness tips
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover-lift border-border/50 h-full smooth-hover group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format" 
                  alt="Rebuilding Strength After Breast Cancer"
                  className="aspect-video w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-emerald-100 text-emerald-600 text-xs">
                  Cancer Recovery
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg mb-2 group-hover:text-accent transition-colors">
                  Rebuilding Strength After Breast Cancer
                </CardTitle>
                
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    December 15, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    12 min read
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-sm mb-4 leading-relaxed">
                  Evidence-based protocols for safe strength training during and after breast cancer treatment, designed to restore confidence and physical wellness.
                </CardDescription>
                
                <Link to="/blog">
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border/50 h-full smooth-hover group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&auto=format" 
                  alt="How Autism Movement Therapy Helps Kids Thrive"
                  className="aspect-video w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-blue-100 text-blue-600 text-xs">
                  Autism Support
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg mb-2 group-hover:text-accent transition-colors">
                  How Autism Movement Therapy Helps Kids Thrive
                </CardTitle>
                
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    December 12, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    8 min read
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-sm mb-4 leading-relaxed">
                  Discover structured movement activities that support sensory processing, motor skills, and social confidence in neurodivergent children.
                </CardDescription>
                
                <Link to="/blog">
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border/50 h-full smooth-hover group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop&auto=format" 
                  alt="From Injury to Independence: A Client's Journey"
                  className="aspect-video w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-orange-100 text-orange-600 text-xs">
                  Post-Surgery Recovery
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg mb-2 group-hover:text-accent transition-colors">
                  From Injury to Independence: A Client's Journey
                </CardTitle>
                
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    December 8, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    10 min read
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-sm mb-4 leading-relaxed">
                  Follow Sarah's inspiring 6-month transformation from post-surgery weakness to full mobility and renewed strength through specialized training.
                </CardDescription>
                
                <Link to="/blog">
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Hear directly from clients who've transformed their lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift border-border/50 group">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="bg-accent-secondary/20 p-2 rounded-full group-hover:bg-accent-secondary/30 transition-colors">
                      <Play className="h-4 w-4 text-accent-secondary" />
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                   <div className="flex items-center gap-3">
                     <Avatar className="w-12 h-12">
                       <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                       <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                     </Avatar>
                     <div>
                       <p className="font-semibold text-foreground">{testimonial.name}</p>
                       <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                     </div>
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-accent-secondary hover:bg-accent-secondary/90 text-accent-secondary-foreground">
              <Play className="mr-2 h-5 w-5" />
              Watch More Stories
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Common questions about specialized training and recovery programs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover-lift border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent-secondary/20 p-2 rounded-full">
                      <HelpCircle className="h-5 w-5 text-accent-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Is this right for me?</h3>
                      <p className="text-muted-foreground">
                        If you're navigating menopause, recovering from breast cancer, supporting a child with autism, or recovering from injury, these programs are designed specifically for your needs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent-tertiary/20 p-2 rounded-full">
                      <Shield className="h-5 w-5 text-accent-tertiary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">What if I have medical conditions?</h3>
                      <p className="text-muted-foreground">
                        All programs are designed with medical considerations in mind. I work closely with healthcare providers to ensure safe, effective training.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">How long are sessions?</h3>
                      <p className="text-muted-foreground">
                        Sessions typically range from 45-60 minutes, but can be adjusted based on your energy levels and recovery needs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/20 p-2 rounded-full">
                      <Heart className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Do you offer online sessions?</h3>
                      <p className="text-muted-foreground">
                        Yes! Many programs can be delivered online, making it convenient for busy parents or those with mobility challenges.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-accent-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Free Wellness Guide</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get your free "5 Daily Stretches for Hormonal Balance" guide and start your wellness journey today.
            </p>
            
            <Card className="max-w-2xl mx-auto border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-accent/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">5 Daily Stretches for Hormonal Balance</h3>
                  <p className="text-muted-foreground">
                    A comprehensive guide with illustrated stretches designed specifically for women experiencing hormonal changes.
                  </p>
                </div>
                
                <form onSubmit={handleLeadMagnetSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      value={leadMagnetData.name}
                      onChange={handleLeadMagnetChange}
                      placeholder="Your name"
                      className="bg-background/50"
                      aria-label="Enter your name for free guide"
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      value={leadMagnetData.email}
                      onChange={handleLeadMagnetChange}
                      placeholder="your@email.com"
                      className="bg-background/50"
                      aria-label="Enter your email for free guide"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold cta-pulse" 
                    aria-label="Download free wellness guide"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    {isSubmitting ? 'Preparing Your Guide...' : 'Get Your Free Guide Now'}
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-4">
                  No spam, just valuable wellness tips. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
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
                    <label className="text-sm font-medium text-foreground mb-2 block">Preferred Contact Time</label>
                    <Select onValueChange={(value) => handleSelectChange("contactTime", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12 PM - 6 PM)</SelectItem>
                        <SelectItem value="evening">Evening (6 PM - 9 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me more about your situation and how I can help..."
                      rows={4}
                      aria-describedby="message-help"
                    />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" aria-label="Send contact message">
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
                        <div className="bg-[#25D366] p-3 rounded-full">
                          <MessageCircle className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">WhatsApp</p>
                          <a href="https://wa.me/96170462210" className="text-muted-foreground hover:text-accent" aria-label="Contact via WhatsApp">
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
                    <p className="text-muted-foreground mb-6">
                      Your journey to strength and healing starts with a conversation.
                    </p>
                    <Button className="bg-accent-secondary hover:bg-accent-secondary/90 text-accent-secondary-foreground mb-4 w-full">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Free 15-min Consultation
                    </Button>
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      No commitment required
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;