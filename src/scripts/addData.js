
import { collection, addDoc } from "firebase/firestore";
import {database} from "./firebaseSetup";
export default async function addCollectionData(data) {
    try {
        const docRef = await addDoc(collection(database,"spike-firebase-car"),data)
        console.log("Document written with ID: ", docRef.id);
        }
        catch (e) {
            console.error("Error adding document: ", e);
        }
    }

