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
    title: "5 Stretches Every Woman in Menopause Should Know",
    excerpt: "Discover targeted stretches specifically designed to ease menopausal symptoms, improve flexibility, and enhance your daily comfort during this important life transition.",
    readTime: "6 min read",
    date: "December 18, 2024",
    category: "Menopause Wellness",
    categoryColor: "bg-rose-100 text-rose-600",
    image: "/api/placeholder/600/400"
  };

  const articles = [
    {
      title: "Rebuilding Strength After Breast Cancer: A Trainer's Guide",
      excerpt: "Evidence-based protocols for safe strength training during and after breast cancer treatment, designed to restore confidence and physical wellness.",
      readTime: "12 min read",
      date: "December 15, 2024",
      category: "Cancer Recovery",
      categoryColor: "bg-emerald-100 text-emerald-600",
      icon: Shield
    },
    {
      title: "How Autism Movement Therapy Helps Kids Thrive",
      excerpt: "Discover structured movement activities that support sensory processing, motor skills, and social confidence in neurodivergent children.",
      readTime: "8 min read",
      date: "December 12, 2024",
      category: "Autism Support",
      categoryColor: "bg-blue-100 text-blue-600",
      icon: Smile
    },
    {
      title: "From Injury to Independence: A Client's Journey",
      excerpt: "Follow Sarah's inspiring 6-month transformation from post-surgery weakness to full mobility and renewed strength through specialized training.",
      readTime: "10 min read",
      date: "December 8, 2024",
      category: "Post-Surgery Recovery",
      categoryColor: "bg-orange-100 text-orange-600",
      icon: Zap
    },
    {
      title: "Fitness Myths for Men: What Actually Works",
      excerpt: "Debunking common misconceptions about male fitness while revealing evidence-based strategies for sustainable strength and health.",
      readTime: "7 min read",
      date: "December 5, 2024",
      category: "General Fitness",
      categoryColor: "bg-gray-100 text-gray-600",
      icon: Activity
    },
    {
      title: "Hormonal Balance Through Movement: Midlife Wellness",
      excerpt: "Learn how targeted exercises can help regulate hormones, reduce symptoms, and improve quality of life during perimenopause and beyond.",
      readTime: "9 min read",
      date: "December 2, 2024",
      category: "Hormonal Health",
      categoryColor: "bg-purple-100 text-purple-600",
      icon: Heart
    },
    {
      title: "Building Confidence Through Adaptive Movement",
      excerpt: "Explore how personalized movement therapy creates lasting positive change for individuals with diverse physical and emotional needs.",
      readTime: "11 min read",
      date: "November 28, 2024",
      category: "Adaptive Training",
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
              Explore Movement, Healing, and <span className="text-accent">Health</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Curated guidance for every stage of recovery and strength. Discover evidence-based insights 
              for specialized wellness needs and healing journeys.
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

      {/* Articles Grid with Sidebar */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Latest Articles</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay up-to-date with the latest research, tips, and insights for your specialized health journey.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Search */}
                <Card className="border-border/50">
                  <CardHeader>
                    <h3 className="font-semibold text-foreground">Search Articles</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Search topics..."
                        className="pl-10"
                        aria-label="Search blog articles"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card className="border-border/50">
                  <CardHeader>
                    <h3 className="font-semibold text-foreground">Categories</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {["Menopause", "Cancer Recovery", "Autism Support", "Post-Surgery", "General Fitness"].map((category) => (
                        <Button 
                          key={category}
                          variant="ghost" 
                          className="w-full justify-start text-sm hover:bg-accent/10"
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* PDF Download */}
                <Card className="border-border/50 bg-gradient-to-br from-accent/5 to-accent-secondary/5">
                  <CardHeader>
                    <h3 className="font-semibold text-foreground">Free Resource</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-4">
                      <BookOpen className="h-12 w-12 text-accent mx-auto" />
                      <div>
                        <h4 className="font-medium text-foreground mb-2">5 Daily Stretches for Hormone Health</h4>
                        <p className="text-sm text-muted-foreground mb-4">Essential movements for menopausal wellness</p>
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        Download PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article, index) => (
                  <article key={index} className="group">
                    <Card className="hover-lift border-border/50 h-full">
                      {/* Featured Image Placeholder */}
                      <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center relative overflow-hidden">
                        <article.icon className="h-16 w-16 text-accent" />
                        <Badge className={`absolute top-3 left-3 ${article.categoryColor} text-xs`}>
                          {article.category}
                        </Badge>
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="text-lg mb-2 group-hover:text-accent transition-colors line-clamp-2">
                          {article.title}
                        </CardTitle>
                        
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {article.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {article.readTime}
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <CardDescription className="text-sm mb-4 leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </CardDescription>
                        
                        <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </article>
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