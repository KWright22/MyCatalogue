import { Component, OnInit } from "@angular/core";
import { IItem } from "./items";
import { ItemService } from "./item.service";

@Component({
    templateUrl: './item-list.component.html'
})

export class ItemListComponent implements OnInit {
    pageTitle: string = 'Your Items in this Collection';
    items: IItem[] = [];
    errorMessage: string;
    
    constructor(private _itemService: ItemService) {}

    ngOnInit(): void {
        this._itemService.getItems(1)
            .subscribe(items => {
                this.items = items;
            },
            error => this.errorMessage = <any>error);        
    }
}