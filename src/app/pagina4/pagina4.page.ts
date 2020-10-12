import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.page.html',
  styleUrls: ['./pagina4.page.scss'],
})
export class Pagina4Page implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  goToPagina2(){
    this.navCtrl.navigateBack('/pagina2');
  }
  goToPagina3(){
    this.navCtrl.navigateBack('/pagina3');
  }
  goToPagina5(){
    this.navCtrl.navigateForward('/pagina5');
  }
}
