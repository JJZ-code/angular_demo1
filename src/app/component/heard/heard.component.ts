import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heard',
  templateUrl: './heard.component.html',
  styleUrls: ['./heard.component.scss']
})
export class HeardComponent implements OnInit {
  public title:string='angular数据绑定';
  public student:any=[
    {name:'张三',
    age:18
  },
  {name:'李四',
age:20}
  ];

  constructor() { 
    this.title='我把标题改了';
  }

  ngOnInit(): void {
  }

}
