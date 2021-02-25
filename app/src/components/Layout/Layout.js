import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import cn from "classnames";

import useStyles from "./styles";

import Header from "../Header";
import Sidebar from "../Sidebar";

import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Tables from "../../pages/tables";
import Charts from "../../pages/charts";
import Products from '../../pages/products';
import Account2 from '../../pages/account';
import CheckOut from '../../pages/check-out';

function Layout(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <>
          <Header />
          <Sidebar />
          <div
            className={cn(classes.content, {
              [classes.contentShift]: props.isDrawerOpen
            })}>
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/products" component={Products} />
              <Route path="/app/checkout" component={CheckOut} />

              <Route path="/app/me" component={Account2} />
            </Switch>
          </div>
        </>
    </div>
  );
}

/*
* <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              *   <Route path="/app/notifications" component={Notifications} />
* */

export default withRouter(Layout);
