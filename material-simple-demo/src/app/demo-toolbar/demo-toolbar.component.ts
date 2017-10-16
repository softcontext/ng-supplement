import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-demo-toolbar',
  templateUrl: './demo-toolbar.component.html',
  styleUrls: ['./demo-toolbar.component.css']
})
export class DemoToolbarComponent implements OnInit {
  myData: Array<any>;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.myData = res);
  }
}

// [
//   {
//   "albumId": 1,
//   "id": 1,
//   "title": "accusamus beatae ad facilis cum similique qui sunt",
//   "url": "http://placehold.it/600/92c952",
//   "thumbnailUrl": "http://placehold.it/150/92c952"
//   },
//   ...
// ]
