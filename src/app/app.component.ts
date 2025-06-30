// import { Component } from '@angular/core';
// import { ClickToCallComponent } from "./click-to-call/click-to-call.component";
// import { HeaderComponent } from "./header/header.component";
// import { FooterComponent } from "./footer/footer.component";

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [ClickToCallComponent, FooterComponent, HeaderComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'click-to-call';


// }
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ClickToCallComponent } from './click-to-call/click-to-call.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ClickToCallComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fix: styleUrl → style**s**Url
})
export class AppComponent {
  title = 'Web Portal';
}
