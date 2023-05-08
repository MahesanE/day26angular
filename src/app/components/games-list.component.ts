import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit{
  games: any[] = [];
  numberOfResults = 10;
  currentPage = 1;
  
  constructor(private http: HttpClient){ }
  
  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.http.get<any[]>(`http://localhost:8080/games?limit=${this.numberOfResults}&offset=${(this.currentPage - 1) * this.numberOfResults}`).subscribe((data: any[]) => {
      this.games = data;
    });
  }
  

  nextPage() : void{
    this.currentPage++
    this.getGames();
  }

  previousPage() : void {
    if(this.currentPage > 1)
    this.currentPage--;
    this.getGames();

  }

}
