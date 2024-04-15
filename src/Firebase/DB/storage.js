import {storage} from "../firebaseConfig";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";



export default class DB {
    static setItemImage = async (itemId, image) => {
        let result = {code:null, val:null}
        const storageRef = ref(storage, itemId);

    // 'file' comes from the Blob or File API
    await uploadBytes(storageRef, image).then((snapshot) => {
        result = {code:0, val:snapshot};
    }).catch(err => {
        result = {code:1, val:err}
    });
    return result
    } 

    static getURL = async (itemId) => {
        let result = {code:null, val:null}
        const starsRef = ref(storage, itemId);

    // Get the download URL
    await getDownloadURL(starsRef).then(e => {
        result = {code:0, val:e}
    }).catch(err => {
        result = {code:1, val:err}
    })
    return result

    }

    static deleteItemImage = async (itemId) => {
        let result = {code:null, val:null}
        const desertRef = ref(storage, itemId);
        // Delete the file
        await deleteObject(desertRef).then(() => {
            result = {code:0, val:"Sucesss"}
        }).catch((error) => {
            result = {code:1, val:error}
        });
        return result
        
    }
}
