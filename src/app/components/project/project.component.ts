import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from './../../services/portfolio.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
	myPortfolio: any;
	modoEdicion: boolean = false;
	modoNuevoRegistro: boolean = false;
	i!: number;
	editID!: number;
	form: FormGroup;

	constructor(public datosPortafolio: PortfolioService) {
		this.form = new FormGroup({
			descripcion: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
			imagen: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
			titulo: new FormControl(['', [Validators.required, Validators.minLength(2)]]),
		})
	}

	ngOnInit(): void {
		//    this.datosPortafolio.obtenerDatosProject().subscribe(data => {
		this.datosPortafolio.getData().subscribe(data => {
			//console.log("Datos Personales: " + JSON.stringify(data));
			this.myPortfolio = data.project;
			console.log("PROJECT", this.myPortfolio);
		})
	}


	onCrear(event: Event) {
		let objetoFormulario = this.form.controls;
		let keysForms = Object.keys(objetoFormulario);
		console.log("keysForm: ", keysForms);
		let valueForms = Object.values(objetoFormulario);
		console.log("valuesForm: ", valueForms);
		valueForms[0].setValue('');
		valueForms[1].setValue('');
		valueForms[2].setValue('');
		console.log("valueFormDetalles: ", valueForms[0].value);
		console.log("valueFormEstado: ", valueForms[1].value);
		console.log("valueFormInstitucion: ", valueForms[2].value);

		this.modoNuevoRegistro = true;
	}


	onEdit(id: any, i: number, event: Event) {
		this.editID = id;
		this.i = i;
		console.log("i", i);
		console.log("editID", this.editID);
		console.log("this.form.value: ", this.form.value);
		console.log("id: ", id);
		this.form.setValue({
			descripcion: this.myPortfolio[i].descripcion,
			imagen: this.myPortfolio[i].imagen,
			titulo: this.myPortfolio[i].titulo
		})
		console.log("this.form.value: ", this.form.value);
		this.modoEdicion = true;
	}

	onSaveEdit(event: Event) {
		event.preventDefault;
		this.datosPortafolio.putProject(this.form.value, this.editID).subscribe(data => {
			console.log("this.form.value: ", this.form.value);
			console.log("id: ", this.editID);
			console.log("Project method PUT Data Editada", data);


			this.datosPortafolio.obtenerOneDatosProject(this.editID).subscribe(data => {
				console.log("Dato: " + JSON.stringify(data));
				this.myPortfolio[this.i] = data;
				console.log("myPortfolio[i : ", this.myPortfolio[this.i]);
			});

		});
		this.modoEdicion = false;
	}

	onSaveNewNuevoRegistro(event: Event) {
		event.preventDefault;
		this.datosPortafolio.postProject(this.form.value).subscribe(data => {
			console.log("this.form.value: ", this.form.value);
			console.log("Project method POST Data Enviada", data);
			/* this.datosPortafolio.obtenerDatosProject().subscribe(data => { */
			this.datosPortafolio.getData().subscribe(data => {
				this.myPortfolio = data.project;
			});
		});
		this.modoNuevoRegistro = false;
	}

	onCancelNuevoRegistro() {
		this.modoNuevoRegistro = false;
	}

	onCancel(event: Event) {
		let objetoFormulario = this.form.controls;
		let keysForms = Object.keys(objetoFormulario);
		console.log("keysForm: ", keysForms);
		let valueForms = Object.values(objetoFormulario);
		console.log("valuesForm: ", valueForms);

		valueForms[0].setValue('');
		valueForms[1].setValue('');
		valueForms[2].setValue('');

		console.log("valueFormDetalles: ", valueForms[0].value);
		console.log("valueFormEstado: ", valueForms[1].value);
		console.log("valueFormInstitucion: ", valueForms[2].value);

		this.modoEdicion = false;
	}

	onDelete(i: any, event: Event) {
		this.i = i;
		this.modoEdicion = false;
		event.preventDefault;
		Swal.fire({
			title: `¿ELIMINAR Project ${(this.myPortfolio[i].titulo).toUpperCase()}?`,
			text: "No podrá revertir los cambios.",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#00b5ff',
			confirmButtonText: 'Si, Eliminar.',
			cancelButtonText: 'Cancelar'
		}).then((result) => {
			if (result.isConfirmed) {
				this.datosPortafolio.deleteProject(this.myPortfolio[i].id).subscribe(data => {
					console.log("Borrando registro", data);

					this.datosPortafolio.obtenerDatosProject().subscribe(data => {
						this.myPortfolio = data;
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


}
