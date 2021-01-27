import { Component, OnInit, OnDestroy } from '@angular/core';
import { Address, Person, SearchService } from '../shared';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnDestroy {
  person: Person;
  id:Number;
  addName: string;
  addPhone: string;
  addAddress: Address;

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: SearchService) {
  }

  /* ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      const id = + params.id;
      console.log("params", params);
      this.service.get(id).subscribe(person => {
        if (person) {
          this.addName = person.name;
          this.addPhone = person.phone;
          this.addAddress = person.address;
          this.person = person;
        } else {
          this.gotoList();
        }
      });
    });
  } */
 
  

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


  save() {
    console.log("save", this.addName);
    console.log("save person", this.person);
    console.log("save person", Person);
    this.person=Person(this.id, this.addName, this.addPhone, this.addAddress);
    
    this.person.name = this.addName;
    this.person.phone = this.addPhone;
    this.person.address = this.addAddress;
    this.service.save(this.person);
    console.log("person", this.person);
    
   /*  this.gotoList(); */
  }
/* 
  gotoList() {
    console.log("go list", this.person);
    
    if (this.person) {
      this.router.navigate(['/add', {term: this.person.name} ]);
    } else {
      this.router.navigate(['/add']);
    }
  } */

}
