import React from 'react';
import style from './sideNav.module.css';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faVideo, faNewspaper, faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons' 
import {firebase} from '../../../firebase';
/*<div className={style.option}>
           <Link to='/'>
                <FontAwesomeIcon className={style.option_icon} icon={faHome}/>
                Home
           </Link>
           
       </div>*/
const sideNavItems = (props) =>{
console.log(props.user)
const items = [
    {
        type: style.option,
        icon: faHome,
        classIcon: style.option_icon,
        link: '/',
        text: 'Home',
        login:''
    },

    {
        type: style.option,
        icon: faNewspaper,
        classIcon: style.option_icon,
        link: '/news',
        text: 'News',
        login:''
    },

    {
        type: style.option,
        icon: faVideo,
        classIcon: style.option_icon,
        link: '/videos',
        text: 'Videos',
        login:''
    },
    {
        type: style.option,
        icon: faSignInAlt,
        classIcon: style.option_icon,
        link: '/dashboard',
        text: 'Dashboard',
        login:true
    },

    {
        type: style.option,
        icon: faSignInAlt,
        classIcon: style.option_icon,
        link: '/sign-in',
        text: 'Sign - In',
        login:false
    },

    {
        type: style.option,
        icon: faSignOutAlt,
        classIcon: style.option_icon,
        link: '/sign-out',
        text: 'Sign-out',
        login:true
    }
]    

const element = (item,i) =>(
    <div key={i} className={item.type}>
                <Link to={item.link}>
                    <FontAwesomeIcon className={item.classIcon} icon={item.icon}/>
                    {item.text}
                </Link>
            
    </div> 
)

const restricted = (item,i) => {
    let template = null;
    if(item.login && props.user !== null){
       if(item.link === '/sign-out'){
        template = (
            <div key={i} 
                className={item.type}
                onClick={()=>{
                    firebase.auth().signOut()
                    .then(()=>{
                       props.history.push("/") 
                    })
                }}
                >
                    <FontAwesomeIcon className={item.classIcon} icon={item.icon}/>
                    {item.text}
            </div> 
        )
       }else{
        template = element(item,i)
       }
    }

    if(!item.login && props.user === null){
        template = element(item,i)
    }
    return template;
}

const showItems = () =>{
    return items.map( (item,i) => {
        return item.login !== '' ?
            restricted(item,i)
        :     
            element(item,i)
           /*  <div key={i} className={item.type}>
                <Link to={item.link}>
                    <FontAwesomeIcon className={item.classIcon} icon={item.icon}/>
                    {item.text}
                </Link>
    
            </div> */  
        
    })
}


    return (
       showItems()
    )
}

export default withRouter( sideNavItems);