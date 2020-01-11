import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {faChevronCircleDown, faChevronCircleUp, faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
	selector: 'app-expandable-view',
	templateUrl: './expandable-view.component.html',
	styleUrls: ['./expandable-view.component.scss']
})
export class ExpandableViewComponent implements AfterViewInit {

	maxDefaultHeight = 100;
	faChevronDown = faChevronDown;
	faChevronUp = faChevronUp;
	collapsed = true;
	height = 0;
	@ViewChild('content', {static: false}) content: ElementRef;

	ngAfterViewInit() {
		this.height = this.content.nativeElement.offsetHeight;
		// Wait a tick - instead of using setTimeout
		of(true).pipe(delay(10)).subscribe(() => {

			if (this.height > this.maxDefaultHeight) {
				this.collapsed = true;
			}
		});
	}

	toggle() {
		this.collapsed = !this.collapsed;
	}

}
