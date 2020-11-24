import { Component, OnInit } from '@angular/core';
import { SharedService} from 'src/app/Service/shared.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service:SharedService) { }

  PersonsList:any=[];

  ModalTitle!: string;
  ActivateAddEditPersonComp:boolean=false;
  person:any;

  ngOnInit(): void {
    this.refreshPeopleList();
  }

  refreshPeopleList(){
    this.service.GetPersonsList().subscribe(data =>{
      console.log(data)
      this.PersonsList=data;
    });
  }

  editClick(item:any){
    this.person=item;
    this.ModalTitle="Update Person";
    this.ActivateAddEditPersonComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.DeletePerson(item.id).subscribe(data=>{
        alert(data);
        this.refreshPeopleList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditPersonComp=false;
    this.refreshPeopleList();
  }

  
  addClick(){
    this.person={
      id:0,
      firstname:"",
      lastName:""
    }
    this.ModalTitle="Add Person";
    this.ActivateAddEditPersonComp=true;

  }

}
