import React from 'react';
import logo from './shiftyLogo3.png';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import auth0Client from './Auth';
import API from './utils/API';
import moment from 'moment';

const Home = () =>{
    const { user } = useAuth0();
    // signOut = () => {
    //     auth0Client.signOut();
    //     this.props.history.replace('/');
    // }   
    return (
        <div className="App" >
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {
                    <div>
                        <label className="mr-2 text-white">HI</label>
                        <JSONPretty data={user} />
                        {/* {JSON.stringify(user, null, 2)} */}
                    </div>
                }
            </header>
        </div>
    )
}

export default Home;