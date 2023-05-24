import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-habilitats-isma-naciri',
  templateUrl: './habilitats-isma-naciri.component.html',
  styleUrls: ['./habilitats-isma-naciri.component.css']
})
export class HabilitatsIsmaNaciriComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  @Input() pokemon_name: any;
  @Input() pokemon_abilities: any;


  async getPokemonAbilities() {
    await this.getPokemonIndexUrl(this.pokemon_name).then(
      (value) => {
        console.log("Habilities of pokemon json")
        console.log(value);

        for (let i = 0; i < value.abilities.length; i++) {
          this.pokemon_abilities += value.abilities[i].ability;
        }
      }
    )
  }

  async getPokemonIndexUrl(pokemonName: string): Promise<any> {
    let tempUrl = "";
    await this.getPokemonList().then(
      (result) => {
        console.log("Pokemon selected json")
        console.log(result);

        for (let i = 0; i < result.results.length; i++) {
          if (pokemonName === result.results[i].name) {
            tempUrl = result.results[i].url;
            console.log(tempUrl);
            break;
          }
        }
      });

    const promise = new Promise(async (resolve, reject) => {
      this.http.get(tempUrl).subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          reject(err)
        }
      })
    });
    return promise;
  }

  async getPokemonList(): Promise<any> {
    const promise = new Promise(async (resolve, reject) => {
      this.http.get("https://pokeapi.co/api/v2/pokemon/").subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          reject(err);
        }
      })
    })
    return promise;
  }


  ngOnInit(): void {
  }

}
