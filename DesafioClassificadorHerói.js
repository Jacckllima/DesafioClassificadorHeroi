let heroi = "jack";
let PX = 5.001;
let nivelDePoder = "";

if (PX <= 1.0) {
  nivelDePoder = "Ferro";
} else if (PX >= 1.001 && PX <= 2.0) {
  nivelDePoder = "Bronze";
} else if (PX >= 2.001 && PX <= 5.0) {
  nivelDePoder = "Prata";
} else if (PX >= 5.001 && PX <= 7.0) {
  nivelDePoder = "Ouro";
} else if (PX >= 7.001 && PX <= 8.0) {
  nivelDePoder = "Platina";
} else if (PX >= 8.001 && PX <= 9.0) {
  nivelDePoder = "Ascendente";
} else if (PX >= 9.001 && PX <= 10.0) {
  nivelDePoder = "Imortal";
} else if (PX >= 10.001){
    nivelDePoder = "Radiante";
}
console.log("O Herói de nome " + heroi, "está no nível de " + nivelDePoder);
