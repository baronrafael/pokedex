import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/core/services/poke/poke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemons!: any[];

  constructor(private pokeService: PokeService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokeService.getAll().subscribe({
      next: (res: any) => {
        //console.log(res);
        this.pokemons = res.results;
        console.log(this.pokemons);
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
