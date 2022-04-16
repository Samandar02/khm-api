import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Novetly } from '../models';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private apiSvc:ApiService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  submit(){
    this.apiSvc.postNovetly(this.newNovetly).subscribe(res=>{
      alert(200)
    })
  }
  goToNewsItem(){
    this.router.navigate(['news'],{relativeTo:this.route})
  }
  newNovetly:Novetly = {
    id:0,
    title:"",
    body:"",
    createdAt:new Date(),
    viewed:0,
    img:new File([],""),
    tags:""
  }
}
