import React from 'react';
import { Link } from 'react-router-dom';
import style from './buttons.module.css';
import { template } from '@babel/core';

const buttons = (props) =>{
    let template = null;

    switch(props.type){
        case ('loadmore'):
            template = (
                <div className={style.blue_btn}
                    onClick={props.loadMore}
                >
                    {props.text}
                </div>
            );
            break;
        case 'linkTo':
            template = (
                <Link to={props.linkTo}
                    className={style.blue_btn}>
                    {props.text}        
                </Link>
            )
            break;
        default:
            template = null;    

    }
    
    return template;
}

export default buttons;
