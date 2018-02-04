import { Component, OnInit } from '@angular/core';
import { FlipcardsService } from '../flipcards.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { trigger, keyframes, animate, transition } from '@angular/animations';

import * as kf from './keyframe';

@Component({
  selector: 'app-shuffle',
  templateUrl: './shuffle.component.html',
  animations: [
    trigger('cardAnimator', [
      transition('* => slideOutRight', animate(500, keyframes(kf.slideOutRight))),
      transition('* => slideOutLeft', animate(500, keyframes(kf.slideOutLeft)))
    ])],
  styleUrls: ['./shuffle.component.css']
})
export class ShuffleComponent implements OnInit {
  flipcards: Object;
  flipcard = {}
  side = 0
  current_index = 0

  animationState: string;

  constructor(
    private http: HttpClient, 
    private router: Router,
    private flipcardsService: FlipcardsService
  ) { }

  ngOnInit() {
    this.getFlipcards();
  }

  startAnimation(state) {
    console.log(state)
    if (!this.animationState) {
      this.animationState = state;
    }
  }
  
  changeSide(){
    if (this.side == 1) {
      this.side = 0;
    } else {
      this.side = 1;
    }
  }

  changeIndex(){
    console.log(this.current_index);
    this.current_index = this.current_index + 1;
  }

  resetAnimationState() {
    this.animationState = '';
  }

  getFlipcards(): void {
    this.flipcardsService.getFlipcardsShuffled()
      .subscribe((flipcards) => (this.flipcards = flipcards));
  }
  

  removeFlipcard(flipcard) {
    this.flipcardsService.removeFlipcard(flipcard);
  }

  onSwipeLeft(event: any): void {
    this.changeSide();
    status = "swiped left";
    console.log("swiped left");
  }

  onSwipeRight(event: any): void {
    this.changeSide();
    status = "swiped right";
    console.log("swiped right");
  }
  // onPanStart(event: any): void {
  //   this.startX = this.x;
  //   this.startY = this.y;
  // }

  // onPan(event: any): void {
  //   event.preventDefault();
  //   this.x = this.startX + event.deltaX;
  //   this.y = this.startY + event.deltaY;
  // }
  

    // getFlipcards(): void {
    // this.flipcardsService.getFlipcardsShuffled()
    //   .subscribe(function(flipcards){
    //     console.log(flipcards);
    //     this.flipcards = flipcards;
    //   });
    // } 

  // action triggered when user swipes
  // swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
  //   swipe(action = this.SWIPE_ACTION.RIGHT){
  //   // out of range
  //     console.log("swiped");
  //     console.log(this.flipcards);
  //   // if (currentIndex > this.flipcards.length || currentIndex < 0) return;

  //   // let nextIndex = 0;

  //   // // swipe right, next avatar
  //   // if (action === this.SWIPE_ACTION.RIGHT) {
  //   //     const isLast = currentIndex === this.flipcards.length - 1;
  //   //     nextIndex = isLast ? 0 : currentIndex + 1;
  //   // }

  //   // // swipe left, previous avatar
  //   // if (action === this.SWIPE_ACTION.LEFT) {
  //   //     const isFirst = currentIndex === 0;
  //   //     nextIndex = isFirst ? this.flipcards.length - 1 : currentIndex - 1;
  //   // }

  //   // toggle avatar visibility
  //   // this.flipcards.forEach((x, i) => x.visible = (i === nextIndex));
  // }

}



