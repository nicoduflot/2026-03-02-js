/*
la première fonction qiand elle est exportée par défaut doit être appelée différement des autres fonctions
*/
export default function test(){
    return 'Others::test';
}

export const m = [
    'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'
];

export function loaded(callback){
    window.addEventListener('DOMContentLoaded', callback);
}