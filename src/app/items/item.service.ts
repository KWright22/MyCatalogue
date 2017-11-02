import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { IItem } from "./items";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ItemService {
    private _itemUrl = './api/items.json';
    collectionID: number;

    constructor(private _http: HttpClient) {}
    
    getItems(collectionID: number): Observable<IItem[]> {
        return this._http.get<IItem[]>(this._itemUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}