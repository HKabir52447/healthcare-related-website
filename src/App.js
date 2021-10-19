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

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
