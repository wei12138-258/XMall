import React from "react"
import {render} from "react-dom"
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import App from "./App"
import {mainRoute} from "./router/routes"
import 'antd/dist/antd.css'
import "./assets/css/global.css"

render(
    (
    <Router>
        <Switch>
            <Route path="/admin" render={(routerProps)=><App{...routerProps}/>} />
            {
                mainRoute.map(router=>{
                    return <Route key={router.pathname} path={router.pathname} component={router.component}/>
                })
            }
            <Redirect to="admin" from="/" exact/>

        </Switch>
    </Router>
    )
,document.getElementById("root"))
