import React from "react";
import "../../App.css";

function Footer() {
  return (
    <footer>
      <div className="wrapper"></div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <p className="footer-para">
              Developer: <span className="my-name"> Vedhanth</span>
            </p>

            <div className="contact"></div>
            <div className="socials">
              <a
                href="https://www.snapchat.com/add/vedhanthm2021?share_id=Vaym31cWeaw&locale=en-US"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-Snapchat"></i>
              </a>
              <a
                href="https://instagram.com/_ellai_shain_22?igshid=ZDdkNTZiNTM="
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-Instagram"></i>
              </a>
              <a
                href=" https://twitter.com/VedhanthM1?t=n4AGNGeIADMlOce0fE6XsA&s=08"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://github.com/vedhanth152"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <p className="copyright">
              Copyright&nbsp;&copy;&nbsp;Nsdvsdike Shoes Temdsvdvsdsvsplate
            </p>
            <br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
