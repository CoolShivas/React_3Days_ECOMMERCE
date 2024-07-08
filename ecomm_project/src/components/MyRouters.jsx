import StorePage from "../pages/StorePage";
import ProfilePage from "../pages/ProfilePage";
import AddProducts from "../pages/AddProducts";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

const MyRouters = () => {
    return (
        <Switch>
            <Route path="/" exact> <StorePage></StorePage> </Route>
            <Route path="/homepage"> <HomePage></HomePage> </Route>
            <Route path="/aboutpage"> <AboutPage></AboutPage> </Route>
            <Route path="/contactpage"> <ContactPage></ContactPage> </Route>
            <Route path="/addproducts"> <AddProducts></AddProducts> </Route>
            <Route path="/profile"> <ProfilePage></ProfilePage> </Route>
        </Switch>
    )
}

export default MyRouters;