import React from 'react';

import { Link } from 'react-router-dom';
import CardInfo from '../CardInfo/cardInfo';
import { tsPropertySignature } from '@babel/types';
import style from './videosListTemplate.module.css';

const VideosListTemplate = (props) =>{
    console.log(props);
    return props.data.map( (item,i)=>{
    
       return <Link to={`/videos/${item.id}`} key={i}>
            <div className={style.videoListItem_wrapper}>
                <div className={style.videoListItem_image}
                    style={{
                        background:`url(/images/videos/${item.image})`
                    }}
                >
                    <div></div>
                </div>  
                <div className={style.details}>
                    <h2>{item.title}</h2>

                    
                </div>    
            </div>
        </Link>
    })
} 

export default VideosListTemplate;