import React from "react";
import Me from "../assets/Me.jpg";

export default function Home() {
  return (
    <section className="home">
      {/* Profile Section */}
      <img src={Me} alt="Profile" className="avatar" />
      <h1>Tseko Ntsoele</h1>
      <p className="lead">
        Hello! I am a web developer Studying React and modern JavaScript at Limkokwing university.
      </p>

      {/* Education and Skills Grid */}
      <div className="grid">
        <section>
          <h2>Education</h2>
          <p>BSc in Information Technology</p>
          <p>LGCSE</p>
          <p>Grade 7 certificate</p>
        </section>

        <section>
          <h2>Skills</h2>
          <ul className="tags">
            <li>JavaScript</li>
            <li>React</li>
            <li>CSS</li>
            <li>Node.js</li>
            <li>Mysql</li>
          </ul>
        </section>
      </div>

      
      {/* NEW SECTION: About Us Card */}
      <div className="main-content">
        <div className="card">
          
          <div className="info-section">
            <div className="info-item">
              <h3>Hobbies</h3>
              <ul>
                <li>Painting</li>
                <li>Dancing</li>
                <li>Traveling</li>
              </ul>
            </div>
            <div className="info-item">
              <h3>Experience</h3>
              <ul>
                <li>Studying abroad</li>
                <li>Public speaking</li>
                <li>Graduating from university</li>
              </ul>
            </div>
            <div className="info-item">
              <h3>Achievement</h3>
               <ul>
                <li>Winning a tournament</li>
                <li>Completing a book</li>
                <li>Mentoring others</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Container */}
      <div className="cards-container">
        {/* CODE Card */}
        <div className="card code">
          <div className="card-header">Qualifications</div>
          <div className="card-content">
             <ul>
                <li>Cisco Certified Network Associate (CCNA)</li>
                <li>Google Cloud Certification</li>
                <li>Hackathon Certificate</li>
              </ul>
          </div>
        </div>

        {/* CSS3 Card */}
        <div className="card css3">
          <div className="card-header">Address</div>
          <div className="card-content">
             <ul>
                <li>Box Nyakosobe 182</li>
                <li>Roma, Maseru</li>
                <li>Lesotho</li>
              </ul> 
          </div>
        </div>

        {/* HTML5 Card */}
        <div className="card html5">
          <div className="card-header">Languges</div>
          <div className="card-content">
            <ul>
                <li>Sesotho</li>
                <li>English</li>
                <li>Setswana</li>
              </ul> 
          </div>
        </div>

        {/* JS Card */}

      </div>


      {/* Footer */}
      <footer>
        <p>Copyright. All rights reserved &copy; 2025 Roma,Maseru,Lesotho</p>
      </footer>
    </section>
  );
}