import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">Apoorv Dubey</p>
          <p className="text-sm">CARRENTO</p>
<div>+91 8962685420</div>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex items-center space-x-4">
            <li>
              <a href="https://www.instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://github.com/your_github_username" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/your_linkedin_profile" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
