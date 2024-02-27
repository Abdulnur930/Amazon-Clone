
import './App.css';
import CarouselEffect from './Component/Carousel/CarouselEffect';
import Category from './Component/Category/Category';
import Header from './Component/Header/Header';
import Product from './Component/Product/Product';

function App() {
  return (
    <div className="App">
      <Header/>
      <CarouselEffect/>
      <Category/>
      <Product/>
    </div>
  );
}

export default App;
