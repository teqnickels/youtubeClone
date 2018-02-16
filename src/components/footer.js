import React from 'react';

const Footer = () => {

  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-right">
          <a href="https://github.com/teqnickels/youtubeclone">View code
            <i className="fa fa-github fa-2x"></i>
          </a>
        </div>
        <div className="footer-left">
          <p className="footer-description">
            Youtube Clone is a Youtube clone built in ReactJS.
          </p>
          <p>© 2018 Copyright Debrena McEwen</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;