import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
  @Input() date:string='';
  @Input() description:string='';
  @Input() imageUrl:string='';
  @Input() userPhotoUrl:string='';
  @Input() idUser:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
