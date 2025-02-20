import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Header />
      <main>
        <Section name="intro" />
        <Section name="about" />
        <Section name="creation" />
      </main>
      <Footer />
    </>
  );
}

export default App;
