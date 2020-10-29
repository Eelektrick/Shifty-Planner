import React, { Component } from 'react';
import logo from './shiftyLogo3.png';
import auth0Client from './Auth';
import API from './utils/API';

class Home extends Component {
    componentDidMount() {

        API.getShifts().then( (data) => {
            // console.log("My Data from db");
            console.log(data);
            // let e=[];
            const e=[];
            for (var i = 0; i < data.data.length; i++) {
           
             
                if(data.data[i].traded === 2){
                    e[i]
                    = {
                    'shift': data.data[i].shift,
                    'title': data.data[i].shift + "   " +data.data[i].name,
                    'start': data.data[i].start,
                    'end': data.data[i].end,
                    '_id': data.data[i]._id,
                    'authID': data.data[i].authID,
                    'name': data.data[i].name,
                    'traded': data.data[i].traded
                  }
                }
                }
                console.log(e);
              
            })

        if (!auth0Client.isAuthenticated()) {
            auth0Client.signIn();
        }
    }
    signOut = () => {
        auth0Client.signOut();
        this.props.history.replace('/');
    }
    render() {

        return (
            <div className="App" >
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {
                        auth0Client.isAuthenticated() &&
                        <div>
                            <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
                            <br />
                            <button className="btn btn-dark" onClick={() => { this.signOut() }}>Sign Out</button>
                        </div>
                    }

                </header>
            </div>
        )
    }

}

export default Home;