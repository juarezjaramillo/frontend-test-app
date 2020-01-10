import { Component, OnInit } from '@angular/core';
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-story-panel',
  templateUrl: './story-panel.component.html',
  styleUrls: ['./story-panel.component.scss']
})
export class StoryPanelComponent implements OnInit {
  collapsedStoryList = false;
  faChevronCircleDown = faChevronCircleDown;
  faChevronCircleUp = faChevronCircleUp;
  count = 3;

  constructor() { }

  ngOnInit() {
  }

}
