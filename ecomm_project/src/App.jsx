import Authentication from "./assets/Authentication";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "./components/MainPage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogIn } from "./store/reduxStore";


function App() {

  // const [isLogin] = useState(true); // Local state variable;

  const isUserLoggedIn = useSelector((store) => store.authentication.isUserLoggedIn);

  const localToken = localStorage.getItem("Save-Token");
  // console.log(localToken); // Getting the token on console screen;

  const dispatch = useDispatch();

  useEffect(() => {
    if (localToken) {
      dispatch(setLogIn(localToken));
    }
  }, [localToken]);

  return <>
    <div className="app_container">
      {isUserLoggedIn ? (<Route path="/">
        <MainPage></MainPage>
      </Route>)
        :
        (<Route path="/auth">
          <Authentication></Authentication>
        </Route>)}

    </div>
  </>
};


export default App;