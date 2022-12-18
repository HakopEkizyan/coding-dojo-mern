import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductView from './components/ProductView';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductEdit from './components/ProductEdit';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductForm />} />
          <Route path="/list" element={<ProductList />} />
          <Route path="/:id" element={<ProductView />} />
          <Route path="/edit/:id" element={<ProductEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;