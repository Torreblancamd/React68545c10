import listaProductos from "../data";
import { Link } from "react-router-dom";
import "./Productos.css";


function Productos(){
    return (
        <div>
            <h1>Productos</h1>
            <div className="galeria">
                {listaProductos.map((producto)=>{
                    return(
                        <article key={producto.id}>
                            <h5>{producto.title}</h5>
                            <img src={producto.image} alt={producto.description}/>
                            <Link>Ver Detalle</Link>
                        </article>
                    );
                })}
            </div>
        </div>
    )
}

export default Productos;