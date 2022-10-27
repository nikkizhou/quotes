import React from 'react'
import { auth } from '../firebase';

const SignOutScreen = () => {

  const signOutUser = () => {
    auth.signOut()
      .then(() => {navigation.replace('Login')})
      .catch((err) => alert(err.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Hello, {auth.currentUser.email}
      </Text>
      <Button
        color="#3740FE"
        title="Sign out"
        onPress={() => signOutUser()}
      />
    </View>
  )
}

export default SignOutScreen
