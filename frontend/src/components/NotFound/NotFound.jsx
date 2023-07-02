import classes from './NotFound.module.css';

const NotFound = () => {
   return (
       <p className={classes.notfound}>
           Something went wrong. Please try again later.
       </p>
    );
}

export default NotFound;