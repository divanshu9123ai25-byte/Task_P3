import Header from "./components/Header";
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Videos from "./components/Videos";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Hero />
        <Articles />
        <Videos />
      </main>

      <Footer />
    </div>
  );
}

export default App;