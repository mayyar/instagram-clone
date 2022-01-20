import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyB8CcHRLh82oFWF0p_PI_g3LatosldBZmk',
  authDomain: 'instagram-clone-a960b.firebaseapp.com',
  projectId: 'instagram-clone-a960b',
  storageBucket: 'instagram-clone-a960b.appspot.com',
  messagingSenderId: '960832712783',
  appId: '1:960832712783:web:f55441944a6f62ba8a7a3a'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
