import "../style/projects.css";
import Image from "next/image";
export default function Projects() {
    return (
        <div className="projectContainer">
            <h1 className="homes-title">My Projects</h1>

            <div className="projectItem">
                <Image
                    src="/calculator.png"
                    alt="Calculator Project"
                    width={350}
                    height={350}
                    className="projectImage"
                />
                <p className="projectDescription">
                A functional and responsive calculator built using HTML,CSS and JavaScript .This calculator performs basic arithmatic operations such as addition, sudtraction, multiplicationand division.
                    <a href="https://html-css-calculator-zeta.vercel.app//" className="underline text-blue-400">
                        <i className="fas fa-link text-3xl"></i>
                    </a>
                </p>
            </div>

            <div className="projectItem">
                <Image
                    src="/resume tamplet.png"
                    alt="Portfolio Project"
                    width={350}
                    height={350}
                    className="projectImage"
                />
                <p className="projectDescription">
                A visually appealing and intractive static resume built using HTML, CSS and JavaScript. This resume showcases my skills , experience and education in a clean and organised manner. 
                    <a href="https://hackathone-milestone12.vercel.app/" className="underline text-blue-400">
                        <i className="fas fa-link text-3xl"></i>
                    </a>
                </p>
            </div>

            <div className="projectItem">
                <Image
                    src="/rehana figma website.png"
                    alt="Portfolio Project"
                    width={350}
                    height={350}
                    className="projectImage"
                />
                <p className="projectDescription">
                Experience precision and perfection with my Figma-designed website, crafted to deliver a seamless user experience.Every pixal is meticulously placed to ensure a visually stunng and highly functional online presence. 

                    <a href="https://www.linkedin.com/posts/rehana-ali-3a26272bb_typscript-javascript-python-activity-7263473606418915330-qeqd?utm_source=share&utm_medium=member_desktop/" className="underline text-blue-400">
                    
                        <i className="fas fa-link text-3xl"></i>
                    </a>
                </p>
            </div>

            <div className="projectItem">
                <Image
                    src="/Screenshot 2024-11-16 000113.png"
                    alt="Portfolio Project"
                    width={350}
                    height={350}
                    className="projectImage"
                />
                <p className="projectDescription1">
                Instantly customise your proffesional profile with this fully editable resume template, designed to help you stand out in today&apos;s competitive job market.
                
                    <a href="https://hackathone-milestone4-delta.vercel.app/" className="underline text-blue-400">
                        <i className="fas fa-link text-3xl"></i>
                    </a>
                </p>
            </div>

            {/* <div className="projectItem"> </div> */}
            

            


 
    </div>
  );
}
Projects