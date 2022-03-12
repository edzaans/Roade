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
import CreatePost from "../src/screens/Create_Post/Create_Post";
import SinglePost from "./screens/SinglePost/SinglePost";
import { useState } from "react";
import { SampleData } from "./components/Test/SampleData";

function App() {
  // Search bar functionality
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Route path="/" component={LandingPage} exact></Route>
        <Route
          path="/posts"
          component={() => <MyPosts search={search} />}
          exact
        ></Route>
        <Route path="/login" component={LoginScreen} exact></Route>
        <Route path="/register" component={RegisterScreen} exact></Route>
        <Route path="/contact" component={Contact} exact></Route>
        <Route path="/rsa" component={RSAinfo} exact></Route>
        <Route path="/createpost" component={CreatePost} exact></Route>
        <Route path="/posts/:id" component={SinglePost}></Route>
        <Route path="/testPosts" component={SampleData} exact></Route>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
