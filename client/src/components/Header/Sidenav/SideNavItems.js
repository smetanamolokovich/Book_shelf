import React from 'react';
import Fontawefome from 'react-fontawesome';
import {Link} from 'react-router-dom';

const SideNavItems = () => {
    const items = [
        {
            type: 'navItem',
            icon: 'home',
            text: 'Home',
            link: '/',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'My profile',
            link: '/user',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Add admins',
            link: '/user/register',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Login',
            link: '/login',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'My reviews',
            link: '/user/user-reviews',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Add reviews',
            link: '/user/add',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Logout',
            link: '/logout',
            restricted: false
        },
    ];

    const showItems = () => (
        items.map((item, i) => (
            elements(item, i)
        ))
    );

    const elements = (item, i) => (
        <div key={i} className={item.type} >
            <Link to={item.link} >
                <Fontawefome name={item.icon} />
                {item.text}
            </Link>
        </div>
    );


    return (
        <div>
            {showItems()}
        </div>
    );
};

export default SideNavItems;