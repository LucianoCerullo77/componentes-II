import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer title="Our Products"/>
      <Footer/>
      
    </div>
  );
}

export default App;
