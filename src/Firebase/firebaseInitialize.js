import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseInitialize";
const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
} 
export default initializeAuthentication;