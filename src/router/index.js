import {
  Login,
  DashBoard,
  NotFound,
  Setting,
  ArticleList,
  ArticleEdit
} from "../pages"

export const mainRoutes = [
  {
    pathname : "/login",
    component : Login
  },
  {
    pathname : "/404",
    component : NotFound
  }
] 

export const adminRoutes = [
  {
    pathname : "/admin/dashboard",
    component : DashBoard
  },
  {
    pathname : "/admin/articleList",
    component : ArticleList
  },
  {
    pathname : "/admin/articleEdit",
    component : ArticleEdit
  },
  {
    pathname : "/admin/setting",
    component : Setting
  }
]

