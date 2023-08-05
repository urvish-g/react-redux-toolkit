import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetail from './component/ProductDetail';
import ProductListing from './component/ProductListing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductListing />}></Route>
          <Route path='/product/:id' element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
