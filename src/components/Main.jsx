import React from "react";
import Experience from "./Main/Experience.jsx";
import Project from "./Main/Project.jsx";
import Resume from "./Main/Resume.jsx";
import Header from "./Main/Header.jsx";

import changeLogo from "../images/change.png";
import zyngaLogo from "../images/zynga.png";
import dtLogo from "../images/logo-dt.png";
import outrunImage from "../images/outrun.png";
import odysseyImage from "../images/odyssey.png";
import epp2dImage from "../images/epp2d.jpg";
import flockImage from "../images/flock-icon.png";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoScrollToIndex: -1
    }
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
    window.addEventListener('scroll', this.handleScroll.bind(this));
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
            As a developer with over 14 years experience I am a valuable addition to any team as either a lead or an individual contributor. I have a proven track record of delivering high-quality, scalable and stable applications.
          </p>
          <p>
            I have an extensive background in building web applications. Through this experience I've learned first hand what processes, technologies and even which types of engineers work well and which don't. 
          </p>
          <p>
            Game development and cryptocurrencies are what excite me the most these days. I spent a lot of my free time learning and creating in these spaces.
          </p>
        </div>

        <div className="experience section" ref="1">
          <h1>
            Experience
          </h1>
          <Experience icon={dtLogo} name="Dark Territory" title="Owner/Developer" location="Victoria, BC" date="oct 2016 - apr 2018 (1.5 years)">
            <p>In 2016 I left my job to fulfill a lifelong dream of starting an independent game studio. I set out to build a procedurally generated 2D
              platformer using Unity. Although I was happy with the progress I had made I made a difficult decision to put the
              game on hold and pursue other interests.</p>
          </Experience>
          <hr />
          <Experience icon={changeLogo} name="Change.org" title="Principal Software Engineer" location="Victoria, BC" date="aug 2014 - may 2016 (1.5 years)">
            <p>I was chosen to lead a small team of engineers in building a new web application
              called <a href="http://www.wired.co.uk/article/change-org-change-politics-united-states-presidential-election-2016">Change Politics</a>. It was built from
              the ground up and revered by the company for its stability and the speed by which we were able to add new features. The project was ultimately
              scrapped due to budget constraints but it remains one of the highlights of my career.</p>  
          </Experience>
          <hr />
          <Experience icon={zyngaLogo} name="Zynga" title="Principal Software Engineer" location="San Francisco, CA" date="Jan 2011 - Aug 2014 (3.5 years)">
            <p>I moved to San Francisco to work at Zynga to help build their new web platform <a href="http://zynga.com">zynga.com</a>.
            I led a feature development team that helped ship the final product. Later I was asked to join a new team that was building a native iOS/Android social
            application.</p>
          </Experience>
          <hr />
          <Experience icon={flockImage} name="Flock" title="Senior Software Engineer" location="Victoria, BC" date="Oct 2009 - Dec 2010 (1.5 years)">
            <p>Flock was web browser built on chrome that had social features for Facebook and Twitter baked into the application.
              I did a lot of work to port the application to OSX as well as building internal pages used by the browser.</p>
          </Experience>
        </div>

        <div className="projects section" ref="2">
          
          <h1>
            Open Source Projects
          </h1>

          <h2>
            Unity
          </h2>
          <p>
            There is so many amazing free guides and resources for Unity. Lately I've been trying to use some of my experience to give something back.
          </p>
          <div>
            <Project image={epp2dImage} url="https://github.com/aflesher/EntityPostProcessor2D" className="unity" title="Entity Post-Processor 2D">
            <div className="details">
              One issue I had when developing my game in Unity is that I wanted to be add effects like outlines and dissolves to our Spine 2D assets. A solution to doing this was to create a multi-camera system that rendered these assets to a render texture. It worked great so I built a tool to help automate the setup process.
              </div>
            </Project>
          </div>

          <h2>
            Shaders
          </h2>
          <p>
            Using math to create art fascinates me. I'm always playing around on shadertoy.com seeing what I can come up with. Here are a few things I've been working on:
          </p>
          <div>
            <Project image={outrunImage} url="https://www.shadertoy.com/view/Xl2BRh" className="shader" title="Outrun Shader">
            <div className="details">
                I love 80s "Outrun" art style that has become quite popular. This simple shader captures the genre in a hypnotic loop. 
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