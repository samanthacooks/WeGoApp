import React, { Component } from 'react';
import { 
  StyleSheet, 
  TextInput, 
  TouchableHighlight, 
  AsyncStorage, 
  ActivityIndicatorIOS, 
  Text, 
  View,
  Dimensions,
  Platform
} from 'react-native';

global.ACCESS_TOKEN = 'access_token';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      errors: [],
      showProgress: false,
    }
  }

    storeToken(responseData){
    AsyncStorage.setItem(ACCESS_TOKEN, responseData, (err)=> {
      if(err){
        console.log("an error");
        throw err;
      }
      console.log("success");
    }).catch((err)=> {
        console.log("error is: " + err);
    });
  }

    async onRegisterPressed(){
      this.setState({showProgress: true})
      try {
        let response = await fetch('http://localhost:3000/users', {
                              method: 'POST',
                              headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                user:{
                                  name: this.state.name,
                                  email: this.state.email,
                                  password: this.state.password
                                }
                              })
                            });

          let res = await response.text();

          if (response.status >= 200 && response.status < 300) {
            console.log("res is" + res);
            this.props.navigation.navigate('Home')
            let accessToken = res;
            console.log("res token: " + accessToken);
            this.storeToken(accessToken);
            global.ACCESS_TOKEN = accessToken
          } else {
            let errors = res;
            throw errors;
          }
      } catch(errors) {
        console.log("catch errors: " + errors);

        let formErrors = JSON.parse(errors);
        let errorsArray = [];
         for(var key in formErrors) {
           if(formErrors[key].length > 1) {
               formErrors[key].forEach(error => errorsArray.push(`${key} ${error}`));
           } else {
               errorsArray.push(`${key} ${formErrors[key]}`);
           }
         }
       this.setState({errors: errorsArray})
       this.setState({showProgress: false});
      }
    }

     _onHideUnderlay(){
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay(){
    this.setState({ pressStatus: true });
  }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.heading}>
            Create Your Profile!
          </Text>
          <Errors errors={this.state.errors}/>
          <TextInput
            onChangeText={ (text)=> this.setState({name: text}) }
            style={styles.input} placeholder="Name"
            autoCorrect= {false}>
          </TextInput>
          <TextInput
            onChangeText={ (text)=> this.setState({email: text}) }
            style={styles.input} placeholder="Email"
            autoCorrect= {false}
            autoCapitalize='none'>
          </TextInput>
          <TextInput
            onChangeText={ (text)=> this.setState({password: text}) }
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            autoCorrect= {false}>
          </TextInput>
          <TouchableHighlight onPress={this.onRegisterPressed.bind(this)} style={this.state.pressStatus? styles.pressedButton : styles.button}
                onHideUnderlay={this._onHideUnderlay.bind(this)}
                onShowUnderlay={this._onShowUnderlay.bind(this)}>
            <Text style={styles.buttonText}>
              Register
            </Text>
          </TouchableHighlight>

      </View>
      )
    }
  }

  const Errors = (props) => {
  return (
    <View>
      {props.errors.map((error, i) => <Text key={i} style={styles.error}> {error.charAt(0).toUpperCase()+ error.slice(1).replace(/[_-]/g, " ")} </Text>)}
    </View>
  );
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 80
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    borderWidth: 1,
    borderColor: '#48bbec',
    width: Platform.OS == 'ios' ? window.width - 20 : 375
  },
  button: {
   height: 50,
    justifyContent: 'center',
    backgroundColor: '#bd99db',
    alignSelf: 'center',
    marginTop: 10,
    alignItems: 'center',
    borderRadius:10,
    width: 300
  },
  buttonText: {
    color: '#FFF',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 20,
    color: "#5e5c60",
  },
  error: {
    color: 'red',
    paddingTop: 10,
  },
  pressedButton:{
    height: 50,
    backgroundColor: '#29593c',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
    borderRadius: 10,
    width: 300,
    alignSelf: 'center'

  },
  loader: {
    marginTop: 20
  }
});

export default Register;
