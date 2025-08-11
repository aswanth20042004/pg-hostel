import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PGListings from "@/components/PGListings";
import Footer from "@/components/Footer";
import RegistrationDialog from "@/components/RegistrationDialog";

const Index = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onLoginClick={() => setIsRegistrationOpen(true)} />
      <HeroSection onGetStartedClick={() => setIsRegistrationOpen(true)} />
      <PGListings />
      <Footer />
      
      <RegistrationDialog
        open={isRegistrationOpen}
        onOpenChange={setIsRegistrationOpen}
      />
    </div>
  );
};

export default Index;
