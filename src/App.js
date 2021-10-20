import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Doctors from "./pages/Doctors/Doctors";
import Contact from "./pages/Contact/Contact";
import Notfounding from "./pages/Notfounding/Notfounding";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ContextProvider from "./Context/ContextProvider";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import userEvent from "@testing-library/user-event";
import DoctorDetails from "./pages/DoctorDetails/DoctorDetails";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              {" "}
              <Home></Home>{" "}
            </Route>
            <Route exact path="/services">
              {" "}
              <Services></Services>{" "}
            </Route>
            <PrivateRoute exact path="/services/:id">
              {
                <ServiceDetails></ServiceDetails>}
            </PrivateRoute>
            <PrivateRoute exact path="/doctors/:id">
              {
                <DoctorDetails></DoctorDetails>}
            </PrivateRoute>
            <Route exact path="/doctors">
              {" "}
              <Doctors></Doctors>{" "}
            </Route>
            <Route exact path="/about">
              {" "}
              <About></About>{" "}
            </Route>
            <Route exact path="/contact">
              {" "}
              <Contact></Contact>{" "}
            </Route>
            <Route exact path="/signin">
              {" "}
              <Login></Login>{" "}
            </Route>
            <Route exact path="/signup">
              {" "}
              <Register></Register>{" "}
            </Route>
            <Route exact path="/">
              {" "}
              <Home></Home>{" "}
            </Route>
            <Route>
              {" "}
              <Notfounding></Notfounding>{" "}
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
