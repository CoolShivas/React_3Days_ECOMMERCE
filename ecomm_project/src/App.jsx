import Authentication from "./assets/Authentication";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import MyRouters from "./components/MyRouters";
import MainPage from "./components/MainPage";
import { useState } from "react";


function App() {

  const [isLogin] = useState(true);

  return <>
    <div className="app_container">
      {!isLogin ? <Authentication /> : <Route path="/">
        <>
          <MainPage></MainPage>
          <MyRouters></MyRouters>
        </>
      </Route>}

    </div>
  </>
};


export default App;