import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject,throwError, of , BehaviorSubject} from 'rxjs';

import { ItemsService } from '../_services/items.service';
import { ItemModel } from '../_models/item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  @Input() item1: ItemModel;
  items$: BehaviorSubject<ItemModel[]>;
  dtOptions: DataTables.Settings = {};

  constructor(
    private itemsService: ItemsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.items$  = this.itemsService.items$;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    }
  }

  edit() {
    this.router.navigate(['/item-edit/' + this.item1.id]);
  }

  delete() {
    this.itemsService.delete(this.item1.id).subscribe();
  }
  

}
