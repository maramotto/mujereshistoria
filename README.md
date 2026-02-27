# Mujeres Que Cambian La Historia

Sitio web para la exposición de amigurumis **"Mujeres Que Cambian La Historia"** de **Elena Frisuelos · Diseños ELEMA**.

La exposición presenta 34 muñecas tejidas a mano, cada una representando a una mujer histórica que transformó el mundo. Este sitio acompaña a la exposición como cuestionario interactivo: los visitantes escanean un QR de su cuestionario en papel y ven las respuestas correctas.

---

## Estructura del proyecto

```
mujereshistoria/
├── index.html          # Página principal de la exposición
├── nivel.html          # Plantilla única para los 4 niveles de cuestionario
├── css/
│   └── styles.css      # Estilos globales (paleta, tipografía, componentes)
├── js/
│   └── questions.js    # Todas las preguntas y respuestas (única fuente de verdad)
├── nginx.conf          # Configuración nginx con URLs limpias para los QR
├── Dockerfile          # Imagen Docker basada en nginx:alpine
├── docker-compose.yml  # Orquestación del contenedor
└── deploy.sh           # Script de despliegue en un solo comando
```

---

## URLs de los cuestionarios (para los QR codes)

| Nivel | URL | Público |
|-------|-----|---------|
| Infantil | `tudominio.com/infantil` | Hasta 7 años |
| Juvenil  | `tudominio.com/juvenil`  | 7 a 14 años |
| Adulto   | `tudominio.com/adulto`   | Más de 14 años — Fácil |
| Experto  | `tudominio.com/experto`  | Más de 14 años — Difícil |

Nginx redirige automáticamente estas URLs limpias a `nivel.html?level=<nivel>`.

---

## Editar preguntas y respuestas

**Solo hay que tocar un archivo: `js/questions.js`**

Estructura de cada pregunta:

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

El sitio queda disponible en `http://IP-DEL-SERVIDOR`.

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

## HTTPS con Let's Encrypt (opcional)

Si el servidor tiene un dominio apuntado, añadir HTTPS con Certbot:

```bash
# Instalar Certbot en el servidor (fuera de Docker)
sudo apt install certbot python3-certbot-nginx

# Obtener certificado
sudo certbot --nginx -d tudominio.com

# Renovación automática (se configura sola)
sudo certbot renew --dry-run
```

---

## Desarrollo local

Sin Docker, sirviendo los archivos estáticos directamente:

```bash
# Con Python (cualquier directorio)
python3 -m http.server 8080

# Con Node (si tienes npx)
npx serve .
```

Abrir `http://localhost:8080` en el navegador.

> **Nota:** las URLs limpias `/infantil`, `/juvenil` etc. solo funcionan con nginx. En local usar directamente `nivel.html?level=infantil`.

---

## Tecnologías

- HTML / CSS / JavaScript vanilla — sin frameworks, sin dependencias
- [Syne](https://fonts.google.com/specimen/Syne) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (Google Fonts)
- nginx:alpine como servidor web
- Docker + Docker Compose para el despliegue

---

## Autoría

**Exposición y amigurumis:** Diseños ELEMA — Amigurumis y creaciones artesanas

**Desarrollo web:** [maramotto.com](https://maramotto.com)