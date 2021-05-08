// No realizar la prueba en repl.it al hacerlo su respuesta queda disponible para otros postulantes
// No editar
const clients = [{
    id: 1,
    taxNumber: '86620855',
    name: 'HECTOR ACUÑA BOLAÑOS'
},
{
    id: 2,
    taxNumber: '7317855K',
    name: 'JESUS RODRIGUEZ ALVAREZ'
},
{
    id: 3,
    taxNumber: '73826497',
    name: 'ANDRES NADAL MOLINA'
},
{
    id: 4,
    taxNumber: '88587715',
    name: 'SALVADOR ARNEDO MANRIQUEZ'
},
{
    id: 5,
    taxNumber: '94020190',
    name: 'VICTOR MANUEL ROJAS LUCAS'
},
{
    id: 6,
    taxNumber: '99804238',
    name: 'MOHAMED FERRE SAMPER'
}
];
const accounts = [{
    clientId: 6,
    bankId: 1,
    balance: 15000
},
{
    clientId: 1,
    bankId: 3,
    balance: 18000
},
{
    clientId: 5,
    bankId: 3,
    balance: 135000
},
{
    clientId: 2,
    bankId: 2,
    balance: 5600
},
{
    clientId: 3,
    bankId: 1,
    balance: 23000
},
{
    clientId: 5,
    bankId: 2,
    balance: 15000
},
{
    clientId: 3,
    bankId: 3,
    balance: 45900
},
{
    clientId: 2,
    bankId: 3,
    balance: 19000
},
{
    clientId: 4,
    bankId: 3,
    balance: 51000
},
{
    clientId: 5,
    bankId: 1,
    balance: 89000
},
{
    clientId: 1,
    bankId: 2,
    balance: 1600
},
{
    clientId: 5,
    bankId: 3,
    balance: 37500
},
{
    clientId: 6,
    bankId: 1,
    balance: 19200
},
{
    clientId: 2,
    bankId: 3,
    balance: 10000
},
{
    clientId: 3,
    bankId: 2,
    balance: 5400
},
{
    clientId: 3,
    bankId: 1,
    balance: 9000
},
{
    clientId: 4,
    bankId: 3,
    balance: 13500
},
{
    clientId: 2,
    bankId: 1,
    balance: 38200
},
{
    clientId: 5,
    bankId: 2,
    balance: 17000
},
{
    clientId: 1,
    bankId: 3,
    balance: 1000
},
{
    clientId: 5,
    bankId: 2,
    balance: 600
},
{
    clientId: 6,
    bankId: 1,
    balance: 16200
},
{
    clientId: 2,
    bankId: 2,
    balance: 10000
}
]
const banks = [{
    id: 1,
    name: 'SANTANDER'
},
{
    id: 2,
    name: 'CHILE'
},
{
    id: 3,
    name: 'ESTADO'
}
];

/*
  SECCIÓN PROBLEMAS
    - Las siguientes son preguntas básicas de Javascript y manejo de datos. Se evaluará eficiencia, ORDEN y claridad del código entregado.
    - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
    - Debe usar nombres explicativos para sus variables.
    - Usar sintaxis ES6.
*/

// 0 Arreglo con los ids de clientes
// 1 Arreglo con los ids de clientes ordenados por rut
// 2 Arreglo con los nombres de cliente ordenados de mayor a menor por la suma TOTAL de los saldos de cada cliente en los bancos que participa.
// 3 Objeto en que las claves sean los nombres de los bancos y los valores un arreglo con los ruts de sus clientes ordenados alfabeticamente por nombre.
// 4 Arreglo ordenado decrecientemente con los saldos de clientes que tengan más de 25.000 en el Banco SANTANDER
// 5 Arreglo con ids de bancos ordenados crecientemente por la cantidad TOTAL de dinero que administran.
// 6 Objeto en que las claves sean los nombres de los bancos y los valores el número de clientes que solo tengan cuentas en ese banco.
// 7 Objeto en que las claves sean los nombres de los bancos y los valores el id de su cliente con menos dinero.
// 8 Agregar nuevo cliente con datos ficticios a "clientes" y agregar una cuenta en el BANCO ESTADO con un saldo de 9000 para este nuevo empleado. 
// Luego devolver el lugar que ocupa este cliente en el ranking de la pregunta 2.

class Banco {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.clientes = [];
        this.cuentas = [];
    }
    nuevoCliente(cliente) {
        this.clientes.push(cliente);
    }
    listaIdClientes() {
        let miArreglo = [];
        for (let i = 0; i < this.clientes.length; i++) {
            let esteCliente = this.clientes[i];
            miArreglo.push(esteCliente.id);
        }
        console.log(miArreglo);
        return miArreglo;
    }
    listaRutOrdenada() {
        let miArreglo = [];
        for (let i = 0; i < this.clientes.length; i++) {
            let esteCliente = this.clientes[i];
            miArreglo.push(esteCliente.idImpuestos);
        }
        // El método de .sort() es un poquito extraño.
        // Ordena el arreglo alfabéticamente sin argumento.
        // Para ordenar las entradas numéricamente hay que pasarle una función.
        // Lo que hacemos aquí es usar una función flecha.
        miArreglo.sort((primer, segundo)=> (primer-segundo));
        // Esto es igual a este ejemplo:
        // miArreglo.sort(
        //     function(primer, segundo){
        //         return primer - segundo;
        //     }
        // )
        
    }
}

class Cliente {
    constructor(id, idImpuestos, nombre) {
        this.id = id;
        this.idImpuestos = idImpuestos;
        this.nombre = nombre;
        this.cuentas = [];
    }
}

class Cuenta {
    constructor(idCliente,idBanco,balance) {
        this.idCliente = idCliente;
        this.idBanco = idBanco;
        this.balance = balance;
    }
}


// Este código es para crear un banco y poner en ello un par de clientes con cuentas
const santander = new Banco(123456789, 'Banco Santander');
const maria = new Cliente(1,10000001,'Maria Vargas');
const ctaMaria = new Cuenta(1,1,10);
maria.nuevaCuenta(ctaMaria);
const pedro = new Cliente(2,6549852,'Pedro Martinez');
const ctaPedro = new Cuenta(2,1,25);
pedro.nuevaCuenta(ctaPedro);
const juan = new Cliente(3,6321258,'Juan Tapia');
const ctaJuan = new Cuenta(3,1,2);
juan.nuevaCuenta(ctaJuan);
const lucas = new Cliente(4,56465820,'Lucas Sandoval');
const ctaLucas = new Cuenta(4,1,300);
lucas.nuevaCuenta(ctaLucas);
const arnolcho = new Cliente(5,3256984,'Arnolcho Perez');
const ctaArnolcho = new Cuenta(5,1, 659);
arnolcho.nuevaCuenta(ctaArnolcho);
santander.clientes = [maria,pedro,juan,lucas,arnolcho];
