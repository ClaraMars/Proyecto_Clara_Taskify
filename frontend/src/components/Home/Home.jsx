import classes from "./Home.module.css";
import HomeImage from "../../assets/images/image3.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
   <>
   <div className={classes.home}>
      <div className={classes["home-text"]}>
         <h1>Simplify your life, achieve your balance!</h1>
         <h3>Discover our task list app, designed to simplify your life and help you efficiently manage your daily activities.</h3>
         <div className={classes["home-buttons"]}>
            <button>Schedule A Demo</button>
            <button><Link to="/signup">Sign Up</Link></button>
         </div>
      </div>
      <div className={classes["home-image"]}>
         <img src={HomeImage} alt="Team working" />
      </div>
   </div>
   <div className={classes["home-features"]}>
      <div className={classes["home-features-text"]}>
         <h1>Features</h1>
         <h3>Discover our task list app, designed to simplify your life and help you efficiently manage your daily activities.</h3>
      </div>
      <div className={classes["home-features-cards"]}>
         <div className={classes["home-features-card"]}>
            <h1>Task List</h1>
            <h3>Discover our task list app, designed to simplify your life and help you efficiently manage your daily activities.</h3>
         </div>
         <div className={classes["home-features-card"]}>
            <h1>Task List</h1>
            <h3>Discover our task list app, designed to simplify your life and help you efficiently manage your daily activities.</h3>
         </div>
      </div>
   </div>
   </>
  );
};

export default Home;
