import React from "react";
import { Container } from "reactstrap";
import Navi from "../Navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";
import CartDetail from "../Cart/CartDetail";
import AddOrUpdateProduct from "../Products/AddOrUpdateProduct";
import NotFound from "../Common/NotFound";
import '../../style/app.css'

function App() {
  return (
    <div>
      <Navi/>
      <Container>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/product" component={Dashboard} />
          <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
          <Route path="/saveproduct" component={AddOrUpdateProduct} />
          <Route path="/cart" component={CartDetail} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
