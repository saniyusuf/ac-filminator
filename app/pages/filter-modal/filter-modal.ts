import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { Film } from '../../providers/film/film'

/*
  Generated class for the FilterModalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/filter-modal/filter-modal.html',
})
export class FilterModalPage {
  private showMovies: boolean = true;
  private showSeries: boolean = true;

  constructor(private navCtrl: NavController, private viewCtrl: ViewController, private film: Film) {
    this.showMovies = this.film.showMovies;
    this.showSeries = this.film.showSeries;
  }

  closeFilterModal(){
    let filterData = {
      showMovies: this.showMovies,
      showSeries: this.showSeries
    };

    this.film.showMovies = filterData.showMovies;
    this.film.showSeries = filterData.showSeries;
    
    this.navCtrl.pop();
    this.viewCtrl.dismiss(filterData);
  }

}
