# Documentación Técnica: InverCapital Landing Page

## 1. Resumen del Proyecto
El proyecto consiste en la creación de una Landing Page corporativa y premium para **InverCapital**. El objetivo de la web es exhibir su portafolio de remates judiciales y carteras hipotecarias, resaltar su propuesta de valor, captar *leads* a través de un formulario de contacto y un botón flotante de WhatsApp, y proyectar una imagen de lujo, profesionalismo y confianza.

*   **URL de Producción:** [https://invercapital.pe](https://invercapital.pe)
*   **Alojamiento / Hosting:** Cloudflare Pages

---

## 2. Stack Tecnológico
La aplicación ha sido desarrollada utilizando tecnologías modernas para garantizar un rendimiento óptimo, alta seguridad y facilidad de mantenimiento:

*   **Framework Base:** [React 18](https://react.dev/)
*   **Herramienta de Construcción (Bundler):** [Vite](https://vitejs.dev/) (ultrarrápido, ideal para Single Page Applications).
*   **Lenguajes:** JavaScript (ES6+), JSX, HTML5.
*   **Estilos:** CSS3 Puro (Vanilla CSS). Se implementaron principios de *Glassmorphism*, diseño responsivo (Mobile-first) y variables CSS para mantener consistencia en la paleta de colores.
*   **Tipografía:** 
    *   *Merriweather* (Serif) - Utilizada para titulares y el logo, proyectando sobriedad y seriedad.
    *   *Outfit* (Sans-serif) - Utilizada para cuerpos de texto, aportando modernidad y alta legibilidad.
*   **Envío de Correos (Leads):** [Web3Forms](https://web3forms.com/) - API serverless que gestiona el envío de correos desde el formulario de contacto directo al correo oficial de la empresa sin requerir backend propio.

---

## 3. Arquitectura y Estructura del Proyecto

El código fuente está estructurado de manera modular dentro de la carpeta `src`. Todo el flujo principal ocurre en la raíz del frontend.

```text
invercapital/
├── public/                 # Archivos estáticos de acceso directo (favicon, imágenes locales, isotipo)
│   ├── casa_surco.jpeg
│   ├── departamento_miraflores.jpeg
│   ├── hero.jpg            # Imagen de portada principal
│   └── ...                 # Otras fotos de propiedades y logos
├── src/
│   ├── App.jsx             # Componente central (Single-Page). Contiene toda la estructura HTML/React de las secciones, el estado del carrusel y los enlaces.
│   ├── index.css           # Hoja de estilos global. Define el sistema de diseño (variables, animaciones, media queries).
│   └── main.jsx            # Punto de entrada de React (monta la app en el DOM).
├── index.html              # Archivo HTML raíz. Contiene configuraciones críticas de SEO (Meta tags, Open Graph, Schema.org JSON-LD).
├── package.json            # Dependencias del proyecto y scripts (npm run dev, build).
├── vite.config.js          # Configuración del compilador Vite.
└── wrangler.json           # Configuración de entorno de Cloudflare Pages para el despliegue correcto de la carpeta de construcción (dist).
```

---

## 4. Características Clave del Desarrollo

### A. Diseño "Premium Luxury"
Se utilizó una paleta de colores dominada por tonos oscuros (`#0a0c10`, `#181b21`) y acentos en dorado metálico (`#D4AF37`) para denotar lujo e inversión de alto nivel. Se implementaron sombras, transiciones suaves y efectos de desenfoque (`backdrop-filter: blur`) en la cabecera.

### B. Optimización SEO (Search Engine Optimization)
Se ha configurado exhaustivamente el archivo `index.html` para posicionar correctamente en Google:
*   **Meta Etiquetas:** Título oficial, descripción optimizada con palabras clave ("inversión inmobiliaria", "remates judiciales").
*   **Open Graph (Redes Sociales):** Etiquetas para que al compartir el link en WhatsApp, Facebook o LinkedIn aparezca una tarjeta elegante con imagen y título.
*   **Datos Estructurados (Schema.org):** Se incluyó un bloque JSON-LD que declara a InverCapital como un "FinancialService", ayudando al algoritmo de Google a entender exactamente a qué se dedica la empresa.

### C. Carrusel de Propiedades (Oportunidades Gestionadas)
Se programó un carrusel híbrido en `App.jsx` que combina:
*   **Desplazamiento manual:** Con flechas laterales para PC y compatibilidad táctil nativa (swipe) para móviles (apoyado en CSS `scroll-snap`).
*   **Desplazamiento automático infinito:** Un `useEffect` en React desplaza el carrusel un elemento cada 3.5 segundos. La lista de propiedades fue cuadruplicada lógicamente para generar una ilusión de flujo continuo (marquee behavior). Cuando alcanza el límite, rebobina invisiblemente y vuelve a girar.

### D. Integración de WhatsApp Inteligente
El botón flotante de WhatsApp tiene implementada la sintaxis `?text=...`, que pre-redacta un mensaje para el cliente: *"Hola InverCapital, quisiera recibir más información sobre sus oportunidades de inversión"*.

---

## 5. Arquitectura de Despliegue e Infraestructura (Cloudflare)

El sitio vive íntegramente en la nube de **Cloudflare**. Se configuró de la siguiente manera:

1.  **Integración Continua (CI/CD):** El entorno *Cloudflare Pages* está vinculado directamente a la rama `main` del repositorio de GitHub (`InverCapital/invercapital.pe`).
2.  **Despliegues Automáticos:** Cada vez que se realiza un *push* al repositorio, Cloudflare detecta el cambio, ejecuta automáticamente el script `npm run build`, e invalida la caché mundial, publicando los cambios en menos de 2 minutos.
3.  **Configuración Wrangler (`wrangler.json`):** Al detectar problemas iniciales donde Cloudflare intentaba desplegar esto como un *Worker* y no como una página estática *Vite*, se agregó explícitamente el archivo de directivas Wrangler para forzar la lectura desde el directorio de empaquetado `/dist`.
4.  **Redes DNS (Nameservers):** Los DNS del dominio `invercapital.pe` (originalmente en *Punto.pe / RCP*) apuntan ahora hacia Cloudflare. Esto permite que el tráfico pase por sus filtros de seguridad (anti-DDoS, WAF) antes de llegar al servidor.
5.  **SSL/TLS:** Cloudflare provee de forma gratuita e indefinida un certificado de encriptación SSL (HTTPS) asegurando la navegación.

---

## 6. Guía de Mantenimiento

### Levantar el entorno de Desarrollo Local
Para trabajar y previsualizar cambios en tu computadora antes de subirlos:
1. Asegúrate de tener Node.js instalado.
2. Abre la carpeta del proyecto en tu terminal.
3. Ejecuta `npm install` (solo la primera vez).
4. Ejecuta `npm run dev`.
5. Abre `http://localhost:5173` en tu navegador.

### Actualizar o Cambiar Imágenes de Propiedades
1. Coloca la nueva imagen (ej. `nuevo_depa.jpg`) dentro de la carpeta `public/`.
2. Abre `src/App.jsx`.
3. Busca el arreglo `const properties = [...]` en la parte superior del archivo.
4. Modifica la propiedad pertinente cambiando el `img` y el `title`.
   ```javascript
   { img: "/nuevo_depa.jpg", title: "Nuevo Departamento Miraflores" },
   ```
5. Guarda el archivo, realiza el *commit* y súbelo a GitHub (`git push`).

### Actualizar Correos Electrónicos o Datos de Contacto
*   **En la página web:** Edita los textos correspondientes en la sección `<footer>` o `<section>` dentro de `App.jsx`.
*   **Para el Formulario:** El formulario utiliza *Web3Forms* (línea 186 en `App.jsx`). La recepción de los correos está anclada a la variable `access_key`. Si se desea cambiar la bandeja de entrada destinataria a otro correo que no sea `contacto@invercapital.pe`, se debe generar un nuevo *access_key* en la web oficial de Web3Forms y reemplazarlo en el input hidden.

### Empaquetar a Producción (Manual)
Si en el futuro deseas migrar la web a otro servidor (como Vercel, Hostinger o cPanel):
Ejecuta `npm run build`. Esto generará una carpeta llamada `dist/`. El contenido dentro de esa carpeta son simples archivos HTML, CSS y JS compilados, listos para ser arrastrados y soltados en cualquier servidor del mundo.
