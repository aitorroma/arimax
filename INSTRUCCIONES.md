# 🚀 Guía Rápida de Despliegue - Arima X

## Pasos para Publicar tu Sitio en GitHub Pages

### 1. Preparar el Repositorio

```bash
# Navega a la carpeta del proyecto
cd /home/tuxed/Git/Nimbox/amirax

# Inicializa Git (si no está inicializado)
git init

# Añade todos los archivos
git add .

# Haz el primer commit
git commit -m "Sitio web inicial de Amira X"
```

### 2. Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** → **"New repository"**
3. Nombre del repositorio:
   - Para dominio principal: `TU_USUARIO.github.io`
   - Para proyecto: `amirax` (o el nombre que prefieras)
4. **NO** marques "Initialize with README"
5. Haz clic en **"Create repository"**

### 3. Conectar y Subir

```bash
# Conecta tu repositorio local con GitHub
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git

# Cambia a la rama main
git branch -M main

# Sube el código
git push -u origin main
```

### 4. Activar GitHub Pages

1. En tu repositorio de GitHub, ve a **Settings**
2. En el menú lateral, haz clic en **Pages**
3. En **Source**, selecciona:
   - Branch: **main**
   - Folder: **/ (root)**
4. Haz clic en **Save**

### 5. Configurar el Sitio

**IMPORTANTE**: Edita `_config.yml` según tu tipo de repositorio:

#### Si usas `TU_USUARIO.github.io`:
```yaml
url: "https://TU_USUARIO.github.io"
baseurl: ""
```

#### Si usas un repositorio de proyecto (ej: `amirax`):
```yaml
url: "https://TU_USUARIO.github.io"
baseurl: "/amirax"
```

Después de editar:
```bash
git add _config.yml
git commit -m "Configurar URL del sitio"
git push
```

### 6. Personalizar Contenido

#### Añadir Enlaces de Redes Sociales

Edita `_config.yml`:
```yaml
social:
  spotify: "https://open.spotify.com/artist/TU_ID"
  instagram: "https://instagram.com/amirax"
  youtube: "https://youtube.com/@amirax"
  twitter: "https://twitter.com/amirax"
  tiktok: "https://tiktok.com/@amirax"
```

#### Añadir Imágenes

1. Coloca tus imágenes en `assets/images/`
2. Nombra las imágenes según se usan en el sitio:
   - `amirax-profile.jpg` - Tu foto de perfil
   - `album-placeholder.jpg` - Portadas de álbumes

#### Integrar Spotify

1. Ve a tu perfil de artista en Spotify
2. Haz clic en los tres puntos → **Share** → **Embed artist**
3. Copia el código iframe
4. Pégalo en `music.html` donde dice `<!-- Ejemplo de embed de Spotify -->`

#### Configurar Formulario de Contacto

1. Regístrate en [Formspree.io](https://formspree.io)
2. Crea un nuevo formulario
3. Copia tu Form ID
4. En `contact.html`, reemplaza `YOUR_FORM_ID` con tu ID

### 7. Verificar el Sitio

1. Espera 2-3 minutos después de hacer push
2. Visita tu sitio:
   - Dominio principal: `https://TU_USUARIO.github.io`
   - Proyecto: `https://TU_USUARIO.github.io/amirax`

### 8. Actualizar el Sitio

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

El sitio se actualizará automáticamente en 1-2 minutos.

## ✅ Checklist de Personalización

- [ ] Actualizar `_config.yml` con tus enlaces sociales
- [ ] Añadir imágenes en `assets/images/`
- [ ] Configurar embed de Spotify en `music.html`
- [ ] Configurar Formspree en `contact.html`
- [ ] Actualizar biografía en `about.html`
- [ ] Añadir discografía en `music.html`
- [ ] Personalizar colores en `assets/css/style.css` (opcional)

## 🎨 Personalización Avanzada

### Cambiar Colores

Edita `assets/css/style.css`, líneas 1-8:
```css
:root {
    --primary-color: #ff006e;     /* Rosa/Magenta */
    --secondary-color: #8338ec;   /* Púrpura */
    --accent-color: #3a86ff;      /* Azul */
}
```

### Añadir Google Analytics

1. Crea una cuenta en [Google Analytics](https://analytics.google.com)
2. Obtén tu ID de medición (ej: G-XXXXXXXXXX)
3. Añade en `_layouts/default.html` antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🆘 Problemas Comunes

### Error 404 en GitHub Pages
- Verifica que `baseurl` en `_config.yml` sea correcto
- Asegúrate de que GitHub Pages esté activado

### Estilos no se cargan
- Revisa que la URL y baseurl sean correctos
- Limpia la caché del navegador (Ctrl+Shift+R)

### Cambios no se reflejan
- Espera 2-3 minutos después de hacer push
- Verifica en la pestaña **Actions** de GitHub si hay errores

## 📞 Recursos

- [Documentación de Jekyll](https://jekyllrb.com/docs/)
- [Guía de GitHub Pages](https://docs.github.com/es/pages)
- [Formspree Docs](https://help.formspree.io/)

---

¡Tu sitio web de Arima X está listo para brillar! 🌟
