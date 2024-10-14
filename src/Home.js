import './styles/home.css';
import { NavLink } from 'react-router-dom';
import trapezium from './images/Rectangle 1.png'

const Home = () => {
    return ( 

        <div className="homePage">
            <div class="trapezium">
                <img id="rect-trapezium" src={trapezium} alt="trapezium" />
            </div>

            <div id="profile">
                {/* <!-- <img src="images/TMZimg-removebg.png" alt="Profile Picture" style="height: 100%; width: 100%; object-fit: cover; border-radius: 5%; " > --> */}
            </div>


            <div id="smallProfile">

            </div>



            <div id="introText">
                <h1 style={{color: "#ffb404"}}>I'M THAMIZHARAASAN.</h1>
                <h1 style={{marginTop: "-10px"}}>software engineer</h1>
                

                <p>I am passionate about using my skills to drive innovation and deliver results. With a strong foundation in
                    programming and a solid understanding of the software development life cycle, I am a quick learner with a
                    constant zeal to learn and grow. I have excellent problem-solving and communication skills and thrive in
                    collaborative team environments. I am now seeking opportunities to apply my expertise and contribute to the
                    success of a dynamic organization.
                    </p>

                <br /><br />
                <NavLink to="/about" id="moreBtn"><h3>more about me</h3><i class='bx bxs-right-arrow-alt' style={{color:"#fffefe", fontSize: "48px"}}></i></NavLink>

            </div>




        </div>


    );
}
 
export default Home;