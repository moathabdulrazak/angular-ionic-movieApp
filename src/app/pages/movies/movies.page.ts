import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies: any[] = [];
currentPage = 1;
  constructor(private  movieService: MovieService,) { }

  ngOnInit() {
  this.loadMovies()
  }


  async loadMovies(){
    this.movieService.getTopMovies(this.currentPage).subscribe(res => {
      this.movies =  [...this.movies, ...res.results]
      console.log(res, "movies");
      
    })
  }
}
