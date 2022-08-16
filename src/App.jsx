import {  BrowserRouter,  Routes,  Route } from "react-router-dom";
import Login from './layout/Login';
import LandingPage from './paginas/LandingPage';
import Dashboard from './layout/Dashboard';
import FormularioLogin from './paginas/FormularioLogin';
import FundamentosUseState from './paginas/FundamentosUseState';
import FundamentosUseEffect from './paginas/FundamentosUseEffect';


function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />}>
        </Route>

        <Route path="/login" element={<Login />}>
          <Route index element={<FormularioLogin />}/>
        </Route>

        <Route path="/fundamentos" element={<Dashboard />}>
          <Route path="usestate" element={<FundamentosUseState />} />
          <Route path="useffect" element={<FundamentosUseEffect />} />
        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
