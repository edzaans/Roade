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
import Profile from "./screens/Profile/Profile";
import Connection from "./components/Test/Connection";
import UsFooter from "../src/components/Content/About-Us/UsFooter";
// Chat bot components
import FAQ from "../src/components/ChatBot/FAQ";
import Tutorial from "../src/components/ChatBot/Tutorial";
import TutorialText from "../src/components/ChatBot/TutorialText";

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
        {/* Route to jobs/ send props for search functionality */}
        <Route
          path="/job_list"
          component={() => <Connection search={search} />}
          exact
        ></Route>
        <Route path="/profile" component={Profile} exact></Route>
        <Route path="/about-us" component={UsFooter} exact></Route>
        <Route path="/faq" component={FAQ} exact></Route>
        <Route path="/tutorial" component={Tutorial} exact></Route>
        <Route path="/tutorialtext" component={TutorialText} exact></Route>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
