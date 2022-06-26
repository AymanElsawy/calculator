import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  resulte = ''; 

  getAction(item: any) {
    this.resulte += item;  
  }

  equal() {
    this.resulte = eval(this.resulte).toFixed(3); 
  }

  reset() {
    this.resulte = '';
  }
}
