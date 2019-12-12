import React, {Component} from 'react'
import {Route,Switch,Redirect} from "react-router-dom"
import Admin from "./component/admin"

class App extends Component{
    render(){
        return( 
            <Admin>
                admin
            </Admin>
        )
    }
}

export default App