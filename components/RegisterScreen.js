import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, {useState} from 'react'

const RegisterScreen = ({ navigation }) => {
  const [state, setState] = useState({ name: '', email: '', password: '' })
 
  const register = () => {
    createUserWithEmailAndPassword(auth, state.email, state.password)
      .then((authUser) => { authUser.user.displayName = state.name; })
      .catch((err) => { alert(err.message); });
    auth.currentUser && navigation.replace('Home')
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Name"
        value={state.name}
        onChangeText={(val) => setState({...state, name:val})}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={state.email}
        onChangeText={(val) => setState({ ...state, email: val })}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={state.password}
        onChangeText={(val) => setState({ ...state, password: val })}
        maxLength={15}
        secureTextEntry={true}
      />
      <Button
        color="#3740FE"
        title="Signup"
        onPress={()=>register()}
      />
      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('Login')}>
        Already Registered? Click here to login
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});


export default RegisterScreen
