import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  data: any
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.route.snapshot.paramMap.get('data');
    this.data = JSON.parse(this.data)
    console.log(this.data);

    let items: any = localStorage.getItem('data')
    items = JSON.parse(items)
    console.log(items)

    const replacementObj = {
      "description": "changed",
      "image-url": "https://i.imgur.com/2jMCqQ2.jpg"
    };

    const index = items.findIndex((item: { [x: string]: any; description: any; }) => item.description === this.data.description && item['image-url'] === this.data['image-url']);

    if (index !== -1) {
      items[index] = replacementObj;
      localStorage.setItem("data",JSON.stringify(items))
    }else{
      localStorage.setItem("data",JSON.stringify(items))
    }

   

  }




}


