import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Blog from "./components/Blog";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Blog />
      <ContactForm />
    </div>
  );
}

export default App;
