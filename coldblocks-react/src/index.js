
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import Login from "./views/login";
import * as serviceWorker from './serviceWorker'

import SupplierLayout from "layouts/Supplier.jsx";
import AdminLayout from "layouts/Admin.jsx";

ReactDOM.render(
  
  <BrowserRouter>
    <Switch>
      {/* <Route path="/" component={Login}/> */}
      <Route path="/supplier" render={props => <SupplierLayout {...props} />} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      {/* <Redirect from="/" to="/admin/dashboard" /> */}
      <Login></Login>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.register();
