import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDHATjW6WDlm3z-dKZqJC6xvLleGaMpDck",
	authDomain: "thang-truong-db.firebaseapp.com",
	projectId: "thang-truong-db",
	storageBucket: "thang-truong-db.appspot.com",
	messagingSenderId: "657671928344",
	appId: "1:657671928344:web:007b37907881fda94e216d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

export const CreateAuthWithUserAndPassword = async (
	email,
	password,
	displayName
) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(
		auth,
		email,
		password,
		displayName
	);
};
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	if (!userAuth) return;
	const userDocRef = doc(db, "users", userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email, photoURL } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				photoURL,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log("errors creation the user", error);
		}
	}

	return userDocRef;
};

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);

export const signOutUser = async () => await signOut(auth);

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};
