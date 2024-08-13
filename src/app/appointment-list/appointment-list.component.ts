import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {

  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = []

  addAppointment(){
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      // Create a new appointment
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      }

      this.appointments.push(newAppointment);

      // Reset the form
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      alert(this.appointments.length);
    }
  }
}

// When you don't need an object or method that contain actual values, use interfaces.
