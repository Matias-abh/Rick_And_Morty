import { Link } from "react-router-dom";
// import Card from "../Card/Card";

import css from './home.module.css';
import imgIntro from '../../img/LOGOtitle.png';

const Home = () => {
    return (
        <>
            <nav className={css.contLinks}>                  
                    <Link to='/cositas' className={css.contLinks__link}>Cositas</Link>                   
                    <Link to='/cositas' className={css.contLinks__link}>Más cositas</Link>                                 
                    <Link to='/cositas' className={css.contLinks__link}>Otras cositas</Link>  
                    <Link to='/characters' className={`${css.contLinks__link}`}>All characters</Link>                                 
                    <Link to='/cositas' className={css.contLinks__link}>Más cositas</Link>                                 
            </nav>            

            <div className={css.contIntro}>
                <div className={css.divIntroPortal}>                    
                    <img src={imgIntro} className={css.contIntro__imgTitle}/>
                </div>
            </div>
            <div className={css.contBG}></div>
        </>
    )
};

export default Home;