import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-[#F2F2F2] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-bold">Atlas Creative Studio</h3>
            <p>© {new Date().getFullYear()} Atlas Creative Studio. All rights reserved.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold">Follow Us</h4>
            <ul className="flex space-x-4">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;