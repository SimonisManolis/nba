import React from 'react';
import style from './cardInfo.module.css';
import moment from 'moment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const teamName = (teams,team) =>{
 let data = teams.find((item)=>{
     return item.teamId === team
 });
 if(data){
     return data.name
 }
}

const formDate = (date) =>{
    return moment(date).format(' DD-MM-YYYY');
}

const cardInfo = (props) => {
    return(
        <div className={style.cardInfo}>
            <span className={style.teamName}>
                {teamName(props.teams,props.team)}
            </span>
            <span className={style.date}>
                <FontAwesomeIcon  icon={faCalendar}/>
                {formDate(props.date)}
            </span>
            
        </div>
    )
}
export default cardInfo;

