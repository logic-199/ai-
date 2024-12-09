import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import ProcessSection from './components/ProcessSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
