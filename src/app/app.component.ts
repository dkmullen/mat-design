import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  spinning: boolean = true;

  ngOnInit() {
    this.spinMe();
  }

  spinMe() {
    this.spinning = true;
    setTimeout(() => { this.spinning = false; }, 2000);
  }

}
