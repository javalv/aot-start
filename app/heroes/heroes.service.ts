import {Injectable} from "@angular/core";
import {HttpService} from "../common/core/http.service";
@Injectable()
export class HeroesService {

    constructor(private httpService:HttpService){}

    getCrises(url:string,params:any) {

        return this.httpService.get(url,params);

    }

}
