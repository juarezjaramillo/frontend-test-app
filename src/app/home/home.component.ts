import {Component, Input} from '@angular/core';
import {User} from '../entity/user';
import {Story} from '../entity/story';

@Component({
	selector: 'app-user-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {

	@Input() user: User;
	@Input() stories: Story[] = [];

	facebookActionClicked() {
		window.alert('Followed');
	}
}
