import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="upper-footer">
          <div className="contact-card">
            <h1>Our Office</h1>
            <p className="address">
              <i className="fas fa-map-marker-alt" /> 34 Squirtle used water gun
              Drive, Montreal, QC{" "}
            </p>
            <br />
            <p className="number">
              <i className="fas fa-phone" /> +1 514 123 4567
            </p>
            <br />
            <p className="email">
              <i className="far fa-envelope" />{" "}
              info@propertyKlubNinjasforHire.ca
            </p>
          </div>
          <div className="socials">
            <h1>Let's stay connected</h1>
            <div className="each-social">
              <p>
                <i className="fab fa-facebook-f" />

                {"  "}
              </p>
              <p>
                <i className="fab fa-twitter" />

                {"  "}
                {/* Twitter */}
              </p>
              <p>
                <i className="fab fa-instagram" />
                {"  "}
                {/* Instagram */}
              </p>
            </div>
          </div>
        </div>
        <div className="lower-footer">
          <div className="legal">
            <p>Legal mentions | Privacy policy | Contact</p>
          </div>
          <p
            style={{
              display: "block",
              textAlign: "center",
              marginTop: "10px",
              fontSize: "0.8rem"
            }}
          >
            © Powered by Sturk Industries
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
