import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className={cn("bg-gray-900 text-white py-8")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold">{siteConfig.name}</h2>
            <p>{siteConfig.description}</p>
          </div>
          <div>
            <h3 className="font-bold">Contact</h3>
            <p className="flex items-center">
              <Mail className="mr-2" />
              <a href={`mailto:${siteConfig.email}`} className="hover:underline">{siteConfig.email}</a>
            </p>
            <p className="flex items-center">
              <Phone className="mr-2" />
              <a href={`tel:${siteConfig.phone}`} className="hover:underline">{siteConfig.phone}</a>
            </p>
          </div>
          <div>
            <h3 className="font-bold">Follow Us</h3>
            <ul>
              <li>
                <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
              </li>
              <li>
                <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
              </li>
              <li>
                <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Address</h3>
            <p>{siteConfig.address}</p>
            <p>{siteConfig.hours}</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}