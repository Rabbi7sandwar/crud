import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  data: any
  sampleData : any

  constructor(private router: Router) { 
    this.sample()
  }

  ngOnInit() {
   
  }
  

  sample() {

    this.data = {
      "sample": [
        {
          "description": "Lady with a red umbrella",
          "image-url": "https://i.imgur.com/pwpWaWu.jpg"
        },
        {
          "description": "Flowers and some fruits",
          "image-url": "https://i.imgur.com/KIPtISY.jpg"
        },
        {
          "description": "Beautiful scenery",
          "image-url": "https://i.imgur.com/2jMCqQ2.jpg"
        },
        {
          "description": "Some kind of bird",
          "image-url": "https://i.imgur.com/QFDRuAh.jpg"
        },
        {
          "description": "The attack of dragons",
          "image-url": "https://i.imgur.com/8yIIokW.jpg"
        }

      ]
    }
   const storage =  localStorage.getItem('data')
   
    if(storage){
      this.sampleData = JSON.parse(storage)
    }else{
      this.sampleData = this.data.sample
    }
  }

  edit(i:any, data:any){
    localStorage.setItem("data",JSON.stringify(this.sampleData))
    let dataToSend = {
      id: i,
      data: JSON.stringify(data)
    }
    this.router.navigate(['/form', dataToSend]);
  }


}
