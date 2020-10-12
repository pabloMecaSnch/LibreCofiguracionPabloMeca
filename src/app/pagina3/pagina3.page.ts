import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  goToPagina2(){
    this.navCtrl.navigateBack('/pagina2');
  }
  goToPagina4(){
    this.navCtrl.navigateForward('/pagina4');
  }
  goToPagina5(){
    this.navCtrl.navigateForward('/pagina5');
  }
}

