import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import avatar from "./assets/images/avatar.jpg";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  const callback = (entries) => {
    entries.forEach((entry) => {
      const elementDistanceFromTop = entry.target.getBoundingClientRect().top;

      if (
        elementDistanceFromTop <=
        (window.innerHeight || document.documentElement.clientHeight / 1.25)
      ) {
        entry.target.style.animation = entry.target.dataset.animate;
      } else {
        entry.target.style.animation = "none";
      }
    });
  };

  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = avatar;
  }, []);

  useEffect(() => {
    let observer = new IntersectionObserver(callback);
    const animationItems = document.querySelectorAll(".animate");

    animationItems.forEach((item) => {
      observer.observe(item);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
