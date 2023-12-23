import { User, userinfo } from "@/apis/user";
import { defineStore } from "pinia";

export default defineStore('user', {
    state: () => ({
        userInfo: {} as User
    }),
    actions: {
        async getUserInfo() {
            const res = await userinfo()
            this.userInfo = res as any  //TODO mock返回为{username: ''}实际应为{code: number,data:{username: ''}}
        }
    }
})