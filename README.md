# Ejemplo de componente React
![Imagen del proyecto](/readme_assets/componente.png)

## Ejemplo en vivo
[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://ascraftc.github.io/react_yt_component/)

## Descripción 📑

Consistente en un proyecto simple que muestra el uso de un componente en react el cual llama a una api (la de google) actualizar sus contenidos.

## ¿Qué he aprendido en este proyecto? 🙇🏻 

 - Estructura preferente de construcción de proyectos de react.
 - Construcción de componentes con props reutilizables.
 - Uso de useState y useEffect en componentes de react.
 - Fetch de datos utilizando useEffect.
 - Documentación de código + inclusion de enlaces externos.
 - Uso de Sass en react.
 - Manejo de eventos de formulario en react.
 - Utilización de API de YouTube.
 - CI en Github Pages manteniendo variables ocultas.

## Tecnologías 🛠
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/reference/react)
[![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://es.wikipedia.org/wiki/JavaScript)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://es.vitejs.dev/guide/)
[![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/docs/latest/)
[![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)](https://sass-lang.com/documentation/)
[![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/docs)
[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)](https://developers.google.com/youtube/v3?hl=es-419)
## Vista previa del proyecto
Si quieres hechas un vistazo al proyecto, te recomiendo:

- Una vista general del uso correcto de la aplicación

![Captura del proyecto](/readme_assets/muestra_app.png)

- Estructura de un link de Youtube, el id del video es lo que se encuentra entre el `v=` y `&` (en este caso `jNQXAC9IVRw`)

![Captura del proyecto](/readme_assets/Estructura_link_yt.png)


## Autor ✒️
**Cristóbal Andrés Contreras Beltrán**

* [cristobal.contreras@outlook.cl](cristobal.contreras@outlook.cl)
* [LinkedIn](https://www.linkedin.com/in/cristobal-contreras-beltran/)
* [Behance](https://www.behance.net/AsCraftC)

## Instalación 

1. Lo primero es realizar el `git clone`.
2. Luego se deben instalar las dependencias con `npm install`.
3. Se necesitará una key de Google con acceso a YouTube API V3

> 1. Ingresar a [Google Cloud Platform](https://console.cloud.google.com)
> 2. Crea un nuevo proyecto o selecciona uno ya existente.
> 3. Busca el servicio `APIs & Services`.
> 4. En la sección `Enabled APIs and services`, habilita una nueva API con el botón `ENABLE APIS AND SERVICES`.
> 5. Busca y habilita `youtube data api v3`.
> 6. De vuelta a la sección `ENABLE APIS AND SERVICES`, deberias verla en el listado.
> 7. (opcional) Deshabilita las no utilizadas pulsando en ellas y luego en `DISABLE API`.
> 8. Ve a la sección `Credentials` y crea una con `CREATE CREDENTIALS` -> `API key`.
> 9. Copia la credencial dada.

4. En la raíz del proyecto generar un archivo `.env`.
5. En este archivo se debe agregar la siguiente linea `VITE_AUTH_TOKEN = {YOUR-API-KEY}`.
6. Ejecuta el servicio como dev con el comando `npm run dev`.
7. Se abrirá en la direccion [local](http://localhost:5173/react_yt_component), sino revisa el parámetro `Local:` en al consola.

  
## Licencia 📄
MIT Public License v3.0

No puede usarse comercialmente.