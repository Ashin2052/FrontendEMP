import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import {HEROES} from '../../mock-heroes'
import {Router} from '@angular/router'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  heroes = HEROES;
  selectedHero:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero=hero
  }
  sendHeroToChild: any;
  constructor(private router :Router) { }
 

  ngOnInit() {
  }

  
  save(hero,index)
  {
    console.log(hero.name)
   this.heroes[index].name = hero.name

  }
  delete(hero,index)
  {
    console.log(index)
    this.heroes.splice(index,1);
  }
  // submit(newUser,rg)
  // {
  //   let index = this.heroes.findIndex( x=>x.id == newUser.id)
  //   if(index >=0)
  //     this.update(newUser, index)

  //     else{
  //       this.add(newUser)
  //     }
  // }

  newUser = new Hero();
  openModal(id){
    if(id)
  {
    let index = this.heroes.findIndex(x=>x.id == id);
  this.newUser = this.heroes[index];
}
  
  else
    this.newUser = new Hero();
  
  }

    receivedData(event){
      let index = this.heroes.findIndex(x=>x.id == event.id);
      if(index >=0)
        this.update(event, index)
        else  
        this.add(event);
  }

  add(newUser){
    this.heroes.push(newUser);
  }

  update(newUser, index){
    this.heroes[index] = newUser;
  }
  
  clickHero(hero)
  {
    console.log('Hero Object',hero)
    // this.router.navigateByUrl(`heroes/${hero.id}`);
    this.sendHeroToChild = hero;
  }
  
  sortTable()
  {
    console.log()
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("dtBasicExample");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        // Check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
}
