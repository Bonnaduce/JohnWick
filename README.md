# John Wick bot para Estuche de Bonnaduce
Basado completamente en el bot construido por AnIdiotsGuide, tomado del repositorio GitHub Guidebot

## Requirements

- `git` linea de comandos ([Windows](https://git-scm.com/download/win)|[Linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)|[MacOS](https://git-scm.com/download/mac)) installed
- `node` [Version 8.0.0 or posterior](https://nodejs.org)
- Ls herramientas de codificación node-gyp. Este es un pre-requisito para el Enmap, pero tambien para **muchos** otros modulos. Aprende mas en [The Enmap Guide](https://enmap.evie.codes/install#pre-requisites) for details and requirements for your OS. Just follow what's in the tabbed block only, then come back here!

Tambien necesitaras el token de tu bot, que lo puedes obtener de la
seccion de desarrolladores de discordapp.com. Revisa la  [primera seccion de la pagina](https://anidiots.guide/getting-started/the-long-version.html) 
for more info.

## Downloading

En una linea de comandos posicionada en la carpeta de tu proyecto:

`git clone https://github.com/Bonnaduce/JohnWick`

Una vez que termine: 

- En el folder donde correras los commandos de git, ejecuta `cd JohnWick` y despues `npm install`
- **Si recibes algun error de Pyton, msibuild.exe o binding, debes leer la seccion de requerimientos nuevamente!**
- Ejecuta `node setup.js` para generar los archivos de configuracion necesarios.

## Starting the bot

Para iniciar el bot, debes ejecutar el siguiente comando en tu linea de comandos:
`node index.js`

## Inviting to a guild

Para agregar el bot a tu servidor de discord, deberas obtener un OAuth token. 

Puedes usar este sitio para generar una liga de OAuth, que incluye una calculadora de permisos:
[https://finitereality.github.io/permissions-calculator/?v=0](https://finitereality.github.io/permissions-calculator/?v=0)
