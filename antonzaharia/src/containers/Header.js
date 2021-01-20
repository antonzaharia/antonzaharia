import React from "react";
import Intro from "../components/Intro";
import Head from "../components/Head";
import Work from "../components/Work";
import About from "../components/About";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";
import Resume from "../components/Resume";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.returnToHome = this.returnToHome.bind(this);
    this.state = {
      header: true,
      intro: false,
      work: false,
      about: false,
      contact: false,
      resume: false,
    };
  }

  returnToHome = () =>
    this.setState({
      header: true,
      intro: false,
      work: false,
      about: false,
      contact: false,
      resume: false,
    });

  closeAll = () =>
    this.setState({
      header: false,
      intro: false,
      work: false,
      about: false,
      contact: false,
      resume: false,
    });
  showIntro = (event) => {
    event.preventDefault();
    this.closeAll();
    this.setState({ intro: true });
    window.scrollTo(0, 0);
  };
  showWork = (event) => {
    event.preventDefault();
    this.closeAll();
    this.setState({ work: true });
    window.scrollTo(0, 0);
  };
  showAbout = (event) => {
    event.preventDefault();
    this.closeAll();
    this.setState({ about: true });
    window.scrollTo(0, 0);
  };
  showContact = (event) => {
    event.preventDefault();
    this.closeAll();
    this.setState({ contact: true });
    window.scrollTo(0, 0);
  };
  showResume = (event) => {
    event.preventDefault();
    this.closeAll();
    this.setState({ resume: true });
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <>
        <header id="header">
          {this.state.header ? <Head /> : ""}

          {this.state.intro ? (
            <div id="main">
              <Intro close={this.returnToHome} />
            </div>
          ) : (
            ""
          )}
          {this.state.work ? (
            <div id="main">
              <Work close={this.returnToHome} />
            </div>
          ) : (
            ""
          )}
          {this.state.about ? (
            <div id="main">
              <About close={this.returnToHome} />
            </div>
          ) : (
            ""
          )}
          {this.state.contact ? (
            <div id="main">
              <Contact close={this.returnToHome} />
            </div>
          ) : (
            ""
          )}
          {this.state.resume ? (
            <div id="main">
              <Resume close={this.returnToHome} />
            </div>
          ) : (
            ""
          )}
          <nav>
            <ul className="nav-shadow">
              <li>
                <Link to="" onClick={this.showIntro}>
                  Intro
                </Link>
              </li>
              <li>
                <Link to="" onClick={this.showWork}>
                  Work
                </Link>
              </li>
              <li>
                <Link to="" onClick={this.showAbout}>
                  About
                </Link>
              </li>
              <li>
                <Link to="" onClick={this.showContact}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="" onClick={this.showResume}>
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
          <br />
        </header>
      </>
    );
  }
}
export default Header;
