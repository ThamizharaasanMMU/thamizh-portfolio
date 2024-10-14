import './styles/portfolio.css';
import { NavLink } from 'react-router-dom';
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
                    <NavLink to="https://github.com/ThamizharaasanMMU/e-Student-Card-For-Biometrics-Attendance-System" target="_blank"><img className='img-container' src={project_1} alt="FYP Project" height={"229px"} width={"100%"} /></NavLink>

                </div>

                <div className="project" id="project-2">
                    <NavLink to="https://github.com/ThamizharaasanMMU/Training-Provider-Management-System" target="_blank"><img className='img-container' src={project_2} alt="Project2" height={"229px"} width={"100%"} /></NavLink>
                    

                </div>

                <div className="project" id="project-3">
                    <NavLink to="https://drive.google.com/file/d/1ae6kypnbOvdVJuo4Ax2OC8LFL4TDpKLR/view?usp=sharing" target="_blank">
                    <img className='img-container' src={project_3} alt="Project3" height={"229px"} width={"100%"} />

                    </NavLink>
                    

                </div>

                <div className="project" id="project-4">
                    <NavLink to="https://github.com/ThamizharaasanMMU/Donation-Management-System" target="_blank" >
                    <img className='img-container' src={project_4} alt="Project4" height={"229px"} width={"100%"} />

                    </NavLink>
                    

                </div>

                <div className="project" id="project-5">
                <NavLink to="https://github.com/ThamizharaasanMMU/Course-Management-System" target="_blank" >
                    <img className='img-container' src={project_5} alt="Project5" height={"229px"} width={"100%"} />

                    </NavLink>

                </div>

                <div className="project" id="project-6">
                <NavLink to="https://github.com/ThamizharaasanMMU/MCQ-Quiz-Maker" target="_blank" >
                    <img className='img-container' src={project_6} alt="Project6" height={"229px"} width={"100%"} />

                    </NavLink>

                </div>


            </div>
        </div>
        
    );
}
 
export default Portfolio;