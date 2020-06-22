export class Vaisseau {
    id: number;
    nom: string;
    model: string;
    lightSpeed: boolean;
    nbPassenger: number;
    img:string;
    constructor(id: number=null,img:string = null, nom: string=null, model: string=null, lightSpeed: boolean=null, nbPassenger: number=null) {
      this.id = id;
      this.img = img;
      this.nom = nom;
      this.model = model;
      this.lightSpeed = lightSpeed;
      this.nbPassenger = nbPassenger;
    }
  }
  
