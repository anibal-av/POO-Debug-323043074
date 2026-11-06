class Persona {
    #edad;
    constructor(nombre, edadInicial) {
        this.nombre = nombre;
        this.edad = edadInicial;
    }

    get edad() {
        return this.#edad;
    }

    set edad(nEdad) {
        if (nEdad > 0) {
            this.#edad = nEdad;
        } else {
            console.log(`Error. Ingrese una edad valida`);
        }
    }

    presentarse() {
        console.log(`Hola soy ${this.nombre} y tengo edad ${this.#edad}`);
    }
}

class Estudiante extends Persona {
    #promedio;
    constructor(nombre, edadInicial, promedioInicial) {
        super(nombre, edadInicial);
        this.promedio = promedioInicial;
    }

    get promedio() {
        return this.#promedio;
    }

    set promedio(nuevoPromedio) {
        if (nuevoPromedio >= 0 && nuevoPromedio <= 10) {
            this.#promedio = nuevoPromedio;
        } else {
            console.log(`Error. Ingrese un promedio valido`);
        }
    }

    presentarse() {
        super.presentarse();
        console.log(`Soy estudiante y mi promedio es ${this.#promedio}`);
    }
}

class Escuela {
    #estudiantes = [];

    get estudiantes() {
        return this.#estudiantes;
    }

    set estudiantes(nuevaLista) {
        this.#estudiantes = nuevaLista;
    }

    agregarEstudiante(estudiante) {
        this.#estudiantes.push(estudiante);
    }

    mostrarAprobados() {
        for (let i = 0; i < this.#estudiantes.length; i++) {
            if (this.#estudiantes[i].promedio > 6) {
                this.#estudiantes[i].presentarse();
            }
        }
    }
}

const est1 = new Estudiante("Gerardo", 19, 10.00);
const est2 = new Estudiante("Olivio", 20, 9.8);

const miEscuela = new Escuela();

miEscuela.agregarEstudiante(est1);
miEscuela.agregarEstudiante(est2);

miEscuela.mostrarAprobados();
