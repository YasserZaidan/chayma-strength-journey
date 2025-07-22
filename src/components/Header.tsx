import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-foreground">
            Chayma Al Zein
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/programs" className="text-muted-foreground hover:text-foreground transition-colors">
              Programs
            </Link>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
              <BookOpen className="mr-2 h-4 w-4" />
              Blog & Insights
            </Link>
            <Link to="/auth" className="text-muted-foreground hover:text-foreground transition-colors">
              Admin
            </Link>
            <Link to="/book-now">
              <Button size="sm" className="bg-accent hover:bg-accent/90">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/programs" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>
              <Link 
                to="/blog" 
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Blog & Insights
              </Link>
              <Link 
                to="/auth" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
              <Link to="/book-now" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm" className="bg-accent hover:bg-accent/90 w-fit">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;