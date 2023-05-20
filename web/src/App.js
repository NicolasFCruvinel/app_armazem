//importando estilo global
import GlobalStyles from "./styles/GlobalStyles";

// React-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ItemContext } from "./contexts/ItemContexts";

// Rotas 
import Layout from "./components/layout";      // index
import Help from "./pages/Help"                // help_index
import Login from "./pages/LoginFuncionario"   // Login
import AddItem from "./pages/AddItem"          // Tela do Funcionario

function App() {
  return (
      <Router>
        <ItemContext.Provider>
          <Routes>
            <Route path="/" element={<Layout/>} />
            <Route path="/help" element={<Help/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/addItem" element={<AddItem/>} />
            {/* Adicione outras rotas conforme necessário */}
          </Routes>
        </ItemContext.Provider>
        <GlobalStyles/>
      </Router>
  );
}
export default App;