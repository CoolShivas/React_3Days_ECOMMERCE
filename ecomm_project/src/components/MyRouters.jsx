import Cart from "./bucket/Cart";
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
            <Route path="/mainpage" exact> <StorePage></StorePage> </Route>
            <Route path="/mainpage/homepage"> <HomePage></HomePage> </Route>
            <Route path="/mainpage/aboutpage"> <AboutPage></AboutPage> </Route>
            <Route path="/mainpage/contactpage"> <ContactPage></ContactPage> </Route>
            <Route path="/mainpage/addproducts"> <AddProducts></AddProducts> </Route>
            <Route path="/mainpage/profile"> <ProfilePage></ProfilePage> </Route>
            <Route path="/mainpage/cart"> <Cart></Cart> </Route>
        </Switch>
    )
}

export default MyRouters;