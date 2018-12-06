import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-bbeae.cloudfunctions.net'

class SignInForm extends Component {
    state = { phone: '' , code: '' };
    
    handleSubmit = async () => {
        try {
            let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone: this.state.phone, code: this.state.code });
            firebase.auth().signInWithCustomToken(data.token);
        } catch (err) {
            this.setState({ error: err })
        }
    }

    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>phone number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone }) }
                        keyboardType="numeric"
                    />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>code</FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={code => this.setState({ code }) }
                        keyboardType = "numeric"
                    />
                </View>
                <Button
                    title="Submit"
                    onPress={this.handleSubmit}
                >

                </Button>
            </View>
        )
    }
}

export default SignInForm;