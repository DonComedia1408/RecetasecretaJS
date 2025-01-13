// Como hacer huevos revueltos con beicon

// Introducción
console.log("Como hacer huevos revueltos con beicon");
console.log("Para un persona");
console.log("10-15 minutos" )

// Ingredientes
const ingredientes = [
    "4-5 huevos",
    "Leche (depende de la cantidad de huevos que utilices)",
    "100 mg de beicon troceado",
    "Sal"
  ];
  
// Enseñar los ingredientes
  console.log("Ingredientes:");
  ingredientes.forEach((ingrediente) => console.log("- " + ingrediente));
  
/*
    Instrucciones:
    1. Poner los huevos y la sal en un bol o plato ondo.
    2. Echar la leche a la mezcla.
    3. Echar el beicon a la sarten.
    4. Echar los huevos batidos a la sarten.
    5. Sacar los huevos revueltos de la sarten.
*/
  
// Paso 1: Poner los huevos y la sal
  function huevosYSal() {
    console.log("1. Pon los huevos y la sal en un bol o plato ondo (preferible un plato ondo) y bate la mezcla.");
  }
  huevosYSal();
  
// Paso 2: Echar la leche
  function leche() {
    console.log("2. Añade la lecha a la mezcla y lo bates todo hasta que este listo.");
  }
  leche();
  
// Paso 3: el beicon a la sarten
  function beicon() {
    console.log("3. En una sarten sin aceite (la grasa del beicon actuara como aceite), echa el beicon y remuevelos hasta que esten dorados (este utlimo paso es opcional).");
  }
  beicon();
  
// Paso 4: los huevos batidos a la sarten
  function huevosBatidos() {
    console.log("4. Echa los huevos batidos a la sarten, manteniendo el beicon todavia en la sarten y remueve todo hasta que esten los huevos revueltos a tu gusto.");
  }
  huevosBatidos();
  
// Paso 5: los huevos batidos a la sarten
function sacar() {
    console.log("5. Cuando los huevos revueltos esten listos, sacalos de la sarten, poniendolo en un plato.");
  }
  sacar(); 

/* 
    Nota: Si te atreves, puedes usar sal con chili para hacer los huevos revueltos más picantes.
*/

// Final
console.log("Y listo... ¡Ya puedes disfrutar!")