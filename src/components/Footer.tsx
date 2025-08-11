const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <p className="text-lg font-semibold">
              This website was developed by Aswanth
            </p>
            <p className="text-primary-foreground/80">
              Thank you for visiting
            </p>
            <p className="text-primary-foreground/80">
              Have a good day
            </p>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-6 space-y-2">
            <p className="text-sm text-primary-foreground/60">
              This website was developed in 2025
            </p>
            <p className="text-sm text-primary-foreground/60">
              Using technologies: HTML, CSS, JavaScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;