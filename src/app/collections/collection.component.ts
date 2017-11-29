import { Component, OnInit } from "@angular/core";
import { ICollection } from "./collection";
import { CollectionService } from "./collection.service";
import { ICollectionType } from "./collection-types";
import { ItemService } from "../items/item.service";
import { IItem } from "../items/items";

@Component({
    templateUrl: './collection.component.html'
})

export class CollectionComponent implements OnInit {
    pageTitle: string = 'Your Collections';
    collections: ICollection[] = [];
    items: IItem[] = [];
    collectionTypes: ICollectionType[] = [];
    errorMessage: string;
    
    constructor(private _collectionService: CollectionService,
                private _itemService: ItemService) {}

    ngOnInit(): void {
        this._collectionService.getCollections()
            .subscribe(collections => {
                this.collections = collections;

                this._collectionService.getCollectionTypes()
                .subscribe(collectionTypes => {
                    for(let collection of collections){
                        collection.collectionTypeName = collectionTypes
                            .filter(cType => cType.collectionTypeId == collection.collectionTypeId)[0].collectionTypeName;
                            this._itemService.getItems(collection.collectionId) 
                            .subscribe(items => {
                                collection.itemsInCollection = items.length;
                            }, error => this.errorMessage = <any>error)
                    }

                    
                }, error => this.errorMessage = <any>error);
            }, error => this.errorMessage = <any>error);
    }
}
