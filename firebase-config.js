import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBWYRcpSe2HRLpm2wgjl_MPpMOR-6Ojg9c",
  authDomain: "krftinto-gho-715f9.firebaseapp.com",
  projectId: "krftinto-gho-715f9",
  storageBucket: "krftinto-gho-715f9.firebasestorage.app",
  messagingSenderId: "948792175240",
  appId: "1:948792175240:web:129002699affdb851d0d3d",
  measurementId: "G-NZH10TL5HS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
