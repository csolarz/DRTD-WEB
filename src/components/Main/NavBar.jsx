import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const NavWrapper = styled.nav`
    .nav-link {
        color: var(--headerBlack) !important; 
        font-size: 1.05rem;
    }`;

class NavBar extends Component {
    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
          } = this.props;

        return(
            <NavWrapper className="navbar navbar-expand-sm bg-primary-ripley navbar-dark px-sm-5">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Productos</Link>
                    </li>
                </ul>
                {
                    user 
                    ? <p>Hello, {user.displayName}</p> 
                    : null
                }
                {
                    user 
                    ? <button onClick={signOut}>Sign out</button>
                    : <button onClick={signInWithGoogle}>Sign in with Google</button>
                }
            </NavWrapper>
        )
    }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(NavBar);