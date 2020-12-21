# Tribal-App

## Descripción

Esta es es una APP desarrollada en ReactJs que luego de instalada pueden encontrarla en http://localhost:3000 y que consulta una API centraliza de otros servicios de búsqueda como Itunes, Tvmaze y Crcind por medio del endpoint http://localhost:8000/api/search recibiendo el parametro:

| Nombre   | Valor                    |
|----------|--------------------------|
| q        | string                   |

Por favor, continuar a la sección de instalación.

## Requisitos de sistema operativo

* ReactJs 17.0.1
* Node ~14.13.0
* NPM ~6.14.0

## Instalación

Para la instalación se debe seguir los siguientes pasos desde la terminal:

Primer paso: ir al espacio de trabajo local de tu preferencia y ejecutar el siguiente comando (Esta ubicación + el directorio donde se instalará el proyecto será lo que llamaremos "path root" más adelante).

```
git clone https://github.com/larismendi/tribal-app.git
```

Segundo paso: entrar en el directorio tribal-app (path root del proyecto).

```
cd tribal-app
```

Tercer paso: ejecutar el siguiente comando para instalar todas las librerias necesarias para ReactJs 17.

```
npm install
```

Cuarto paso: ejecutar el siguiente comando para levantar el proyecto ReactJs localmente y que verás en http://localhost:3000:

```
npm start
```