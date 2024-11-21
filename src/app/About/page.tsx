import Link from "next/link";

import "../style/about.css";
import Image from "next/image";
export default function About() {
  return (
    <div className="about-container">
      
      <div className="about-text">
        <h1 className="about-title  ">About Me</h1>
        <p className="about-description">
          As a passionate and detail-oriented Web Developer, I specialize in HTML , CSS,<br/> Javascipt , Next.js , and Tailwind CSS. I deliver tailored solutions that meet client&apos;s<br/>unique needs my passion lies in merging creativity with technical precision, ensuring <br/>elegant, efficient, and scalable web applications.Let &apos;s collaborate to bring your vision to life!
        </p>
      </div>
      <div>
        <h1 className="about-title1">My Skills</h1>
        </div>

        <div>
          {/* skills */}
        <div className="about-skill1">
          <h1>HTML</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, natus.</p>
        </div>
        <div className="about-skill2">
          <h1>CSS</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, vero! </p>
        </div>

        <div className="about-skill3">
          <h1>Typscript</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, natus.</p>
        </div>
        <div className="about-skill4">
          <h1>Next.js</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, fugit. </p>
        </div>

</div>

      <div className="about-image-container">
        <Image
          src="/pink laptop.jpg"
          alt="portfolio image"
          layout="responsive"
          width={350}
          height={350}
          className="about-image"
        />
      </div>

    
      
    </div>
  );
} 