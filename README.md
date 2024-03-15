# DOMO Technical Test

## Indice
1. [Presentación](#presentacion)
2. [Teconologías utilizadas](#tecnologias)
3. [Navegación](#navegacion)
4. [Guia de implementación](#implementacion)

## [Presentacion](#presentacion)
Maqueta de landing page para _complete labs_ con diseño de SPA (Single Page Aplication). Desarrollada como prueba técnica para [DOMO](https://www.domo.com.ar/) para el puesto de Desarrollador Front-end.

## [Tecnologías utilizadas](#tecnologías)
La pagína fue diseñada con las siguientes tecnologías:

- [Next.js](https://nextjs.org/): Framework Fullstack de [React.js](https://react.dev), mediante el cual el desarrollador tiene acceso al SSR (Server Side Rendering). Con ésta técnica se logra renderizar la página en el servidor, y enviarla al cliente pre-renderizada. Esto permite:
  - **Optimizar tiempos de carga.** La página se envía ya renderizada desde el servidor, enviando menos archivos, JavaScript entre ellos, lo que acelera mucho el tiempo inicial de carga y las subsecuentes recargas de la página.
  - **Mejorar el posicionamiento web.** Una práctica común en el SEO (Search Engine Optimization), es la compresión al maximo de los assets utilizados con el fin de acelerar la carga de la página. Ya que los motores de búsqueda indexan los sitios con velocidades de milisegundos, que el archivo HTML esté pre renderizado, hace que los motores puedan leer los tags de posicionamiento con mucha más velocidad, ubicando al sitio siempre entre los primeros resultados de la busqueda.
  - **Mayor seguridad de la información.** De tener conexiones con otros servicios, estos pueden manejarse desde el servidor, en lugar de exponer información posiblemente sensible al cliente. Tener el control de que datos se exponen y cuales se encriptan y se guardan en bases de datos, es un extra layer de seguridad.

- [Tailwind.css](https://tailwindcss.com): Framework de CSS, hace tiempo incorporado de manera nativa al desarrollo con Next.js. Mediante el uso de clases utilitarias ubicadas dentro del mismo marcado, haciendo uso de la propiedad `className` se aplican estilos especificos, por ejemplo:
```tsx
  export default function Home() {
    return (
      <main className="min-h-screen flex flex-col">
        Hello world!
      </main>
    )
  }
```
En éste ejemplo el elemento `<main>` obtiene las propiedades `min-height: 100vh;`, `display: flex;` y `flex-direction: column;`. Desarrollar de éste modo soluciona varios problemas, entre ellos: Evitar el uso de clases confusas y repetidas que pueden ser dificiles de debuguear e implementar la co-locación de los elementos acelera la velocidad del desarrollo, evitando tener varios archivos repartidos y tener que moverse entre ellos.

- [DaisyUI](https://daisyui.com): Libreria de componentes basados en las clases utilitarias provistas por Tailwind. Siguiendo la misma filosofía, aplicando clases a los elementos se aplican un conjunto de propiedades de CSS:
```tsx
  export default function Home() {
    return (
      <button className="btn btn-info">
        Hello world!
      </button>
    )
  }
```
En éste ejemplo, la clase `btn` provee al elemento `<button>` de un conjunto de propiedades de CSS que lo enriquecen y le dan interactividad.

## [Navegación](#navegación)
La página presenta un diseño SPA, lo que permite que las diversas secciones se monten y desmonten del archivo HTML mediante el enrutador. En éste caso Next.js implementa un enrutador propio, basado en la estructura de carpetas del proyecto:
```
└── /app/
    ├── page.tsx
    ├── layout.tsx
    ├── not-found.tsx
    ├── /jobs/
    │   └── page.tsx
    └── /hire-us/
        └── page.tsx
```
Next.js busca en tiempo de compilación los archivos `page.js/ts/jsx/tsx` dentro de las carpetas. Cada archivo representa una ruta navegable dentro de la página `https://compleetelabs.com/jobs`, por ejemplo. De no encontrar el archivo de la ruta referenciada, el archivo `not-found.js/ts/jsx/tsx` permite renderizar una pagina `404` personalizada, indicandole al usuario que esa página no se encuentra disponible.

La página principal en este momento no tiene navegabilidad por fuera de dirigir al usuario a la sección referenciada en la barra de navegación. Cliquear en los botones que dirigen a rutas aún no existentes disparan una página 404 permitiendole al usario volver a la página principal.

## [Guia de implementación](#implementacion)
La página se encuentra actualmente desplegada en [Netlify](https://compleetlabs.netlify.app), como parte de los requerimientos del test técnico.

De desear desplegarla de manera local para el desarrollo, se debe clonar el repositorio público:
```bash
$ git clone https://github.com/JohnFScha/domo-technical-test.git
```
Una vez clonado el repositorio deben dirigirse al directorio que lo contenga:
```bash
$ cd /domo-technical-test
```
Una vez en el directorio se debe correr el comando `npm install` en la terminal, para que se instalen todas las dependencias. Al finalizar este proceso se puede abrir el puerto de desarrollo con el comando:
```shell
npm run dev
``` 
Esto abrira el proyecto en el puerto `localhost:3000` por defecto.

Se podrá realizar una compilación estática del proyecto con el comando 
```shell 
npm run build
```
Esto creará una version compilada con el estado actual del proyecto, lo que permite ver el resultado antes de subirlo a un servidor. Luego corriendo:
```shell
npm run start
```
Se mostrará el compilado en el browser, recordar que se trata de una version estática y no mostrará los cambios hechos, como si en la versión de desarrollo.