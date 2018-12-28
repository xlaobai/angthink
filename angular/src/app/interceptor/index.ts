/**
 * 拦截器搜集程序
 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NoopInterceptor } from './noop-interceptor';

export const httpInterceptorProviders = [
    { privide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
];
