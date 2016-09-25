import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { Film } from '../../providers/film/film';
import { MovieDetailPage } from '../movie-detail/movie-detail';
import { FilterModalPage } from '../filter-modal/filter-modal';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})

export class ContactPage {
  private comingSoonFilms = [];
  constructor(public navCtrl: NavController, private film: Film, private modalCtrl: ModalController) {
    this.comingSoonFilms = this.film.getComingSoon();
  }

   goToComingSoonDetail(filmID){
    this.navCtrl.push(MovieDetailPage, {
      filmID: filmID
    });
  }

  openFilterModal(){
    let filterModal = this.modalCtrl.create(FilterModalPage);
    filterModal.present();

    filterModal.onDidDismiss((passedData)=>{
      this.applyFilter(passedData);
    });
  }

  private getOnlyComingSoonMovies(film){
    return film.Type === 'movie';
  }

  private getOnlyComingSoonSeries(film){
    return film.Type === 'series';
  }

  applyFilter(filterData){
    if(filterData.showMovies && filterData.showSeries){
      this.comingSoonFilms = this.film.getComingSoon();

    } else if(filterData.showMovies && !filterData.showSeries){
      let unfilteredFilms = this.film.getComingSoon();
      unfilteredFilms = unfilteredFilms.filter(this.getOnlyComingSoonMovies);
      this.comingSoonFilms = unfilteredFilms;
      
    } else if (!filterData.showMovies && filterData.showSeries){
      let unfilteredFilms = this.film.getComingSoon();
      unfilteredFilms = unfilteredFilms.filter(this.getOnlyComingSoonSeries);
      this.comingSoonFilms = unfilteredFilms;

    } else{
      this.comingSoonFilms = [];
    }
  }

}
