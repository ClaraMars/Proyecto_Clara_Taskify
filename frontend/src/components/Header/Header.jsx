import classes from './Header.module.css';
import Logo from '../../assets/images/logo.png';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        const scrolled = currentScroll > 0;
        setScrolled(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [scrolled]);

   return (
        <>
            <div className={`${classes.header} ${scrolled ? classes.scrolled : ""}`}>
                <div className={classes["header-logo"]}>
                    <Link to="/">
                    <img src={Logo} alt="Logo" className={classes.logo}/>
                    <h2>Taskify</h2>
                    </Link>
                </div>
                <div className={classes["header-links"]}>
                    <NavLink to="/" activeClassName={classes.active} >Home</NavLink>
                    <NavLink to="/about" activeClassName={classes.active} >About us</NavLink>
                    <NavLink to="/contact" activeClassName={classes.active} >Contact</NavLink>
                </div>
                <div className={classes["header-login"]}>
                    <NavLink to="/login" activeClassName={classes.active} className={classes.login}>Login</NavLink>
                    <NavLink to="/signup" activeClassName={classes.active} className={classes.signup}>Sign Up</NavLink>
                </div>

                <FontAwesomeIcon icon={isOpen ? faXmark : faBarsStaggered} className={isOpen ? classes.faXmark : classes.faBarsStaggered} onClick = {handleOpenMenu}/>
            </div>

            {isOpen ? (<div className={`${classes["header-menu"]} ${scrolled ? classes.scrolled : ""}`}>
                <div className={classes["nav-links-central"]}>
                    <NavLink to="/" className={classes.link} onClick = {handleOpenMenu}>Home</NavLink>
                    <NavLink to="/about" className={classes.link} onClick = {handleOpenMenu}>About</NavLink>
                    <NavLink to="/contact" className={classes.link} onClick = {handleOpenMenu}>Contact</NavLink>
                </div>
                <div className={classes["nav-links-right"]}>
                    <NavLink to="/login" className={classes.link} onClick = {handleOpenMenu}>Login</NavLink>
                    <NavLink to="/signup" className={classes.link} onClick = {handleOpenMenu}>Sign Up</NavLink>
                </div>
                <div className={classes["contact-icons"]}>
                    <span className={classes.icons}>
                        <span><FontAwesomeIcon icon={faFacebookF} /></span>
                    </span>
                    <span className={classes.icons}>
                        <span><FontAwesomeIcon icon={faInstagram} /></span>
                    </span>
                    <span className={classes.icons}>
                        <span><FontAwesomeIcon icon={faTwitter} /></span>
                    </span>
                </div>
            </div>) : null}
        </>


    );
}

export default Header;