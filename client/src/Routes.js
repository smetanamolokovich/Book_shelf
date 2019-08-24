import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./components/Home/Home";
import BookView from './components/Books';
import Login from './containers/Admin/login';
import Logout from './containers/Admin/logout';
import User from './components/Admin';

import Auth from './hoc/Auth';
import Layout from './hoc/Layout';
import AddReview from './containers/Admin/add';
import UserPost from './containers/Admin/UserPost';
import EditReview from './containers/Admin/edit';
import Register from './containers/Admin/register';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Auth(Home, null)} />
                <Route path="/login" exact component={Auth(Login, false)} />
                <Route path="/logout" exact component={Auth(Logout, true)} />
                <Route path="/user" exact component={Auth(User, true)} />
                <Route path="/user/register" exact component={Auth(Register, true)} />
                <Route path="/user/add" exact component={Auth(AddReview, true)} />
                <Route path="/books/:id" exact component={Auth(BookView, null)} />
                <Route path="/user/user-reviews" exact component={Auth(UserPost, true)} />
                <Route path="/user/edit-post/:id" exact component={Auth(EditReview, true)} />
            </Switch>
        </Layout>
    );
};

export default Routes;