import React from "react";
import Experience from "./Main/Experience.jsx";
import Project from "./Main/Project.jsx";
import Resume from "./Main/Resume.jsx";

import changeLogo from "../images/change.png";
import zyngaLogo from "../images/zynga.png";

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
        <div className="header">
          Mobile Header
        </div>
        <div className="about-me section" ref="0">
          <h1>
            About Me
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget finibus dolor, ac luctus est. Maecenas gravida commodo pretium.
            Quisque venenatis euismod nunc vel fermentum. Proin posuere turpis quis sollicitudin condimentum. Nam tincidunt risus sed convallis dictum.
            In elementum id neque quis vulputate. Duis fringilla ultricies tellus a iaculis. Integer facilisis risus in quam interdum, ut malesuada nibh pulvinar.
            Pellentesque mollis lacinia ullamcorper. Pellentesque ultrices, sapien luctus egestas fringilla, eros nulla commodo libero, eget viverra libero tortor at ante.
          </p>
        </div>

        <div className="experience section" ref="1">
          <h1>
            Experience
          </h1>
          <Experience icon={changeLogo} name="Dark Territory" title="Owner/Developer" location="Victoria, BC" date="oct 2016 - apr 2018 (1.5 years)">
            <p>In 2016 I left my job to fulfill a lifelong dream of starting an Independent game studio. I set out to build a procedurally generated 2D
              platformer using Unity as the studios first title. Although I was happy with the progress I had made I made a difficult decision to put the
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget finibus dolor, ac luctus est. Maecenas gravida commodo pretium.
              Quisque venenatis euismod nunc vel fermentum. Proin posuere turpis quis sollicitudin condimentum. Nam tincidunt risus sed convallis dictum.</p>
          </Experience>
        </div>

        <div className="projects section" ref="2">
          <h1>
            Open Source Projects
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget finibus dolor, ac luctus est. Maecenas gravida commodo pretium.
            Quisque venenatis euismod nunc vel fermentum.
          </p>
          <h2>
            Shaders
          </h2>
          <p>
            Using math to create art fascinates me. I'm always playing around on shadertoy.com seeing what I can come up with. Here are a few things I've been working on:
          </p>
          <div>
            <Project image={outrunImage} url="https://www.shadertoy.com/view/Xl2BRh" className="shader" title="Outrun Shader">
            <div className="details">
                I really like 80s "Outrun" style of artwork. I decided to create a shader based on this.
              </div>
            </Project>
            <Project image={odysseyImage} url="https://www.shadertoy.com/view/Md3BWN" className="shader" title="Odyssey Shader">
              <div className="details">
              I tried replicate the look and feel of monitors you'd see in old science fiction movies like 2001: A Space Odyssey. These were effects were done by using a projector which is why you see a flicker and inconsistent colors. It was a interesting challenge trying to recreate this as a shader.
              </div>
            </Project>
          </div>
          <h2>
            Unity
          </h2>
          <p>
            There is so many amazing free guides and resources for Unity. I've been trying to give something back to the community.
          </p>
          <div>
            <Project image={epp2dImage} url="https://github.com/aflesher/EntityPostProcessor2D" className="unity" title="Entity Post-Processor 2D">
            <div className="details">
              One issue I had when developing my game in Unity is that I wanted to be add effects like outlines and dissolves to our Spine 2D assets. A solution to doing this was to create a multi-camera system that rendered these assets to a render texture. It worked great so I built a tool to help automate the setup process.
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