import { Component, OnInit } from '@angular/core';

//refernce service which fetches data from the server api
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html'
})
export class EmployerComponent implements OnInit{

  //add dependency on service in constructor. This component must have service available.
  constructor(private service: EmployerService) {}

  employers: any

  //fetch all employers
  getEmployers():void{
    this.service.getEmployers().subscribe(response => {
      this.employers = response
    })
    console.log(this.employers)
  }

  ngOnInit():void{
    this.getEmployers()
  }
}
