export default class De{
    constructor(nbFaces){
        this.nbFaces = nbFaces;
    }

    lancerDe(){
        return Math.floor( Math.random()*this.nbFaces + 1 );
    }
}