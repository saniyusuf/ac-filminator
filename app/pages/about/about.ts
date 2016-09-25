import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Film } from '../../providers/film/film';
import { MovieDetailPage } from '../movie-detail/movie-detail';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  private series = [];
  constructor(public navCtrl: NavController, private film: Film) {
    this.series = film.getSeries();
  }
  goToSeriesDetail(filmID){
    this.navCtrl.push(MovieDetailPage, {
      filmID: filmID
    });
  }
}
