
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Featured from "./components/Featured";
import Tutorials from "./components/Tutorials";
import Videos from "./components/Videos";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";

function Home() {
  return (
    <main id="home">
      <Hero />
      <Articles />
      <Featured />
      <Tutorials />
      <Videos />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;