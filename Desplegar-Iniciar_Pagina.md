# Guía de Actualización y Despliegue - AcademiaKid

Sigue estos pasos para aplicar cambios y subir la página a Internet.

## 1. Instalación y Preparación (Solo si es necesario)

Si has descargado el proyecto en una computadora nueva o has añadido paquetes:

```bash
npm install
```

## 2. Probar Cambios Localmente

Antes de subir los cambios, verifica que todo funcione correctamente:

```bash
npm run dev
```

_Abre la dirección que te indique la terminal (usualmente `http://localhost:5173`)._

## 3. Construir la Aplicación (Build)

Este comando prepara los archivos finales optimizados en la carpeta `dist`:

```bash
npm run build
```

## 4. Desplegar a Netlify

### Opción A: Usando la Terminal (Netlify CLI)

Si prefieres comandos rápidos desde la consola:

```bash
# Paso 1: Instalar la herramienta (solo una vez)
npm install -g netlify-cli

# Paso 2: Iniciar sesión (solo una vez)
netlify login

# Paso 3: Subir a producción
netlify deploy --prod --dir dist
```

### Opción B: Usando GitHub (Automático)

Si tu proyecto está conectado a GitHub:

```bash
git add .
git commit -m "Actualización: [describe tus cambios aquí]"
git push origin main
```

_Netlify detectará el cambio automáticamente y actualizará la página en unos segundos._

---

## Resumen de Comandos Rápidos

| Acción                          | Comando                            |
| :------------------------------ | :--------------------------------- |
| Iniciar Servidor Local          | `npm run dev`                      |
| Construir para Producción       | `npm run build`                    |
| Desplegar vía Terminal          | `netlify deploy --prod --dir dist` |
| Ver versión de producción local | `npm run preview`                  |

> [!TIP]
> Si tienes problemas con las rutas al recargar la página en Netlify, asegúrate de que el archivo `_redirects` exista en la carpeta `public/` con el contenido: `/* /index.html 200`.
