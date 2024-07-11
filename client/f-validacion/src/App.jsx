import { Routes, Route } from 'react-router-dom';
import SeleccionFarmacia from './components/SeleccionFarmacia';
import FarmaciaDetalle from './components/FarmaciaDetalle'; // Asegúrate de tener este componente
import PasillosPorFarmacia from './components/PasillosPorFarmacia';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SeleccionFarmacia />} />
      <Route path="/farmacia/:farmacia" element={<FarmaciaDetalle />} />
      <Route path="/pasillos/:farmacia" element={<PasillosPorFarmacia />} />
    </Routes>
  );
};

export default App;
