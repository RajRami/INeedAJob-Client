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
    _id: string | undefined
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

  //select employer
  selectEmployer(employer:any):void{
    this._id = employer._id
    this.name = employer.name
    this.region = employer.region
    this.description = employer.description
  }

  //delete
  deleteEmployer(_id: string):void{
    if(confirm("Are you sure you want to delete this item?")){
      this.service.deleteEmployer(_id).subscribe( response => {
      this.getEmployers()
      this.clearForm()
    })
    }
  }

  //update
  updateEmployer():void{
    let employer = {
      _id: this._id,
      name: this.name,
      region: this.region,
      description: this.description
    }

    this.service.updateEmployer(employer).subscribe( response => {
      this.getEmployers()
      this.clearForm()
    }) 
  }
  
  //Clear form will set the value to undefined
  clearForm():void {
    this._id = undefined
    this.name = undefined
    this.region = undefined
    this.description = undefined
  }
}
