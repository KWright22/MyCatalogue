import { Component, OnInit } from "@angular/core";
import { CollectionService } from "./collection.service";
import { ICollection } from "./collection";
import { Router } from "@angular/router";
import { ICollectionType } from "./collection-types";

@Component({
    templateUrl: './add-collection.component.html'
})

export class AddCollectionComponent implements OnInit {
    pageTitle: string = 'Add a Collection';
    collection: ICollection = {
        collectionId: 0,
        collectionName: '',
        collectionTypeId: 0,
        collectionTypeName: '',
        itemsInCollection: 0
    };
    errorMessage: string;
    collectionTypes: ICollectionType[] = [];

    constructor(private _collectionService: CollectionService,
                private router: Router) {}

    ngOnInit(): void {
        this._collectionService.getCollectionTypes()
        .subscribe(collectionTypes => {
            this.collectionTypes = collectionTypes;
        },
        error => this.errorMessage = <any>error);        
    }

    submit() {
        this._collectionService.addCollection(this.collection)
        .subscribe((collection: ICollection) => {
            if (collection) {                
                this.router.navigate(['/collections']);
            } else {
                this.errorMessage = 'Unable to add collection';
            }
        }),
        (err: any) => console.log(err);       
    }
}