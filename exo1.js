const choix = ["pierre", "feuille", "ciseaux"];
const ordi = choix[Math.floor(Math.random() * 3)];

const prompt = requitre("prompt-sync")();

for(let i=0 ;i<choix.length;i++){
  consol.log(choix[i]);
}
