import React, { Component } from 'react';
import logo from './shiftyLogo3.png';
import auth0Client from './Auth';
import API from './utils/API';
import moment from 'moment';

class Home extends Component {

    constructor() {
        super();
        this.state = {
         
          events: []
        };
      }

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
                this.setState({events : e});
                console.log(this.state.events);
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
         <div>
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

            {/* <div>
                 <ul>
                   Shifts that are ready for trade:
                  {this.state.events.filter(details => (
                      <li>
                      <p>{details.name} on shift {details.shift}, timing between {moment(details.start).format('MMMM Do YYYY, h:mm:ss a')} and {moment(details.end).format('MMMM Do YYYY, h:mm:ss a')} </p>

                      </li>
                  ))}
                 </ul>

            </div> */}
        </div>
        )
    }

}

export default Home;