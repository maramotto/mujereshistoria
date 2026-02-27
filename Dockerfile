FROM nginx:alpine

# Borrar config por defecto de nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar nuestra config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los ficheros del sitio
COPY index.html   /usr/share/nginx/html/
COPY nivel.html   /usr/share/nginx/html/
COPY css/         /usr/share/nginx/html/css/
COPY js/          /usr/share/nginx/html/js/

EXPOSE 80
