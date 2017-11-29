import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { IItem } from "./items";
import { HttpErrorResponse } from "@angular/common/http";
import { ICollection } from "../collections/collection";

@Injectable()
export class ItemService {    
    private _itemUrl = 'http://localhost:3000/collections/:id/items';
    private _itemDetailUrl = 'http://localhost:3000/items/:itemId';
    private _addItemUrl = 'http://localhost:3000/items';

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

    addItem(item: IItem): Observable<IItem> {
        console.log("***** in addItem");
        return this._http.post(this._addItemUrl, item)
            .map((res: Response) => {
                console.log(res);
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