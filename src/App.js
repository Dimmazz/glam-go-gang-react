import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <section className="home">
          <div className="home__wrapper">
            <h1 className="home__title">
              Glam Go Gang!
            </h1>
            <p className="home__subtitle">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad velit facere eius fuga et dicta perferendis, impedit cupiditate ipsa libero praesentium at culpa a delectus eligendi sequi doloremque eaque magni.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
