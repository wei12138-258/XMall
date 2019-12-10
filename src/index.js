import React from "react"
import {render} from "react-dom"
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"
import App from "./App"
import {mainRoutes} from "./router"
import 'antd/dist/antd.css'
import "./assets/css/global.css"

render((
  <Router>
    <Switch>
      <Route path="/admin" render={()=><App />} />
      {
        mainRoutes.map(item=>{
          return <Route key={item.pathname} path={item.pathname} component={item.component} />
        })
      }
      <Redirect from="/" to="/admin" exact />
    </Switch>
  </Router>
),document.getElementById("root"))