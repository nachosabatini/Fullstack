import { Component, OnInit, Input } from '@angular/core';
import { SharedService} from 'src/app/Service/shared.service'
@Component({
  selector: 'app-addoredit',
  templateUrl: './addoredit.component.html',
  styleUrls: ['./addoredit.component.css']
})
export class AddoreditComponent implements OnInit {


  constructor(private service:SharedService) { }

  @Input() person:any;
  firstName!: string;
  lastName!: string;

  ngOnInit(): void {
    this.firstName=this.person.firstName;
    this.lastName=this.person.lastName;
  }

  addPerson(){
    var val = {firstName:this.firstName,
              lastName:this.lastName};
    this.service.AddPerson(val).subscribe(res=>{
      alert(res);
    });
  }

  updatePerson(){
    var val = {firstName:this.firstName,
              lastName:this.lastName};
    this.service.UpdatePerson(val).subscribe(res=>{
    alert(res);
    });
  }

}
