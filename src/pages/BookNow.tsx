import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  Star,
  Award,
  Heart,
  Shield,
  Puzzle,
  Zap,
  Users,
  Sparkles,
  ArrowRight,
  Download
} from "lucide-react";

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    goals: "",
    experience: "",
    medicalConditions: "",
    preferredTime: "",
    startDate: "",
    message: ""
  });

  const [step, setStep] = useState(1);

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

  const packages = [
    {
      id: "starter",
      name: "Starter Package",
      price: "$450",
      duration: "4 sessions",
      popular: false,
      description: "Perfect for trying out specialized training",
      features: [
        "Initial consultation & assessment",
        "4 personalized training sessions",
        "Basic nutrition guidance",
        "Exercise plan to take home",
        "Email support"
      ],
      icon: Star
    },
    {
      id: "comprehensive",
      name: "Comprehensive Program",
      price: "$1,200",
      duration: "12 sessions",
      popular: true,
      description: "Most popular choice for lasting results",
      features: [
        "Complete health assessment",
        "12 specialized training sessions",
        "Detailed nutrition plan",
        "Progress tracking & adjustments",
        "24/7 chat support",
        "Weekly check-ins",
        "Bonus wellness guide"
      ],
      icon: Award
    },
    {
      id: "intensive",
      name: "Intensive Transformation",
      price: "$2,100",
      duration: "24 sessions",
      popular: false,
      description: "Maximum support for complete transformation",
      features: [
        "Comprehensive medical history review",
        "24 specialized training sessions",
        "Complete nutrition overhaul",
        "Daily check-ins & support",
        "Healthcare team coordination",
        "Lifestyle coaching",
        "3-month maintenance plan",
        "All bonus materials included"
      ],
      icon: Sparkles
    }
  ];

  const programs = [
    { value: "menopause", label: "Menopause Wellness Coaching", icon: Heart },
    { value: "cancer-recovery", label: "Breast Cancer Recovery Programs", icon: Shield },
    { value: "autism", label: "Movement & Mindfulness for Neurodivergent Kids", icon: Puzzle },
    { value: "post-surgery", label: "Post-Injury/Surgery Training", icon: Zap },
    { value: "personal", label: "1-on-1 Personal Training", icon: Users },
    { value: "consultation", label: "Not sure - Need consultation first", icon: MessageCircle }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">
              Start Your <span className="text-accent">Transformation</span> Today
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose your program and take the first step towards better health, strength, and confidence.
              Personalized training designed specifically for your unique needs.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Free consultation included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Specialized expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Flexible scheduling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Selection */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Choose Your Package</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Select the package that best fits your goals and commitment level. All packages include personalized attention and expert guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={pkg.id} className={`hover-lift border-border/50 relative ${pkg.popular ? 'ring-2 ring-accent' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <pkg.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                  <div className="pt-4">
                    <div className="text-4xl font-bold text-foreground">{pkg.price}</div>
                    <div className="text-muted-foreground">{pkg.duration}</div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-accent hover:bg-accent/90 text-accent-foreground cta-pulse' : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'}`}
                    onClick={() => setStep(2)}
                  >
                    Select This Package
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Book Your Program</h2>
              <p className="text-lg text-muted-foreground">
                Tell us about yourself so we can create the perfect program for your needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl">Program Registration</CardTitle>
                    <CardDescription>
                      Please provide your information so we can personalize your training experience.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Step 1: Personal Information */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Full Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Phone Number *</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+961 XX XXX XXX"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Preferred Contact Time</label>
                        <Select onValueChange={(value) => handleSelectChange("preferredTime", value)}>
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
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Which program interests you most? *</label>
                      <Select onValueChange={(value) => handleSelectChange("program", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                        <SelectContent>
                          {programs.map((program) => (
                            <SelectItem key={program.value} value={program.value}>
                              {program.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">What are your main goals? *</label>
                      <Textarea
                        name="goals"
                        value={formData.goals}
                        onChange={handleInputChange}
                        placeholder="Tell us what you'd like to achieve with your training..."
                        rows={3}
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Exercise Experience</label>
                      <Select onValueChange={(value) => handleSelectChange("experience", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner - Little to no exercise experience</SelectItem>
                          <SelectItem value="some">Some experience - Occasionally active</SelectItem>
                          <SelectItem value="regular">Regular exerciser - 2-3 times per week</SelectItem>
                          <SelectItem value="experienced">Very experienced - Daily activity</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Medical Conditions or Concerns</label>
                      <Textarea
                        name="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={handleInputChange}
                        placeholder="Please list any medical conditions, injuries, or concerns we should know about..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Additional Information</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Anything else you'd like us to know about your situation or goals?"
                        rows={3}
                      />
                    </div>

                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg py-3 cta-pulse">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book My Program
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Contact Options */}
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Have Questions?</h3>
                    <div className="space-y-4">
                      <a href="mailto:chayma.al.zein@gmail.com" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="bg-primary p-2 rounded-full">
                          <Mail className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">Email</p>
                          <p className="text-xs text-muted-foreground">chayma.al.zein@gmail.com</p>
                        </div>
                      </a>
                      
                      <a href="https://wa.me/96170462210" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="bg-[#25D366] p-2 rounded-full">
                          <MessageCircle className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">WhatsApp</p>
                          <p className="text-xs text-muted-foreground">+961 70 462 210</p>
                        </div>
                      </a>
                      
                      <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10">
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule Free Call
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Free Guide CTA */}
                <Card className="border-border/50 bg-gradient-to-br from-accent/10 to-accent-secondary/10">
                  <CardContent className="p-6 text-center">
                    <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Download className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Free Wellness Guide</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get our "5 Daily Stretches for Hormonal Balance" guide while you're here.
                    </p>
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Get Free Guide
                    </Button>
                  </CardContent>
                </Card>

                {/* Guarantee */}
                <Card className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Satisfaction Guarantee</h3>
                    <p className="text-sm text-muted-foreground">
                      If you're not completely satisfied after your first session, we'll refund your payment in full.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookNow;