import React from "react";
import Experience from "./Main/Experience.jsx";
import Project from "./Main/Project.jsx";
import Resume from "./Main/Resume.jsx";
import Header from "./Main/Header.jsx";
import Link from "gatsby-link";

import changeLogo from "../images/change.png";
import zyngaLogo from "../images/zynga.png";
import dtLogo from "../images/logo-dt.png";
import outrunImage from "../images/outrun.png";
import odysseyImage from "../images/odyssey.png";
import epp2dImage from "../images/epp2d.jpg";
import flockImage from "../images/flock-icon.png";
import wallscImage from "../images/wallsc.png";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoScrollToIndex: -1
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  // a problem is this that this shouldn't always mean scroll. if the activeContentIndex state is
  // changed due to a scroll event we want to ignore
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.activeContentIndex != this.props.activeContentIndex && nextProps.scrollTriggerIsNav) {
      this.setState({autoScrollToIndex: nextProps.activeContentIndex});
      this.refs[nextProps.activeContentIndex].scrollIntoView({block: 'start', behavior: 'smooth'});
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if (this.state.autoScrollToIndex != -1) {
      var rect = this.refs[this.state.autoScrollToIndex].getBoundingClientRect();
      if (rect.top == 0) {
        this.setState({autoScrollToIndex: -1});
      }
      return;
    }
    
    for (var i = 0; i < 4; i++) {
      var rect = this.refs[i].getBoundingClientRect();
      if (rect.top >= 0) {
        if (this.props.handleScroll) {
          this.props.handleScroll(i);
        }
        break;
      }
    }
  }

  render() {
    return (
      <div className="main">
        <div className="mobile-header">
          <Header />
        </div>
        <div className="about-me section" ref="0">
          <h1>
            About Me
          </h1>
          <p>
            As a developer with over 14 years experience I am a valuable addition to any team. I have functioned as both a lead and an individual contributor and enjoy both roles. I have a proven track record of delivering high-quality, scalable and stable applications.
          </p>
          <p>
            The majority of my career has been spent building web applications. Through this experience I've learned first hand which processes, technologies and methodologies work and which don't. 
          </p>
          <p>
            Game development and cryptocurrencies have become my real passion. I spend a lot of my free time learning and creating in these spaces.
          </p>
        </div>

        <div className="experience section" ref="1">
          <h1>
            Experience
          </h1>
          <Experience icon={dtLogo} name="Dark Territory" title="Owner/Developer" location="Victoria, BC" date="oct 2016 - apr 2018 (1.5 years)">
            <p>
              In 2016 I left my job to fulfill a lifelong dream of starting an independent game studio. I set out to build a procedurally generated 2D platformer in Unity. I learned a lot and made some really good progress but for various reasons I decided to put the game on hold indefinitely. I'm happy for the experience but excited to pursue other interests.
            </p>
          </Experience>
          <hr />
          <Experience icon={changeLogo} name="Change.org" title="Principal Software Engineer" location="Victoria, BC" date="aug 2014 - may 2016 (1.5 years)">
            <p>
              During my time at Change.org I was chosen to lead a small team of engineers in building a new web application. <a href="http://www.wired.co.uk/article/change-org-change-politics-united-states-presidential-election-2016" target="_blank">Change Politics</a> was built from the ground up using React/Node JS. The engineering side of the project was a great success as we were always able to meet all our deadlines while maintaining a stable and scalable application. The project was ultimately scrapped due to budget constraints but I remain proud of the work we did.
            </p>
          </Experience>
          <hr />
          <Experience icon={zyngaLogo} name="Zynga" title="Principal Software Engineer" location="San Francisco, CA" date="Jan 2011 - Aug 2014 (3.5 years)">
            <p>
              I moved to San Francisco to work at Zynga and help build their new web platform <a href="http://zynga.com" target="_blank">zynga.com</a>. I led a feature development team that helped ship the final product. Later I joined a team building a native iOS/Android social application as a lead engineer.
            </p>
          </Experience>
          <hr />
          <Experience icon={flockImage} name="Flock" title="Senior Software Engineer" location="Victoria, BC" date="Oct 2009 - Dec 2010 (1.5 years)">
            <p>Flock was web browser built on chrome that had social features for Facebook and Twitter baked into the application.
              I did a lot of work to port the application to OSX as well as building internal pages used by the browser.</p>
          </Experience>
          <hr />
          <div>
          * In addition to this I have another 5 years of experience of software development. The majority of this experience is in web development and mobile applications.
          </div>
        </div>

        <div className="projects section" ref="2">
          
          <h1>
            Projects
          </h1>

          <h2>
            Ethereum Smart Contracts
          </h2>
          <p>
            Ethereum smart contracts are the most exciting thing happening in cryptocurrencies right now. I've been learning and experimenting with writing and deploying smart contracts.
          </p>
          <div>
            <Project image={wallscImage} className="unity" title="Wall Smart Contract">
            <div className="details">
              This is just a simple project I created to go though the process of deploying a smart contract. It's a smart contract on the ropsten test net that
              allows users to write limited text to a wall. Users can also buy/sell spots on the wall. 
              <div>
                <a href="https://github.com/aflesher/Wall" target="_blank">Github</a> |&nbsp;
                <Link to="/wall">Web Demo</Link>
              </div>
            </div>
            </Project>
          </div>

          <h2>
            Unity
          </h2>
          <p>
            There is so many amazing free guides and resources for Unity. Lately I've been trying to use some of my experience to give something back.
          </p>
          <div>
            <Project image={epp2dImage} className="unity" title="Entity Post-Processor 2D">
            <div className="details">
              One issue I had when developing my game in Unity is that I wanted to be add effects like outlines and dissolves to our Spine 2D assets.
              A solution to doing this was to create a multi-camera system that rendered these assets to a render texture.
              It worked great so I built a tool to help automate the setup process.
              <div>
                <a href="https://github.com/aflesher/EntityPostProcessor2D" target="_blank">Github</a> |&nbsp;
                <a href="#" target="_blank">Unity Store</a>
              </div>
            </div>
            </Project>
          </div>

          <h2>
            Shaders
          </h2>
          <p>
            Using math to create art fascinates me. I'm always playing around on shadertoy.com seeing what I can come up with.
          </p>
          <div>
            <Project image={outrunImage} url="https://www.shadertoy.com/view/Xl2BRh" className="shader" title="Outrun Shader">
              <div className="details">
                I love the 80s "Outrun" art genre that has become quite popular. This simple shader captures the style in a hypnotic loop. 
                <div>
                  <a href="https://github.com/aflesher/shaders/blob/master/outrun-sunset.shader" target="_blank">Github</a> |&nbsp;
                  <a href="https://www.shadertoy.com/view/Xl2BRh" target="_blank">Shadertoy</a>
              </div>
              </div>
            </Project>
          </div>

        </div>

        <div className="resume section" ref="3">
          <Resume />
        </div>

      </div>
    );
  }
}

export default Component;