import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import FormationSection from './components/FormationSection/FormationSection';
import CareerSection from './components/CareerSection/CareerSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SkillsSection />
      <FormationSection />
      <CareerSection />
    </div>
  );
}

export default App;
