import React, {Component} from 'react'
import { Layout, Menu, Icon } from 'antd'
import {withRouter} from "react-router-dom"
import "@/assets/css/admin/admin.css"
import {adminRoute} from "@/router/routes"
const menus = adminRoute.filter(item=>item.isNav === true)

const { Header, Content, Sider } = Layout;

class Admin extends Component{
    handleClick=(item)=>{
      this.props.history.push(item.key)
    }
    render(){
      console.log(this.props)
        return(
            <div className="admin"> 
                <Layout>
                  <Header className="header" style={{background: "#2d6dcc", height: "44px", lineHeight: "44px", display: "flex"}}>
                    <div className="logo">XMall后台管理系统</div>
                    <Menu
                      theme="dark"
                      mode="horizontal"
                      defaultSelectedKeys={['1']}
                      style={{ lineHeight: '44px', background: "#2d6dcc"}}
                    >
                      <Menu.Item key="1">平台</Menu.Item>
                      <Menu.Item key="2">财务</Menu.Item>
                      <Menu.Item key="3">商城前台</Menu.Item>
                    </Menu>
                  </Header>
                  <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                      <Menu
                        mode="inline"
                        defaultSelectedKeys={[this.props.location.pathname]}
                        style={{ height: '100%', borderRight: 0 }}
                      >
                        {
                          menus.map(item=>{
                            return <Menu.Item onClick={this.handleClick} key={item.pathname}> <Icon type={item.icon} /> {item.title}</Menu.Item>
                          })
                        }
                      </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                      <Content
                        style={{
                          background: '#fff',
                          padding: 24,
                          margin: 0,
                          height: "auto",
                        }}
                      >
                       {this.props.children}
                      </Content>
                    </Layout>
                  </Layout>
                </Layout>
            </div>
        )
    }
}

export default withRouter(Admin)