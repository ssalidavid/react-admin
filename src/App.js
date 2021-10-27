import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import  Home  from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/productsList/ProductList";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
         <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/users">
              <UserList/>
            </Route>
            <Route path="/user/:userId">
              <User/>
            </Route>
            <Route path="/newUser">
              <NewUser/>
            </Route>
            <Route path="/product">
              <ProductList/>
            </Route>
            <Route path="/product/:productId">
              <User/>
            </Route>
            <Route path="/newproduct">
              <NewUser/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
