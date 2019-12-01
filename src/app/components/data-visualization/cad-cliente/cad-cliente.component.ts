import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.component.html',
  styleUrls: ['./cad-cliente.component.scss']
})
export class CadClienteComponent  implements OnInit {

  first: String;
  last: String;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

}
