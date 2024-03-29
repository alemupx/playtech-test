import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  keyword: string = '';
  selectedGender: string = 'all';
  @Output() emitter = new EventEmitter<string>();
  @Output() emitter2 = new EventEmitter<string>();

  sendData() {    
    this.emitter.emit(this.keyword);        
  }


  filter(gender: string): void {    
    this.emitter2.emit(gender);        
  }
}
