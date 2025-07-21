import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Heart, 
  Shield, 
  Puzzle, 
  Zap, 
  Users, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Clock,
  Star
} from "lucide-react";

const Programs = () => {
  const programs = [
    {
      id: "menopause",
      title: "Women with Menopause",
      subtitle: "Hormonal Wellness Program",
      icon: Heart,
      color: "from-rose-400 to-pink-500",
      bgColor: "bg-rose-50",
      textColor: "text-rose-600",
      duration: "8-12 weeks",
      sessions: "2-3 per week",
      price: "Starting at $120/session",
      description: "Navigate menopause with confidence through specialized exercise, nutrition guidance, and hormonal balance strategies.",
      benefits: [
        "Hormone-balancing exercises",
        "Bone density strengthening",
        "Hot flash management techniques",
        "Sleep quality improvement",
        "Mood stabilization support",
        "Personalized nutrition guidance"
      ],
      includes: [
        "Initial consultation & assessment",
        "Customized workout plans",
        "Nutritional guidance",
        "Progress tracking",
        "24/7 support chat",
        "Weekly check-ins"
      ]
    },
    {
      id: "cancer-recovery",
      title: "Breast Cancer Recovery",
      subtitle: "Gentle Rehabilitation Program",
      icon: Shield,
      color: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      duration: "12-16 weeks",
      sessions: "2 per week",
      price: "Starting at $110/session",
      description: "Carefully designed rehabilitation program to help survivors rebuild strength, mobility, and confidence during recovery.",
      benefits: [
        "Lymphatic drainage exercises",
        "Gentle strength rebuilding",
        "Range of motion improvement",
        "Fatigue management",
        "Scar tissue mobility",
        "Emotional wellness support"
      ],
      includes: [
        "Medical clearance coordination",
        "Gentle movement therapy",
        "Breathing techniques",
        "Energy management strategies",
        "Support group access",
        "Healthcare team collaboration"
      ]
    },
    {
      id: "neurodivergent",
      title: "Neurodivergent Kids",
      subtitle: "Movement & Mindfulness Program",
      icon: Puzzle,
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      duration: "Ongoing",
      sessions: "1-2 per week",
      price: "Starting at $85/session",
      description: "Fun, adaptive movement programs that help children with autism develop coordination, confidence, and social skills.",
      benefits: [
        "Sensory integration activities",
        "Motor skills development",
        "Social interaction improvement",
        "Self-regulation techniques",
        "Confidence building",
        "Parent coaching included"
      ],
      includes: [
        "Individual assessment",
        "Customized activity plans",
        "Sensory-friendly environment",
        "Parent guidance sessions",
        "Progress documentation",
        "School coordination if needed"
      ]
    },
    {
      id: "post-rehab",
      title: "Post-Injury/Surgery Rehab",
      subtitle: "Recovery & Strength Program",
      icon: Zap,
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      duration: "8-20 weeks",
      sessions: "2-3 per week",
      price: "Starting at $115/session",
      description: "Progressive rehabilitation training to help you regain strength, mobility, and return to your activities safely.",
      benefits: [
        "Pain management techniques",
        "Progressive strength building",
        "Mobility restoration",
        "Functional movement training",
        "Injury prevention education",
        "Return-to-activity planning"
      ],
      includes: [
        "PT collaboration",
        "Movement assessments",
        "Progressive exercise plans",
        "Pain monitoring",
        "Functional testing",
        "Long-term maintenance plan"
      ]
    },
    {
      id: "general-fitness",
      title: "General Men's Fitness",
      subtitle: "Comprehensive Wellness Program",
      icon: Users,
      color: "from-purple-400 to-violet-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      duration: "Flexible",
      sessions: "2-4 per week",
      price: "Starting at $100/session",
      description: "Complete fitness program designed to help men achieve their health and performance goals with sustainable lifestyle changes.",
      benefits: [
        "Strength & muscle building",
        "Cardiovascular conditioning",
        "Flexibility & mobility",
        "Stress management",
        "Nutrition optimization",
        "Performance enhancement"
      ],
      includes: [
        "Fitness assessment",
        "Goal-specific programming",
        "Nutrition consultation",
        "Workout variety",
        "Progress tracking",
        "Lifestyle coaching"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">
              Specialized Training <span className="text-accent">Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the program that best fits your unique health journey and goals.
              Each program is carefully designed with your specific needs in mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground cta-pulse">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                Compare Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={program.id} className="hover-lift border-border/50 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Program Info */}
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-full ${program.bgColor} flex items-center justify-center mr-4`}>
                        <program.icon className={`h-8 w-8 ${program.textColor}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{program.title}</h3>
                        <p className="text-muted-foreground">{program.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 text-lg">
                      {program.description}
                    </p>

                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                        <p className="text-sm font-medium">{program.duration}</p>
                        <p className="text-xs text-muted-foreground">Duration</p>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <Calendar className="h-6 w-6 text-accent mx-auto mb-2" />
                        <p className="text-sm font-medium">{program.sessions}</p>
                        <p className="text-xs text-muted-foreground">Sessions</p>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <Star className="h-6 w-6 text-accent mx-auto mb-2" />
                        <p className="text-sm font-medium">{program.price}</p>
                        <p className="text-xs text-muted-foreground">Investment</p>
                      </div>
                    </div>

                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Learn More About This Program
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {/* Program Details */}
                  <div className="bg-muted/20 p-8">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-4 text-foreground">Key Benefits</h4>
                      <div className="space-y-2">
                        {program.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-foreground">Program Includes</h4>
                      <div className="space-y-2">
                        {program.includes.map((item, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-accent-secondary mr-3 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-accent-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free consultation to discuss which program is right for you.
              No pressure, just personalized guidance to help you make the best decision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground cta-pulse">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                Contact Chayma
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Programs;