import { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import SurveyPage from './components/SurveyPage';
import HomePhoto from './assets/intro-page-youcode.png'
import Arcteryx from './assets/arcteryx.png';
import Logo from './assets/youcode-logo.png';
import './App'
// Import the functions you need from the SDKs you need
import { useAuthState } from 'react-firebase-hooks/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
  apiKey: "AIzaSyAK4FLdxvrfsk9fziOu-04rzgurP2I6N14",
  authDomain: "youcode-hackathon.firebaseapp.com",
  projectId: "youcode-hackathon",
  storageBucket: "youcode-hackathon.appspot.com",
  messagingSenderId: "34465283407",
  appId: "1:34465283407:web:ec41c38e4ae4d5aea1193a",
  measurementId: "G-SJETSQW1W3"
});

const auth = firebase.auth();


function SignIn() {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(googleProvider);
}

function App() {
  const [user] = useAuthState(auth);
  const [streak, setStreak] = useState(0);

  function SignOut() {
    const signOutUser = () => {
      firebase.auth().signOut()
        .then(() => console.log('User signed out successfully'))
        .catch(error => console.error('Error signing out:', error));

    };

    return (
      <button className="signOutButton" onClick={signOutUser}>Sign Out</button>
    );
  }

  function plusStreak() {
    setStreak(streak + 1)
  }

  return (
    <div className="app">
      {user ? (
        <>
          <div className="">
            <div className="logo-container">
              <img src={Arcteryx} alt="" className="arcteryx" />
              <p className="x">x</p>
              <img src={Logo} alt="" className="logo" />
            </div>
            <SignOut />
          </div>
          <SurveyPage plusStreak={plusStreak} />
          <p className="streakNumber">🔥{streak}</p>
        </>
      ) : (
        <div>
          <div className="logo-container">
            <img src={Arcteryx} alt="" className="arcteryx" />
            <p className="x">x</p>
            <img src={Logo} alt="" className="logo" />
          </div>
          <div className="card">
            <h2>
              welcome to
            </h2>
            <h1>
              mindfit
            </h1>
            <h3>
              thanks for taking the time for yourself today
            </h3>
            <div >
              <button className="login" onClick={SignIn}>Log in</button>
            </div>
            <img src={HomePhoto} alt="" className="homePhoto" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App