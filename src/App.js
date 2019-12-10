import React, {Component} from 'react'
import {Route, Switch, Redirect} from "react-router-dom"
import Admin from "./component/admin"
import {adminRoutes} from "./router"


class App extends Component{
  render(){
    return(
      <Admin>
        <Switch>
          {
            adminRoutes.map(item=>{
              return <Route key={item.pathname} path={item.pathname} render={(routerProps)=><item.component {...routerProps}/>} />
            })
          }
          <Route path="/admin/setting" component={adminRoutes[3].component}  exact/>

        </Switch>
      </Admin>
    )
  }
}

export default App