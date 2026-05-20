# Construcción de una API REST robusta

Una empresa fintech necesita una API REST para gestionar transacciones de usuarios. La API debe ser robusta, escalable y seguir las mejores prácticas de desarrollo backend. El objetivo es que los usuarios puedan realizar transacciones de forma segura y eficiente.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Desarrollo de API REST con Node.js |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 4-6 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición de endpoints

**Objetivo:** Definir los endpoints necesarios para gestionar transacciones de usuarios.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Identifica los endpoints requeridos para crear, leer, actualizar y eliminar transacciones de usuarios.
- Considera las reglas de negocio y los posibles estados de una transacción.

**Entregable:** Lista de endpoints definidos con sus métodos HTTP y descripciones.

<details>
<summary>Pistas de conocimiento</summary>

- Piensa en los verbos HTTP y qué acciones deben representar.
- Considera la estructura de datos necesaria para cada endpoint.

</details>

### Fase 2: Implementación de endpoints

**Objetivo:** Implementar los endpoints definidos en la fase anterior.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Crea las rutas y controladores para cada endpoint definido.
- Implementa la lógica necesaria para manejar las solicitudes y respuestas.

**Entregable:** Código funcional para los endpoints definidos.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda validar los datos de entrada.
- Maneja los errores adecuadamente.

</details>

### Fase 3: Pruebas y validación

**Objetivo:** Realizar pruebas y validación de los endpoints implementados.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Crea pruebas unitarias y de integración para los endpoints.
- Valida que los endpoints funcionan según las especificaciones.

**Entregable:** Pruebas unitarias y de integración para los endpoints.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza herramientas de prueba adecuadas.
- Asegúrate de cubrir diferentes escenarios y edge cases.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un endpoint en una API REST?
- **paraQueSirve**: ¿Para qué sirve cada endpoint definido en la fase 1?
- **comoSeUsa**: ¿Cómo se usa un endpoint para crear una transacción?
- **erroresComunes**: ¿Qué errores comunes pueden ocurrir al implementar un endpoint?
- **queDecisionesImplica**: ¿Qué decisiones de diseño implica la implementación de un endpoint?

## Criterios de Evaluacion

- Definición clara de endpoints
- Implementación funcional de endpoints
- Pruebas unitarias y de integración para endpoints
- Manejo adecuado de errores
- Decisiones de diseño fundamentadas

---

*Reto generado automaticamente por Challenge Generator - Pragma*
