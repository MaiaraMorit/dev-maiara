import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import FormationSection from './components/FormationSection/FormationSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SkillsSection />
      <FormationSection />
    </div>
  );
}

export default App;
