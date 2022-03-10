import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

constructor(private http:HttpClient) { }
  
getBooks()
{
  return this.http.get("https://bookcart000.azurewebsites.net/api/Book");
}
getCategorylist()
{
  return this.http.get("https://bookcart.azurewebsites.net/api/Book/GetCategoriesList");
}
postBooks()
{
  return this.http.post("https://bookcart.azurewebsites.net/api/Book",{});
}
}

