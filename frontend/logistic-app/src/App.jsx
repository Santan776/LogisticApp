import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './pages/Main';
import CreateOrder from './pages/CreateOrder';
import Orders from './pages/Orders';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' Component={Main} />
          <Route path='create-order' Component={CreateOrder} />
          <Route path='orders' Component={Orders} />
        </Routes>
      </Router>
    </>
  )
}

export default App
