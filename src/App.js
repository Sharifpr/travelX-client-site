import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import NotFound from "./components/NotFound/NotFound.js";

import SignUp from "./components/SignUp/SignUp";
import AuthProvider from "./contexts/AuthProvider.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import Packages from "./components/Packages/Packages";
import PackageDetails from "./components/PackageDetails/PackageDetails";
// import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
// import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route exact path="/packages">
              <Packages></Packages>
            </Route>

            <Route path="/packages/:_id">
              <PackageDetails></PackageDetails>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
