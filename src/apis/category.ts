import { http } from "@/plugins/axios";
export interface ICategory {
    id: number
    title: string
    path: string
}

export async function getCategory() {
    return http.request<ICategory[]>({
        url: '/category',
        method: 'GET'
    });
}
