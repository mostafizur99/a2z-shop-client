import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import ManageProducts from './Pages/Dashboard/AdminDashboard/ManageProducts/ManageProducts';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyProducts from './Pages/Dashboard/UserDashboard/MyProducts/MyProducts';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import useFirebase from './hooks/useFirebase';
import AddProduct from './Pages/Dashboard/AdminDashboard/AddProduct/AddProduct';
import UpdateProduct from './Pages/Dashboard/AdminDashboard/ManageProducts/UpdateProduct/UpdateProduct';
import ProductDetails from './Pages/Home/Products/ProductDetails/ProductDetails';

function App() {
  const { admin } = useFirebase();
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            {
              !admin &&
              <>
                <Route exact path="/dashboard" element={<MyProducts />}>
                </Route>
              </>
            }
            {
              admin &&
              <>
                <Route path="/dashboard" element={<ManageProducts />}>
                </Route>
                <Route path="/dashboard/addProduct" element={<AddProduct />}>
                </Route>
              </>
            }
          </Route>
          <Route path="/product/update/:updateId" element={<UpdateProduct />} />
          <Route path="/product/details/:detailId" element={<ProductDetails />} />
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="*" element={<NotFound />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
