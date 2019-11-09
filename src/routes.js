import React from 'react';
import { Route, Switch } from 'react-router-dom';

//COMPONENTS
import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import NewsArticle from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/videoArticle';
import NewsMain from './components/Articles/News/Main/newsMain';
import VideosMain from './components/Articles/Videos/Main/videosMain';
import SignIn from './components/SignIn/signIn';
import Dashboard from './components/Dashboard/dashboard';

const Routes =(props) => {
    return(
        
        
            <Layout user={props.user}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/news" exact component={NewsMain}/>
                    <Route path="/articles/:id" exact component={NewsArticle} />
                    <Route path="/videos" exact component={VideosMain}/>
                    <Route path="/videos/:id" exact component={VideoArticle} />
                    <Route path="/sign-in" exact component={SignIn}/>
                    <Route path="/dashboard" exact component = {Dashboard}/>
                </Switch>
            </Layout>
           
        
    )
}

export default Routes;