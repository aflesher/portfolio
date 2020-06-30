import React from "react";

class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.scrollToCompany = this.scrollToCompany.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this)
  }

  scrollToCompany(index) {
    this.refs[index].scrollIntoView({block: 'start', behavior: 'smooth'});
  }

  render() {
    return (
      <div>
        <div className="google-docs-link hidden-sm-down">
          <a href="https://drive.google.com/open?id=1eFLlwcZDcNUwEJ22zEKPnmMh5NrU80FZgJtywfC-VBo" target="_blank">Google Docs Version</a>
        </div>
        <div className="resume-name">
          Adam Flesher
        </div>
        <div className="resume-title">
          Principal Software Engineer
        </div>
        <div>
          <i>Address and phone # available upon request</i><br />
          <a href="mailto:adam.flesher@gmail.com">adam.flesher@gmail.com</a>
        </div>
        <div className="resume-heading">
          Technical Proficiencies
        </div>
        <div>
        Electron, Typescript, Unity C#, ShaderLab, Ethereum Solidity, Node.js, CSS/SCSS, React, Lodash, jQuery, Mochajs, Rendr, Postgres, MySQL, Ruby on Rails, Objective-C, Java, PHP, Jira, Git, Python, Jenkins, AngularJS, SQL Server, Java Play
        </div>
        <div className="resume-heading">
          Experience
        </div>
        <div>
          <div className="resume-company" ref="0">
            <b>Semaphore Solutions, Victoria BC</b><i> - Contractor/Software Engineer</i>
          </div>
          <div className="resume-dates">AUG 2018 - PRESENT</div>
          <ul>
            <li>Team led and full stack engineer for existing AngularJS/C# .net medical services web application.</li>
            <li>Responsible for running scrum, ensuring my team meets weekly deadlines and coordinating with other internal development teams.</li>
            <li>Have taken the initiative to improve and clean up the existing codebase by establishing proper development standards and upgrading outdated libraries.</li>
          </ul>
        </div>
        <div>
          <div className="resume-company" ref="1">
            <b>Dark Territory, Victoria BC</b><i> - Owner/Developer</i>
          </div>
          <div className="resume-dates">OCT 2016 - APR 2018</div>
          <ul>
            <li>Started a self funded independent game company.</li>
            <li>Designed a built tools for building and testing a procedurally generated 2D game in Unity.</li>
            <li>Optimized game to run at a stutter free +60fps and to generate levels in less than 100 milliseconds.</li>
            <li>Created a custom multi-camera system for applying post-processing effects to Spine assets.</li>
          </ul>
        </div>
        <div>
          <div className="resume-company" ref="2">
            <b>Change.org, Victoria BC</b><i> - Principal Software Engineer</i>
          </div>
          <div className="resume-dates">AUG 2014 - MAY 2016</div>
          <ul>
            <li><b>Led a small team of engineers to build a brand new web application for voters in the United States.</b> I was responsible for:</li>
            <li>Meeting very aggressive hard deadlines based on election cycles.</li>
            <li>Co-architecting a new React web application from the ground up.</li>
            <li>Working with project manager to breakdown, cost and assign tasks each sprint.</li>
            <li>Conducting employee reviews and mentoring junior engineers.</li>
            <li>General feature development and bug fixing.</li>
          </ul>
        </div>
        <div>
          <div className="resume-company" ref="3">
            <b>Zynga, San Francisco CA</b><i> - Principal Software Engineer</i>
          </div>
          <div className="resume-dates">JAN 2011 - AUG 2014</div>
          <ul>
            <li><b>Was a lead engineer on both Zynga.com and then a native iOS application.</b> I was responsible for:</li>
            <li>Working with various internal teams to help them integrate our product.</li>
            <li>Ensuring that memory, CPU and battery consumption by our app was monitored and kept to acceptable levels.</li>
            <li>Working with project manager to breakdown, cost and assign tasks each sprint.</li>
            <li>Conducting employee reviews and mentoring junior engineers.</li>
            <li>General feature development and bug fixing.</li>
          </ul>
        </div>
        <div>
          <div className="resume-company" ref="4">
            <b>Flock, Victoria BC</b><i> - Senior Software Engineer</i>
          </div>
          <div className="resume-dates">OCT 2009 - DEC 2010</div>
          <ul>
            <li>Was a senior engineer who worked on the flock web browser.</li>
            <li>Built, updated and deployed the flock.com homepage.</li>
            <li>Helped to port the flock web browser to OSX/Cocoa.</li>
            <li>Built internal pages for the web browser.</li>
          </ul>
        </div>
        <div>
          +5 years of software development experience at various companies in Victoria
          </div>
        <div className="resume-heading">
          Education
        </div>
        <div className="resume-company">
          <b>Camosun College, Victoria BC</b><i> - Diploma in Computer Science</i>
        </div>
        <div className="resume-dates">SEP 2002 - APR 2004</div>
      </div>
    );
  }
}

export default Resume;