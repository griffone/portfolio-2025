import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { diAngularOriginal, diSpringOriginal } from '@ng-icons/devicon/original';
import { createSwapy } from 'swapy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIconComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [provideIcons({diSpringOriginal, diAngularOriginal})]
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