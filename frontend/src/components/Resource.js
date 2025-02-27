import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Resource.css";
import logo from "../assets/logo.png";



const Resource = () => {
  return (
    <>
      <Header />
      <div className="instructions-container">
      <div className="header-logo">
        <img src={logo} alt="Logo" width="200" /> {/* Adjust the width as needed */}
      </div>
        <h1 className="instructions-title">Faves Remedies Resources</h1>
        <p className="instructions-description">
          Empower your teaching journey with valuable insights and resources to 
          effectively support children with autism. Explore our instructional videos, teaching tips, and understanding autism below.
        </p>

        {/* Autism Introduction Section */}
        <div className="autism-intro">
          <h2 className="autism-title">Understanding Autism Spectrum Disorder (ASD)</h2>
          <p className="autism-description">
            Autism Spectrum Disorder (ASD) is a complex neurodevelopmental condition that affects how individuals perceive the world and interact with others. Children with autism may exhibit differences in communication, social interaction, and behavior, which can vary significantly from one individual to another.
          </p>
          <div className="autism-signs-card">
          <div className="autism-signs-title">Common Signs of Autism</div>
          <ul className="autism-signs-list">
            <li>Challenges with verbal and non-verbal communication</li>
            <li>Difficulties with social interactions and forming relationships</li>
            <li>Repetitive behaviors, such as hand-flapping or insistence on sameness</li>
            <li>Strong interest in specific topics or activities</li>
          </ul>
        </div>


          <p className="autism-diagnosis">
            Early diagnosis and intervention are crucial for maximizing the potential of children with autism. If you suspect a child may have ASD, seek professional advice to begin the assessment and support process.
          </p>
        </div>

        {/* Videos Section */}
        <div className="videos-section">
          <h2 className="videos-title">Instructional Videos</h2>
          <div className="video-grid">
            <div className="video-card">
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/example1"
                title="Understanding Autism and Teaching Strategies"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="video-description">Understanding Autism and Teaching Strategies</p>
            </div>
            <div className="video-card">
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/example2"
                title="Creating Engaging Learning Environments"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="video-description">Creating Engaging Learning Environments</p>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="tips-section">
          <h2 className="tips-title">Key Teaching Tips</h2>
          <ul className="tips-list">
            <li>Establish routines to create a sense of stability.</li>
            <li>Use visual aids and clear instructions.</li>
            <li>Incorporate sensory-friendly tools into lessons.</li>
            <li>Encourage social interaction through structured activities.</li>
            <li>Provide consistent positive reinforcement to build confidence.</li>
            <li>Break tasks into smaller, manageable steps.</li>
            <li>Allow for flexibility and understanding of individual needs.</li>
          </ul>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Resource;



