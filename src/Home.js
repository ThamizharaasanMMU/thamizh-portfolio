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
                

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <br /><br />
                <NavLink to="/about"><h3>more about me</h3><i class='bx bxs-right-arrow-alt' style={{color:"#fffefe", fontSize: "48px"}}></i></NavLink>

            </div>




        </div>


    );
}
 
export default Home;