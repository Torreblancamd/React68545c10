import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Productos from "./pages/Productos";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import DetalleProducto from "./pages/DetalleProducto";

function App() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/deportes" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="galeria" element={<Galeria/>}/>
          <Route path="productos" element={<Productos/>}/>
          <Route path="productos/:productoId"  element={<DetalleProducto/>}/>
          <Route path="*" element={<Error/>} />
        </Route>        
      </Routes>   
    </BrowserRouter>    
  );
}

export default App;
