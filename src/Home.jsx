import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Projects';
import Projects from './components/Projects';
import Acc from './components/work';
 // Note the relative path

const Home = () =>
{
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Acc />
    </div>
        
  );
};
export default Home;