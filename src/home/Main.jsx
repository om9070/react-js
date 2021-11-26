import React from 'react'
import Cont from './home/Cont';
import Home from './home/Home';
import Error from './home/Error';
import Menu from "./home/Menu"
import { Route, Switch, Redirect } from 'react-router-dom';
import User from './home/User';
import Search from './home/Search';

const App = () => {
    return (
        <>
            <Menu />
            <Switch>
                <Route exact path="/" component={() => <Home name="pro" />} />
                <Route path="/contact" component={Cont} />
                <Route path="/search" component={Search} />

                <Route path="/user/:fname" component={User} />

                <Route component={Error} />
                {/* <Redirect to="/" /> */}

            </Switch>


        </>
    )
}
export default App;