import classes from "./Signup.module.css";
import SignUpImage from "../../assets/images/image1.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className={classes.SignUp}>
      <div className={classes.SignUpImage}>
        <img src={SignUpImage} alt="" />
      </div>
      <form>
        <input
          type="text"
          placeholder="Introduce your username"
          name="username"
        />
        <input type="email" placeholder="Introduce your email" name="email" />
        <input
          type="password"
          placeholder="Introduce your password"
          name="password"
        />
        <label htmlFor="remember">
          <input type="checkbox" name="remember" />
          Remember me
        </label>
        <button type="submit">Log In</button>
        <p>
          Not register yet? <Link to="/signup">Sign up!</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
