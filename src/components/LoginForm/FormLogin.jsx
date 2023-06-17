import ForgetPass from "./Elements/ForgetPass";
import Input from "./Elements/Input";
import Button from "./Elements/Button";
import ToRegister from "./Elements/ToRegister";
import { auth, googleProvider } from "../../config/Firebase/firebase-config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { isLogin } from "../../redux/actions/loginSlice";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isIncorrect, setIsIncorrect] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginUsers = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(isLogin(true));
      localStorage.setItem("emailUser", email)
      navigate("/");
    } catch (err) {
      console.log(err);
      setIsIncorrect(!isIncorrect);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      dispatch(isLogin(true));
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLoginUsers}>
      <div className="bg-zinc-100 flex flex-col justify-center items-center w-[500px] h-[600px] py-14 px-16">
        <h1 className="text-6xl font-gallient mb-8">Zelda</h1>
        <p className="text-1xl font-normal tracking-widest text-zinc-600">
          Welcome To Zelda
        </p>
        <Input
          children="User Name or Email"
          type="text"
          id="username"
          htmlFor="username"
          onchange={(e) => setEmail(e.target.value)}
        />
        <Input
          children="Password"
          type="password"
          id="pass"
          htmlFor="pass"
          onchange={(e) => setPassword(e.target.value)}
        />
        <div className="flex w-full max-w-[320px] justify-end mt-1">
          <ForgetPass />
        </div>
        {isIncorrect && (
          <p className="text-red-600 mt-3">username or password incorrect!</p>
        )}
        <Button type="submit">SIGN IN</Button>
        <ToRegister />
        <div
          className="flex justify-center items-center px-6 py-2 gap-4 mt-4 border-2 border-zinc-800 border-opacity-60 rounded-lg cursor-pointer"
          onClick={loginWithGoogle}
        >
          <img
            src="../public/logos/google.png"
            alt="googlelogo"
            className="w-6 h-6 self-start"
          />
          <p className="font-medium text-zinc-800 text-opacity-80">
            Sign In With Google
          </p>
        </div>
      </div>
    </form>
  );
};

export default FormLogin;
