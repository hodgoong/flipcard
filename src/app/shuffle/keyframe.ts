import { keyframes, style } from '@angular/animations';

export const slideOutRight = [
    style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    style({ transform: 'translate3d(150%, 0, 0)', offset: 1 }),
]

export const slideOutLeft = [
  style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
  style({ transform: 'translate3d(-150%, 0, 0)', offset: 1 }),
]

export const flipOutY = [
  style({ transform: 'perspective(400px)', offset: 0 }),
  style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: 1, offset: 0.33 }),
  style({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: 0, offset: 1 }),
]