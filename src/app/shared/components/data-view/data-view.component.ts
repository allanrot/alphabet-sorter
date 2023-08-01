
import { Component, OnInit } from '@angular/core';
import { Raffle } from 'src/app/domain/raffle';

@Component({
    selector: 'app-data-view',
    templateUrl: 'data-view.component.html',
    styleUrls: []
})
export class DataViewComponent implements OnInit{
    raffles!: Raffle[];

    constructor() {}

    ngOnInit() {
        this.raffles = [
          {code: '123', name: 'aaa', category: 'bbb', quantity: 10},
        ];
    }
}
