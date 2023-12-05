/**
 * 配置import.meta.env类型支持
 */

export interface ViteEnv {
    VITE_APP_URL: string
    VITE_AUTOLOAD: bolean
    VITE_MOCK_ENABLE: boolean
    // 更多环境变量...
}
interface ImportMetaEnv extends ViteEnv {
    //TODO
    //也可以直接写在这里但是ImportMetaEnv就不能直接在外部使用(原因未知)
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
