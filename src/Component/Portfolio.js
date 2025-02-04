import React from 'react'

const Portfolio = () => {
  return (
    <>

  <header>
    <h1>Nazim's Portfolio</h1>
    <p>Full Stack Developer | C++ Enthusiast</p>
  </header>
  <div className="container">
    <div className="section">
      <h2>Skills</h2>
      <ul>
        <li>ReactJS</li>
        <li>C++</li>
        <li>JavaScript</li>
        <li>HTML &amp; CSS</li>
        <li>MongoDB</li>
        <li>Team Leadership</li>
        <li>Time Management</li>
        <li>Adaptability</li>
      </ul>
    </div>
    <div className="section">
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>TDO Task:</strong> A task management system to organize daily
          activities.
        </li>
        <li>
          <strong>FitLife Fitness:</strong> A fitness tracking app to monitor
          workouts and diet.
        </li>
      </ul>
    </div>
  </div>
</>

  )
}

export default Portfolio