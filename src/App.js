/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './App.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import experienceList from './experienceList';
import skillList from './skillList';

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alvin!</title>
        <link rel="icon" href="assets/img/icon.png" />
        <link rel="stylesheet" href="styles.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/87b159f47a.js"
          crossOrigin="anonymous"
        />
      </Helmet>
      <section className="container navbar">
        <header>
          <div className="logo">
            <h1>Alvin!</h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#skills">skills</a>
              </li>
              <li>
                <a href="#experience">experience</a>
              </li>
            </ul>
          </nav>
        </header>
      </section>
      <section className="container main">
        <div className="main__text">
          <h1>
            Hi,
            <br />
            Im <span className="text--name">Alvin </span>!
          </h1>
          <p>Front-End Developer.</p>
          <div className="main__contact">
            <a
              href="https://bit.ly/30pzdDt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp" />
            </a>
            <a
              href="https://github.com/MalvinL645"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.instagram.com/_malvinf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadalvin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
        <div className="main__img">
          <img src="assets/img/foto.png" alt="" />
        </div>
      </section>
      <section className="container about">
        <h1>About</h1>
        <div className="about__info">
          <p>
            I’m from Indonesia and i`m a software developer passionate about
            creating a website or mobile application and has been spent 4+ years
            pursuing a career in software developer and constantly striving to
            learn new technologies and sharpen my knowledge and skills.
          </p>
          <p>
            Currently i`m participating a program called Digital Talent
            Incubator which is held by Telkom University and PT. Telkom
          </p>
        </div>
        {/* <!-- <img src="assets/img/dotted-shape.png" alt="" /> --> */}
        <div className="about__kotak" />
      </section>
      <section className="container skills">
        <h1>Skills</h1>
        <div className="skills__container">
          {skillList.map((skill) => {
            return (
              <div className="skills__wrap">
                <div className="skills__name" id={skill.skillName}>
                  <p>{skill.skillName}</p>
                </div>
                <div className="skills__bar">
                  <div className={`bar__${skill.skillName}`}>
                    {`${skill.skillBar} %`}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <!-- <img src="assets/img/skills.png" alt="" /> --> */}
        <div className="skills__kotak" />
      </section>
      <section className="container experiences">
        <div className="experience">
          <h1>Experiences</h1>
          <div className="experiences__timeline">
            {experienceList.map((exp, i) => {
              return i % 2 === 0 ? (
                <div className="timeline--left">
                  <h4>{exp.experienceTitle}</h4>
                  <p>{exp.experienceDesc}</p>
                  <p>
                    <b>Company</b> - {exp.experienceCompany} (
                    {exp.experienceType})
                  </p>
                  <p>
                    <b>Duration</b> - {exp.experienceStart} to{' '}
                    {exp.experienceEnd}
                  </p>
                  <p>
                    <b>Location</b> - {exp.experienceLocation}
                  </p>
                </div>
              ) : (
                <div className="timeline--right">
                  <h4>{exp.experienceTitle}</h4>
                  <p>{exp.experienceDesc}</p>
                  <p>
                    <b>Company</b> - {exp.experienceCompany} (
                    {exp.experienceType})
                  </p>
                  <p>
                    <b>Duration</b> - {exp.experienceStart} to{' '}
                    {exp.experienceEnd}
                  </p>
                  <p>
                    <b>Location</b> - {exp.experienceLocation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <footer>
        <hr />
        <p>2020. Created with ❤</p>
      </footer>
    </HelmetProvider>
  );
};

export default App;
