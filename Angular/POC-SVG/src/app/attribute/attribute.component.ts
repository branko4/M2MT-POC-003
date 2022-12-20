import { Component, OnInit } from '@angular/core';
import { LineDrawerService } from '../line-drawer.service';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {
  protected propId;

  constructor(private service: LineDrawerService) { 
    this.propId = `property-${service.getUniekId()}`;
  }

  ngOnInit(): void {
  }

  onClick() {
    console.log("clicked");
    this.service.propertySelected(this.propId);
  }
}
