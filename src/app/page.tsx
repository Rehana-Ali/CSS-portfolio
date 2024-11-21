import Link from "next/link";

import Image from "next/image";
export default function Home() {
  return (
    <div className="home-container">
      <div className="home-text home-text-left">
        <h1>Hello,</h1>
        <h1 className="home-title ">
           I&apos;m <span>Rehana Ali</span></h1>
        <h2 className="home-title">I&apos;m <span>Web Developer &</span></h2>
        <h2 className="home-title"> Web Designer</h2>
        <p className="home-description">
         I&apos;m a passionate Web Developer <br/>dedicated to delevering exceptional <br/>digital experiences.
        </p>
        <div className="home-buttons">
          <button className="button-pink">
            <a href="/Projects">Explore My Work</a>
          </button>
          <button className="button-white">
            <a href="/Contact">Contact Me</a>
          </button>
        </div>
      </div>

      <div className="home-image-container">
        
       <Image
          src="/pink laptop.jpg"
          alt="portfolio"
          layout="responsive"
          width={400}
          height={300}
          className="home-image"
        /> 
      </div>
      
    </div>
  );
}
   