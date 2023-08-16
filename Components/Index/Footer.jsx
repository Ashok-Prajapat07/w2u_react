import React from "react";

function Footer() {
  return (
    <>
      <footer className="container justify-content-center d- pt-5">
        <div className="row">
          <div className="col-6 col-md footer-column">
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted">About Us</a>
              </li>
              <li>
                <a className="text-muted">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-muted">FAQs</a>
              </li>
              <li>
                <a className="text-muted">Privacy Policy</a>
              </li>
              <li>
                <a className="text-muted">Ads Policy</a>
              </li>
              <li>
                <a className="text-muted">Vendor Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md footer-column">
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted">Tourist Place</a>
              </li>
              <li>
                <a className="text-muted">Food Zone</a>
              </li>
              <li>
                <a className="text-muted">Shopping Zone</a>
              </li>
              <li>
                <a className="text-muted">Destination Wedding</a>
              </li>
              <li>
                <a className="text-muted">Home Stays</a>
              </li>
              <li>
                <a className="text-muted">Local News</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md footer-column">
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted">Vendor Registration</a>
              </li>
              <li>
                <a className="text-muted">Success Stories</a>
              </li>
              <li>
                <a className="text-muted">Business Support</a>
              </li>
              <li>
                <a className="text-muted">Ads Management</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md footer-column">
            <div>
              {/* Facebook */}
              <a
                className="btn  btn-floating"
                href="#!"
                role="button"
              >

                <i className="fab fa-facebook-f" />
              </a>
              {/* Twitter */}
              <a
                className="btn btn-floating"
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter" />
              </a>
              {/* Google */}
              <a
                className="btn  btn-floating"
                href="#!"
                role="button"
              >
                <i className="fab fa-youtube" />
              </a>
              {/* Instagram */}
              <a
                className="btn btn-floating"
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
            <h5>Follow Us</h5>
          </div>
          <p className="pt-5">
            Copyright © Welcome 2 Udaipur | Designed By : Tarangsoft Solutions
            LLP
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
