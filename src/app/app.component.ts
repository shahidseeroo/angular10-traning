import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  boxdisabled=false;
  boxtypetext="change to number field";
  boxtype="text";

  enableDisable(){
    this.boxdisabled = !this.boxdisabled;
    return this.boxdisabled;
  }

  showVal(value){
    alert(value);
  }

  changeType(){
    if(this.boxtype=='text'){
      this.boxtype='number';
      this.boxtypetext="change to text field";
    }
    else{
      this.boxtype='text';
      this.boxtypetext="change to number field";
    }
  }


}
