/* 

VARIABLES PRIVADAS CON CLOSURES: JS POR SU NATURALEZA NO FOMENTA EL USO DE DATOS PRIVADOS PERO POR MEDIO DE LOS CLOSURES PODEMOS CREAR VALORES QUE SOLO PUEDEN SER ACCEDIDOS POR MEDIO DE METODOS , QUE NO VAN A ESTAR DISPONIBLES FUERA DE ESTA FUNCION.

 */

const person = () => {
  var saveName = "Name";
  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    },
  };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Julio");
console.log(newPerson.getName());
