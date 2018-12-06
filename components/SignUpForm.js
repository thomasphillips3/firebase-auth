import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-bbeae.cloudfunctions.net'

class SignUpForm extends Component {
  state = { phone: '' };

  handleSubmit = async () => {
      try {
          await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
          await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
        } catch (err) {
            this.setState({ error: err });
        }
  }
  
  render() {
      return (
        <View>
            <View style={{ marginBottom: 10 }}>
                <FormLabel>phone number</FormLabel>
                <FormInput
                    value={this.state.phone}
                    onChangeText={ phone => this.setState({ phone }) }
                    keyboardType="numeric"
                    />
            </View>
            <Button 
                title="Submit"
                onPress={this.handleSubmit} >
            </Button>
        </View>
        );
    }
}

export default SignUpForm;