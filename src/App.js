import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Amplify } from 'aws-amplify'

Amplify.configure({
  Auth:{
    Cognito:{
      userPoolId:process.env.REACT_APP_USER_POOL_ID,
      userPoolClientId:process.env.REACT_APP_CLIENT_ID,
      loginWith:{
        email:true,
      },
      signUpVerificationMethod: "code",
      userAttributes:{
        email:{
          required:true,
        },
      },
      passwordFormat:{
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      }
    }
  }
})

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Home />} path='/'/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
