# QA Examen Práctico TCS

Proyecto de automatización de pruebas integrando el framework Cypress.io, Cucumber y BDD.

## Tabla de Contenidos

- [Requisitos del Sistema](#requisitos-del-sistema)
- [Instalación](#instalación)
- [Uso](#uso)
- [Ejemplos](#ejemplos)
- [Estado del Proyecto](#estado-del-proyecto)
- [Contacto](#contacto)

## Requisitos del Sistema

* Node.js - v18.16.0
* Navegadores compatibles: Chrome, Firefox, Edge, Electron
* Para poder visualizar los reportes integrado Cypress con Cucumber es necesario seguir las siguientes instrucciones:
   Ir a la dirección: https://github.com/cucumber/json-formatter/releases/tag/v19.0.0
   Descargarse el fichero: cucumber-json-formatter-windows-amd64
   Renombrar el fichero con el nombre: cucumber-json-formatter.exe
   Copiar este fichero en el path de mi sistema windows (para sistema operativo windows 64) en mi caso en la siguiente dirección: C:\Windows\System32

## Instalación

* Descargarse el proyecto compartido en un directorio local.
* En el visual code, en una nueva terminal cmd ejecutar el siguiente comando (con el objetivo de instalar todo lo que contiene el fichero package.json del proyecto):
``` [shell]
npm install
 ```

## Uso

* Para correr finalmente las pruebas ejecutar los siguientes comandos:

1- Correr las pruebas en consola por el comando:

``` [shell]
npm run cypress:execution o / npx cypress run
 ```
2- Correr el siguiente comando para formatear los ficheros: log.json y messages.ndjson y generar un html que se guarda en reportes/index.html

``` [shell]
node .\cucumber-html-report.js
 ```

## Ejemplos
![Multiple Cucumber HTML Reporter](EjemploReporte.jpg)
Los resultados fueron al ejecutar las pruebas fueron:
  Features: 3
  Ecenarios: 6
  Pasó: 6
  Falló: 0
  Tiempo de ejecución: 00:27

## Estado del proyecto

Finalizado

## Contacto

Nombre: Yesleny Becera Torreira
Celular: 0984757830
email: ybecerra2005@gmail.com
