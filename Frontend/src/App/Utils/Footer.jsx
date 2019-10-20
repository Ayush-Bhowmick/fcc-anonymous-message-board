import React from 'react';

const Footer = props => {

  return (
    <footer className="footer has-background-light">
      <div className="content has-text-centered">
        <p>
          An Anonymous Message Board made by
          <a
            href="https://twitter.com/ayushbhowmick"
            target="_blank"
            rel="noopener noreferrer"
            alt="Ayush Bhowmick on Twitter"
            title="Ayush Bhowmick on Twitter"
            className="has-text-danger"
            > Ayush Bhowmick
          </a>.
        </p>
      </div>
    </footer>
  );

}

export default Footer;