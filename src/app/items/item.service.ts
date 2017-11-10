import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { IItem } from "./items";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ItemService {    
    private _itemUrl = 'http://localhost:3000/collections/:id/items';
    private _itemDetailUrl = 'http://localhost:3000/items/:itemId';

    constructor(private _http: HttpClient) {}
    
    getItems(collectionID: number): Observable<IItem[]> {
        return this._http.get<IItem[]>(this._itemUrl.replace(':id', collectionID + ''))
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    getItem(itemID: number): Observable<IItem[]> {
        return this._http.get<IItem[]>(this._itemDetailUrl.replace(':itemId', itemID + ''))
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}