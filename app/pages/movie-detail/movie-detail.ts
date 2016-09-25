import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Film } from '../../providers/film/film'

/*
  Generated class for the MovieDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/movie-detail/movie-detail.html',
})
export class MovieDetailPage {
  private movie;
  private slidesOptions = {
    pager: true,
    autoplay: 3000
  };
  constructor(private navParama: NavParams, private film: Film) {
    let movieID =  this.navParama.get('filmID');
    this.movie = film.getMovie(movieID);
  }

}
