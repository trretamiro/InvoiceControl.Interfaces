import { Employee } from './../../models/employee';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.css'],
})
export class ListInvoiceComponent implements OnInit, OnDestroy {
  dtTrigger: Subject<void> = new Subject<void>();

  constructor(private route: Router, private service: InvoiceService) {}

  elements: any;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email'];

  ngOnInit() {
    this.service.listEmployee().subscribe({
      next: (resp) => {
        console.log(resp);
        // this.elements = resp;
      },
      error:(erro) => {
        console.log(erro)
      }
    });
  }

  ngAfterViewInit() {}

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  dados(): void {
    this.elements = [
      {
        id: 1,
        firstName: 'Johannah',
        lastName: 'Kiffin',
        email: 'jkiffin0@google.pl',
        gender: 'F',
        jobTitle: 'Administrative Assistant I',
      },
      {
        id: 2,
        firstName: 'Eldin',
        lastName: 'Astbery',
        email: 'eastbery1@geocities.jp',
        gender: 'M',
        jobTitle: 'Senior Editor',
      },
      {
        id: 3,
        firstName: 'Nahum',
        lastName: 'Mounce',
        email: 'nmounce2@vk.com',
        gender: 'M',
        jobTitle: 'Programmer II',
      },
      {
        id: 4,
        firstName: 'Gallard',
        lastName: 'Standell',
        email: 'gstandell3@europa.eu',
        gender: 'M',
        jobTitle: 'Account Representative II',
      },
      {
        id: 5,
        firstName: 'Koenraad',
        lastName: 'Domleo',
        email: 'kdomleo4@cornell.edu',
        gender: 'M',
        jobTitle: 'Quality Control Specialist',
      },
      {
        id: 6,
        firstName: 'Uriah',
        lastName: 'Turbat',
        email: 'uturbat5@aol.com',
        gender: 'M',
        jobTitle: 'Accounting Assistant II',
      },
      {
        id: 7,
        firstName: 'Waldemar',
        lastName: 'Fowley',
        email: 'wfowley6@sun.com',
        gender: 'M',
        jobTitle: 'Account Coordinator',
      },
      {
        id: 8,
        firstName: 'Rodolfo',
        lastName: 'Trenchard',
        email: 'rtrenchard7@yandex.ru',
        gender: 'M',
        jobTitle: 'Data Coordiator',
      },
      {
        id: 9,
        firstName: 'Konstance',
        lastName: 'Dudek',
        email: 'kdudek8@techcrunch.com',
        gender: 'F',
        jobTitle: 'Administrative Assistant I',
      },
      {
        id: 10,
        firstName: 'Monti',
        lastName: 'Perton',
        email: 'mperton9@youtube.com',
        gender: 'M',
        jobTitle: 'Operator',
      },
    ];
  }
}
