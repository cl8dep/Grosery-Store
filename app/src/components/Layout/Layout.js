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
              <Route path="/app/typography" component={Typography} />
              <Route path="/app/tables" component={Tables} />

              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />

              <Route path="/app/ui/charts" component={Charts} />
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
