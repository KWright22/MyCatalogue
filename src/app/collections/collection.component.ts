import { Component, OnInit } from "@angular/core";
import { ICollection } from "./collection";
import { CollectionService } from "./collection.service";

@Component({
    templateUrl: './collection.component.html'
})

export class CollectionComponent implements OnInit {
    pageTitle: string = 'Your Collections';
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