import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <main className="container py-5">
       

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
