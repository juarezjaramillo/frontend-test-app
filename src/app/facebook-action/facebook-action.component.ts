import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-facebook-action',
  templateUrl: './facebook-action.component.html',
  styleUrls: ['./facebook-action.component.scss']
})
export class FacebookActionComponent implements OnInit {
  faFacebook = faFacebook;
  constructor() { }

  ngOnInit() {
  }

  alert(event){
    window.alert(event);
  }

}
