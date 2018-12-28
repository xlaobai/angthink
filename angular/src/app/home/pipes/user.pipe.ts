import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sex'
})
export class SexPipe implements PipeTransform {

    transform(value: string): any {
        let sex: string;
        switch (value) {
            case '1':
                sex = '男性';
                break;
            case '2':
                sex = '女性';
                break;
            default:
                sex = '未知';
        }
        return sex;
    }

}

@Pipe({
    name: 'loginWay'
})
export class LoginWayPipe implements PipeTransform {

    transform(value: string): any {
        let way: string;
        switch (value) {
            case 'wx':
                way = '微信';
                break;
            case 'qq':
                way = 'QQ';
                break;
            default:
                way = '未知';
        }
        return way;
    }

}

@Pipe({
    name: 'vipLevel'
})
export class VipLevelPipe implements PipeTransform {

    transform(start: string): any {
        if ( Number(start) === 0 ) {
            return 0;
        } else if ( Number(start) > 0 ) {
            return Math.ceil((Math.floor(new Date().getTime() / 1000) - Number(start)) / 2592000);
        } else {
            return 0;
        }
    }

}

@Pipe({
    name: 'vipLeave'
})
export class VipLeavePipe implements PipeTransform {

    transform(end: string): any {
        if ( Number(end) === 0 ) {
            return '0天';
        } else if ( Number(end) > 0 ) {
            return `${Math.floor((Number(end) - Math.floor(new Date().getTime() / 1000)) / 86400)}天`;
        } else {
            return '0天';
        }
    }

}