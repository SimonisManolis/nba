import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({
    user,
    component: Comp, //cant use twice, so rename it
    ...rest
}) =>{
    return(
        <Route {...rest} component={(props)=>(
            user ?
                <Comp {...props} user={user} />
            :
            <Redirect to="/sign-in"/>    
        )} />
    )

}

export default PrivateRoute;