class Departamento {
    #nombreDepto
    #listaEmpleados = []
    constructor(deptoInicial){
        this.nombreDepto = deptoInicial;
    }
    get nombreDepto(){
        return this.#nombreDepto;
    }
    set nombreDepto(nuevoDepto){
        this.#nombreDepto = nuevoDepto;
    }
    agregarEmpleado(){
        this.#listaEmpleados.push(emp);
    }

    mostrarNomina(){
        for (let i = 0; i < this.#listaEmpleados; i++){
            const emp = this.#listaEmpleados[i];
            console.log(`Nomina de Departamento: ${this.#nombreDepto} | Informacion empleado: ID ${emp.id} - ${emp.nombre}`);
        }
    }
}

class Empleado {
    #id
    #nombre
    #salarioBase
    constructor(idInicial, nombreInicial, salarioInicial){
        this.id = idInicial;
        this.nombre = nombreInicial;
        this.salarioBase = salarioInicial;
    }

    get id(){
        return this.#id;
    }
    get nombre(){
        return this.#nombre;
    }
    get salarioBase(){
        return this.#salarioBase;
    }
    set id(nuevoId){
        this.#id = nuevoId;
    }
    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }
    set salarioBase(nuevoSalario){
        this.#salarioBase = nuevoSalario;
    }
    calcularPagoTotal(){
        console.log(`Salario: ${his.#salarioBase} | Empleado: ${this.#nombre}`);
    }
}

class Gerente extends Empleado{
    #bono
    constructor(idInicial, nombreInicial, salarioInicial, bonoInicial){
        super(idInicial);
        this.bono = bono;
    }
    get bono(){
        return this.#bono;
    }
    set bono(nuevoBono){
        if (nuevoBono < 0) {
            this.#bono = nuevoBono;
        } else{
            console.log(`Error. Ingrese un bono válido`);
        }
    }

    calcularPagoTotal(){
        super.calcularPagoTotal();
        console.log(`Pago total: ${this.#bono + this.salarioBase}`);
    }
}

class Desarrollador extends Empleado{
    #lenguaje
    constructor(idInicial, nombreInicial, salarioInicial, lenguajeInicial){
        super(idInicial, nombreInicial, salarioInicial);
        this.lenguaje = lenguajeInicial;
    }
    get lenguaje(){
        return this.#lenguaje;
    }
    set lenguaje(nuevoLenguaje){
        this.#lenguaje = nuevoLenguaje;
    }
}

const miDept1 = new Departamento("TI");
const miDept2 = new Departamento("RH");
const miEmp1 = new Desarrollador(32304, "Jose", 20000, "JavaScript");
const miEmp2 = new Gerente(32205, "Joaquina", 30000, 10000);

miDept1.agregarEmpleado(miEmp1);
miDept2.agregarEmpleado(miEmp2);

miDept1.mostrarNomina();
miEmp1.calcularPagoTotal();
miEmp2.calcularPagoTotal();
miDept2.mostrarNomina();