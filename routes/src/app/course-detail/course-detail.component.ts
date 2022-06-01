import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  id: string = '';
  subscribe: Subscription = new Subscription;

  constructor(private route: ActivatedRoute) {
    //this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.subscribe = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
