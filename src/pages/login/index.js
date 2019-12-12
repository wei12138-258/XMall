import React, {Component} from 'react'
import "../../assets/css/login/login.css"
import Video from "../../assets/img/Ipad.mp4"
import Content from "../login/component/content"

class Login extends Component{
    render(){
        return(
            <div style={{position:"relative",height: "100%"}}>
                <div className="vido">
                    <video autoPlay loop muted className="bg">
                        <source src={Video} type="video/mp4"/>
                    </video>
                </div>
                <div className="container">
                    {/* 头部 */}
                    <div className="header"  style={{textAlign:"center"}}>
                        <h1>
                            XMALL
                            <span className="title">后台管理系统</span>
                        </h1>
                    </div>
                    {/* 内容区 */}
                    <div className="content">
                        <div className="sub-main-w3">
                            <div className="sub-title">
                                <h2>Login Here</h2>
                            </div>
                        </div>
                        {/* <form id="login" action method="post" width="100%">
                            <input placeholder="用户名" name="username" className="user" type="text"/>
                            <span className="icon1">
                                <i className="fa fa-user"></i>
                            </span>
                            <br/>
                            <br/>
                            <input placeholder="密码" name="password" className="psw" type="password"/>
                            <span className="icon2"></span>
                            <br/>
                            <br/>
                            <div>
                                
                            </div>
                        </form> */}
                        <Content/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login