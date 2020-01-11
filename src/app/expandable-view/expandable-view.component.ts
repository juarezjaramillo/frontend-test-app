import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {faChevronCircleDown, faChevronCircleUp} from '@fortawesome/free-solid-svg-icons';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
	selector: 'app-expandable-view',
	templateUrl: './expandable-view.component.html',
	styleUrls: ['./expandable-view.component.scss']
})
export class ExpandableViewComponent implements AfterViewInit {

	faChevronCircleDown = faChevronCircleDown;
	faChevronCircleUp = faChevronCircleUp;
	chevronIcon = faChevronCircleUp;
	collapsed = false;
	height = 0;
	@ViewChild('content', {static: false}) content: ElementRef;

	ngAfterViewInit() {
		this.height = this.content.nativeElement.offsetHeight;
		// Wait a tick - instead of using setTimeout
		of(true).pipe(delay(10)).subscribe(() => {

			if (this.height > 80) {
				this.collapsed = true;
			}
		});
	}

	toggle() {
		this.collapsed = !this.collapsed;
	}

}
