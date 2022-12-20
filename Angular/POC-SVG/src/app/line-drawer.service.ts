import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LineDrawerService implements OnInit {
  private property: string | null = null;
  private svgElement: HTMLElement | null | undefined;
  private uniekId = 0;

  constructor() {  }

  ngOnInit() {
    this.svgElement = document.getElementById("SVG-window");
  }

  public propertySelected(id: string) : void{
    if (this.svgElement == null) this.svgElement = document.getElementById("SVG-window");
    if (this.property == null) { this.property = id; console.log("return since prop is null"); return; }
    if (this.property == id) { console.log("return since prop is id"); return; }
    const propFrom = document.getElementById(this.property);
    if (propFrom == null) { console.log("return since propFrom is null"); return; }
    const propTo = document.getElementById(id);
    if (propTo == null) { console.log("return since propTo is null"); return; }
    const pathEl = document.createElementNS('http://www.w3.org/2000/svg','path');
    pathEl.setAttribute("stroke", "green");
    var propFromX = propFrom.offsetLeft;
    var propToX = propTo.offsetLeft;
    if (propFromX > propToX) propToX += propTo.offsetWidth;
    else propFromX += propFrom.offsetWidth;
    const propFromY = propFrom.offsetTop + (propFrom.offsetHeight/2);
    const propToY = propTo.offsetTop + (propTo.offsetHeight/2);
    const line = `M ${propFromX},${propFromY} L ${propToX},${propToY}`;
    console.log(line);
    pathEl.setAttribute("d", line);
    console.log(this.svgElement);
    this.svgElement?.appendChild(pathEl);
    this.property = null;
  }

  public getUniekId() {
    return this.uniekId += 1;
  }
}
