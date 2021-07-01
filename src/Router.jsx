import React from "react";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
// import Beautiful from './test'
import Simple from "./draggable/simple"
import Customized from "./draggable/Customized"
import Square from "./draggable/square"
import Rgl from "./draggable/rgl"
import RglResponsive from "./draggable/rgl_responsive"

const Router = () => {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path='/' exact>
                        <Rgl/>
                    </Route>
                    <Route path='/beautiful' exact>
                        {/*<Beautiful/>*/}
                    </Route>
                    <Route path='/simple' exact>
                        <Simple/>
                    </Route>
                    <Route path='/square' exact>
                        <Square/>
                    </Route>
                    <Route path='/customized' exact>
                        <Customized/>
                    </Route>
                    <Route path='/rgl' exact>
                        <Rgl/>
                    </Route>
                    <Route path='/rgl2' exact>
                        <RglResponsive/>
                    </Route>
                </Switch>
                <Redirect to='/'/>
            </HashRouter>
        </div>
    )
}

export default Router