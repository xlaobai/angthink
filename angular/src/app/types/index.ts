/**
 * 登录
 */

export interface Admin {
    authKey: string;
    sessionId: string;
}

export interface Form {
    username: string;
    password: string;
}

/**
 * 系统
 */

export interface Api {
    code: number;
    data: any[];
    error: string;
}

/**
 * 商品类型
 */

export interface Cate {
    cid: string;
    cname: string;
}
