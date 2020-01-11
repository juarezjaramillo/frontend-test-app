import {Component, Input} from '@angular/core';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {Story} from '../entity/story';

@Component({
	selector: 'app-story-panel',
	templateUrl: './story-panel.component.html',
	styleUrls: ['./story-panel.component.scss']
})
export class StoryPanelComponent {
	collapsedStoryList = false;
	faChevronDown = faChevronDown;
	faChevronUp = faChevronUp;
	@Input() stories: Story[] = [];

}
