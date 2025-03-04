import React from 'react';
import TeamInfo from '../../Elements/teamInfo';
//import PostData from '../../Elements/postData';

const VideoHeader = (props) =>{
    
    const teamInfo = (team) => {
        return team ? (
            <TeamInfo team={team} />
        ): null;
    }

   
    
    return(
        <div>
            {teamInfo(props.teamData)}
            
        </div>
    )
}

export default VideoHeader;