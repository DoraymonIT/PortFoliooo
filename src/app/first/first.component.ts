import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-first',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
