import React from "react";
import {
  Route,
  Switch,
} from "react-router-dom";

import { Routers } from "./routers";

export function AppRoutes() {
  return (
    <Switch>
      {
        Routers.map((route, idx) => {
          return (
            <Route
              key={idx}
              exact={route.exact}
              path={route.path}
            >
              <route.component />
            </Route>
          )
        })
      }
    </Switch>
  )
}