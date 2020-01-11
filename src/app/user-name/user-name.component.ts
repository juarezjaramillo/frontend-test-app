import {Component, Input} from '@angular/core';

@Component({
	selector: 'app-user-name',
	templateUrl: './user-name.component.html',
	styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent {
	@Input() name: string;
}
