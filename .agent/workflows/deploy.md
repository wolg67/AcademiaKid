---
description: Cómo desplegar la aplicación en Netlify
---

# Despliegue en Netlify

Sigue estos pasos para poner tu AcademiaKid en línea utilizando Netlify.

### Opción 1: Arrastrar y Soltar (Manual)

Esta es la forma más rápida si no tienes un repositorio de Git configurado:

1. **Construye el proyecto localmente:**
   Abre una terminal en la carpeta del proyecto y ejecuta:
   ```bash
   npm run build
   ```
2. **Localiza la carpeta de salida:**
   Una vez terminado, verás una nueva carpeta llamada `dist` en tu proyecto.
3. **Sube a Netlify:**
   - Ve a [Netlify Drop](https://app.netlify.com/drop).
   - Arrastra y suelta la carpeta `dist` directamente en la página.
   - ¡Tu sitio estará en línea en segundos!

---

### Opción 2: Conexión con GitHub (Recomendado)

Para actualizaciones automáticas cada vez que cambies el código:

1. **Sube tu código a GitHub:**
   Crea un repositorio y realiza el push de tus archivos.
2. **Conecta Netlify:**
   - Inicia sesión en [app.netlify.com](https://app.netlify.com/).
   - Haz clic en **"Add new site"** y selecciona **"Import an existing project"**.
   - Elige **GitHub** y selecciona tu repositorio.
3. **Configura el Build:**
   Netlify debería detectar automáticamente la configuración de Vite:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. **Despliega:**
   Haz clic en **"Deploy site"**. Netlify construirá y publicará tu sitio automáticamente.

---

### Opción 3: Netlify CLI

Si prefieres la línea de comandos:

1. **Instala la CLI:**
   ```bash
   npm install netlify-cli -g
   ```
2. **Inicia sesión y despliega:**
   ```bash
   netlify login
   netlify deploy --prod --dir dist
   ```

> [!TIP]
> Dado que esta aplicación utiliza rutas de React (si las llegas a usar en el futuro), asegúrate de añadir un archivo llamado `_redirects` en la carpeta `public/` con el contenido: `/* /index.html 200` para evitar errores 404 al recargar páginas internas.
