import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html'
})
export class StoryComponent implements OnInit {
  @Input() date:string='';
  @Input() description:string='';
  @Input() imageUrl:string='';
  @Input() userPhotoUrl:string='';
  @Input() idUser:string='';

  constructor() { 
  }

  ngOnInit(): void {
  }

}
