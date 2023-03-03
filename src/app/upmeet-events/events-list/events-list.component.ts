import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEvent } from '../interfaces/event';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {
  constructor(private repositoryService: RepositoryService) { }
  events: any;
  date: string ="";
  name: string = "";
  description: string = "";
  price: number =-1;
  location: string= "";

  ngOnInit(): void {
    this.gettEvents();
  }

  addEvent(form: NgForm) {
    let newEvent: IEvent = {
      eventID: -1,
      date: form.form.value.date,
      name: form.form.value.name,
      description: form.form.value.description,
      price: form.form.value.price,
      location: form.form.value.location
    };

    this.repositoryService.addEvent(newEvent).subscribe(
      () => {
        this.gettEvents();
      }
    );

    form.resetForm();
  };

  gettEvents() {
    this.repositoryService.getEvents().subscribe(
      (response) => {
        this.events = response;
      });
  }
}
