import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {
  first,
  map,
  switchMap,
} from 'rxjs/operators';

import { DSONameService } from '../../core/breadcrumbs/dso-name.service';
import { ItemTemplateDataService } from '../../core/data/item-template-data.service';
import { RemoteData } from '../../core/data/remote-data';
import { Collection } from '../../core/shared/collection.model';
import { Item } from '../../core/shared/item.model';
import { getFirstSucceededRemoteDataPayload } from '../../core/shared/operators';
import { AlertType } from '../../shared/alert/alert-type';
import { getCollectionEditRoute } from '../collection-page-routing-paths';

@Component({
  selector: 'ds-edit-item-template-page',
  templateUrl: './edit-item-template-page.component.html',
})
/**
 * Component for editing the item template of a collection
 */
export class EditItemTemplatePageComponent implements OnInit {

  /**
   * The collection to edit the item template for
   */
  collectionRD$: Observable<RemoteData<Collection>>;

  /**
   * The template item
   */
  itemRD$: Observable<RemoteData<Item>>;

  /**
   * The AlertType enumeration
   * @type {AlertType}
   */
  AlertTypeEnum = AlertType;

  constructor(
    protected route: ActivatedRoute,
    public itemTemplateService: ItemTemplateDataService,
    public dsoNameService: DSONameService,
  ) {
  }

  ngOnInit(): void {
    this.collectionRD$ = this.route.parent.data.pipe(first(), map((data) => data.dso));
    this.itemRD$ = this.collectionRD$.pipe(
      getFirstSucceededRemoteDataPayload(),
      switchMap((collection) => this.itemTemplateService.findByCollectionID(collection.id)),
    );
  }

  /**
   * Get the URL to the collection's edit page
   * @param collection
   */
  getCollectionEditUrl(collection: Collection): string {
    if (collection) {
      return getCollectionEditRoute(collection.uuid);
    } else {
      return '';
    }
  }

}
