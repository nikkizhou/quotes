import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from 'react'
import styles from '../../styles/auth.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useRouter } from 'next/router'

const RegisterScreen = () => {
  const [state, setState] = useState({ name: '', email: '', password: '' })
  const router = useRouter()


  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, state.email, state.password)
      await updateProfile(auth.currentUser, { displayName: state.name })
      auth.currentUser && router.push('/quotes')
    } catch (error) {
      alert(error);
    }
  };

    return (
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.formContent}>
            <h3 className={styles.formTitle}>Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
         
              <a href="/" className="link-primary">Sign In</a>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
                onChange={(e) => setState({ ...state, name: e.target.value })}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
                onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
                onChange={(e) => setState({ ...state, password: e.target.value })}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" onClick={()=>register()}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen
