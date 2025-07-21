import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  Instagram, 
  MessageCircle, 
  ArrowUp, 
  Heart,
  MapPin,
  Clock
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Chayma Al Zein</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Specialized personal training for women in menopause, breast cancer survivors, children with autism, and anyone on their healing journey.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/chayma.alz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary p-2 rounded-full hover:bg-primary/80 transition-colors"
                aria-label="Follow on Instagram"
              >
                <Instagram className="h-4 w-4 text-primary-foreground" />
              </a>
              <a 
                href="https://wa.me/96170462210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] p-2 rounded-full hover:bg-[#25D366]/80 transition-colors"
                aria-label="Contact on WhatsApp"
              >
                <MessageCircle className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Home
              </Link>
              <Link to="/programs" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Programs
              </Link>
              <Link to="/blog" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Blog & Insights
              </Link>
              <Link to="/book-now" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Book Now
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a 
                  href="tel:+96170462210" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  +961 70 462 210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a 
                  href="mailto:chayma.al.zein@gmail.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  chayma.al.zein@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Beirut, Lebanon
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Mon-Sat: 8AM-8PM
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Stay Updated</h4>
            <p className="text-muted-foreground text-sm">
              Get weekly wellness tips and specialized health insights.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 text-sm border border-border rounded-md bg-background focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2024 Chayma Al Zein. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for your wellness journey</span>
            </div>
            
            <Button
              onClick={scrollToTop}
              size="sm"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;