import {Injectable, Optional} from '@angular/core';
import {Http, Response,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import '../../conf.js'
declare var config: any
// import configTest = require('../../main');

export class HttpServiceConfig {
  host: string;
  port: number;
}

@Injectable()
export class HttpService {

  private _host = 'localhost';
  private _port = 80;
  private http:Http;

  constructor(
    // @Optional() config: HttpServiceConfig,
              http: Http) {

    // console.log(configTest.host)
    console.info('http.service is loading...')

    if (config) {
      this._host = config.host;
      this._port = config.port;
    }

    this.http = http;

  }

  private getHost() : string {
    if (this._port && this._port != 80) {
      return "http://" + this._host + ":" + this._port + "/api";
    } else {
      return "http://" + this._host + "/api";
    }
  }


  public get(url:string,params?:any) : Promise<any> {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'mplus-ua':'{"merchant_id":"1","merchant_token":"","token":"","user_id":"","data_version":"","device":"ios"}'
    });
    let options = new RequestOptions({headers: headers});

    let getUrl = this.getHost() + url;
    if(params){
      let params_len = Object.getOwnPropertyNames(params).length;
      if(params_len > 0){
        getUrl = getUrl + "?" ;
        let index = 0;
        for ( let key in params ) {
          getUrl = getUrl + key + "=" + params[key] ;
          if(++index < params_len){
            getUrl = getUrl + "&";
          }
        }
      }
    }

    return this.http.get(getUrl, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public post(url:string,postData:any) : Promise<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(url, postData, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
