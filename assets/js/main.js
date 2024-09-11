// Fórmula: ((𝑚𝑜𝑛𝑡𝑜𝐵𝑟𝑢𝑡𝑜𝐴𝑛𝑢𝑎𝑙 − 𝑑𝑒𝑑𝑢𝑐𝑐𝑖𝑜𝑛𝑒𝑠) * 21%)
import  Cliente   from './cliente.js';
import  Impuesto  from './impuesto.js';

const impuestoCliente1 = new Impuesto(50000, 10000);
const cliente1         = new Cliente('Juan Pérez',impuestoCliente1);

const resultadoImpuestoCliente1 = cliente1.calcularImpuesto();

console.log(`El impuesto de ${cliente1.nombre} es: $${resultadoImpuestoCliente1}`);