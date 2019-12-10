import {
    Login,
    ArticleEdit,
    ArticleList,
    NotFound,
    Setting,
    DashBorad
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
    component: DashBorad
},{
    pathname: '/admin/setting',
    component: Setting
},{
    pathname: '/admin/articleEdit' ,
    component: ArticleEdit
},{
    pathname: '/admin/articleList',
    component: ArticleList
},

]