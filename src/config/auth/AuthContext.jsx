import { auth, googleProvider } from "../../config/Firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { isLogin } from "../../redux/actions/loginSlice";
import { resetCart } from "../../redux/actions/cartSlice";

const AuthContext = () => {
    const [isIncorrect, setIsIncorrect] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const useRegister = async (email, pass) => {
    try {
        await createUserWithEmailAndPassword(auth, email, pass)
        console.log("succes")
    } catch (err) {
        console.log(err)
    }
    setTimeout(() => {
        navigate("/login")
      },1000);
  };

  const useLogin = async (email, pass) => {
    try {
        await signInWithEmailAndPassword(auth, email, pass)
        dispatch(isLogin(true));
        localStorage.setItem("emailUser", email)
        navigate("/");
    } catch (err) {
        console.log(err);
        setIsIncorrect(!isIncorrect);
    }
  }

  const useLoginWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
        dispatch(isLogin(true));
        navigate("/");
      } catch (err) {
        console.error(err);
      }
  }

  const useLogout = async () => {
    try {
        await signOut(auth);
        dispatch(isLogin(false));
        dispatch(resetCart(0));
        localStorage.clear("emailUsers");
        navigate("/login");
      } catch (err) {
        console.error(err);
      }
  }

  return {
    useRegister,
    useLogin,
    useLogout,
    useLoginWithGoogle,
    isIncorrect
  }
};

export default AuthContext
