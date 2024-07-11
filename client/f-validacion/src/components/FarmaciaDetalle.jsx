import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FarmaciaDetalle = () => {
  const { farmacia } = useParams();
  const [pedido, setPedido] = useState(null);

  useEffect(() => {
    const fetchPedido = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/farmacias/pedidoFarmacia/${farmacia}`);
        setPedido(response.data);
      } catch (error) {
        console.error('Error fetching pedido:', error);
      }
    };
    fetchPedido();
  }, [farmacia]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl pb-5 font-semibold">Detalles de la Farmacia</h1>
        <p>Farmacia seleccionada: {farmacia}</p>
        {pedido ? (
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Pedido:</h2>
            <ul className="list-disc text-left pl-5 mt-2">
              {pedido.map((item) => (
                <li key={item.id}>
                  <p><strong>Fecha:</strong> {item.fecha}</p>
                  <p><strong>Código SAP:</strong> {item.codigo_sap}</p>
                  <p><strong>Código Artículo:</strong> {item.codigo_articulo}</p>
                  <p><strong>Descripción:</strong> {item.descripcion}</p>
                  <p><strong>Pasillo:</strong> {item.pasillo}</p>
                  <p><strong>Laboratorio:</strong> {item.laboratorio}</p>
                  <p><strong>Ubicación:</strong> {item.ubicacion}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-4">Cargando detalles del pedido...</p>
        )}
      </div>
    </div>
  );
};

export default FarmaciaDetalle;
