import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg">About Us</h3>
            <p className="mt-2">Atlas Creative Studio is an award-winning creative studio specializing in design across multiple disciplines.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/work" className="hover:underline">Work</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Contact Us</h3>
            <p className="mt-2">Phone: (512) 555-1234</p>
            <p>Email: <Link href="mailto:info@atlascreativestudio.com" className="hover:underline">info@atlascreativestudio.com</Link></p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Follow Us</h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="#" className="hover:underline">Instagram</Link></li>
              <li><Link href="#" className="hover:underline">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© {new Date().getFullYear()} Atlas Creative Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};