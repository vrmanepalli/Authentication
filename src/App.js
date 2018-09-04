import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDkBpwdNBx8pwLGLuikgKTb9lJ0bScwJk8',
            authDomain: 'auth-af5e0.firebaseapp.com',
            databaseURL: 'https://auth-af5e0.firebaseio.com',
            projectId: 'auth-af5e0',
            storageBucket: 'auth-af5e0.appspot.com',
            messagingSenderId: '752722217415'
        });
    }    

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <LoginForm />
            </View>
        );
    }
}

export default App;
