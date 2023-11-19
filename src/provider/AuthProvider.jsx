import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../fairbase/fairbase.confige";



const auth = getAuth(app);
export const AuthContexst = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);

     const creatUser = (email, password) =>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password);
     }
const singInUser =(email, password)    =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
    // return signInWithEmailAndPassword(auth, email, password);
}
    

    const userINfo= {
        user,
        loading,
        creatUser,
        singInUser
    }
    return (
        <AuthContexst.Provider value={userINfo}>
            {children}
        </AuthContexst.Provider>
    );
};

export default AuthProvider;