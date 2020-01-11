import {Component} from '@angular/core';
import {User} from './entity/user';
import {Story} from './entity/story';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	user: User;
	stories: Story[];

	constructor() {
		// Some hardcoded data for the sample
		this.user = new User();
		this.user.name = 'Raúl @ XWP';
		this.user.pic = '/assets/headshot@2x.png';
		this.user.picSet = '/assets/headshot@2x.png 2x, /assets/headshot_mobile@2x.png 1x';
		let defaultText = `Raúl Juárez would love to work at XWP - Lorem ipsum dolor sit amet, consectetur adipisicing elit,
		sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;
		this.stories = [new Story(defaultText), new Story(defaultText), new Story(defaultText)];
	}
}
