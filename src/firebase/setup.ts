import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTu6LBBV0RL_ZvrjrF81jBgbfjbg3A0bI",
  authDomain: "disney-clone-bf0b7.firebaseapp.com",
  projectId: "disney-clone-bf0b7",
  storageBucket: "disney-clone-bf0b7.appspot.com",
  messagingSenderId: "571337435902",
  appId: "1:571337435902:web:be67ae0052eac30c9153af"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)