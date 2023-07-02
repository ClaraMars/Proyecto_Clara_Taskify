import classes from './Login.module.css';
import LoginImage from "../../assets/images/image1.png"

const Login = () => {
   return (
       <div className={classes.login}>
            <img src={LoginImage} alt="" />
           <form>
                <input type="text" placeholder="Introduce your email" name="email"/>
                <input type="password" placeholder="Introduce your password" name="password"/>
                <label htmlFor='remember'>
                    <input type="checkbox" name="remember"/>
                    Remember me
                </label>
                <button type="submit">Log In</button>
                <p>Forgot password? Recuperar contraseña falta etiqueta a</p>
           </form>
       </div>
    );
}

export default Login;