# Frontend-prueba
***
## Descripcion general
***
Esta es la codificación básica de la interfaz necesaria para consumir la API desarrollada en Backend-prueba, como practica del curso de React (basado en el proyecto frontend aluerzi)

## Descripcion puntual
La app está desarrollada en React, cuenta con las siguientes pantallas
- Register: Permite el registro de nuevos usuarios a la BD (backend-prueba)
- Login: Permite el ingreso a usuarios registrados, se ingresa a pantalla Info
- Info: Solo se ingresa acá previo logueo, se puede en ella ver los datos del usuario logueado y cerrar sesión
- AuthToken: Screen que no se ve y que permite la verificación previa de la existencia del token para
llevar al usuario a Info, en caso de tener token o a Login, en caso de no tenerlo

## Implementaciones y mejoras pendientes
- Realizar control en los formularios, garantizando formularios no vacios o por lo menos que los datos mas
relevantes como nombres de usuario, contraseña y demás segun el caso, no esten vacios antes de hacer la
petición a la BD

- Realizar la implementación para que en la pantalla Info no sea necesario el uso de un boton para
mostrar los datos de usuario logueado, lo intenté con useEfect pero al parecer no estoy haciendo uso correcto de dicho hook para ese cometido

- Gestion de la información del usuario registrado, editando su información desde la misma app

- Uso de roles, en este caso administrativo para la gestion desde el front de la información de todos los 
usuarios

Estos dos últimos items son ambiciosos y creo yo que no lo haré como practica sino que espero pueda ser parte de un proyecto real


## Mis detalles técnicos
A continuación detallo el paso a paso necesario para crear un proyecto como este


0. Preliminares
En caso de no tener instalado expo (la cual es una instalación glogal y se hace solo una vez), digitar entonces
```
$ npm i -g expo-cli
```

1. Se incia el proyecto
El inicio de este proyecto es con el comando
```
$ expo init [proyecto]  ---> elegir blank
```
De esa manera se crea la carpeta con el nombre del proyecto

2. Instalación de dependencias
Algunas de las dependencias necesarias para el proyecto son
```
$ expo install react-navigation
$ expo install react-native-gesture-handler
$ expo install react-native-reanimated
$ expo install react-native-screens
$ yarn add react-navigation-stack
```
3. Ejecición del proyecto
```
$ expo start
```


Maolink Software
Septiembre 2021




