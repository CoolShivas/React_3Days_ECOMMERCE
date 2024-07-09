import Authentication from "./assets/Authentication";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "./components/MainPage";
import { useState } from "react";


function App() {

  const [isLogin] = useState(true);

  return <>
    <div className="app_container">
      {isLogin ? (<Route path="/">
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