
import { BrowserRouter ,Route,
  Routes,} from "react-router-dom";

import './App.css';

import CustomerForm from './Form/CustomerForm.js';
import CustomerDetails from './CustomerDetails/index.js';

function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerForm />} />
        <Route path="/TravelDetails" element={<CustomerDetails />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
