import React from 'react';
import style from './cardInfo.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const teamName = (teams,team) =>{
 let data = teams.find((item)=>{
     return item.id === team
 });
 if(data){
     return data.name
 }
}

const cardInfo = (props) => {
    return(
        <div className={style.cardInfo}>
            <span className={style.teamName}>
                {teamName(props.teams,props.team)}
            </span>
            <span className={style.date}>
                {props.date}
                <FontAwesomeIcon  icon={faCalendar}/>
            </span>
            
        </div>
    )
}
export default cardInfo;

