import React, { Component } from "react";
import "../styles/WebsiteHeader.css";

class WebsiteHeader extends Component {
  render() {
    const BrandLogoSrc = "./img/brand-logo.svg";
    const SiteName = "Audible UX Redesign";

    const navLinks = [
      {
        Nav_Name: "Your Library",
        Nav_Link: "#",
        Nav_Icon: "fa-library",
        Order: "0"
      },
      {
        Nav_Name: "Recommended",
        Nav_Link: "#",
        Nav_Icon: "fa-thumbsup",
        Order: "1"
      },
      {
        Nav_Name: "Store",
        Nav_Link: "#",
        Nav_Icon: "fa-cart",
        Order: "2"
      },
      {
        Nav_Name: "Recommended",
        Nav_Link: "#",
        Nav_Icon: "fa-thumbsup",
        Order: "3"
      }
    ];

    const CTAButtons = [
      {
        cta_Copy: "My Account",
        cta_Link: "#",
        class_Name: "btn-secondary",
        Order: "0"
      },
      {
        cta_Copy: "Join Audible",
        cta_Link: "#",
        class_Name: "btn-primary",
        Order: "1"
      }
    ];

    function sortObjects(a, b) {
      if (a.Order < b.Order) {
        return -1;
      }
      if (a.Order > b.Order) {
        return 1;
      }
      return 0;
    }

    const WebsiteNavigation = props => {
      const links = props.navLinks.map((link, index) => {
        return (
          <li>
            <a href="{link.Nav_Link}">{link.Nav_Name}</a>
          </li>
        );
      });
      return <ul>{links}</ul>;
    };

    return (
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <a class="navbar-brand" href="#">
            <img src={BrandLogoSrc} alt={SiteName}></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <WebsiteNavigation navLinks={navLinks} />
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default WebsiteHeader;
