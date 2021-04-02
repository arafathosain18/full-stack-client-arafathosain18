import React, { useContext} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [ loggedIn ,setLoggedIn] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {  
          const user = result.user;
          const {displayName, email} = user;
          const signedInUser = {displayName, email} 
          setLoggedIn(signedInUser);
          history.replace(from);
        }).catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  
    return (
        <div style={{backgroundColor:'floralWhite',width:'573px',height:'338px',border: '1px solid #198754',padding: '50px',marginTop: '200px',marginLeft: '615px'}}>
            <h2 style={{textAlign:'center'}}>Sign In Panel </h2>
            <button  style={{marginTop: '108px',marginLeft: '147px'}} onClick={handleGoogleSignIn} className='btn btn btn-primary'>Sign in with Google </button>
        </div>
    );
};

export default Login;