import utils from "@/utils";
import { RouteRecordRaw, Router } from "vue-router";
import layoutRoutes from "./loadByView";
import autoloadModuleRoute from "./loadByModule";
// import userStore from "@/store/userStore";


let routes: RouteRecordRaw[] = utils.env.VITE_AUTOLOAD ? layoutRoutes : autoloadModuleRoute()

//需要进行权限验证
function autoload(router: Router) {
    // const userInfo = userStore().userInfo
    routes = routes.map(route => {
        
        //有设置perssion的路由进行过滤（!r.meta?.permission）
        // route.children = route.children?.filter(r => !r.meta?.permission || userInfo.permissions?.includes(r.meta?.permission as string));

        return route;
    })


    routes.forEach(route => {
        router.addRoute(route)
    });
}

export default autoload;