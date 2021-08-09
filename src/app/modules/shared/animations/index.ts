import {
  animate,
  animation,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const staggerAnimation = (selector: string, time: string = '150ms') => {
  return trigger('staggerAnimation', [
    transition('void => *', [
      query(selector, style({ opacity: 0, transform: 'translateY(-40px)' })),
      query(
        selector,
        stagger(time, [
          animate(
            '300ms 0.6s ease-out',
            style({ opacity: 1, transform: 'translateX(0)' })
          ),
        ])
      ),
    ]),
  ]);
};
