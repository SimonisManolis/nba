import React, {Component} from 'react';
import style from './videosList.module.css';
import { firebaseTeams, firebaseVideos, firebaseLooper } from '../../../firebase';
import Button from '../Buttons/buttons';
import VideosListTemplate from './videosListTemplate';

class VideosList extends Component {
    state = {
        teams: [],
        videos: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    renderTitle = () =>{
        return this.props.title ? 
        <div className={style.videosList_wrapper}>
            <h3><strong>NBA </strong>Videos</h3>
        </div> 
         
        : null
    }

    componentWillMount(){
        this.request(this.state.start, this.state.end)
    }

    request = (start,end) =>{
        if(this.state.teams.length < 1) {
            firebaseTeams.once('value')
            .then((snapshot)=>{
                const teams = firebaseLooper(snapshot)
                this.setState({
                    teams
                })
            })
        }    


        firebaseVideos.orderByChild('id').startAt(start).endAt(end).once('value')
        .then((snapshot)=>{
            const videos = firebaseLooper(snapshot);
            this.setState({
                videos:[...this.state.videos,...videos],
                start,
                end
            })
        })
    }

    renderVideos = () =>{
        let template = null ;

        switch(this.props.type){
            case('card'):
                template = <VideosListTemplate 
                    data={this.state.videos}
                    teams={this.state.teams}
                    />

                break;
            default:
                template = null;    
        }

        return template;
    }

    loadMore =() =>{
        let end = this.state.end + this.state.amount;
        this.request(this.state.end +1,end) //+1 cause id starts 0

    }

    renderButton = () => {
        return this.props.loadmore ?
            <Button 
                type="loadmore"
                loadMore= {()=> this.loadMore()}
                text="Load More Videos"
            />
            :
            <Button 
                type="linkTo"
                text= "More Videos"
                linkTo= "/videos"
            />    

    }

    render(){
        return(
        
            <div>
                {this.renderTitle()}
                {this.renderVideos()}
                {this.renderButton()}
                
            </div>

        )
    }
}

export default VideosList;


