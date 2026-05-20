# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto corregido y listo para compilar.

---

```
Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
// === ARCHIVO: package.json ===
{
  "name": "fintech-api",
  "version": "1.0.0",
  "description": "API REST para gestionar transacciones de usuarios.",
  "main": "src/app.js",
  "scripts": {
    "start": "node src/app.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2",
    "joi": "^17.6.0"
  },
  "devDependencies": {
    "jest": "^27.4.5"
  }
}

// === ARCHIVO: src/app.js ===
const express = require('express');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
app.use(express.json());

app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// === ARCHIVO: src/controllers/transactionController.js ===
const Transaction = require('../models/transactionModel');
const Joi = require('joi');

const createTransaction = async (req, res) => {
  const schema = Joi.object({
    amount: Joi.number().required(),
    type: Joi.string().valid('credit', 'debit').required()
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const transaction = new Transaction({
    amount: req.body.amount,
    type: req.body.type
  });
  await transaction.save();
  res.send(transaction);
};

const getTransactions = async (req, res) => {
  const transactions = await Transaction.find();
  res.send(transactions);
};

const getTransactionById = async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);
  if (!transaction) return res.status(404).send('Transaction not found');
  res.send(transaction);
};

const updateTransaction = async (req, res) => {
  const schema = Joi.object({
    amount: Joi.number(),
    type: Joi.string().valid('credit', 'debit')
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!transaction) return res.status(404).send('Transaction not found');
  res.send(transaction);
};

const deleteTransaction = async (req, res) => {
  const transaction = await Transaction.findByIdAndRemove(req.params.id);
  if (!transaction) return res.status(404).send('Transaction not found');
  res.send(transaction);
};

module.exports = {
  createTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction
};

// === ARCHIVO: src/models/transactionModel.js ===
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  type: { type: String, enum: ['credit', 'debit'], required: true },
  createdAt: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;

// === ARCHIVO: src/routes/transactionRoutes.js ===
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.post('/', transactionController.createTransaction);
router.get('/', transactionController.getTransactions);
router.get('/:id', transactionController.getTransactionById);
router.put('/:id', transactionController.updateTransaction);
router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;

// === ARCHIVO: src/tests/transactionController.test.js ===
const request = require('supertest');
const app = require('../../src/app');
const Transaction = require('../../src/models/transactionModel');

describe('Transaction Controller', () => {
  afterEach(async () => {
    await Transaction.deleteMany({});
  });

  describe('POST /api/transactions', () => {
    it('should create a new transaction', async () => {
      const res = await request(app)
       .post('/api/transactions')
       .send({ amount: 100, type: 'credit' });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('amount', 100);
      expect(res.body).toHaveProperty('type', 'credit');
    });
  });

  describe('GET /api/transactions', () => {
    it('should get all transactions', async () => {
      await Transaction.create({ amount: 100, type: 'credit' });
      const res = await request(app).get('/api/transactions');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Array);
    });
  });

  describe('GET /api/transactions/:id', () => {
    it('should get a transaction by id', async () => {
      const transaction = await Transaction.create({ amount: 100, type: 'credit' });
      const res = await request(app).get(`/api/transactions/${transaction.id}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('_id', transaction.id.toString());
    });
  });

  describe('PUT /api/transactions/:id', () => {
    it('should update a transaction', async () => {
      const transaction = await Transaction.create({ amount: 100, type: 'credit' });
      const res = await request(app)
       .put(`/api/transactions/${transaction.id}`)
       .send({ amount: 200, type: 'debit' });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('amount', 200);
      expect(res.body).toHaveProperty('type', 'debit');
    });
  });

  describe('DELETE /api/transactions/:id', () => {
    it('should delete a transaction', async () => {
      const transaction = await Transaction.create({ amount: 100, type: 'credit' });
      const res = await request(app).delete(`/api/transactions/${transaction.id}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('_id', transaction.id.toString());
    });
  });
});

// === ARCHIVO: config/config.js ===
module.exports = {
  db: {
    url: 'mongodb://localhost:27017/fintech-api'
  }
};

// === ARCHIVO: src/dtos/transactionDto.js ===
const Joi = require('joi');

const createTransactionDto = Joi.object({
  amount: Joi.number().required(),
  type: Joi.string().valid('credit', 'debit').required()
});

const updateTransactionDto = Joi.object({
  amount: Joi.number(),
  type: Joi.string().valid('credit', 'debit')
});

module.exports = { createTransactionDto, updateTransactionDto };
```
