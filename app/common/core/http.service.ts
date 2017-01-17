import { Injectable, Optional } from '@angular/core';

export class HttpServiceConfig {
    host : string;
    port : number;
}

@Injectable()
export class HttpService {

    private _host = 'localhost';
    private _port = 80;

    constructor(@Optional() config: HttpServiceConfig) {
        console.info('http.service is loading...')

        if (config) {
            this._host = config.host;
            this._port = config.port;
        }
    }

    public getName() {
        if(this._port && this._port != 80){
            return "http://" + this._host + ":" + this._port;
        }else {
            return "http://" + this._host;
        }
    }
}
