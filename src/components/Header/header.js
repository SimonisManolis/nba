import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom'; 

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const logo = () => {
        return(
            <Link to="/" className={style.logo}>
               <img alt="nba logo" src="/images/nba_logo.png"/>
            </Link>
        )
    }

    const navBars = () => {
        return(
            <div>
                <FontAwesomeIcon icon={faBars}
                    style={{
                        color: '#dfdfdf',
                        padding:  '10px',
                        cursor: 'pointer'
 
                    }}
                />
            </div>
        )
    }

    return (
        
        <header className={style.header}>
            <div className={style.header__opt}>
                {navBars()}
                {logo()}

            </div>
            
        </header>
        
    )
}

export default Header;