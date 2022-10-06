import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';
import React , {useState} from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss'


function Login() {
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password,setPassword] = useState("");
console.log(email,password);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm(
    {
      mode: 'onChange'
    }
  );

  const onSubmit = async(loginData) => {
    navigate("/home");
    await axios.post("https://reqres.in/api/login", {

      email: loginData.email,
      password: loginData.password,
    })
    .then((result) => {
      console.log(result.data);
      localStorage.setItem("token", result.data.token);
      navigate("/home");
    })
    .catch((error) => {
      alert("service error");
      console.log(error);
    });
    // let postData = {
    //   email: loginData.email,
    //   password: loginData.password,
    // }
    // if(loginData){
    //   localStorage.setItem("loginData" , JSON.stringify(postData))
    // }
  };
  const handlePasswordChange = (e) => {
       setPassword(e.target.value)
  }
  const handleEmailChange = (e) =>{
        setEmail(e.target.value)
  }
  return (
    <div>
      <div className={styles.containerImg}>
        <img src='assests/images/hotel-tropical-summer-landscape-tree.jpg' />
      </div>
      <div className={styles.adminLoginWrapper}>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="email"
            type="email"
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className={styles.inputBox}
            {...register("email", {
              required: "Email field is required",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: `Please enter valid Email.`,
              },
            })}
          />
          <div className={styles.errorMsg}>
            <ErrorMessage
              errors={errors}
              name="email"
              render={(messages) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                  : null;
              }}
            />
          </div>
          <div className={`${styles.positionRelative}`}>
            <input
              name="password"
              placeholder="Password"
              className={`${styles.inputBox} ${styles.inputBoxSecond}`}
              type="password"
              onChange={handlePasswordChange}
              {...register("password", {
                required: `Password field is required`,
                minLength: {
                  value: 6,
                  message: "Password must have at least 6 characters"
                },
                validate: {
                  lowerCase: (value) => value && /[a-z]/.test(value) || 'Must be at least one lowercase letter',
                  upperCase: (value) => value && /[A-Z]/.test(value) || 'Must be at least one uppercase letter',
                  numberCase: (value) => value && /[0-9]/.test(value) || 'Must be at least one number',
                  specialCharacCase: (value) => value && /[^a-zA-Z0-9]/.test(value) || 'Must be at least one special chars',
                }
              })}
            />
            <div className={styles.errorMsg}>
              <ErrorMessage
                errors={errors}
                name="password"
                render={(messages) => {
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    ))
                    : null;
                }}
              />
            </div>
          </div>
          <button className={styles.solidSecondaryBtn} onClick={handleSubmit(onSubmit)}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
