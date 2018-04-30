import React from "react";
import Experience from "./Main/Experience.jsx";

import changeLogo from "../images/change.png";
import zyngaLogo from "../images/zynga.png";

class Component extends React.Component {

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.activeContentIndex != this.props.activeContentIndex) {
      this.refs[nextProps.activeContentIndex].scrollIntoView({block: 'start', behavior: 'smooth'});
    }
  }

  render() {
    return (
      <div>
        <div className="about-me section" ref="0">
          <h1>
            About Me
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget finibus dolor, ac luctus est. Maecenas gravida commodo pretium. Quisque venenatis euismod nunc vel fermentum. Proin posuere turpis quis sollicitudin condimentum. Nam tincidunt risus sed convallis dictum. In elementum id neque quis vulputate. Duis fringilla ultricies tellus a iaculis. Integer facilisis risus in quam interdum, ut malesuada nibh pulvinar. Pellentesque mollis lacinia ullamcorper. Pellentesque ultrices, sapien luctus egestas fringilla, eros nulla commodo libero, eget viverra libero tortor at ante.
          </p>
        </div>

        <div className="experience section" ref="1">
          <h1>
            Experience
          </h1>
          <Experience icon={changeLogo} name="Dark Territory" title="Owner/Developer" location="Victoria, BC" date="oct 2016 - apr 2018">
            <ul>
              <li>Started a self funded independent game company.</li>
              <li>Designed a built tools for building and testing a procedurally generated 2D game in Unity.</li>
              <li>Optimized game to run at a stutter free +60fps and to generate levels in less than 100 milliseconds.</li>
              <li>Working with project manager to breakdown, cost and assign tasks each sprint.</li>
              <li>Created a custom multi-camera system for applying post-processing effects to Spine assets.</li>
            </ul>
          </Experience>
          <hr />
          <Experience icon={changeLogo} name="Change.org" title="Principal Software Engineer" location="Victoria, BC" date="aug 2014 - may 2016">
            <ul>
              <li><b>Led a small team of engineers to build a brand new web application for voters in the United States.</b> I was responsible for:</li>
              <li>Meeting very aggressive hard deadlines based on election cycles.</li>
              <li>Co-architecting a new React web application from the ground up.</li>
              <li>Working with project manager to breakdown, cost and assign tasks each sprint.</li>
              <li>Conducting employee reviews and mentoring junior engineers.</li>
              <li>General feature development and bug fixing.</li>
            </ul>
          </Experience>
          <hr />
          <Experience icon={zyngaLogo} name="Zynga" title="Principal Software Engineer" location="San Francisco, CA" date="Jan 2011 - Aug 2014">
            <ul>
              <li><b>Was a lead engineer on both Zynga.com and then a native iOS application.</b> I was responsible for:</li>
              <li>Working with various internal teams to help them integrate our product.</li>
              <li>Ensuring that memory, CPU and battery consumption by our app was monitored and kept to acceptable levels.</li>
              <li>Working with project manager to breakdown, cost and assign tasks each sprint.</li>
              <li>Conducting employee reviews and mentoring junior engineers.</li>
              <li>General feature development and bug fixing.</li>
            </ul>
          </Experience>
          <hr />
        </div>

        <div className="projects section" ref="2">
          <h1>
            Projects
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget finibus dolor, ac luctus est. Maecenas gravida commodo pretium. Quisque venenatis euismod nunc vel fermentum. Proin posuere turpis quis sollicitudin condimentum. Nam tincidunt risus sed convallis dictum. In elementum id neque quis vulputate. Duis fringilla ultricies tellus a iaculis. Integer facilisis risus in quam interdum, ut malesuada nibh pulvinar. Pellentesque mollis lacinia ullamcorper. Pellentesque ultrices, sapien luctus egestas fringilla, eros nulla commodo libero, eget viverra libero tortor at ante.

Phasellus pharetra dolor quis massa dictum egestas. Maecenas auctor volutpat ipsum eget mollis. Maecenas quis eros cursus risus pellentesque pellentesque et at odio. Proin id facilisis orci. Aliquam aliquet dui ante, a vehicula mauris tristique eu. Proin sed ligula eget libero vestibulum cursus non sed nisl. Nullam ac lobortis diam, eget iaculis enim.

Proin a dolor ullamcorper lacus faucibus luctus. Pellentesque in tristique tortor. Etiam convallis mi in aliquet congue. Cras tincidunt hendrerit pretium. Nulla congue, mauris sit amet congue suscipit, sem erat vehicula massa, in pharetra turpis sapien laoreet risus. Aenean et scelerisque felis, commodo facilisis nunc. Suspendisse potenti. Aliquam egestas nec mauris quis consectetur. Sed pellentesque risus sit amet pharetra fringilla. Nunc molestie nisi ac nisi vehicula feugiat. Morbi malesuada lacus dictum tortor dapibus, volutpat consectetur nunc semper. Integer magna arcu, rhoncus mattis lobortis vitae, congue id tellus. Maecenas sit amet lorem nec dolor pulvinar lobortis sit amet gravida eros.

Donec placerat tristique massa vel tempor. Aliquam non nunc a libero vehicula maximus non et tellus. Proin malesuada suscipit ligula vel dictum. Fusce vestibulum felis vitae dui fermentum, ac venenatis purus ultricies. Morbi in quam ultrices, fringilla nulla facilisis, tincidunt risus. Vestibulum dictum libero metus, id vehicula diam laoreet sit amet. In hac habitasse platea dictumst. Integer vitae aliquam arcu. Duis eu tellus placerat, malesuada enim sed, vehicula neque. Sed faucibus felis massa, id ultrices justo imperdiet non.

Morbi finibus mi non efficitur faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus elit, hendrerit sit amet auctor quis, dictum in mauris. Cras vel rutrum est, sit amet pulvinar augue. Aenean ornare metus eu nulla maximus sollicitudin. Quisque eu mi eu ipsum pharetra placerat. Etiam volutpat molestie lacus, in varius risus blandit at. Nulla commodo pulvinar elit, id laoreet mauris euismod eget.
          </p>
        </div>

      </div>
    );
  }
}

export default Component;