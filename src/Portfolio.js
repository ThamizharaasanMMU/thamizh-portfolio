import './styles/portfolio.css';
import project_1 from './images/project_1.png';
import project_2 from './images/project_2.png';
import project_3 from './images/project_3.png';
import project_4 from './images/project_4.png';
import project_5 from './images/project_5.png';
import project_6 from './images/project_6.png';


const Portfolio = () => {
    return ( 
        <div className="portfolioPage">

            <h1 id="about">My <tmz>Portfolio</tmz></h1>


            <div className="projects-rectangle">

                <div className="project" id="project-1">
                    <img className='img-container' src={project_1} alt="FYP Project" height={"229px"} width={"100%"} />

                </div>

                <div className="project" id="project-2">
                    <img className='img-container' src={project_2} alt="Project2" height={"229px"} width={"100%"} />

                </div>

                <div className="project" id="project-3">
                    <img className='img-container' src={project_3} alt="Project3" height={"229px"} width={"100%"} />

                </div>

                <div className="project" id="project-4">
                    <img className='img-container' src={project_4} alt="Project4" height={"229px"} width={"100%"} />

                </div>

                <div className="project" id="project-5">
                    <img className='img-container' src={project_5} alt="Project5" height={"229px"} width={"100%"} />

                </div>

                <div className="project" id="project-6">
                    <img className='img-container' src={project_6} alt="Project6" height={"229px"} width={"100%"} />

                </div>


            </div>
        </div>
        
    );
}
 
export default Portfolio;