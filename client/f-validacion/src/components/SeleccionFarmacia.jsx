import{ useState, useEffect } from 'react';
import axios from 'axios';

const SeleccionFarmacia = () => {
  const [farmacias, setFarmacias] = useState([]);
  const [selectedFarmacia, setSelectedFarmacia] = useState('');

  useEffect(() => {
    const fetchFarmacias = async () => {
      try {
        const response = await axios.get('http://localhost:3000/farmacias/todasFarmacias');
        setFarmacias(response.data);
      } catch (error) {
        console.error('Error fetching farmacias:', error);
      }
    };
    fetchFarmacias();
  }, []);

  const handleSelectChange = (e) => {
    setSelectedFarmacia(e.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl pb-5 font-semibold">Seleccionar Farmacia</h1>
        <select
          className="bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={selectedFarmacia}
          onChange={handleSelectChange}
        >
          <option value="">Seleccione una farmacia</option>
          {farmacias.map((farmacia, index) => (
            <option key={index} value={farmacia.farmacia}>
              {farmacia.farmacia}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SeleccionFarmacia;
