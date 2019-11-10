import React, { Component } from 'react';
import { firebase,firebaseArticles, firebaseLooper } from '../../../firebase';
import SliderTemplates from './slider_templates';
import { resolve } from 'dns';


class NewsSlider extends Component {
    
    state = {
        news: []
    }

    componentWillMount(){
        firebaseArticles.limitToFirst(3).once('value')
        .then((snapshot)=>{
            const news = firebaseLooper(snapshot)
            //works but refresh state 3 times!!!
           /*  news.forEach((item,i)=>{
                firebase.storage().ref('images')
                .child(item.image).getDownloadURL()
                .then(url =>{
                    news[i].image = url;
                    this.setState({
                        news
                    })
                })
            }) */

            //better way

            const asyncFunction= (item,i,callback)=>{
                firebase.storage().ref('images')
                .child(item.image).getDownloadURL()
                .then(url =>{
                    news[i].image = url;
                    callback();// οταν καλειται τερματιζει η συναρτηση
                })
            }

            let requests = news.map((item,i)=>{
                return new Promise((resolve)=>{
                    asyncFunction(item,i,resolve)
                })
            })

            //waits until complete alla requests
            Promise.all(requests).then(()=>{
                this.setState({
                    news
                })
            })


          
        })    
        
        /* axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount + this.props.start}`)
        .then( response => {
            this.setState({
                news:response.data
            }) 
        }) */
    }
    
    render() {
        return(
            <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
        )
    }
}

export default NewsSlider;
