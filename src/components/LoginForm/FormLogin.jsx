import ForgetPass from "./Elements/ForgetPass";
import Input from "./Elements/Input";
import Button from "./Elements/Button";
import ToRegister from "./Elements/ToRegister";
import { useState } from "react";
import AuthContext from "../../config/auth/AuthContext";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = AuthContext();

  const handleLoginUsers = (e) => {
    e.preventDefault();
    auth.useLogin(email, password);
  };

  const loginWithGoogle = () => {
    auth.useLoginWithGoogle();
  };

  return (
    <form onSubmit={handleLoginUsers}>
      <div className="bg-zinc-100 flex flex-col justify-center items-center md:w-[500px] md:h-[600px] py-8 px-6 md:py-14 md:px-16">
        <h1 className="text-6xl font-gallient mb-8">Zelda</h1>
        <p className="text-1xl font-normal tracking-widest text-zinc-600">
          Welcome To Zelda
        </p>
        <div className="flex flex-col gap-1 mt-7">
          <Input
          variant="formAuth"
            children="User Name or Email"
            type="text"
            id="username"
            htmlFor="username"
            onchange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 mt-7">
          <Input
          variant="formAuth"
            children="Password"
            type="password"
            id="pass"
            htmlFor="pass"
            onchange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex w-full max-w-[320px] justify-end mt-1">
          <ForgetPass />
        </div>
        {!auth.isIncorrect ? null : (
          <p className="text-red-600 mt-3">username or password incorrect!</p>
        )}
        <Button type="submit">SIGN IN</Button>
        <ToRegister />
        <div
          className="flex justify-center items-center px-6 py-2 gap-4 mt-4 border-2 border-zinc-800 border-opacity-60 rounded-lg cursor-pointer"
          onClick={loginWithGoogle}
        >
          <img
            src="/logos/google.png"
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
