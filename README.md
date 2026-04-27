# Frontend del proyecto

Este frontend está desarrollado con React y Vite, con una organización de componentes orientada a Atomic Design para mantener una estructura clara y escalable. La interfaz se divide en niveles como átomos, moléculas, organismos y vistas, lo que permite reutilizar piezas pequeñas y construir pantallas completas de forma consistente.

A nivel de estilos se utiliza la metodología BEM (Block, Element, Modifier). Cada clase está nombrada de forma explícita para reflejar su bloque, sus elementos internos y sus variaciones, evitando colisiones y facilitando el mantenimiento del CSS a medida que crece la aplicación.

Para trabajar en local se instala primero el proyecto con `npm install` y se arranca con `npm run dev`. El entorno de desarrollo levanta el frontend con recarga en caliente, lo que permite iterar rápido sobre componentes y estilos siguiendo la estructura definida.

El despliegue se realiza generando una versión optimizada con `npm run build`, que crea los archivos estáticos en `dist/`. Esos archivos se publican en el servicio de hosting configurado para el proyecto. En un flujo habitual, cada cambio se versiona en Git y, al actualizar la rama de despliegue, el proveedor ejecuta la build y sirve automáticamente la versión más reciente del frontend.
