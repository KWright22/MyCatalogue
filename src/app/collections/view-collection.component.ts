import { Component, OnInit } from "@angular/core";
import { CollectionService } from "./collection.service";
import { ICollection } from "./collection";

@Component({
    templateUrl: './view-collection.component.html'
})

export class ViewCollectionComponent implements OnInit {
    pageTitle: string = 'View Your Collections';
    collections: ICollection[] = [];
    errorMessage: string;
    
    constructor(private _collectionService: CollectionService) {}

    ngOnInit(): void {
        this._collectionService.getCollections()
            .subscribe(collections => {
                this.collections = collections;
            },
            error => this.errorMessage = <any>error);        
    }
}