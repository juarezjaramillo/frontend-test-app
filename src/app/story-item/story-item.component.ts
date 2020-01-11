import {Component, Input} from '@angular/core';
import {Story} from '../entity/story';

@Component({
	selector: 'app-story-item',
	templateUrl: './story-item.component.html',
	styleUrls: ['./story-item.component.scss']
})
export class StoryItemComponent {

	@Input() story: Story;

}
