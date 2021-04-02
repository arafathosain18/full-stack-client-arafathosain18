import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Componants/Header/Header';
import Home from './Componants/Home/Home';
import NoMatch from './Componants/NoMatch/NoMatch';
import AddBooks from './Componants/AddBooks/AddBooks';
import Login from './Componants/Login/Login';
import CheckOut from './Componants/CheckOut/CheckOut';
import { createContext } from 'react';
import { useState } from 'react';
import Orders from './Componants/Orders/Orders';
import PrivateRoute from './Componants/PrivateRoute/PrivateRoute';
import AdminPanel from './Componants/AdminPanel/AdminPanel';

export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState({});
  const [orders, setOrders] = useState([]);
  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]}>
    
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path='/addBooks'>
            <AddBooks />
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <PrivateRoute path = '/checkout/:bookId'>
              <CheckOut></CheckOut>
            </PrivateRoute>
            <PrivateRoute path= '/orders'>
                <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path = '/admin'>
                <AdminPanel></AdminPanel>
            </PrivateRoute>
            <Route path="*">
              <NoMatch />
          </Route>
        </Switch>
      </Router>
     
      </UserContext.Provider>
  );
}

export default App;
