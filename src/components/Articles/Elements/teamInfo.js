import React from 'react';
import style from '../articles.module.css';

const TeamInfo = (props) =>{
    return(
        <div className={style.articleTeamHeader}>
            <div className={style.articleTeamHeader_logo}
                style={{
                    background:`url('/images/teams/${props.team.logo}')`
                }}
            >
            </div>
            <div className={style.articleTeamHeader_details}>
                <div>
                    <span>{props.team.city} {props.team.name}</span>
                </div>
                <div>
                    <strong>
                        W{props.team.stats[0].wins} - L{props.team.stats[0].defeats}
                    </strong>
                </div>
            </div>
        </div>
    )
}

export default TeamInfo;