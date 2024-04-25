import { Component, } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  button=true
  showHiden=false;

  buttonShowHiden(){
    this.showHiden=true
    this.button=false
    console.log(`esta funcionando`);
  }
}
