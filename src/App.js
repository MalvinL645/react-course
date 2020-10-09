/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './assets/css/App.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import experienceList from './assets/data/experienceList';
import skillList from './assets/data/skillList';
import accountList from './assets/data/accountList';

const photo = require('./assets/img/foto.png');
const webIcon = require('./assets/img/icon.png');

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alvin!</title>
        <link rel="icon" href={webIcon} />
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
            {accountList.map((acc) => {
              return (
                <a
                  href={acc.accountLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={acc.accountName}
                >
                  <i className={`fab fa-${acc.accountName}`} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="main__img">
          <img src={photo} alt="" />
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
              <div className="skills__wrap" key={skill.skillName}>
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
                <div className="timeline--left" key={i}>
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
                <div className="timeline--right" key={i}>
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
