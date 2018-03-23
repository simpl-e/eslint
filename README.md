# Configuración de vscode

Configuración web y php para vscode:

* Copiar las configuraciones del archivo 'settings.json' en: 'F1' + 'Open User Settings'
* Para hacer efectiva cualquier modificación, se recommienda cerrar y abrir vscode 

## JS / HTML / CSS

### Beautify

Para formatear código, instalar el plugin "**Beautify**"

### eslint

Para instalar ejecutar:
```
npm install -g eslint
npm install -g eslint-config-standard
npm install -g eslint-plugin-html
npm install -g eslint-plugin-node
npm install -g eslint-plugin-promise
npm install -g eslint-plugin-standard
```

Guardar archivo '.eslintrc.js' global en:
* ~/.eslintrc (unix)
* C:\Users\username\.eslintrc (windows)

## PHP

### PHP Intellisense

* Para auto-completado en php, instalar plugin "**PHP IntelliSense**"
* Para linkear librerías 'use', instalar plugin "**PHP Intellisense - Crane**"

### PHP Code Sniffer

Para aviso y corrección de errores php, instalar plugin "**php cs fixer**" (ha resultado no dar problemas en windows)
```
composer global require squizlabs/php_codesniffer
```

Añadir 'php-cs-fixer.*' de 'settings.json' +
```
"php-cs-fixer.executablePathWindows": "C:/Users/[USUARIO]/AppData/Roaming/Composer/vendor/bin/phpcs.bat"
```

## Git

* Buscar e instalar plugin "**GitLens**"
* Para habilitar/deshabilitar que el plugin añada títulos con agrupaciones de código modificar "gitlens.codeLens.enabled"

## Markdown

Para estandarización de archivos 'README.md', instalar '**markdownlint**' 

## Bonuses

### Iconos más llamativos en el arbol de proyectos:

Instalar plugin "**vscode-icons**"

### Mostrar árbol de archivos

* Instalar plugin "**Custom CSS and JS**"
* 'F1' + 'User Settings'
```
   "vscode_custom_css.imports": [
        "https://gist.githubusercontent.com/samdenty99/b96f4df576d05cb123248f8ebfa899b6/raw/d46a5de9959823d2d806d5f01d6fd20fdce676c3/styles.css"
    ],
```
Ignorar si pone "Your Code installation appears to be corrupt. Please reinstall."

##### En interfaz blanca

```
   "vscode_custom_css.imports": [
        "https://gist.githubusercontent.com/ogardiazabal/39f8d70b9dd5858a067c4b70bffb9b2e/raw/b36bae86652bbee10be6bc16b8f2abeaf386c3d2/styles.css"
    ],
```
