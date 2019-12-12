import React, {Component} from 'react'
import {adminRoute} from "../../router/routes"
import { Layout, Menu, Icon } from 'antd'
import "../../assets/css/admin/admin.css"

const { SubMenu } = Menu;
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
                  <Header className="header" style={{background: "#2d6dcc", height: "44px", lineHeight: "44px"}}>
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
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                      >
                        <SubMenu
                          key="sub1"
                          title={
                            <span>
                              <Icon type="user" />
                              统计报表
                            </span>
                          }
                        >
                          <Menu.Item>订单销量统计</Menu.Item>
                        </SubMenu>
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