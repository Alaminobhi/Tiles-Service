import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/Login/PrivateRoute';
import { createContext, useState } from 'react';
import Home from './components/MainBody/Home';
import Login from './components/Login/Login';
import AdminSitevar from "./components/AdminPanel/AdminSitevar";
import Admin from "./components/AdminPanel/Admin";
import AddService from "./components/AdminPanel/AddService";
import Navbar from "./components/Share/Navbar";
import ContactForm from "./components/MainBody/ContactUS/ContactForm";
import MyOdersForm from "./components/MainBody/MyOrders/MyOdersForm";
import AllOrders from "./components/AdminPanel/AllOrders";
import Contacts from "./components/AdminPanel/Contacts";

export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <h3>{loggedInUser.name}</h3>
    <Router>
      <div className="fixed-top bg-light"><Navbar></Navbar></div>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>
       <PrivateRoute path="/addService">
        <AddService></AddService>
       </PrivateRoute>
       <PrivateRoute path="/adminSitevar">
         <AdminSitevar></AdminSitevar>
       </PrivateRoute>
       <PrivateRoute path="/allOrders">
         <AllOrders></AllOrders>
       </PrivateRoute>
        <Route path="/login">
         <Login></Login>
        </Route>
        <Route path="/contact">
          <ContactForm></ContactForm>
        </Route>
        <PrivateRoute path="/contacts">
          <Contacts></Contacts>
        </PrivateRoute>
        <PrivateRoute path="/myOrdersForm">
          <MyOdersForm></MyOdersForm>
        </PrivateRoute>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
