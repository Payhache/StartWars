export class Vaisseau {
    id: number;
    nom: string;
    model: string;
    lightSpeed: boolean;
    nbPassenger: number;
    img:string;
    description:string;
    constructor(id: number=null,img:string = null, nom: string=null, model: string=null, lightSpeed: boolean=null, nbPassenger: number=null,description:string = null) {
      this.id = id;
      this.img = img;
      this.nom = nom;
      this.model = model;
      this.lightSpeed = lightSpeed;
      this.nbPassenger = nbPassenger;
      this.description = description;
    }
  }
  
