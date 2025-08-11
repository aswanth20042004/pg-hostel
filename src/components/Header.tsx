import { Button } from "@/components/ui/button";
import { Home, MapPin, Phone, UserPlus } from "lucide-react";

interface HeaderProps {
  onLoginClick: () => void;
}

const Header = ({ onLoginClick }: HeaderProps) => {
  return (
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              PG Hostels
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Button variant="nav" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Home
            </Button>
            <Button variant="nav" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Contacts
            </Button>
            <Button variant="nav" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Google Map
            </Button>
          </nav>

          <Button onClick={onLoginClick} variant="hero" className="flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;