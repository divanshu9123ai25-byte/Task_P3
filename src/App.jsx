
import Header from "./components/Header";
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Featured from "./components/Featured";
import Tutorials from "./components/Tutorials";
import Videos from "./components/Videos";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main id="home">
        <Hero />
        <Articles />
        <Featured />
        <Tutorials />
        <Videos />
      </main>
      <Footer />
    </div>
  );
}

export default App;
