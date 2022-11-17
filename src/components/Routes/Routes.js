import React from "react";
import { Switch, Route } from "react-router-dom";
import { Dashboard } from "../../pages/Dashboard/Dashboard";
import { Login } from "../../pages/Login/Login";


export function Routes() {
    return(
        <>
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </>
    )
}