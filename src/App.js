import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard  from './Components/Dashboard'
import Layout from './Components/shared/Layout'
import Product from './Components/shared/Product';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />}/>
      <Route path ='Product' element={<Product />}/>
      </Route>
      <Route path="login" element={<div>this login page</div>}/>
    </Routes>
   </Router>
  );
}

export default App;
