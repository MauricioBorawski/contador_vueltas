import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import { app } from './firebase';
import { redirect } from 'react-router-dom';
import { isFirebaseError } from './typeguards';
import { FirebaseError } from './types';

export interface RegisterUserArg {
    email: string;
    password: string;
}

export const FirebaseAuth = getAuth(app);

export async function registerUser({ email, password }: RegisterUserArg) {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            FirebaseAuth,
            email,
            password
        );

        return userCredential;
    } catch (error) {
        if (isFirebaseError(error)) {
            const firebaseError: FirebaseError = {
                code: error.code,
                message: error.message,
                name: error.name,
                stack: error.stack,
            };

            return firebaseError;
        }
    }
}

export const GoogleProvider = new GoogleAuthProvider();

export async function registerWithGoogle(navigate: () => void) {
    try {
        const result = await signInWithPopup(FirebaseAuth, GoogleProvider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        navigate();
    } catch (error) {
        if (isFirebaseError(error)) {
            const firebaseError: FirebaseError = {
                code: error.code,
                message: error.message,
                name: error.name,
                stack: error.stack,
            };

            return firebaseError;
        }
    }
}
