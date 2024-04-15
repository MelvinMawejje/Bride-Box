import {auth} from "../firebaseConfig"
import { signInWithEmailAndPassword, signOut } from "firebase/auth"


export default class Auth {
    
    static getUser = () => {
        auth.onAuthStateChanged(val => {
            return val
        })
        return auth.currentUser

    }

    static login = async (email, password) => {
        let result = {}
        await signInWithEmailAndPassword(auth, email,password)
        .then(cred => {
            result = {"code":0, "result":cred}
        })
        .catch((e) => {
            result = {"code":1, "result":e}
        })
        return result
    }

    static logout = async() => {
        let result = {}
        await signOut(auth)
        .then(cred => {
            result = {"code":0, "result":cred}
        })
        .catch((e) => {
            result = {"code":1, "result":e}
        })
    }
}