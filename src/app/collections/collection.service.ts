import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ICollection } from "./collection";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { ICollectionType } from "./collection-types";

@Injectable()
export class CollectionService {
    private _collectionUrl = 'http://localhost:3000/collections';
    private _collectionTypeUrl = 'http://localhost:3000/collectionTypes';

    constructor(private _http: HttpClient) {}
    
    getCollections(): Observable<ICollection[]> {
        return this._http.get<ICollection[]>(this._collectionUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    getCollectionTypes(): Observable<ICollectionType[]> {
        return this._http.get<ICollectionType[]>(this._collectionTypeUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    addCollection(collection: ICollection): Observable<ICollection> {
        console.log("***** in addCollection");
        return this._http.post(this._collectionUrl, collection)
            .map((res: Response) => {
                //console.log(res);
                //const data = res.json();
                return res;
            })
            .catch(this.handleError);

    }
    
    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}