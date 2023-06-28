import classes from './Header.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faListCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };

   return (
        <>
            <div className={classes.header}>
                <div className={classes["header-logo"]}>
                    <FontAwesomeIcon icon={faListCheck} />
                    <h1>Taskify</h1>
                </div>
                <FontAwesomeIcon icon={isOpen ? faXmark : faBarsStaggered} className={isOpen ? classes.faXmark : classes.faBarsStaggered} onClick = {handleOpenMenu}/>
            </div>
            {isOpen ? <div className={classes["header-links"]}>
                <div className={classes["nav-links-central"]}>
                    <NavLink to="/" activeClassName={classes.active} className={classes.link} onClick = {handleOpenMenu}>Home</NavLink>
                    <NavLink to="/about" activeClassName={classes.active} className={classes.link} onClick = {handleOpenMenu}>About</NavLink>
                    <NavLink to="/contact" activeClassName={classes.active} className={classes.link} onClick = {handleOpenMenu}>Contact</NavLink>
                </div>
                <div className={classes["nav-links-right"]}>
                    <NavLink to="/login" activeClassName={classes.active} className={classes.link} onClick = {handleOpenMenu}>Login</NavLink>
                    <NavLink to="/signup" activeClassName={classes.active} className={classes.link} onClick = {handleOpenMenu}>Sign Up</NavLink>
                </div>
                <div className={classes.contactIcons}>
                    <FontAwesomeIcon icon={faFacebook} className={classes.faFacebook} />
                </div>
            </div> : null}
        </>


    );
}

export default Header;