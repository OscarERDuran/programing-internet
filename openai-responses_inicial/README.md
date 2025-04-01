# Cambios Realizados para el Chatbot de Productos

## **Nueva Función `getProducts`**
Se ha añadido una nueva función llamada `getProducts` que permite obtener productos filtrados por **categoría** y/o **color**. Esta función se integra con la API RESTful de productos.

## **Integración en el Mapa de Funciones**
La función `getProducts` se ha añadido al mapa de funciones (`functionsMap`) para que el asistente pueda llamarla cuando sea necesario.

## **API de NextJS para Consumir la API RESTful**
Se ha creado un endpoint en NextJS que actúa como intermediario para consumir la API RESTful de productos (`http://localhost:8080/productos/search`). Este endpoint acepta parámetros de consulta (`query parameters`) para filtrar los productos.

## Funcionamiento del Chatbot

A continuación, se muestran capturas de pantalla que ilustran el funcionamiento del chatbot en diferentes situaciones:

### 1. Consulta sobre Monitores Disponibles
El usuario solicita información sobre los monitores disponibles. El chatbot responde con detalles específicos de un monitor en stock.

![Consulta sobre Monitores](imgs/mensaje1.jpg)

---

### 2. Listado de Marcas de Teclados
El usuario pregunta por las marcas de teclados disponibles. El chatbot proporciona una lista completa de las marcas.

![Listado de Marcas de Teclados](imgs/mensaje2.jpg)

---

### 3. Descripción de un Teclado Específico
El usuario solicita detalles sobre un teclado de la marca Apple. El chatbot responde con una descripción detallada del producto.

![Descripción de Teclado Apple](imgs/mensaje3.jpg)

## **Resultado Final**
Con estos cambios, el chatbot ahora puede:
1. **Responder preguntas sobre productos**: Por ejemplo, "¿Qué computadoras tienes en rojo?".
2. **Filtrar productos**: Según categoría, color o ambos.
3. **Mostrar resultados en la interfaz de chat**: Los productos se muestran como tarjetas con imágenes, nombres, categorías y precios.

## **Resumen de Cambios**
- **Nueva Función**: `getProducts` para obtener productos filtrados.
- **Integración en el Mapa de Funciones**: La función se añadió a `functionsMap`.
- **Endpoint en NextJS**: Se creó un endpoint para consumir la API RESTful de productos.
- **Filtros**: Se implementaron filtros por categoría y color.
- **Interfaz de Chat**: Los productos se muestran como tarjetas en la interfaz de chat.