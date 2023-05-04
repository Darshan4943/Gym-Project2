import { Button, TextField } from "@mui/material";
// import google from "./google.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import style from "./SignIn.module.css";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { isLogin } from "../../recoilAtom/Atom";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [islogin, setlogin] = useRecoilState(isLogin);
  const [name, setName] = useState("");
  

  const [errorEmail, setErrorEmail] = useState();
  const [errorPass, setErrorPass] = useState("");

  function handleLogin() {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((user) => {
      return (
        user.name.toString() === name.toString() ||
        user.email.toString() === email.toString() 
        
      );
    });

    if (user) {
      let uname = user.name;
      let user1 = {
        username: uname,
      };
      if (user.password.toString() === password.toString()) {
        setlogin(true);
        localStorage.setItem("userData", JSON.stringify(user1));
        navigate("/home");
      } else {
        alert("Invalid password");
      }
    } else {
      alert("User not found");
    }

    setEmail("");
    setpassword("");
  }

  const validateEmail = () => {
    const regex = /^\S+@\S+\.\S+$/;
    if (!email) {
      setErrorEmail("Email is required");
      return false;
    } else if (!regex.test(email)) {
      setErrorEmail("It should be a valid email address");
      return false;
    } else {
      setErrorEmail("");
      return true;
    }
  };

  const validatePassword = () => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    if (!password) {
      setErrorPass("Password is required!");
      return false;
    } else if (!regex.test(password)) {
      setErrorPass(
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
      );
      return false;
    } else {
      setErrorPass("");
      return true;
    }
  };

  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1>Sign In Here</h1>

        <div className={style.form}>
         
          <form className={style.contain}>
            <TextField
             className={style.input}
              id="filled-basic"
              label="Email"
              variant="filled"
              sx={{
                color: "white",
               
                borderRadius: "5px",
                border: "1px solid white",
                "& label": { color: "white" },
                "& input": { color: "white" },
              }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            {errorEmail && <span className={style.error}>{errorEmail}</span>}
            <br />
            <TextField
             className={style.input}
              type="password"
              id="filled-basic"
              label="Password"
              variant="filled"
              sx={{
                color: "white",
               
                borderRadius: "5px",
                border: "1px solid white",
                "& label": { color: "white" },
                "& input": { color: "white" },
              }}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <br />
            {errorPass && <span className={style.error}>{errorPass}</span>}
            <br />
            <Button
              className={style.btn}
              variant="contained"
            
              onClick={handleLogin}
            >
              Login
            </Button>
            <br />
            <Button
            className={style.btn}
              variant="contained"
            >
              Forgot Password
            </Button>

            <br />
          </form>
        </div>
        <p>
          Don't have an account? <br />
          <Button
             sx={{
               marginTop:"20px"
                
             }}
            variant="contained"
            onClick={() => navigate("/joinus")}
          >
            Sign Up
          </Button>
        </p>
      </div>
    </div>
  );
}

export default SignIn;