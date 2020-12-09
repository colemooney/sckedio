import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class RegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRegistered: false,
            error: '',
            errorMessage: '',
            formSubmitting: false,
            user:{
              username: '',
              email: '',
              password: '',
              password_confirmation: '',  
            },
            redirect: props.redirect,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
    }
    /* Not needed for now */
    // componentWillUnmount(){
    //     let state = localStorage["appState"];
    //     if (state){
    //         let AppState = JSON.parse(state);
    //         this.setState({isLoggedIn: AppState.isLoggedIn, user: AppState});
    //     }
    //     if (this.state.isRegistered) {
    //         return this.props.histoy.push("/dashboard")
    //     }
    // }

    handleSubmit(e){
        e.preventDefault();
        this.setState({formSubmitting: true});
        ReactDOM.findDOMNode(this).scrollIntoView();
        let userData = this.state.user;
        axios.post("/api/auth/signup", userData)
            .then(response => {
                return response;
            }).then(json => {
                if (json.data.success){
                    let userData = {
                        id: json.data.id,
                        username: json.data.username,
                        email: json.data.email,
                        activation_token: json.data.activation.token,
                    };
                    let appState = {
                        isRegistered: true,
                        user: userData,
                    };
                    localStorage["appstate"] = JSON.stringify(appState);
                    this.setState({
                        isRegistered: appState.isRegistered,
                        user: appState.user
                    });
                }
            })
        //     .catch(error => {if(error.response){
        //         /* Catches error within status code 2xx */
        //         let err = error.response.data;
        //         this.setState({
        //             error: err.message,
        //             errorMessage: err.errors,
        //             formSubmitting: false
        //         })
        //     }
        // })
    }

    handleUsername(e) {
        let value = e.target.value;
        this.setState(prevState => ({
            user: {
                ...prevState.user, username: value
            }
        }));
    }

    handleEmail(e) {
        let value = e.target.value;
        this.setState(prevState => ({
            user:{
                ...prevState.user, email: value
            }
        }));
    }

    handlePassword(e) {
        let value = e.target.value;
        this.setState(prevState =>({
            user:{
                ...prevState.user, password: value
            }
        }));
    }

    handlePasswordConfirm(e) {
        let value = e.target.value;
        this.setState(prevState => ({
            user: {
                ...prevState.user, password_confirmation: value
            }
        }));
    }

    render() {
        // let errorMessage = this.state.errorMessage;
        // let arr = [];
        // Object.values(errorMessage).foreach((value) => (
        //     arr.push(value)
        // ));

        return (
            <div className="container">
                <div className="row">
                    <div>
                        <h2>Register</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div >
                                <label>Email</label>
                                <input id="email" type="email" name="email" onChange={this.handleEmail}/>
                            </div>
                            <div>
                                <label>Username</label>
                                <input id="username" type="text" name="username" onChange={this.handleUsername}/>
                            </div>
                            <div>
                                <label>Password</label>
                                <input id="password" type="password" name="password" onChange={this.handlePassword}/>
                            </div>
                            <div>
                                <label>Confirm Password</label>
                                <input id="password_confirmation" type="password" name="password_confirmation" onChange={this.handlePasswordConfirm}/>
                            </div>
                            <button type="submit" name="singleButton" disabled={this.state.formSubmitting ? "disables": ""}>Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterContainer;