import { Component, OnInit } from "@angular/core";
import { IItem } from "./items";
import { ItemService } from "./item.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    templateUrl: './item-detail.component.html'
})

export class ItemDetailComponent implements OnInit {
    pageTitle: string = 'Item Detail: ';
    item: IItem[] = [];    
    errorMessage: string;
    itemID: number;
    collectionID: number;
    private sub: any;

    constructor(private _itemService: ItemService,
        private _router: Router,
        private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.itemID = +params['itemId'];
        });

        this._itemService.getItem(this.itemID)
            .subscribe(item => {
                this.item = item;
            },
            error => this.errorMessage = <any>error);        
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
      }
}