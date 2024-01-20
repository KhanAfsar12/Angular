import { Component, HostListener, Inject } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Afsar Khan';
  // Students:any[] = [
  //   {'name':'Afsar Khan'},
  //   {'name':'Ishtiyaque Hussain'},
  //   {'name':'Ashraf Khan'},
  //   {'name':'Kaif Siddique'}
  // ]
  // public choose = '';
  // setvalue(drp:any){
  //   this.choose=drp.target.value;
  // }
 
  // students:any[] = [];
  // constructor(){
  //   this.students=[
  //     {
  //       studentId:1,
  //       name:'Afsar Khan',
  //       gender:'Male',
  //       course:'Bsc.IT',
  //       age:20
  //     },
  //     {
  //       studentId:2,
  //       name:'kaif Siddique',
  //       gender:'Male',
  //       course:'Bsc.IT',
  //       age:20
  //     },
  //     {
  //       studentId:3,
  //       name:'Ahmed Khan',
  //       gender:'Male',
  //       course:'MCA',
  //       age:23
  //     },
  //     {
  //       studentId:4,
  //       name:'Fiasal',
  //       gender:'Male',
  //       course:'Bsc',
  //       age:22
  //     }
  //   ];
  // }
  // getMoreStudents():void{
  //   this.students=[
  //     {
  //       studentId:1,
  //       name:'Afsar Khan',
  //       gender:'Male',
  //       course:'Bsc.IT',
  //       age:20
  //     },
  //     {
  //       studentId:2,
  //       name:'kaif Siddique',
  //       gender:'Male',
  //       course:'Bsc.IT',
  //       age:20
  //     },
  //     {
  //       studentId:3,
  //       name:'Ahmed Khan',
  //       gender:'Male',
  //       course:'MCA',
  //       age:23
  //     },
  //     {
  //       studentId:4,
  //       name:'Fiasal',
  //       gender:'Male',
  //       course:'Bsc',
  //       age:22
  //     },
  //     {
  //       studentId:5,
  //       name:'Huzaifa',
  //       gender:'Male',
  //       course:'BBA',
  //       age:20
  //     }
  //   ];
  // }
  // TrackByStudentId(index:number, student:any):string{
  //   return student.studentId;
  // }


  constructor(){
  }

  // CountryDetails:any[]=[
  //   {'country':'India','people' : [{'name':"Afsar Khan"},{'name':'Abrar Khan'},{'name':'Farhan'}]},

  //   {'country':'Saudi arabia','people' : [{'name':"Usama bin laden"},{'name':'King Faisal'},{'name':'Ibrahim'}]}
  // ];

// people:any[] = [
//   {'Name':'Afsar Khan', 'Country':'India'},
//   {'Name':'Kevin Owens', 'Country':'Canada'},
//   {'Name':'Abdul Gani', 'Country':'Afganistan'},
//   {'Name':'Vladmir Putin', 'Country':'Russia'},
//   {'Name':'ishtayaque Hussain', 'Country':'India'},
//   {'Name':'Mir Jafar', 'Country':'bangladesh'},
//   {'Name':'Kutubuddin aibak', 'Country':'Dehli'}
// ];

// getcolor(Country){
//   switch(Country){
//     case 'India':
//       return 'Green';
//     case 'Afganistan':
//       return 'Gold';
//     case 'Canada':
//       return 'Blue';
//     case 'Russia':
//       return 'Red';
//     case 'bangladesh':
//       return 'Brown';
//     case 'Dehli':
//       return 'Yellow';

//   }
// }

users = ['Afsar', 'Abrar', 'Salim', 'Abdul rahman'];

getcssclass(flag:string){
  let cssclass ;
  if(flag=='mode'){
    cssclass={'one':true, 'two':true}
  }
  else{
    cssclass = {'one':false, 'two':true}
  }
  return cssclass
}
}
