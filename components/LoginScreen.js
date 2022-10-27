import { auth } from '../firebase';
import React, { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from '../styles/auth.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useRouter } from 'next/router'

const LoginScreen = () => {
  const [state, setState] = useState({ email: '', password: '' })
  const router = useRouter()
  
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, state.email, state.password)
      auth.currentUser && router.push('/quotes')
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.formContent}>
          <h3 className={styles.formTitle}>Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setState({ ...state, password: e.target.value })}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" onClick={()=>signIn()}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            <a href="signUp">Don't have account? Click here to signup</a>
          </p>
        </div>
      </div>
    </div>
  )
}



export default LoginScreen;
