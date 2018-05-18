import { Component, OnInit, Input, Inject } from '@angular/core';
import { Content } from '../content';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() cont: Content;
  ppath = '/assets/picture/';
  jpg = '.jpg';
  prefix = 'url(\'/assets/rank/';
  suffix = '.png\')';

  closeResult: string;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ContentDialogComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-content-dialog',
  templateUrl: 'content.component.html',
})
export class ContentDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
