import './styles/about.css';
import { useEffect, useState } from 'react';

const AboutMe = () => {



    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const [last_rect, setLastRect] = useState(0);
    const [first_rect, setFirstRect] = useState(0);
    const [rect, setRect] = useState(0);
    const [personalDivLength, setPersonalDivLength] = useState(0);
    const [specialRecDivLength, setSpecialRecDivLength] = useState(0);


    const handleResize = () => {
        setWindowSize(window.innerWidth);
        setLastRect(document.getElementById("js-skill").getBoundingClientRect().right);
        setFirstRect(document.getElementById("html-skill").getBoundingClientRect().left);
        setRect(document.getElementById("css-skill").getBoundingClientRect().right);
        setPersonalDivLength(document.getElementById("personal").clientWidth);
        setSpecialRecDivLength(document.getElementById("rectangle-1").clientWidth*2);
    }

    useEffect(() => {

        setLastRect(document.getElementById("js-skill").getBoundingClientRect().right);
        setFirstRect(document.getElementById("html-skill").getBoundingClientRect().left);
        setRect(document.getElementById("css-skill").getBoundingClientRect().right);
        setPersonalDivLength(document.getElementById("personal").clientWidth);
        setSpecialRecDivLength(document.getElementById("rectangle-1").clientWidth*2);
        if (windowSize >= 991) {
            document.getElementById("skill-circles").style.marginLeft =  ((windowSize-last_rect)/2)-(first_rect/2) + "px";

        }
        
        window.addEventListener('resize', handleResize);

        
        return() => {
            window.removeEventListener('resize', handleResize);
        }
    }, [first_rect, last_rect, windowSize, rect, personalDivLength, specialRecDivLength]);


    return (
        <div className="aboutPage">
            <h1 id="about">about <tmz>me</tmz></h1>
             
            <div id="title-1" style={{paddingLeft : windowSize < 991 && `${((windowSize-personalDivLength)/2) }px`}}><h3 id="personal-info">personal infos</h3></div>
            <div id="section-1">
                <div id="personal">      
                    <div className="info-container" id="info-container" style={{paddingLeft : windowSize < 991 && `${((windowSize-personalDivLength)/2)}px` }}>
                        <div className="item"><infos>First Name :</infos> Thamizharaasan</div>
                        <div className="item"><infos>Address :</infos> Langkap, Perak</div>
                        <div className="item"><infos>Last Name :</infos> Chandran</div>
                        <div className="item"><infos>Phone :</infos> 019-5521627</div>
                        <div className="item"><infos>Age :</infos> 22</div>
                        <div className="item"><infos>Email :</infos> thamizharaasan51@gmail.com</div>
                        <div className="item"><infos>Nationality :</infos> Malaysian</div>
                        <div className="item"><infos>Language : </infos> Malay, English, Tamil</div>
                        <div className="item"><infos>University :</infos> Multimedia University (MMU) Cyberjaya</div>
                        <div className="item"><infos>Degree : </infos> Bachelor of Computer Science (Honours) Specialization in Software Engineering</div>
                        <div id="download-btn"><a href="https://drive.google.com/uc?export=download&id=1qEac1zpl5i6nlKPI9znlj_EiYi60M7-q" download="Thamizh-Resume.pdf"><h3>Download CV</h3><i className='bx bxs-download' style={{color:"#fffefe", fontSize: "36px"}}></i></a></div>     
                    </div>
                </div>

                <div className="special-recognition" id="special-recognition" style={{paddingLeft : windowSize < 991 && `${((windowSize-(specialRecDivLength+32))/2)}px`}}>

                    <div id="row-1">
                        <div className="special-recognition-items" id="rectangle-1">
                            <h3 className="highlight"><tmz>YTM</tmz></h3><h4 className="additional-item">Future Leaders Scholar</h4>
                        </div>
                
                        <div className="special-recognition-items" id="rectangle-2">
                            <h3 className="highlight"><tmz>1st class</tmz></h3><h4 className="additional-item">Degree Holder</h4>
                        </div>
                    </div>

                    <div id="row-2">
                        <div className="special-recognition-items" id="rectangle-3">
                            <h3 className="highlight"><tmz>Dean's List</tmz></h3><h4 className="additional-item">Award Recipient</h4>
                        </div>
                
                        <div className="special-recognition-items" id="rectangle-4">
                            <h3 className="highlight"><tmz>SPM 2019</tmz></h3><h4 className="additional-item">Best Student</h4>    
                        </div>

                    </div>


                </div>

            </div>

            <hr />

            
            <div id="title-2"><h3 id="skills-info">my skills</h3></div>
            <div id="section-2">
                <div className="skill-circles" id="skill-circles" style={{marginLeft: windowSize >= 991 ? `${((windowSize - last_rect) / 2) - (first_rect / 2)}px` : `${((windowSize-rect)/2)}px`}} >
                    <div className="skill-circle" id="html-skill">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="skill-icon"><i className='bx bxl-html5'></i></div>
                        <div className="skill-text">HTML</div>
                    </div>
                    <div className="skill-circle" id="css-skill">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-2" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="skill-icon"><i className='bx bxl-css3'></i></div>
                        <div className="skill-text">CSS</div>
                    </div>
                    <div className="skill-circle">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-2" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="skill-icon"><i className='bx bxl-php' style={{color:"#ffffff"}} ></i></div>
                        <div className="skill-text">PHP</div>
                    </div>
                    <div className="skill-circle" id="js-skill">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-2" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="skill-icon"><i className='bx bxl-javascript' style={{color:"#ffffff"}} ></i></div>
                        <div className="skill-text">JavaScript</div>
                    </div>
                    <div className="skill-circle">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-2" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="skill-icon"><i className='bx bxl-react' style={{color:"#ffffff"}} ></i></div>
                        <div className="skill-text">React</div>
                    </div>
                    <div className="skill-circle">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-2" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="skill-icon"><i className='bx bx-code-alt' style={{color:"#ffffff"}}  ></i></div>
                        <div className="skill-text">Laravel</div>
                    </div>
                    <div className="skill-circle">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-2" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="skill-icon"><i className='bx bxl-flutter' style={{color:"#ffffff"}} ></i></div>
                        <div className="skill-text">Flutter</div>
                    </div>
                    <div className="skill-circle">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-2" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="skill-icon"><i className='bx bxl-nodejs' style={{color:"#ffffff"}}></i></div>
                        <div className="skill-text">Node.js</div>
                    </div>
                </div>
                

            </div>

            <hr />



            <div id="title-3"><h3 id="education-info">Experience & Education</h3></div>

            <div id="section-3">
                <div className="experiences">
                    <div className="experience">
                        <div className="experience-icon"><i className='bx bxs-briefcase' style={{color:"#fffdfd"}}></i>
                            <div className="line"></div>
                        </div>
                        <div className="experience-period">July 2023 - October 2023</div>
                        <div className="experience-position">Web Developer</div>
                        <div className="experience-company">Asian Football Confederation (AFC)</div>
                        <div className="experience-description">Contributed to standardizing PDF reports by
                                                                implementing consistent layouts, headers,
                                                                and footers for various tournaments using
                                                                the Laravel framework.</div>
                    </div>
                    {/* <!-- UPCOMING EXPERIENCES -->
                    <!-- <div className="experience">
                        <div className="experience-icon"><i className='bx bxs-briefcase' style='color:#fffdfd'></i>
                            <div className="line"></div>
                        </div>
                        <div className="experience-period">July 2023</div>
                        <div className="experience-position">Software Engineer</div>
                        <div className="experience-company">ABC Company</div>
                        <div className="experience-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit</div>
                    </div> --> */}
                </div>

                <div className="educations">
                    <div className="education">
                        <div className="education-icon"><i className='bx bxs-graduation' style={{color:"#ffffff"}}></i>
                            <div className="line"></div>
                        </div>
                        <div className="education-period">2015 - 2019</div>
                        <div className="education-position">Secondary School</div>
                        <div className="education-institution">Sekolah Menengah Sains Teluk Intan (SEMESTI)</div>
                        <div className="experience-description">SPM 8A+, 1A-</div>
                    </div>
                    <div className="education">
                        <div className="education-icon"><i className='bx bxs-graduation' style={{color:"#ffffff"}}></i>
                            <div className="line"></div>
                        </div>
                        <div className="education-period">2020 - 2021</div>
                        <div className="education-position">Foundation in IT</div>
                        <div className="education-institution">Multimedia University (MMU) Cyberjaya</div>
                        <div className="experience-description">CGPA 3.69</div>
                    </div>
                    <div className="education">
                        <div className="education-icon"><i className='bx bxs-graduation' style={{color:"#ffffff"}}></i>
                            <div className="line"></div>
                        </div>
                        <div className="education-period">2021 - 2024</div>
                        <div className="education-position">BACHELOR OF COMPUTER SCIENCE (HONOURS) (SOFTWARE ENGINEERING)</div>
                        <div className="education-institution">Multimedia University (MMU) Cyberjaya</div>
                        <div className="experience-description">CGPA 3.76</div>
                    </div>
                </div>

            </div>

        </div>

    
    );
}
 
export default AboutMe;