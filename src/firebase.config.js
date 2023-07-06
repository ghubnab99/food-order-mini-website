import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDFLT69-lhbnOGAQAQLM-wDX1DXFnigKic",
    authDomain: "food-delivery-app-142f3.firebaseapp.com",
    databaseURL: "https://food-delivery-app-142f3-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-142f3",
    storageBucket: "food-delivery-app-142f3.appspot.com",
    messagingSenderId: "555168746514",
    appId: "1:555168746514:web:504616490b6eda56e69ccb"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };