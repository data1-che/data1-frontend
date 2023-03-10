import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from './../../services/portfolio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  miPortafolio:any;
  myPortfolio:any;
  educationList:any;
  modoEdicion: boolean = false;
  modoNuevoRegistro: boolean = false;
  i! : number ;
  editID! : number;
  form: FormGroup;


  constructor(public datosPortafolio: PortfolioService) {
    this.form= new FormGroup({
     detalles: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
     estado: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
     institucion: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
     periodo: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
     titulo: new FormControl(['', [Validators.required, Validators.minLength(2)]])

    })

   }


  ngOnInit(): void {
    this.datosPortafolio.getData().subscribe(data => {
      this.educationList = data.education;
      this.myPortfolio=data.education;
      console.log("DATA-EDUCATION",this.myPortfolio);
    })
    //this.datosPortafolio.obtenerDatosEducation().subscribe(data => {
       //JSON.stringify(data);
      //console.log("DATA-EDUCATION JSON Datos Personales: " + JSON.stringify(data));
//      console.log("data: ",data);
      //console.log("miPortafolio", this.miPortafolio);
    //});
  }




  onCrear(event: Event){
    let objetoFormulario = this.form.controls;
    let keysForms =  Object.keys(objetoFormulario);
    console.log("keysForm: ", keysForms);
    let valueForms = Object.values(objetoFormulario);
    console.log("valuesForm: ", valueForms);

    valueForms[0].setValue('');
    valueForms[1].setValue('');
    valueForms[2].setValue('');
    valueForms[3].setValue('');
    valueForms[4].setValue('');

    console.log("valueFormDetalles: ", valueForms[0].value );
    console.log("valueFormEstado: ", valueForms[1].value );
    console.log("valueFormInstitucion: ", valueForms[2].value );
    console.log("valueFormPeriodo: ", valueForms[3].value );
    console.log("valueFormTitulo: ", valueForms[4].value );

    this.modoNuevoRegistro=true;

  }



  onEdit(id: any, i: number,  event: Event ){
    this.editID = id;
    this.i= i;
    console.log("i", i);
    console.log("editID", this.editID);
    console.log("this.form.value: " , this.form.value);
    console.log("id: " , id);

    this.form.setValue({
      detalles: this.miPortafolio[i].detalles,
      estado: this.miPortafolio[i].estado,
      institucion: this.miPortafolio[i].institucion,
      periodo: this.miPortafolio[i].periodo,
      titulo: this.miPortafolio[i].titulo
    })

    console.log("this.form.value: " , this.form.value);



    this.modoEdicion = true;


  }



  onSaveEdit( event: Event ){
    event.preventDefault;
    this.datosPortafolio.putEducation(this.form.value, this.editID).subscribe(data => {
      console.log("this.form.value: " , this.form.value);
      console.log("id: " , this.editID);
      console.log("EDUCACI??N method PUT Data Editada", data);

      this.datosPortafolio.obtenerOneDatosEducation(this.editID).subscribe(data => {
        console.log("Dato: " + JSON.stringify(data));
        this.miPortafolio[this.i]=data;
        console.log("miPortafolio[i : ", this.miPortafolio[this.i]);
      });

    });
    this.modoEdicion = false;

  }



  onSaveNewNuevoRegistro(event: Event ){
    event.preventDefault;
    this.datosPortafolio.postEducation(this.form.value).subscribe(data => {
      console.log("this.form.value: " , this.form.value);
      console.log("AcercaDe method post Data", data);

      this.datosPortafolio.obtenerDatosEducation().subscribe(data => {
        this.miPortafolio=data;
      });
    });

    this.modoNuevoRegistro=false;
  }



  onDelete( i:number, event: Event ){
    this.i = i;
    this.modoEdicion = false;
    event.preventDefault;
    Swal.fire({
      title: `??ELIMINAR EDUCACI??N ${(this.miPortafolio[i].titulo).toUpperCase() }?`,
      text: "No podr?? revertir los cambios.",
      icon: 'warning',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar.',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#00b5ff'
    }).then((result) => {
      if (result.isConfirmed) {
        this.datosPortafolio.deleteEducation(this.miPortafolio[i].id).subscribe(data => {
          console.log("Borrando registro", data);

          this.datosPortafolio.obtenerDatosEducation().subscribe(data => {
            this.miPortafolio=data;
          });

          });
        Swal.fire({
          title: 'ITEM ELIMINADO',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000
        })
      }
    })
  }



  onCancelNuevoRegistro(){
    this.modoNuevoRegistro=false;
  }



  onCancel(event: Event){


    let objetoFormulario = this.form.controls;
    let keysForms =  Object.keys(objetoFormulario);
    console.log("keysForm: ", keysForms);
    let valueForms = Object.values(objetoFormulario);
    console.log("valuesForm: ", valueForms);

    valueForms[0].setValue('');
    valueForms[1].setValue('');
    valueForms[2].setValue('');
    valueForms[3].setValue('');
    valueForms[4].setValue('');

    console.log("valueFormDetalles: ", valueForms[0].value );
    console.log("valueFormEstado: ", valueForms[1].value );
    console.log("valueFormInstitucion: ", valueForms[2].value );
    console.log("valueFormPeriodo: ", valueForms[3].value );
    console.log("valueFormTitulo: ", valueForms[4].value );


    this.modoEdicion= false;
  }


}
