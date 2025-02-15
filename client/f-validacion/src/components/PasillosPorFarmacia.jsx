import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PasillosPorFarmacia = () => {
  const { farmacia } = useParams();
  const [pasillos, setPasillos] = useState([]);

  useEffect(() => {
    const fetchPasillos = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/farmacias/pasillosPorFarmacia/${farmacia}`);
        setPasillos(response.data);
      } catch (error) {
        console.error('Error fetching pasillos:', error);
      }
    };
    fetchPasillos();
  }, [farmacia]);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-3xl pb-5 font-semibold">Pasillos de la Farmacia {farmacia}</h1>
      <div className="grid grid-cols-1 gap-4">
        {pasillos.map((item, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {item.pasillo}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PasillosPorFarmacia;
