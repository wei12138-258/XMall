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
    component:  DashBoard,
    title: "仪表盘",
    isNav: true
},{
    pathname: '/admin/setting',
    component: Setting,
    title: "系统管理",
    isNav: true
},{
    pathname: '/admin/articleEdit' ,
    component: ArticleEdit,
    isNav: false
},{
    pathname: '/admin/articleList',
    component: ArticleList,
    title: "商品管理",
    isNav: true
},

]