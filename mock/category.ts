// import { Random } from 'mockjs';
import { MockMethod } from "vite-plugin-mock"

export default [
    {
        url: '/api/category',
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: '请求成功',
                data: new Array(5).fill(0).map((_r, index) => {
                    return {
                        id: index,
                        // title: Random.ctitle(),
                        icon: 'fab fa-algolia',
                    }
                })
            }
        }
    },
] as MockMethod[]