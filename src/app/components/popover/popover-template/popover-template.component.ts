import { Component, Input, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popover-template',
  templateUrl: './popover-template.component.html',
  styleUrls: ['./popover-template.component.scss'],
})
export class PopoverTemplateComponent implements OnInit {
  @Input() tipoPopover: string;

  constructor(private navParams: NavParams) {
    this.tipoPopover = navParams.get("tipoPopover")
  }

  ngOnInit() {}

}
