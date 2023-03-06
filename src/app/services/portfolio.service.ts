import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISkill } from '../interfaces/i-skill';
import { IAboutMe } from './../interfaces/i-about-me';
import { IEducation } from '../interfaces/i-education';
import { IExperience } from '../interfaces/i-experience';
import { IProject } from '../interfaces/i-project';
import { ISoftSkills } from '../interfaces/i-soft-skills';
import { IbannerX } from "../interfaces/i-banner-x"

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  url = 'localhost:4200/';

  // Headers para POST, PUT Y DELETE.
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    console.log('getdata');
    return this.http.get('./../../assets/data/data.json');
  }
  // *********************************************************************
  // **************   |   METHOD'S GET ALL    | **************************
  // *********************************************************************

  obtenerDatosAboutMe(): Observable<IAboutMe> {
    console.log('ObtenerDatosAboutMe');
   // alert('obtenerDatosAboutMe');
    //return this.http.get('./../../assets/data/data.json');
    return this.http.get<IAboutMe>('./../../assets/data/data.json');
}

  obtenerDatosBanner(): Observable<any>{
    console.log("OBTENERDATOSBANNERX");
    return this.http.get('./../../assets/data/data.json');
  }
  obtenerDatosEducation(): Observable<IEducation> {
    // obtenerDatosEducation():Observable<any> {
      console.log('obtenerDatosEducation');
     return this.http.get<IEducation>('./../../assets/data/data.json');
//return this.http.get<IEducation>(this.url + 'education');
  }

  obtenerDatosExperience(): Observable<IExperience> {
    console.log('obtenerDatosExperience');
    //return this.http.get<IExperience>(this.url + 'Experience');
    return this.http.get<IExperience>('./../../assets/data/data.json');
  }

  obtenerDatosProject(): Observable<IProject> {
    console.log('obtenerDatosProject');
//    return this.http.get<IProject>(this.url + 'Projects');
      return this.http.get<IProject>('./../../assets/data/data.json');
}

  obtenerDatosSkills(): Observable<ISkill> {
    console.log("obtenerDatosSkill");
    //return this.http.get<ISkill>(this.url + 'skills');
    return this.http.get<ISkill>('./../../assets/data/data.json');
  }
  obtenerDatosSoftSkills(): Observable<ISoftSkills> {
    console.log("obtenerDatosSoftSkills");
    //return this.http.get<ISkill>(this.url + 'skills');
    return this.http.get<ISoftSkills>('./../../assets/data/data.json');
  }
  // *********************************************************************
  // **************   |   METHOD'S GET ONE    | **************************
  // *********************************************************************

  obtenerOneDatosAboutMe(id: number): Observable<any> {
    alert("obtenerundatoAboutMe");
    return this.http.get<any>(this.url + 'aboutMe/' + id);
  }

  obtenerOneDatosEducation(id: number): Observable<IEducation> {
    console.log("OBTENERDATOSEDUCATION",this.http.get<IEducation>(this.url + 'Education/' + id));
    return this.http.get<IEducation>(this.url + 'Education/' + id);
  }

  obtenerOneDatosExperiencia(id: number): Observable<IExperience> {
    return this.http.get<IExperience>(this.url + 'Experience/' + id);
  }

  obtenerOneDatosProject(id: number): Observable<IProject> {
    return this.http.get<IProject>(this.url + 'Projects/' + id);
  }

  obtenerOneDatosSkill(id: number): Observable<ISkill> {
    return this.http.get<ISkill>(this.url + 'skills/' + id);
  }

  // *********************************************************************
  // **************   |   METHOD'S POST    | ******************************
  // *********************************************************************

  postAboutMe(AboutMe: any): Observable<any> {
    let AboutMeJSON = JSON.stringify(AboutMe);
    return this.http.post<any>(this.url + 'AboutMe', AboutMeJSON, {
      headers: this.headers,
    });
  }

  postEducation(Education: IEducation): Observable<IEducation> {
    return this.http.post<IEducation>(this.url + 'Education', Education, {
      headers: this.headers,
    });
  }

  postExperiencia(Experiencia: IExperience): Observable<IExperience> {
    return this.http.post<IExperience>(this.url + 'Experience', Experiencia, {
      headers: this.headers,
    });
  }

  postProject(Project: IProject): Observable<IProject> {
    return this.http.post<IProject>(this.url + 'Projects', Project, {
      headers: this.headers,
    });
  }

  postSkill(Skill: ISkill): Observable<ISkill> {
    return this.http.post<ISkill>(this.url + 'skills', Skill, {
      headers: this.headers,
    });
  }

  // *********************************************************************
  // **************   |   METHOD'S PUT    | ******************************
  // *********************************************************************

  putAboutMe(AboutMe: any, id: Number): Observable<any> {
    return this.http.put<any>(this.url + 'AboutMe/' + id, AboutMe, {
      headers: this.headers,
    });
  }

  putExperiencia(Experiencia: IExperience, i: Number): Observable<IExperience> {
    return this.http.put<IExperience>(
      this.url + 'Experience/' + i,
      Experiencia,
      { headers: this.headers }
    );
  }

  putEducation(Education: IEducation, id: Number): Observable<IEducation> {
    return this.http.put<IEducation>(this.url + 'Education/' + id, Education, {
      headers: this.headers,
    });
  }

  putProject(Project: IProject, id: Number): Observable<IProject> {
    return this.http.put<IProject>(this.url + 'Project/' + id, Project, {
      headers: this.headers,
    });
  }

  putSkill(Skill: ISkill, id: Number): Observable<ISkill> {
    return this.http.put<ISkill>(this.url + 'skills/' + id, Skill, {
      headers: this.headers,
    });
  }

  // *********************************************************************
  // **************   |   METHOD'S DELETE    | ***************************
  // *********************************************************************

  deleteAboutMe(id: Number): Observable<any> {
    return this.http.delete<any>(this.url + 'AboutMe/' + id, {
      headers: this.headers,
    });
  }

  deleteEducation(id: Number): Observable<IEducation> {
    return this.http.delete<IEducation>(this.url + 'Education/' + id, {
      headers: this.headers,
    });
  }

  deleteExperiencia(id: Number): Observable<IExperience> {
    return this.http.delete<IExperience>(this.url + 'Experience/' + id, {
      headers: this.headers,
    });
  }

  deleteProject(id: Number): Observable<IProject> {
    console.log("DELETE PROJECT:",this.url+"Project/"+id);
    return this.http.delete<IProject>(this.url + 'Project/' + id, {
      headers: this.headers,
    });
  }

  deleteSkill(id: Number): Observable<ISkill> {
    return this.http.delete<ISkill>(this.url + 'skills/' + id, {
      headers: this.headers,
    });
  }
}
