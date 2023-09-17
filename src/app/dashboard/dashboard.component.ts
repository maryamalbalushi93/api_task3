import { Component } from '@angular/core';
import { Renderer2, ElementRef } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  handleClick(event: Event, sectionId: string) {
    event.preventDefault();
  
    const sectionElement = this.el.nativeElement.querySelector('#' + sectionId);
    
    if (sectionElement) {
      const elementsToHide = document.querySelectorAll('.section');
    
      elementsToHide.forEach(element => {
        this.renderer.setStyle(element, 'display', 'none');
      });
    
      this.renderer.setStyle(sectionElement, 'display', 'block');
    }
  }
}
    


