import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        © Portfolio by Akash Mishra,  <br />
        Made in Next js and Supabase. <br />
        <div className="nav-logo">
          <h1>Rawr</h1>
        </div>
        <a href="#hero">Back to the top</a>
      </div>
    </footer>
  );
};

export default Footer;
