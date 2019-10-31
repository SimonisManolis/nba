import React from 'react';
import style from './sideNav.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faVideo, faNewspaper, faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons' 

/*<div className={style.option}>
           <Link to='/'>
                <FontAwesomeIcon className={style.option_icon} icon={faHome}/>
                Home
           </Link>
           
       </div>*/

const items = [
    {
        type: style.option,
        icon: faHome,
        classIcon: style.option_icon,
        link: '/',
        text: 'Home'
    },

    {
        type: style.option,
        icon: faNewspaper,
        classIcon: style.option_icon,
        link: '/news',
        text: 'News'
    },

    {
        type: style.option,
        icon: faVideo,
        classIcon: style.option_icon,
        link: '/videos',
        text: 'Videos'
    },

    {
        type: style.option,
        icon: faSignInAlt,
        classIcon: style.option_icon,
        link: '/sign-in',
        text: 'Sign - In'
    },

    {
        type: style.option,
        icon: faSignOutAlt,
        classIcon: style.option_icon,
        link: '/sign-out',
        text: 'Sign-out'
    }
]    


const showItems = () =>{
    return items.map( (item,i) => {
        return (
            <div key={i} className={item.type}>
                <Link to={item.link}>
                    <FontAwesomeIcon className={item.classIcon} icon={item.icon}/>
                    {item.text}
                </Link>
            
            </div> 
        )
    })
}

const sideNavItems = () =>{
    return (
       showItems()
    )
}

export default sideNavItems;