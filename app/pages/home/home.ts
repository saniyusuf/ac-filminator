import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Film } from '../../providers/film/film';
import { MovieDetailPage } from '../movie-detail/movie-detail';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private movies = [];
  constructor(public navCtrl: NavController, private film: Film) {
    this.movies = film.getMovies();
  }

  goToMovieDetail(filmID){
    this.navCtrl.push(MovieDetailPage, {
      filmID: filmID
    });
  }

}
