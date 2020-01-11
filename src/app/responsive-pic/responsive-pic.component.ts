import {Component, Input} from '@angular/core';

@Component({
	selector: 'app-user-pic',
	templateUrl: './responsive-pic.component.html',
	styleUrls: ['./responsive-pic.component.scss']
})
export class ResponsivePicComponent {

	@Input() src: string;
	@Input() srcset: string;

}
