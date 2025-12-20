# Arima X - Sitio Web Oficial

Sitio web estático para Arima X, artista generada por IA, construido con Jekyll y optimizado para GitHub Pages.

## 🎵 Características

- **Diseño Moderno y Responsivo**: Interfaz elegante con gradientes y animaciones
- **Optimizado para Móviles**: Funciona perfectamente en todos los dispositivos
- **Integración con Plataformas de Streaming**: Enlaces a Spotify, YouTube, Apple Music, etc.
- **Páginas Incluidas**:
  - Inicio: Página de bienvenida con hero section
  - Sobre Mí: Historia y biografía de la artista
  - Música: Discografía y enlaces a plataformas de streaming
  - Contacto: Formulario de contacto y redes sociales

## 🚀 Instalación Local

### Requisitos Previos

- Ruby 2.7 o superior
- Bundler

### Pasos de Instalación

1. **Clona el repositorio**:
```bash
git clone https://github.com/TU_USUARIO/amirax.git
cd amirax
```

2. **Instala las dependencias**:
```bash
bundle install
```

3. **Ejecuta el servidor local**:
```bash
bundle exec jekyll serve
```

4. **Abre tu navegador** en `http://localhost:4000`

## 📝 Configuración

### Configuración Básica

Edita `_config.yml` para personalizar tu sitio:

```yaml
title: Arima X
description: Official website of Arima X - AI-generated artist
url: "https://TU_USUARIO.github.io"
baseurl: "/amirax"  # Si usas un repositorio de proyecto

social:
  spotify: "https://open.spotify.com/artist/TU_ID"
  instagram: "https://instagram.com/amirax"
  youtube: "https://youtube.com/@amirax"
  twitter: "https://twitter.com/amirax"
  tiktok: "https://tiktok.com/@amirax"
```

### Añadir Imágenes

1. Coloca tus imágenes en la carpeta `assets/images/`
2. Imágenes recomendadas:
   - `amirax-profile.jpg` - Foto de perfil (mínimo 800x800px)
   - `album-placeholder.jpg` - Portadas de álbumes (1000x1000px)
   - Cualquier otra imagen promocional

### Integrar Spotify

En `music.html`, reemplaza el comentario con tu embed de Spotify:

```html
<iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/artist/TU_ID_DE_ARTISTA?utm_source=generator" 
        width="100%" 
        height="380" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
</iframe>
```

### Configurar Formulario de Contacto

1. Regístrate en [Formspree](https://formspree.io)
2. Crea un nuevo formulario
3. En `contact.html`, reemplaza `YOUR_FORM_ID` con tu ID de Formspree:

```html
<form class="contact-form" action="https://formspree.io/f/TU_FORM_ID" method="POST">
```

## 🌐 Despliegue en GitHub Pages

### Opción 1: Repositorio de Usuario/Organización

1. **Crea un repositorio** llamado `TU_USUARIO.github.io`
2. **Sube tu código**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_USUARIO.github.io.git
git push -u origin main
```

3. **Configura GitHub Pages**:
   - Ve a Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, carpeta: / (root)
   - Guarda los cambios

4. **Actualiza `_config.yml`**:
```yaml
url: "https://TU_USUARIO.github.io"
baseurl: ""
```

5. Tu sitio estará disponible en `https://TU_USUARIO.github.io`

### Opción 2: Repositorio de Proyecto

1. **Crea un repositorio** con cualquier nombre (ej: `amirax`)
2. **Sube tu código**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/amirax.git
git push -u origin main
```

3. **Configura GitHub Pages**:
   - Ve a Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, carpeta: / (root)
   - Guarda los cambios

4. **Actualiza `_config.yml`**:
```yaml
url: "https://TU_USUARIO.github.io"
baseurl: "/amirax"
```

5. Tu sitio estará disponible en `https://TU_USUARIO.github.io/amirax`

## 🎨 Personalización

### Colores

Edita las variables CSS en `assets/css/style.css`:

```css
:root {
    --primary-color: #ff006e;     /* Color principal */
    --secondary-color: #8338ec;   /* Color secundario */
    --accent-color: #3a86ff;      /* Color de acento */
    --dark-bg: #0a0a0a;           /* Fondo oscuro */
    --light-bg: #1a1a1a;          /* Fondo claro */
}
```

### Fuentes

Las fuentes actuales son:
- **Montserrat**: Texto general
- **Playfair Display**: Títulos

Para cambiarlas, modifica el enlace de Google Fonts en `_layouts/default.html`.

### Contenido

- **Inicio** (`index.html`): Actualiza el hero section y los lanzamientos destacados
- **Sobre Mí** (`about.html`): Personaliza la biografía y la línea de tiempo
- **Música** (`music.html`): Añade tus álbumes y actualiza los enlaces de plataformas
- **Contacto** (`contact.html`): Configura el formulario y los métodos de contacto

## 📱 Redes Sociales

Actualiza los enlaces de redes sociales en:
1. `_config.yml` - Configuración global
2. `music.html` - Enlaces a plataformas de streaming
3. `contact.html` - Métodos de contacto

## 🔧 Mantenimiento

### Actualizar Contenido

1. Edita los archivos HTML correspondientes
2. Commit y push a GitHub:
```bash
git add .
git commit -m "Actualizar contenido"
git push
```

3. GitHub Pages se actualizará automáticamente en unos minutos

### Añadir Nuevas Páginas

1. Crea un nuevo archivo HTML en la raíz (ej: `blog.html`)
2. Añade el front matter:
```yaml
---
layout: default
title: Blog
---
```
3. Añade el enlace en `_layouts/default.html`

## 📄 Estructura del Proyecto

```
amirax/
├── _config.yml           # Configuración de Jekyll
├── _layouts/
│   └── default.html      # Layout principal
├── assets/
│   ├── css/
│   │   └── style.css     # Estilos CSS
│   ├── js/
│   │   └── main.js       # JavaScript
│   └── images/           # Imágenes del sitio
├── index.html            # Página de inicio
├── about.html            # Página sobre mí
├── music.html            # Página de música
├── contact.html          # Página de contacto
├── Gemfile               # Dependencias Ruby
└── README.md             # Este archivo
```

## 🐛 Solución de Problemas

### El sitio no se actualiza en GitHub Pages

- Espera 2-3 minutos después de hacer push
- Verifica que GitHub Pages esté habilitado en Settings
- Revisa la pestaña Actions para ver si hay errores de build

### Estilos no se cargan correctamente

- Verifica que `baseurl` en `_config.yml` sea correcto
- Si usas un repositorio de proyecto, asegúrate de incluir el nombre del repo en baseurl

### Errores de Jekyll localmente

```bash
bundle update
bundle exec jekyll clean
bundle exec jekyll serve
```

## 📞 Soporte

Para preguntas o problemas:
- Abre un issue en GitHub
- Consulta la [documentación de Jekyll](https://jekyllrb.com/docs/)
- Revisa la [documentación de GitHub Pages](https://docs.github.com/es/pages)

## 📜 Licencia

Este proyecto está bajo tu licencia preferida. Actualiza según necesites.

---

**Hecho con ❤️ para Arima X**
