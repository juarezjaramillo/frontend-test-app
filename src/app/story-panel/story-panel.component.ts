import {Component, Input} from '@angular/core';
import {faChevronCircleDown, faChevronCircleUp} from '@fortawesome/free-solid-svg-icons';
import {Story} from '../entity/story';

@Component({
	selector: 'app-story-panel',
	templateUrl: './story-panel.component.html',
	styleUrls: ['./story-panel.component.scss']
})
export class StoryPanelComponent {
	collapsedStoryList = false;
	faChevronCircleDown = faChevronCircleDown;
	faChevronCircleUp = faChevronCircleUp;
	@Input() stories: Story[] = [];

}
