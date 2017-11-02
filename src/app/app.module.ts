import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collections/collection.component';
import { RouterModule } from '@angular/router'
import { AddCollectionComponent } from './collections/add-collection.component';
import { ViewCollectionComponent } from './collections/view-collection.component';
import { CollectionService } from './collections/collection.service';
import { FormsModule } from '@angular/forms';
import { ItemService } from './items/item.service';
import { ItemListComponent } from './items/item-list.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    CollectionComponent,
    AddCollectionComponent,
    ViewCollectionComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'collections', component: CollectionComponent},
      { path: 'home', component: HomeComponent},
      { path: 'addCollection', component: AddCollectionComponent},
      { path: 'view', component: ViewCollectionComponent},
      { path: 'items', component: ItemListComponent}
    ])
  ],
  providers: [
    CollectionService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
