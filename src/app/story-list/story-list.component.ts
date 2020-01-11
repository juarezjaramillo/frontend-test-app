import {Component, Input} from '@angular/core';
import {Story} from '../entity/story';

@Component({
	selector: 'app-story-list',
	templateUrl: './story-list.component.html',
	styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent {

	@Input() stories: Story[] = [];

}
