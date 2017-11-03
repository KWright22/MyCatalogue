import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ICollection } from "./collection";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class CollectionService {
    private _collectionUrl = 'http://localhost:3000/collections';

    constructor(private _http: HttpClient) {}
    
    getCollections(): Observable<ICollection[]> {
        return this._http.get<ICollection[]>(this._collectionUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}