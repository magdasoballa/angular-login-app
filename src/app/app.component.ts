import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  clients$: Observable<any[]> | undefined; // Zmienna, która będzie zawierać dane z Firestore

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    // Pobieranie danych z kolekcji 'customers' i dokumentu 'customersData'
    this.clients$ = this.firestore
      .collection('customers')
      .doc('customersData')
      .valueChanges()
      .pipe(map((data: any) => data.clients)); // Pobieramy tablicę 'clients'
  }
}
