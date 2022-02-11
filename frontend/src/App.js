import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyPosts from "./screens/MyPosts/MyPosts";
// Use Router Dom 5.2.0
import { BrowserRouter, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import { Contact } from "../src/components/Contact/Contact";
import RSAinfo from "../src/components/RSA/RSAinfo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" component={LandingPage} exact></Route>
        <Route path="/posts" component={MyPosts} exact></Route>
        <Route path="/login" component={LoginScreen} exact></Route>
        <Route path="/register" component={RegisterScreen} exact></Route>
        <Route path="/contact" component={Contact} exact></Route>
        <Route path="/rsa" component={RSAinfo} exact></Route>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
