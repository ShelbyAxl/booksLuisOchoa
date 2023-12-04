import { Component } from '@angular/core';
import { ApiProv } from '../providers/api.prov';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  public books: any= [];
    constructor(private  apiProv: ApiProv) { 
      this.getBooks();
    }
    
    public getBooks() {
      this.apiProv.getBooks().then((response) => {
        this.books = response.data;
      }).catch((error) => {
        console.log(error);
      });
    }
    public logout(){
      this.apiProv.logout();
      window.location.href = '/login';
    }

  }