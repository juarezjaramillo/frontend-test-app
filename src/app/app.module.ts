import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ResponsivePicComponent} from './responsive-pic/responsive-pic.component';
import {UserNameComponent} from './user-name/user-name.component';
import {FacebookActionComponent} from './facebook-action/facebook-action.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ExpandableViewComponent} from './expandable-view/expandable-view.component';
import {StoryListComponent} from './story-list/story-list.component';
import {StoryItemComponent} from './story-item/story-item.component';
import {StoryPanelComponent} from './story-panel/story-panel.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ResponsivePicComponent,
		UserNameComponent,
		FacebookActionComponent,
		ExpandableViewComponent,
		StoryListComponent,
		StoryItemComponent,
		StoryPanelComponent
	],
	imports: [
		BrowserModule,
		FontAwesomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
