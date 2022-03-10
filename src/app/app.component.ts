import { Component,  HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition, query,group // ... 
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-root',
  animations: [
    trigger('router', [
      transition('* => *', [
        style({
          position:'relative',
          overflow: 'hidden'
        }),
        query(':enter, :leave', [
          style({
            //position: 'absolute',
            // top:0,
            // left:0,
            width:'100%',
            hight: '100%'
          })
        ], { optional:true }),
        group([
          query(':leave', [
            style({
              display: 'block'
            }),
            animate(500, style({
              opacity: 0,
              tranform: 'translateX(-80px)'
            }))
          ], { optional: true }),
          query(':enter', [
            style({
              tranform: 'translateX(80px)',
              opacity: 0,

            }),
            animate(500, style({
              opacity: 1,
              tranform: 'translateX(0)'

            }))
          ], { optional: true }),
        ]),

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
