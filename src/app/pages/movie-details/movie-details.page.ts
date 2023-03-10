import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }
  movie: any;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!.toString();
    this.movieService.getDetails(id).subscribe((res) => {
      this.movie = res
      console.log("movie", this.movie);
      
    })
  }

}
