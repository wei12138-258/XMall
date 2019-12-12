import React, {Component} from 'react'
import {Route,Switch,Redirect} from "react-router-dom"
import Admin from "./component/admin"
import {adminRoute} from "./router/routes"

class App extends Component{
    render(){
        return( 
            <Admin>
                <Switch>
                    {
                        adminRoute.map(item=>{
                            return <Route key={item.pathname} path={item.pathname} render={(routerProps)=><item.component {... routerProps}/>}/>
                        })
                    }
                    <Redirect to={adminRoute[0].pathname} from="/admin" exact/>
                </Switch>
            </Admin>
        )
    }
}

export default App