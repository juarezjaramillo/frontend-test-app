import {Component, ContentChild, ElementRef, OnInit, ViewChild} from '@angular/core';
import { faChevronCircleDown, faChevronCircleUp} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-expandable-view',
  templateUrl: './expandable-view.component.html',
  styleUrls: ['./expandable-view.component.scss']
})
export class ExpandableViewComponent implements OnInit {

  faChevronCircleDown = faChevronCircleDown;
  faChevronCircleUp = faChevronCircleUp;
  chevronIcon = faChevronCircleUp;
  collapsed = true;
  height = 0;
  @ViewChild("content",{static: false}) content: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log(this.content.nativeElement.offsetHeight);
    this.height = this.content.nativeElement.offsetHeight;
    setTimeout(() => {
      if (this.height > 80) {
        this.collapsed = true;
      }
    });
  }

  toggle(){
    this.collapsed = !this.collapsed;
  }

}
