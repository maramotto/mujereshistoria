# Mujeres Que Cambian La Historia

Sitio web para la exposición de amigurumis **"Mujeres Que Cambian La Historia"** de **Mayte Perni y Elena Frisuelos · Diseños ELEMA**.

La exposición presenta 35 muñecas tejidas a mano, cada una representando a una mujer histórica que transformó el mundo. Este sitio acompaña a la exposición como cuestionario interactivo: los visitantes escanean un QR de su cuestionario en papel y ven las respuestas correctas.

---

## Estructura del proyecto

```
mujereshistoria/
├── index.html          # Página principal de la exposición
├── nivel.html          # Plantilla única para los 4 niveles de cuestionario
├── robots.txt          # Directivas para crawlers (Google, Bing…)
├── sitemap.xml         # Mapa del sitio para indexación
├── css/
│   └── styles.css      # Estilos globales (paleta, tipografía, componentes)
├── js/
│   └── questions.js    # Todas las preguntas y respuestas (única fuente de verdad)
├── img/
│   └── logo_elema.jpg  # Logo Diseños ELEMA (sección de contacto)
├── nginx.conf          # Configuración nginx con URLs limpias para los QR
├── Dockerfile          # Imagen Docker basada en nginx:alpine
├── docker-compose.yml  # Orquestación del contenedor
└── deploy.sh           # Script de despliegue en un solo comando
```

---

## URLs de los cuestionarios (para los QR codes)

| Nivel | URL | Público |
|-------|-----|---------|
| Infantil | `elema.es/infantil` | Hasta 7 años |
| Juvenil  | `elema.es/juvenil`  | 7 a 14 años |
| Adulto   | `elema.es/adulto`   | Más de 14 años — Fácil |
| Experto  | `elema.es/experto`  | Más de 14 años — Difícil |

Nginx redirige automáticamente estas URLs limpias a `nivel.html?level=<nivel>`.

---

## Editar preguntas y respuestas

**Solo hay que tocar un archivo: `js/questions.js`**

Cada nivel tiene exactamente **10 preguntas**. Estructura de cada pregunta:

```js
{
  persona: "Frida Kahlo",       // Nombre del personaje relacionado
  q: "Texto de la pregunta",    // Enunciado
  opts: [                       // Exactamente 4 opciones
    "Opción A",
    "Opción B",
    "Opción C",
    "Opción D"
  ],
  correct: 0                    // Índice de la respuesta correcta (0 = A, 1 = B, 2 = C, 3 = D)
}
```

El archivo `nivel.html` nunca necesita editarse — lee los datos de `questions.js` automáticamente.

### Criterio de dificultad por nivel

| Nivel | Criterio |
|-------|----------|
| **Infantil** | Preguntas con pistas de contexto dentro del enunciado para ayudar a los más pequeños a identificar los personajes |
| **Juvenil** | Preguntas que relacionan personajes y épocas distintas |
| **Adulto** | Ideas, conceptos clave y legado de cada mujer |
| **Experto** | Fechas concretas, conexiones entre historias, datos menos conocidos |

---

## Navegación y secciones

La barra de navegación tiene tres elementos:

- **Sobre Nosotras** → ancla `#artesanas` (bio de Elena y Mayte)
- **Contacto** → ancla `#contacto` (teléfono y email con logo ELEMA)
- **Respuestas Cuestionario** → menú desplegable con los 4 niveles

---

## SEO

Los archivos `robots.txt` y `sitemap.xml` están en la raíz y son servidos directamente por nginx.

Después de cada despliegue es recomendable enviar el sitemap desde **Google Search Console**:
1. Acceder a [search.google.com/search-console](https://search.google.com/search-console)
2. Seleccionar la propiedad `elema.es`
3. Ir a **Sitemaps** y enviar `https://elema.es/sitemap.xml`

Cada página incluye:
- `<meta description>` y `<meta keywords>`
- `<link rel="canonical">`
- Open Graph (WhatsApp, Facebook, LinkedIn)
- Twitter Card
- JSON-LD `ExhibitionEvent` para rich results de Google

---

## Despliegue

### Requisitos

- Docker Engine 20+
- Docker Compose v2+
- Git

### Primera vez en el servidor

```bash
# 1. Clonar el repositorio
git clone https://github.com/maramotto/mujereshistoria
cd mujereshistoria

# 2. Dar permisos al script de despliegue
chmod +x deploy.sh

# 3. Desplegar
./deploy.sh
```

### Actualizar tras cambios

```bash
# En el servidor
git pull
./deploy.sh
```

`deploy.sh` reconstruye la imagen, reinicia el contenedor y limpia imágenes antiguas.

### Comandos Docker útiles

```bash
# Ver si el contenedor está corriendo
docker ps

# Ver logs en tiempo real
docker logs -f mujereshistoria

# Parar el sitio
docker compose down

# Reiniciar sin reconstruir
docker compose restart
```

---

## HTTPS con Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d elema.es
sudo certbot renew --dry-run   # Renovación automática
```

---

## Desarrollo local

```bash
# Con Python
python3 -m http.server 8080

# Con Node
npx serve .
```

Abrir `http://localhost:8080`. Las URLs limpias `/infantil` etc. solo funcionan con nginx; en local usar `nivel.html?level=infantil`.

---

## Tipografía

| Uso | Fuente |
|-----|--------|
| Título principal y logo topbar | [Rouge Script](https://fonts.google.com/specimen/Rouge+Script) |
| Cuerpo, párrafos, preguntas | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) |
| Headings de sección, botones | [Syne](https://fonts.google.com/specimen/Syne) |

---

## Tecnologías

- HTML / CSS / JavaScript vanilla — sin frameworks, sin dependencias
- Google Fonts (Rouge Script + Cormorant Garamond)
- nginx:alpine como servidor web
- Docker + Docker Compose para el despliegue
- Let's Encrypt / Certbot para HTTPS

---

## Autoría

**Exposición y amigurumis:** Mayte Perni y Elena Frisuelos

[Diseños ELEMA](https://elema.es) — Amigurumis y creaciones artesanas

EMAIL: correoelema@gmail.com - TELÉFONO: 617 571 304

**Desarrollo web:** [maramotto.com](https://maramotto.com)