import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from './../../services/portfolio.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { IAboutMe } from './../../interfaces/i-about-me';

@Component({
	selector: 'app-aboutMe',
	templateUrl: './about-me.component.html',
	styleUrls: ['./about-me.component.css']
})
export class aboutMeComponent implements OnInit {
	form!: FormGroup;
	myPortfolio: any;
	modoEdicion: boolean = false;
	modoNuevoRegistro: boolean = false;
	alertaDelete: string = "¿Eliminar información AboutMe?"

	constructor(public portfolioData: PortfolioService, private formBuilder: FormBuilder) { }

	ngOnInit(): void {

		/* this.portfolioData.obtenerDatosAboutMe().subscribe(data => {
			this.myPortfolio = data;
			console.log("mi porta-obtener datos AboutMe", this.myPortfolio)
			if (this.myPortfolio === undefined) {
				this.portfolioData.postAboutMe(this.form.value).subscribe(data => {
					console.log(data);
				});

				this.portfolioData.obtenerDatosAboutMe().subscribe(data => {
					this.myPortfolio = data;
				});

			}
		}) */
		this.portfolioData.getData().subscribe(data => {
			this.myPortfolio = data;
			console.log("CHE-ABOUTME", this.myPortfolio);
		})
	/* ngOnInit(): void {
	  this.portfolioData.getData().subscribe(data => {
		this.myPortfolio=data;
		console.log("mi porta", this.myPortfolio)
	  })
	} */
	}

	onCrear(event: Event) {
		this.modoNuevoRegistro = true;
	}

	onEdit(id: any, event: Event) {
		console.log("this.form.value: ", this.form.value);
		console.log("id: ", id);
		this.form.setValue({
			name: this.myPortfolio.name,
			ocupation: this.myPortfolio.ocupation,
			about: this.myPortfolio.about
		})
		console.log("this.form.value: ", this.form.value);
		this.modoEdicion = true;
	}

	onSaveEdit(id: any, event: Event) {
		event.preventDefault;
		this.portfolioData.putAboutMe(this.form.value, id).subscribe(data => {
			console.log("this.form.value: ", this.form.value);
			console.log("AboutMe method PUT Data", data);
			this.portfolioData.obtenerDatosAboutMe().subscribe(data => {
				this.myPortfolio = data;
			});

			this.modoEdicion = false;
		});
	}

	onSaveNewNuevoRegistro(event: Event) {
		event.preventDefault;
		this.portfolioData.postAboutMe(this.form.value).subscribe(data => {
			console.log("this.form.value: ", this.form.value);
			console.log("AboutMe method post Data", data);
			this.modoNuevoRegistro = false;
		});

		this.portfolioData.obtenerDatosAboutMe().subscribe(data => {
			this.myPortfolio = data;
		});
	}

	onDelete(id: any, event: Event) {
		this.modoEdicion = false;
		event.preventDefault;
		Swal.fire({
			title: '¿Desea Eliminar la información Acerca De?',
			text: "No podrá revertir los cambios.",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#3085d6',
			confirmButtonText: 'ELIMINAR'
		}).then((result) => {
			if (result.isConfirmed) {
				this.portfolioData.deleteAboutMe(id).subscribe(data => {
					console.log("Borrando registro", data);

					this.portfolioData.obtenerDatosAboutMe().subscribe(data => {
						this.myPortfolio = data;
					});

				});


				Swal.fire(
					'ELIMINADO',
					'La Información Acerca De ha sido eliminada con éxito.',
					'success'
				)
			}
		})

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
}