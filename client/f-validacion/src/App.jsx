import { Routes, Route } from 'react-router-dom';
import SeleccionFarmacia from './components/SeleccionFarmacia';
import FarmaciaDetalle from './components/FarmaciaDetalle'; // Asegúrate de tener este componente

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SeleccionFarmacia />} />
      <Route path="/farmacia/:farmacia" element={<FarmaciaDetalle />} />
    </Routes>
  );
};

export default App;
