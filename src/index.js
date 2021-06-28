import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import CreateAccount from './createaccount';
import Login from './login';
import Deposit from './deposit';
import Withdraw from './withdraw';
// import Balance from './balance';
import AllData from './alldata';
import 'bootstrap/dist/css/bootstrap.min.css';


export const UserContext = React.createContext(null);
export const LoggedInContext = React.createContext(null);


function Spa() {
  return (
    <HashRouter>
      <LoggedInContext.Provider value={{ loggedUserID: undefined }}>
        <UserContext.Provider value={{ users: [{ name: 'abel', email: 'abel@mit.edu', password: 'secret', balance: 100 }, { name: 'ricardo', email: 'ricardo@labviteri.com', password: 'secret', balance: 200 }] }}>
          <NavBar />
          <div className="container" style={{ padding: "10px" }}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>
      </LoggedInContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa />,
  document.getElementById('root')
);
