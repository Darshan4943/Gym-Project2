import React, { useState } from "react";

import style from "./SignUp.module.css";
import { Box, Button, TextField } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';


const SignUp = () => {
 
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
   
  });

  function handleName(e) {
    const input = { ...data };
    input.name = e.target.value;
    setData(input);
  }

  function handleEmail(e) {
    const input = { ...data };
    input.email = e.target.value;
    setData(input);
  }

  function handlePassword(e) {
    const input = { ...data };
    input.password = e.target.value;
    setData(input);
  }



  function getData() {
    const users = localStorage.getItem("users");
    if (users) {
      try {
        return JSON.parse(users);
      } catch {
        return [];
      }
    }
    return [];
  }

  function handleSubmit(e) {
    e.preventDefault();

    const regexpass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    const regexemail = /^\S+@\S+\.\S+$/;
    const users = getData();
    if (
      !data.name ||
      
      !data.email ||
      !data.password 
     
    ) {
      alert("Please Fill All the deatails!!");
    } 
    else if (!regexpass.test(data.password)) {
      alert( "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!");
    }
    else if (!regexemail.test(data.email)) {
      alert("It should be a valid email address");
    }
      else {
      alert("registeration success");
      users.push(data);
      localStorage.setItem("users", JSON.stringify(users));
      
      navigate("/signin")
    }
  }

  return (
    <div className={style.main}>
      <div className={style.container}>
     
        <h1>Register Here</h1>
       <div className={style.form}>
       
      
        <form className={style.contain} onSubmit={(e) => handleSubmit(e)} >
          <TextField  className={style.input}
            id="filled-basic"
            label="Name"
            variant="filled"
            sx={{
              color: "white",
             
              borderRadius: "5px",
              border: "1px solid white",
              "& label": { color: "white" },
              "& input": { color: "white" },
            }}
            onChange={(e) => handleName(e)}
          />
          <TextField  className={style.input}
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
            onChange={(e) => handleEmail(e)}
          />
          <TextField  className={style.input}
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
            onChange={(e) => handlePassword(e)}
          />
        
          <Button  
               className={style.btn}
              variant="contained" type="submit">
            Register
          </Button>
        </form>
      
        </div>
        <p>
          Don t have an account? <br />
          <Button
          
          sx={{
            marginTop:"20px"
             
          }}
            variant="contained"
            onClick={() => navigate("/signin")}
          >
            Sign Up
          </Button>
        </p>
      </div>
     
    </div>
  );
};

export default SignUp;