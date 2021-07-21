import { Component, Input, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popover-template',
  templateUrl: './popover-template.component.html',
  styleUrls: ['./popover-template.component.scss'],
})
export class PopoverTemplateComponent implements OnInit {
  @Input() statsPopover: boolean;

  constructor(private navParams: NavParams) {
    this.statsPopover = navParams.get("statsPopver")
  }

  ngOnInit() {}

}
