import { Component, OnInit, Input } from '@angular/core';
import { CONTENTS } from '../mock-contents';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  cols = 3;

  contents = CONTENTS;

  constructor() { }

  ngOnInit() {
  }

}
