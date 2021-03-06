import { Component, OnInit } from "@angular/core";
import { IItem } from "./items";
import { ItemService } from "./item.service";
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './item-list.component.html'
})

export class ItemListComponent implements OnInit {
    pageTitle: string = 'Your Items in this Collection';
    items: IItem[] = [];    
    errorMessage: string;
    collectionID: number;
    private sub: any;
    
    constructor(private _itemService: ItemService,
        private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.collectionID = +params['collectionId'];
        });

        this._itemService.getItems(this.collectionID)
            .subscribe(items => {
                this.items = items;
            },
            error => this.errorMessage = <any>error);        
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
      }
}