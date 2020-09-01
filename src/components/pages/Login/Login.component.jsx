// Import: Dependencies
import React from "react";

// Import: Firebase Authentication
import { auth, provider } from "../../../firebase";

// Import: Styling
import "./Login.styles.scss";

// Import: Material UI Core
import { Button } from "@material-ui/core";

// Import: StateProvider
import { useStateValue } from "../../../StateProvider";

// Import: Reducer
import { actionTypes } from "../../../reducer";

// page: Login
function Login() {
  // StateProvider
  const [state, dispatch] = useStateValue();

  // Sign in Authentication with Google
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="Login">
      <div className="Login__logo">
        <img
          className="Login__logoImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebook logo"
        />
        <img
          className="Login__logoText"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/800px-Facebook_Logo_%282019%29.svg.png"
          alt="Facebook text logo"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

// Export: Login
export default Login;
