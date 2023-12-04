import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const signGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('onAuthStateChanged callback triggered:', currentUser);
            setUser(currentUser);
            setLoading(false);

            if (currentUser && currentUser.email) {
                localStorage.setItem('user', JSON.stringify(currentUser));
            }
            else {
                // User has logged out, remove 'user' from localStorage
                localStorage.removeItem('user');
            }
        });

        return () => {
            return unsubscribe();
        }
    }, []);

    console.log(user);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signGoogle,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;