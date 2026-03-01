import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery & Profiles", path: "/gallery" },
  { label: "Pricing & Plans", path: "/pricing" },
  { label: "Booking Policy", path: "/booking-policy" },
  { label: "FAQs", path: "/faq" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const locations = ["Bangalore", "Chennai", "Hyderabad", "Mumbai", "Nashik"];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-primary/20 pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl md:text-2xl tracking-[0.15em] text-primary gold-glow mb-2">
              Mynt Girlfriend
            </h3>
            <p className="font-elegant text-xs md:text-sm text-primary/40 leading-relaxed mt-3">
              Elite Indian Model & Companion Service. Where elegance meets excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-[10px] md:text-xs tracking-[0.2em] uppercase text-primary/50 mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-1.5">
              {footerLinks.slice(0, 5).map((link) => (
                <Link key={link.path} to={link.path} className="font-elegant text-xs md:text-sm tracking-wider text-primary/40 hover:text-primary transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-body text-[10px] md:text-xs tracking-[0.2em] uppercase text-primary/50 mb-4">Explore</h4>
            <nav className="flex flex-col gap-1.5">
              {footerLinks.slice(5).map((link) => (
                <Link key={link.path} to={link.path} className="font-elegant text-xs md:text-sm tracking-wider text-primary/40 hover:text-primary transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Locations & Contact */}
          <div>
            <h4 className="font-body text-[10px] md:text-xs tracking-[0.2em] uppercase text-primary/50 mb-4">Locations</h4>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {locations.map((loc) => (
                <span key={loc} className="inline-flex items-center gap-1 font-elegant text-[10px] md:text-xs tracking-wider text-primary/40 border border-primary/15 rounded-full px-2.5 py-1">
                  <MapPin className="w-2.5 h-2.5" />
                  {loc}
                </span>
              ))}
            </div>
            <div className="space-y-1.5">
              <a href="mailto:contact@myntgirlfriend.com" className="flex items-center gap-2 font-elegant text-[10px] md:text-xs text-primary/40 hover:text-primary transition-colors">
                <Mail className="w-3 h-3" /> contact@myntgirlfriend.com
              </a>
              <a href="tel:+919999999999" className="flex items-center gap-2 font-elegant text-[10px] md:text-xs text-primary/40 hover:text-primary transition-colors">
                <Phone className="w-3 h-3" /> +91 99999 99999
              </a>
            </div>
          </div>
        </div>

        <div className="gold-divider w-full mb-5" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-[9px] md:text-[10px] tracking-[0.15em] text-primary/25 uppercase">
            © {new Date().getFullYear()} Mynt Girlfriend. All rights reserved.
          </p>
          <p className="font-elegant text-[9px] md:text-[10px] tracking-[0.2em] text-primary/20 uppercase">
            Discretion · Excellence · Exclusivity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
