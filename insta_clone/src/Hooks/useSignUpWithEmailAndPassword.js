import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { firestore } from "../Firebase/Firebase";
import { useShowToast } from "./useShowToast";
import { useAuthStore } from "../Store/AuthStore";

export const useSignUpWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
         ,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const showToast = useShowToast();
      const loginUser= useAuthStore(state => state.login);
      

const signup = async (inputs) => {
    if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullname){
        showToast("error", "Please fill all the fields", "error")
        return;
    }
    try{
        const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
        if (!newUser && error){
            showToast("error", error.message, "error")
            return;
        }
        if (newUser){
            const userDoc = {
                uid: newUser.user.uid,
                email: inputs.email,
                username:inputs.username,
                fullname: inputs.fullname,
                bio:"",
                profilePicURL:"",
                followers:[],
                following:[],
                posts:[],
                createdAt: Date.now()
            }
            await setDoc(doc(firestore," users", newUser.user.uid), userDoc);
            localStorage.setItem("user-info", JSON.stringify(userDoc));
            loginUser(userDoc);
        }
        
    }catch(error) {
        showToast("error", error.message, "error")
    }
}

  return {loading, error, signup};
}
