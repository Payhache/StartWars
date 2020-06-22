export class Planet {
    id: number;
    nom: string;
    nbHabitant: number;
    allegiance: string;
    nbKmTerre: number;
    img: string;
    constructor(id: number=null,img:string=null, nom: string = null, nbHabitant: number = null , allegiance: string = null , nbKmTerre: number = null) {
      this.id = id;
      this.img = img;
      this.nom = nom;
      this.nbHabitant = nbHabitant;
      this.allegiance = allegiance;
      this.nbKmTerre = nbKmTerre;
    }
  }
  