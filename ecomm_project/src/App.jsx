import Authentication from "./assets/Authentication";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "./components/MainPage";
import { useState } from "react";
import { useSelector } from "react-redux";


function App() {

  // const [isLogin] = useState(true); // Local state variable;

  const isUserLoggedIn = useSelector((store) => store.authentication.isUserLoggedIn);

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