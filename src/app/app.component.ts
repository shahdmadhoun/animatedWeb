import { Component,  HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition, query,group // ... 
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-root',
  animations: [
    trigger('inOutActiveItemAnimation', [
      state('0', style({ transform: 'translateX(100%)' })),
      state('1', style({ transform: 'translateX(100%)' })),
      transition(':enter', [animate('600ms ease-in-out')]),
      transition(':leave', [animate('750ms ease-in-out')]),
    ]),

    trigger('router', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: 0,
          }),
        ], { optional:true }),
        query(':leave', [
          style({
            display: 'block'
          }),
          animate(1000, style({
            opacity: 0
          }))
        ], { optional: true }),

        query(':enter', [
          style({
            opacity: 0,
            height: '100%',
            display: 'block'
          }),
          animate(1000, style({
            opacity: 1
          }))
        ], { optional: true }),
      ]),
    ]),
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'animatedWeb';

  prepareRoute(outlet: RouterOutlet){
    if(outlet.isActivated) 
    return outlet.activatedRoute.snapshot.url

    return
  }
}
