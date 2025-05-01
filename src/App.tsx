import Header from './components/Header'
import Catalog from './pages/Catalog'
import Purchase from './pages/Purchase'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Catalog />} /> 
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/purchase" element={<Purchase />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App
