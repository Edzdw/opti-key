import React from "react";
import Signin from "./Signin";
import LinkRef from "./LinkRef";
import Axios from "axios";
import { normalAlert } from "./Swal";

const Header = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = React.useState(false);
  const [isLinkRefModalOpen, setIsLinkRefModalOpen] = React.useState(false);

  const [email, setEmail] = React.useState("");

  const toggleSignInModal = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
  };

  const toggleLinkRefModal = () => {
    setIsLinkRefModalOpen(!isLinkRefModalOpen);
  };

  React.useEffect(() => {
    if (!localStorage.getItem("email")) {
      return;
    }
    setEmail(localStorage.getItem("email"));
  }, []);

  React.useEffect(() => {
    if (!email) {
      return;
    }
    let data = JSON.stringify({
      "email": email
    });

    let config = {
      method: 'post',
      url: 'https://jellyfish-app-kafzn.ondigitalocean.app/api/v1/auth/check-ref',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    Axios.request(config)
      .then((response) => {
        if (response.data == 1) {
          toggleLinkRefModal();
        }
      }).catch((error) => {
        normalAlert("Có lỗi xảy ra, vui lòng thử lại sau!", "error");
      });
  }, [email]);

  return (
    <header>
      {/* Desktop Menu Starts */}
      <div className="header-inner hide-mobile">
        {/* MENU STARTS */}
        <div className="menu">
          <nav>
            <ul>
              <li>
                <span className="active" id="home-link">
                  Home
                </span>
              </li>
              <li>
                <span id="about-link">About</span>
              </li>
              <li>
                <span id="portfolio-link">Portfolio</span>
              </li>
              <li>
                <span id="contact-link">Contact</span>
              </li>
              <li>
                <span id="blog-link">Blog</span>
              </li>
              <li>
                {email ? <span id="network-link">Network</span> : <span id="sign-in" onClick={toggleSignInModal}>Sign In</span>}
              </li>
            </ul>
          </nav>
        </div>
        {/* MENU ENDS */}
        {/* FREELANCE STARTS */}
        <div className="mail">
          <p>
            Email :<span> Phanminhthuyhan@gmail.com </span>
          </p>
        </div>
        {/* FREELANCE ENDS */}
      </div>
      {/* Desktop Menu Ends */}
      {/* Mobile Menu Starts */}
      <nav className="mobile-menu">
        <div id="menuToggle">
          <input type="checkbox" id="checkboxmenu" />
          <span />
          <span />
          <span />
          <ul className="list-unstyled" id="menu">
            <li>
              <a href="#home">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#my-photo">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>Contact</span>
              </a>
            </li>
            <li>
              <a href="#blog">
                <span>Blog</span>
              </a>
            </li>
            <li>
              {email ? <a href="#network">
                <span>Network</span>
              </a> : <a href="#network">
                <span id="sign-in" onClick={toggleSignInModal}>Sign In</span>
              </a>}
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu Ends */}
      {isSignInModalOpen && <Signin isOpen={isSignInModalOpen} toggle={toggleSignInModal} />}

      <LinkRef isOpen={isLinkRefModalOpen} toggle={toggleLinkRefModal} current={email} />
    </header>
  );
};
export default Header;
