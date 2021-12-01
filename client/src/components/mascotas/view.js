//import { Link } from "@reach/router";
import { Link } from "react-router-dom";
import { useState } from "react";

const MascotaView = ({mascotas, id}) => {

    //const [data, setData] = useState({});
    const [data] = useState({});

    // useEffect(() => {
    //     setData(mascotas[id])
    // }, [])

    return <>
        <h1>Nombre: {data.name}</h1>
        <h1>Raza: {data.raza}</h1>
        <h1>Color: {data.color}</h1>
        <h1>Edad: {data.edad}</h1>

        <Link to="/mascotas/">Volver</Link>
    </>
}

export default MascotaView;