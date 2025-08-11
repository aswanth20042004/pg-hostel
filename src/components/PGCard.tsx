import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Wifi, Car, Utensils, Shield } from "lucide-react";

interface PGCardProps {
  type: "2-sharing" | "3-sharing" | "4-sharing";
  price: number;
  image: string;
  title: string;
  location: string;
  features: string[];
}

const PGCard = ({ type, price, image, title, location, features }: PGCardProps) => {
  const getTypeIcon = () => {
    switch (type) {
      case "2-sharing":
        return <Users className="w-4 h-4" />;
      case "3-sharing":
        return <Users className="w-4 h-4" />;
      case "4-sharing":
        return <Users className="w-4 h-4" />;
      default:
        return <Users className="w-4 h-4" />;
    }
  };

  const getFeatureIcon = (feature: string) => {
    const icons: { [key: string]: any } = {
      "wifi": <Wifi className="w-4 h-4" />,
      "parking": <Car className="w-4 h-4" />,
      "meals": <Utensils className="w-4 h-4" />,
      "security": <Shield className="w-4 h-4" />
    };
    return icons[feature.toLowerCase()] || <Shield className="w-4 h-4" />;
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          {type}
        </Badge>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="text-lg font-bold text-primary">₹{price.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">/month</span>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          {getTypeIcon()}
          {title}
        </CardTitle>
        <div className="flex items-center gap-1 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="flex items-center gap-1 text-xs">
              {getFeatureIcon(feature)}
              {feature}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Button variant="hero" className="flex-1">
            Book Now
          </Button>
          <Button variant="outline" className="flex-1">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PGCard;