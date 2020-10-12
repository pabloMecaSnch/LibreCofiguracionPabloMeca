import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-pagina5',
  templateUrl: './pagina5.page.html',
  styleUrls: ['./pagina5.page.scss'],
})
export class Pagina5Page implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  goToPagina2(){
    this.navCtrl.navigateBack('/pagina2');
  }
  goToPagina3(){
    this.navCtrl.navigateBack('/pagina3');
  }
  goToPagina4(){
    this.navCtrl.navigateBack('/pagina4');
  }
}
