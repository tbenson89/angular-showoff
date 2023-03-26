import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-point-grid',
  templateUrl: './point-grid.component.html',
  styleUrls: ['./point-grid.component.scss']
})
export class PointGridComponent implements OnInit {
  @Input() pointGridData: any[] = [];

  constructor() { }

  ngOnInit(): void { }

}
