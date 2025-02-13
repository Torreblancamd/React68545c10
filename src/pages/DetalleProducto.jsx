import { useParams } from "react-router-dom";
import listaProductos from "../data";
import { Link } from "react-router-dom";
import "./Productos.css"

function DetalleProducto(){


    const {productoId} = useParams();

    const producto = listaProductos.find((prod)=>prod.id == productoId);

    const { image , title , description , price } = producto;

    return (
        <div className="galeria">
            <img src={image} />
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h3>Precio: {price} $</h3>
            <Link to="/deportes/productos">Volver</Link>
        </div>
    )

}

export default DetalleProducto;