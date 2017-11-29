import { Component, OnInit } from "@angular/core";
import { IItem } from "./items";
import { ItemService } from "./item.service";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/filter';

@Component({
    templateUrl: './add-item.component.html'
})

export class AddItemComponent implements OnInit {
    collectionID: number;
    pageTitle: string = 'Add a New Item to This Collection';
    errorMessage: string;
    item: IItem = {
        itemId: 0,
        itemName: '',
        collectionId: 0
    };
    private sub: any;
    
    constructor(private _itemService: ItemService,
        private route: ActivatedRoute,
        private router: Router) {}

        ngOnInit(): void {
            this.sub = this.route.params.subscribe(params => {
                this.item.collectionId = +params['collectionId'];
            });
        }

    submit() {
        this._itemService.addItem(this.item)
        .subscribe((item: IItem) => {
            if (item) {                
                this.router.navigate(['/collections/' + this.item.collectionId + '/items']);
            } else {
                this.errorMessage = 'Unable to add item';
            }
        }),
        (err: any) => console.log(err);       
    }
}