import { Component, OnInit } from '@angular/core';

//refernce service which fetches data from the server api
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html'
})
export class EmployerComponent implements OnInit{
  
    // object to hold the json list of employers
    employers: any
    // properties for an individual employer
    name: string | undefined
    region: string | undefined
    description: string | undefined

  //add dependency on service in constructor. This component must have service available.
  constructor(private service: EmployerService) {}

  //fetch all employers
  getEmployers():void{
    this.service.getEmployers().subscribe(response => {
      this.employers = response
    })
    // console.log(this.employers)
  }

  ngOnInit():void{
    this.getEmployers()
  }

  // add new employer, properties auto-bound to the matching form inputs
  addEmployer():void {

   // 1. create and populate new employer object
   let employer = {
    name: this.name,
    region: this.region,
    description: this.description
   }

   // 2. Call the service, which calls the api, which saves to db
   this.service.addEmployer(employer).subscribe( response => {
     
     // 3. refresh the list
     this.getEmployers()

     // 4. clear the form
     this.clearForm()

   })
  }

  //Clear form will set the value to undefined
  clearForm():void {
    this.name = undefined
    this.region = undefined
    this.description = undefined
  }
}
