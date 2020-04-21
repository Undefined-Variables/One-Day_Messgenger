import {Redirect, Route} from "react-router-dom";
import React from "react";

export function PublicRoute({ component: Component, authenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authenticated === false
                ? <Component {...props} />
                : <Redirect to='/chat' />}

        />

    )

}