/*
Dans ce module, aucune fonction n'est axportée par défaut, donc soit on les importes en utilisant {fonction, fonction} soit toutes d'un coup en utilisant *
*/
export function test(){
    return 'Anothers::test';
}

export const m = [
    'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'
];

export function loaded(callback){
    window.addEventListener('DOMContentLoaded', callback);
}