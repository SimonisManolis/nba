import React from 'react';
import SideNav from 'react-simple-sidenav'; 
import SideNavItems from './sideNav_items';

const sideNavigation = (props) => {
    return(
        <div>
            <SideNav 
               // openFromRight={true}
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    background: '#242424',
                    maxWidth: '65%'
                }}
            >
                <SideNavItems {...props}/>
            </SideNav>
        </div>
    )
}

export default sideNavigation;