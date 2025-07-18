import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Heart,
  Shield,
  Activity,
  Smile,
  Target,
  Zap,
  BookOpen,
  TrendingUp
} from "lucide-react";

const Blog = () => {
  const featuredArticle = {
    title: "5 Essential Exercises for Menopausal Women",
    excerpt: "Discover how targeted exercises can help manage menopausal symptoms, improve bone density, and boost your overall well-being during this important life transition.",
    readTime: "8 min read",
    date: "December 15, 2024",
    category: "Menopause Wellness",
    categoryColor: "bg-rose-100 text-rose-600",
    image: "/api/placeholder/600/400"
  };

  const articles = [
    {
      title: "Wellness After Surgery: A Complete Recovery Guide",
      excerpt: "Learn the essential steps for safe and effective recovery after surgery, including when to start exercising and how to rebuild your strength progressively.",
      readTime: "12 min read",
      date: "December 10, 2024",
      category: "Post-Surgery Recovery",
      categoryColor: "bg-orange-100 text-orange-600",
      icon: Zap
    },
    {
      title: "Movement for Autistic Children: Building Confidence Through Play",
      excerpt: "Explore how structured movement activities can help children with autism develop motor skills, improve social interaction, and build self-confidence.",
      readTime: "10 min read",
      date: "December 8, 2024",
      category: "Autism Support",
      categoryColor: "bg-blue-100 text-blue-600",
      icon: Smile
    },
    {
      title: "Hormonal Health in Midlife: Understanding Your Body's Changes",
      excerpt: "Navigate the complex hormonal changes of midlife with expert insights on nutrition, exercise, and lifestyle adjustments for optimal wellness.",
      readTime: "15 min read",
      date: "December 5, 2024",
      category: "Hormonal Health",
      categoryColor: "bg-purple-100 text-purple-600",
      icon: Heart
    },
    {
      title: "Strength Training for Breast Cancer Survivors",
      excerpt: "Discover safe and effective strength training protocols specifically designed for breast cancer survivors to rebuild muscle and improve quality of life.",
      readTime: "9 min read",
      date: "December 2, 2024",
      category: "Cancer Recovery",
      categoryColor: "bg-emerald-100 text-emerald-600",
      icon: Shield
    },
    {
      title: "The Science of Recovery: Why Rest is Just as Important as Exercise",
      excerpt: "Understanding the crucial role of recovery in your fitness journey and how to optimize rest periods for maximum health benefits.",
      readTime: "7 min read",
      date: "November 28, 2024",
      category: "General Wellness",
      categoryColor: "bg-gray-100 text-gray-600",
      icon: Activity
    },
    {
      title: "Building Healthy Habits That Last: A Practical Approach",
      excerpt: "Learn proven strategies for creating sustainable healthy habits that fit into your busy lifestyle and support your long-term wellness goals.",
      readTime: "11 min read",
      date: "November 25, 2024",
      category: "Lifestyle",
      categoryColor: "bg-yellow-100 text-yellow-600",
      icon: Target
    }
  ];

  const categories = [
    "All Articles",
    "Menopause Wellness",
    "Cancer Recovery",
    "Autism Support",
    "Post-Surgery Recovery",
    "Hormonal Health",
    "General Wellness",
    "Lifestyle"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">
              Wellness <span className="text-accent">Knowledge Base</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert insights, practical tips, and evidence-based guidance for your health and wellness journey.
              Stay informed with the latest research and personalized advice for specialized health needs.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search articles, topics, or health conditions..."
                className="pl-12 pr-4 py-3 text-lg bg-background/80 backdrop-blur-sm"
                aria-label="Search articles"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-accent hover:bg-accent/90 text-accent-foreground" : "hover:bg-accent/10"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Article</h2>
            <p className="text-muted-foreground">Our most popular and impactful wellness guide</p>
          </div>

          <Card className="max-w-5xl mx-auto hover-lift border-border/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center">
                  <BookOpen className="h-24 w-24 text-accent" />
                </div>
                <Badge className={`absolute top-4 left-4 ${featuredArticle.categoryColor}`}>
                  {featuredArticle.category}
                </Badge>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredArticle.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredArticle.readTime}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {featuredArticle.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Latest Articles</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay up-to-date with the latest research, tips, and insights for your specialized health journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article, index) => (
              <Card key={index} className="hover-lift border-border/50 h-full group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`${article.categoryColor} text-xs`}>
                      {article.category}
                    </Badge>
                    <article.icon className="h-6 w-6 text-accent" />
                  </div>
                  
                  <CardTitle className="text-xl mb-2 group-hover:text-accent transition-colors">
                    {article.title}
                  </CardTitle>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-base mb-6 leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                  
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
              <TrendingUp className="mr-2 h-5 w-5" />
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-accent-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Stay Updated with Expert Insights
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest wellness tips, research updates, and specialized health guidance delivered to your inbox.
            </p>
            
            <Card className="max-w-2xl mx-auto border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your name"
                      className="bg-background/50"
                      aria-label="Enter your name"
                    />
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background/50"
                      aria-label="Enter your email"
                    />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold cta-pulse">
                    Subscribe to Newsletter
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Weekly insights • No spam • Unsubscribe anytime
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;