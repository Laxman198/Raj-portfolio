import React from 'react';
import './Projects.css';
import maps from './Images/Maps.png';
import proj from './Images/proj.jpg';
import rover from './Images/rover.jpg';
import tweet from './Images/tweet.jpg';
import raj from './Images/Raj.png';
import bgimage from './Images/bgimage.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard({ title, imageSrc, githubLink, technologies, description }) {
  return (
    <div className='project'>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img className='images' src={imageSrc} alt={title} />
      </a>
      <div className='project-info'>
        <div className='project-title'>
          <h2>{title}</h2>
          <div className='liness'></div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <h3><span style={{ color: '#DFFF00' }}>{technologies}</span></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id='Projects'>
      <h1 className='title'>
        Projects <span style={{ color: '#FF004F' }}></span>
      </h1>
      <div className='projects-wrapper'>
        <ProjectCard
          title="TaigaViz"
          imageSrc={proj}
          githubLink="https://github.com/SER-516-Project-BullPen-Group-B/Team5_front_end"
          technologies="Typescript, ReactJS, TailwindCSS, Microservices and AWS."
          description="A Web based application visualizes different taiga metrics like Niko-Niko, Impediment tracker, CFD, Scope change, Accepted work spread, Cycle time, Lead time, WIP, and Throughput and helps users to assess the quality of the product and team performance. Using this application results in improved customer satisfaction, throughput and predictability."
        />

        <ProjectCard
          title="Gun Violence Tracker Using Semantic Data Integration"
          imageSrc={maps}
          githubLink="https://github.com/Sidharth-Sivaprasad/SER-531-Gun_Violence_tracker_and_Analyser"
          technologies="ReactJS, Springboot, Semantic-web and SPARQL."
          description="A Semantic-web project that helps users track and analyze the Gun violence crime across the states of United States. Presents statistical information of victims of different age group and gender during different years. Users can  anticipate the severity of  crime before they decide to visit or move to the specific city."
        />

        <ProjectCard
          title="Autonomous Rover Development"
          imageSrc={rover}
          githubLink="https://github.com/kskd1804/SER515-Spring22-Team1"
          technologies="ROS2, Linux and Python."
          description="A simulated rover constructed using ROS2 for exploring areas that cannot be explored by humans. Constructed with a LiDAR sensor, Camera and battery."
        />

        <ProjectCard
          title="Maxonym"
          imageSrc={bgimage}
          githubLink="https://github.com/Octrainn/DiscordBot"
          technologies="HTML,CSS, Bootstrap and Javascript."
          description="A Start-up news web application that enables users signup and read different startup news articles."
        />

        <ProjectCard
          title="Emotion Extraction and Classification from Twitter text"
          imageSrc={tweet}
          githubLink="https://github.com/Laxman198/Emotion-Extraction-and-Classification-from-Twitter-text"
          technologies="Python, Bidirectional LSTM."
          description="A Bidirectional LSTM model that extracts and classifies emotion from the Twitter text with an accuracy of 0.96. Helps Users know the emotion of specific tweet tweeted."
        />
        <ProjectCard
          title="Raj-Portfolio"
          imageSrc={raj}
          githubLink="https://github.com/Octrainn/TensorFlowModel"
          technologies="ReactJS, Typescript and CSS."
          description="My portfolio website representing myself and my interest towards web development. "
        />
      </div>
    </div>
  );
}

export default Projects;
