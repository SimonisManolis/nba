import React from 'react';
import {  Switch } from 'react-router-dom';

//COMPONENTS
import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import NewsArticle from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/videoArticle';
import NewsMain from './components/Articles/News/Main/newsMain';
import VideosMain from './components/Articles/Videos/Main/videosMain';
import SignIn from './components/SignIn/signIn';
import Dashboard from './components/Dashboard/dashboard';
import PublicRoute from './components/AuthRoutes/publicRoutes';
import PrivateRoute from './components/AuthRoutes/privateRoutes';

const Routes =(props) => {
    return(
        
        
            <Layout user={props.user}>
                <Switch>
                    <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
                    <PublicRoute {...props} restricted={false} path="/news" exact component={NewsMain}/>
                    <PublicRoute {...props} restricted={false} path="/articles/:id" exact component={NewsArticle} />
                    <PublicRoute {...props} restricted={false} path="/videos" exact component={VideosMain}/>
                    <PublicRoute {...props} restricted={false} path="/videos/:id" exact component={VideoArticle} />
                    <PublicRoute {...props} restricted={true} path="/sign-in" exact component={SignIn}/>
                    <PrivateRoute {...props}  path="/dashboard" exact component = {Dashboard}/>
                </Switch>
            </Layout>
           
        
    )
}

export default Routes;