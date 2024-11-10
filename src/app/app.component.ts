import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { createSwapy } from 'swapy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Portfolio';
  swapy: any;

  ngAfterViewInit() {
    const container = document.querySelector('.container');
    this.swapy = createSwapy(container, {
      animation: 'dynamic'
    });
    this.swapy.enable(true);
  }
}