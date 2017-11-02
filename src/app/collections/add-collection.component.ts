import { Component, OnInit } from "@angular/core";
import { CollectionService } from "./collection.service";

@Component({
    templateUrl: './add-collection.component.html'
})

export class AddCollectionComponent implements OnInit {
    pageTitle: string = 'Add a Collection';

    constructor(private _collectionService: CollectionService) {}
    ngOnInit() { }

}