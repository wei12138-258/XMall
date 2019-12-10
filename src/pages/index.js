// import Login from "./login" 
// import ArtticleEdit from "./article/articleEdit"
// import ArtticleList from "./article/articleList"
// import NotFound from "./notfound"
// import Setting from "./setting"
// import DashBord from "./dashborad"

import Loadable from 'react-loadable'
import Loading from '../component/Loading'

const Login = Loadable({
    loader: ()=>import ("./login"),
    loading: Loading
})
const ArticleEdit = Loadable({
    loader: ()=>import ("./article/articleEdit"),
    loading: Loading
})
const ArticleList = Loadable({
    loader: ()=>import ("./article/articleList"),
    loading: Loading
})
const NotFound = Loadable({
    loader: ()=>import ("./notfound"),
    loading: Loading
})
const Setting = Loadable({
    loader: ()=>import ("./setting"),
    loading: Loading
})
const DashBorad = Loadable({
    loader: ()=>import ("./dashborad"),
    loading: Loading
})




export {
    Login,
    ArticleEdit,
    ArticleList,
    NotFound,
    Setting,
    DashBorad
}