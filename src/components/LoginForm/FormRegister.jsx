import Input from "./Elements/Input";
import Button from "./Elements/Button";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const [usersAuth, setUsersAuth] = useState("")
  const [emailUsers, setEmailUsers] = useState("");
  const [passwordUsers, setPasswordUsers] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showValidate, setShowValidate] = useState(false);
  const regexPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const navigate = useNavigate()

  const submitRegister = (e) => {
    e.preventDefault();
    const validatePass = regexPass.test(passwordUsers);
    if (!validatePass || confirmPassword !== passwordUsers) {
      setShowValidate(!showValidate);
      setTimeout(() => {
        setShowValidate(showValidate);
      }, 5000);
    } else {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, emailUsers, passwordUsers)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
      setTimeout(() => {
        navigate("/login")
      },1000);
    }
  };

  return (
    <form onSubmit={submitRegister}>
      <div className="bg-zinc-100 flex flex-col justify-center items-center w-[500px] h-[600px] py-14 px-16">
        <h1 className="text-5xl font-gallient mb-6">Register</h1>
        <p className="text-1xl font-normal tracking-widest text-zinc-600">
          Please Enter Your Detail
        </p>
        <Input
          children="Username"
          type="text"
          id="username"
          htmlFor="username"
          onchange={(e) => setUsersAuth(e.target.value)}
        />
        <Input
          children="Email"
          type="text"
          id="email"
          htmlFor="email"
          onchange={(e) => setEmailUsers(e.target.value)}
        />
        <Input
          children="Password"
          type="password"
          id="pass"
          htmlFor="pass"
          onchange={(e) => setPasswordUsers(e.target.value)}
        />
        <Input
          children="Confirm Password"
          type="password"
          id="confirmpass"
          htmlFor="confirmpass"
          onchange={(e) => setConfirmPassword(e.target.value)}
        />
        {showValidate && (
          <p className="text-red-700 text-sm self-start ml-6 mt-2">
            {confirmPassword !== passwordUsers
              ? "Password Do Not Match"
              : "Password must be alphanumeric and at least 8 characters"}
          </p>
        )}
        <Button type="submit">SUBMIT</Button>
      </div>
    </form>
  );
};

export default FormRegister;
