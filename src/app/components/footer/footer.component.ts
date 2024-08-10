import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    setTimeout(() => {
      const quickMessage = this.el.nativeElement.querySelector('#quick-message');
      if (quickMessage) {
        this.renderer.setStyle(quickMessage, 'display', 'none');
      }
    }, 9000);
  }
}
