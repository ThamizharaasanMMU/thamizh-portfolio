import { NavLink } from "react-router-dom";
const Navbar = () => {

    const menuBtnHandle = () => {
        document.getElementById('smallNavbar').style.marginLeft = 0;
        document.getElementById('menuBtn').style.display = 'none';
        document.getElementById('backBtn').style.display = 'inline';  
        document.body.style.overflow = 'hidden';
    }

    const backBtnHandle = () => {
        document.getElementById('smallNavbar').style.marginLeft = -101 + 'vw';
        document.getElementById('menuBtn').style.display = 'inline';
        document.getElementById('backBtn').style.display = 'none';  
        document.body.style.overflow = 'auto';  
    }

    return ( 
        <div className="navigation_bar">

            <div id="menuIcon">
                    <button onClick={menuBtnHandle} id="menuBtn"><i class='bx bx-menu bx-rotate-180' style={{color:"#ffffff"}}></i></button>
                    <button onClick={backBtnHandle} id="backBtn"><i class='bx bx-x' style={{color:"#ffffff"}}></i></button>

            </div>
            
            <ul id="navbar">
                <NavLink to="/thamizh-portfolio"><li id="home-page"><h2>Home</h2><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(243, 238, 238, 1)"}}><path d="M12.74 2.32a1 1 0 0 0-1.48 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1 1 1 0 0 0-.26-.68z"></path></svg></li></NavLink>
                <NavLink to="/about"><li id="about-page"><h2>About</h2><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(243, 238, 238, 1)"}}><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path></svg></li></NavLink>
                <NavLink to="/portfolio"><li id="portfolio-page"><h2>Portfolio</h2><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(243, 238, 238, 1)"}}><path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z"></path></svg></li></NavLink>
                <NavLink to="/contact"><li id="contact-page"><h2>Contact</h2><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(243, 238, 238, 1)"}}><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg></li></NavLink>
                <NavLink to="https://www.youtube.com/watch?v=xvFZjo5PgG0"><li id="blog-page"><h2>Blog</h2><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(243, 238, 238, 1)"}}><path d="M8.707 19.707 18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586 19.414 9 21 7.414z"></path></svg></li></NavLink>
            </ul>

            {/* small navigation bar */} 
            <div id="smallNavbar">
                <ul>
                    <NavLink onClick={backBtnHandle} to="/thamizh-portfolio"><li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M12.74 2.32a1 1 0 0 0-1.48 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1 1 1 0 0 0-.26-.68z"></path></svg><h2>Home</h2></li></NavLink>
                    <NavLink onClick={backBtnHandle} to="/about"><li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path></svg><h2>About</h2></li></NavLink>
                    <NavLink onClick={backBtnHandle} to="/portfolio"><li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z"></path></svg><h2>Portfolio</h2></li></NavLink>
                    <NavLink onClick={backBtnHandle} to="/contact"><li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg><h2>Contact</h2></li></NavLink>
                    <NavLink onClick={backBtnHandle} to="https://www.youtube.com/watch?v=xvFZjo5PgG0"><li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M8.707 19.707 18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586 19.414 9 21 7.414z"></path></svg><h2>Blog</h2></li></NavLink>
                </ul>
            </div>
        

        </div>


        
// style={{backgroundColor: "#ffb404"}}

    );
}
 
export default Navbar;