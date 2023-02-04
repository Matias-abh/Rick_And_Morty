import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

import css from './navBar.module.css';
import logoNav from '../../img/LOGOtitle22.png';

const NavBar = () => {
    return (
        <>
            <div className={css.container}>
                <div className={css.contLogo}>
                    <Link to='/'>
                        <img src={logoNav} alt='logo' className={css.logoNav}/>
                    </Link>
                </div>
                <div className={css.navIndex}>
                    <Link className={css.nav__link} to="/">Home</Link>
                    <Link className={css.nav__link} to="/characters">Characters</Link>
                    <Link className={css.nav__link} to="/favorites">Favorites</Link>
                    <Link className={css.nav__link} to="/about">About</Link>
                    <Link className={css.nav__link} to="/login">Login</Link>
                </div>
                {/* <Link to='/form' onClick={logout} className={styles.nav__link} >Login</Link> */}
                <div>
                    <SearchBar />
                </div>    
            </div>

        </>
    )
};

export default NavBar;