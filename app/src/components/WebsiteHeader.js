import React, { Component } from "react";

class WebsiteHeader extends Component {
  render() {
    const BrandLogoSrc = "/assets/audible-logo.svg";
    const AppName = "Audible UX Redesign";

    const navLinks = [
      {
        Nav_Name: "Home",
        Nav_Link: "#",
        Nav_Icon: "fa-home",
        Order: "0",
        Visible_Desktop: "true"
      },
      {
        Nav_Name: "Your Library",
        Nav_Link: "#",
        Nav_Icon: "fa-library",
        Order: "1",
        Visible_Desktop: "true"
      },
      {
        Nav_Name: "Recommended",
        Nav_Link: "#",
        Nav_Icon: "fa-thumbsup",
        Order: "2",
        Visible_Desktop: "true"
      },
      {
        Nav_Name: "Store",
        Nav_Link: "#",
        Nav_Icon: "fa-cart",
        Order: "3",
        Visible_Desktop: "true"
      },
      {
        Nav_Name: "My Account",
        Nav_Link: "#",
        Nav_Icon: "fa-thumbsup",
        Order: "4",
        Visible_Desktop: "false"
      },
      {
        Nav_Name: "Settings",
        Nav_Link: "#",
        Nav_Icon: "fa-thumbsup",
        Order: "5",
        Visible_Desktop: "false"
      },
      {
        Nav_Name: "Help & Support",
        Nav_Link: "#",
        Nav_Icon: "fa-thumbsup",
        Order: "6",
        Visible_Desktop: "false"
      },
      {
        Nav_Name: "Stats",
        Nav_Link: "#",
        Nav_Icon: "fa-thumbsup",
        Order: "7",
        Visible_Desktop: "false"
      },
      {
        Nav_Name: "News",
        Nav_Link: "#",
        Nav_Icon: "fa-thumbsup",
        Order: "8",
        Visible_Desktop: "false"
      }
    ];

    const ctaBtns = [
      {
        cta_Copy: "My Account",
        cta_Link: "#",
        class_Name: "btn btn-secondary",
        Order: "1"
      },
      {
        cta_Copy: "Join Audible",
        cta_Link: "#",
        class_Name: "btn btn-primary",
        Order: "2"
      }
    ];

    const WebsiteNavigation = props => {
      var navLinks = props.navLinks;
      const links = navLinks
        .sort((a, b) => a.Order - b.Order)
        .filter(link => link.Visible_Desktop === "true")
        .map((link, index) => {
          return (
            <li key={index}>
              <a href={link.Nav_Link}>{link.Nav_Name}</a>
            </li>
          );
        });
      return <ul>{links}</ul>;
    };

    const WebsiteNavigationCTA = props => {
      var ctaBtns = props.ctaBtns;
      const ctaLinks = ctaBtns
        .sort((a, b) => a.Order - b.Order)
        .map((ctaLink, index) => {
          return (
            <a
              href={ctaLink.cta_Link}
              className={ctaLink.class_Name}
              key={index}
            >
              {ctaLink.cta_Copy}
            </a>
          );
        });
      return <div>{ctaLinks}</div>;
    };

    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={BrandLogoSrc} alt={AppName} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <WebsiteNavigation navLinks={navLinks} />
              </div>
            </div>
            <div className="float-right">
              <WebsiteNavigationCTA ctaBtns={ctaBtns} />
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default WebsiteHeader;
