import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDkBpwdNBx8pwLGLuikgKTb9lJ0bScwJk8',
            authDomain: 'auth-af5e0.firebaseapp.com',
            databaseURL: 'https://auth-af5e0.firebaseio.com',
            projectId: 'auth-af5e0',
            storageBucket: 'auth-af5e0.appspot.com',
            messagingSenderId: '752722217415'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              this.setState({ loggedIn: true });
            } else {
              this.setState({ loggedIn: false });
            }
          });
    }    

    renderContent() {
        switch (this.state.loggedIn) {
          case true:
            return (
                <Card>
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                </Card>
            );
          case false:
            return <LoginForm />;
          default:
            return <Spinner size="large" />;
        }
      }
    
      render() {
        return (
          <View>
            <Header headerText="Authentication" />
            {this.renderContent()}
          </View>
        );
      }
}

export default App;
