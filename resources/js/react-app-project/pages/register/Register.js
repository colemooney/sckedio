/* Temporary file */
import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import NavBar from '../../components/navBar/NavBar';
import RegisterContainer from './RegisterContainer';

// class Register extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             redirect: props.location,
//         }
//     }

//     render() {
//         return(
//             <div>
//                 <NavBar />
//                 <div className="content">
//                     <RegisterContainer redirect={this.state.redirect} />
//                 </div>
//             </div>
//         );
//     };
// }

const Register = () => {
    return(
        <div>
            <NavBar />
            <div className="content">
                    <RegisterContainer />
                </div>
        </div>
    );
};


export default Register;