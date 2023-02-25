import { Component, ViewChild, ElementRef } from '@angular/core';
import { ArcaptchaAngularComponent } from 'arcaptcha-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})

export class AppComponent {

  @ViewChild(ArcaptchaAngularComponent)
  private widget!: ArcaptchaAngularComponent;
  
  // public ngOnInit(){
  //   // this.theBoundCallback = this.theCallback.bind(this);
  // }

  exec(){
    this.widget.execute();
  }
  callbackFunction(token:any){
    console.log(token)
  } 
  renderCallback(){
    console.log("rendered:)")
  }
  expireCallback(){
    console.log("expire")
  }
}
