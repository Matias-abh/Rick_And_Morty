import { Link } from "react-router-dom";
// import Card from "../Card/Card";

import css from './home.module.css';
import imgIntro from '../../img/LOGOtitle.png';

const Home = () => {
    return (
        <>
            <div className={css.containerLinks}>                  
                    <Link to='/cositas' className={css.containerLinks__link}>Cositas</Link>                   
                    <Link to='/cositas' className={css.containerLinks__link}>Más cositas</Link>                                 
                    <Link to='/cositas' className={css.containerLinks__link}>Otras cositas</Link>  
                    <Link to='/characters' className={`${css.containerLinks__link}`}>All characters</Link>                                 
                    <Link to='/cositas' className={css.containerLinks__link}>Más cositas</Link>                                 
            </div>
            <div className={css.contSlides}>
                <div className={css.contSlides__contIntro}>
                    <div className={css.containerIntro}>
                        <img src={imgIntro} className={css.containerIntro__img}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;