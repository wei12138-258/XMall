import {
    Login,
    ArticleEdit,
    ArticleList,
    NotFound,
    Setting,
    DashBoard
} from "../pages"

export const mainRoute = [{
    pathname: '/login',
    component: Login,
    
},{
    pathname: '/404',
    component: NotFound
}]

export const adminRoute = [{
    pathname: '/admin/dashboard',
    component: DashBoard,
    title: "统计报表"
},{
    pathname: '/admin/setting',
    component: Setting,
    title: "系统管理"
},{
    pathname: '/admin/articleEdit',
    component: ArticleEdit,
    title: "商品列表"
},{
    pathname: '/admin/articleList',
    component: ArticleList,
    title: "订单列表"
},

]