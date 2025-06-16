import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-dark text-white py-3">
        <nav className="container">
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-outline-light">Home</button>
            <button className="btn btn-outline-light">About</button>
            <button className="btn btn-outline-light">Projects</button>
            <button className="btn btn-outline-light">Contact</button>
          </div>
        </nav>
      </header>

      <main className="container py-5">
        <section id="introduction" className="mb-5">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h1 className="display-4 mb-4">Welcome to My Portfolio</h1>
              <p className="lead">
                I'm a passionate developer focused on creating amazing web experiences.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="mb-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="mb-4">About Me</h2>
              <p>
                I am a dedicated web developer with a strong foundation in modern web technologies.
                My journey in software development has equipped me with the skills to create
                responsive, user-friendly applications that make a difference.
              </p>
              <div className="row mt-4">
                <div className="col-md-6">
                  <h3>Skills</h3>
                  <ul className="list-unstyled">
                    <li>React.js</li>
                    <li>JavaScript</li>
                    <li>HTML5 & CSS3</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h3>Interests</h3>
                  <ul className="list-unstyled">
                    <li>Web Development</li>
                    <li>UI/UX Design</li>
                    <li>Problem Solving</li>
                    <li>Continuous Learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
