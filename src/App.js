import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <div className="Home">
        <Header />
        <Home />
      </div>
    </div>
  );
};

export default App;
