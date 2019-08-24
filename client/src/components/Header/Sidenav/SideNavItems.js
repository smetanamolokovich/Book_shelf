import React from 'react';
import Fontawefome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SideNavItems = ({ user }) => {

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
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Add admins',
            link: '/user/register',
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Login',
            link: '/login',
            restricted: false,
            exclude: true
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'My reviews',
            link: '/user/user-reviews',
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Add reviews',
            link: '/user/add',
            restricted: true
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Logout',
            link: '/logout',
            restricted: true
        },
    ];

    const showItems = () => (
        user.login ?
            items.map((item, i) => {
                if (user.login.isAuth) {
                    return !item.exclude ?
                        elements(item, i)
                        : null
                }
                else {
                    return !item.restricted ?
                        elements(item, i)
                        : null
                }
            })
            : null
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

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(SideNavItems);