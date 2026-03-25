"use client";

import { images } from "@/config/images";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="flex items-center">
              <MapPin className="mr-2" />
              <span>4521 Westheimer Rd, Suite 200, Houston, TX 77027</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2" />
              <span>(713) 555-1234</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2" />
              <span>info@atlascreativestudio.com</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <img src={images.logo.src} alt="Atlas Creative Studio Logo" className="h-12" />
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>© {new Date().getFullYear()} Atlas Creative Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;