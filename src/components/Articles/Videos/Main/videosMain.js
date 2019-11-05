import React from 'react';
import VideosList from '../../../Widgets/VideosList/videosList';

const VideosMain = () =>{
    return(
        <VideosList 
            type="card"
            loadmore={true}
            start={0}
            amount={6}
        />
    )
}

export default VideosMain;
