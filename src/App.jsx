import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import CreateArticle from "./components/CreateArticle";
function App() {
  return (
    <>
      <main>
        <Navbar />
        <Banner />
        <CreateArticle />
      </main>
    </>
  );
}

export default App;
