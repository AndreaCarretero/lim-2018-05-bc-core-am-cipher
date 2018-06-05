# Proyecto1: Leslie Andrea aplicando Cifrado César 

## Preámbulo
Está próxima la fecha del cumpleaños de tu amig@  y estás organizando una
fiesta sorpresa. Para organizar la fiesta has creado un grupo de Whatsapp junto
con amigos y familiares.

Un gran problema es que pones tu alarma para levantarte temprano, sin embargo
(como supondrás) eso nunca sucede y tu amig@ es quien termina apagando la alarma
y "de casualidad" revisando tus mensajes. Debido a que es algo sorpresa, decides
crear una aplicación que te permita enviar mensajes cifrados y que las demás
personas (partícipes de la fiesta) puedan tener una interfaz para
descifrarlo. Así que ahora te toca aplicar tus superpoderes 😎

Luego de una ardua búsqueda por encontrar un método sencillo ,"fácil de entender" 
y práctico en simples pasos;me topo con "El cifrado César"....



## Introducción

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](http://slideplayer.es/5424527/17/images/16/Cifrado+Cesar+sustituci%C3%B3n+monoalfabeto.jpg)

Julio César sustituía cada letra de su mensaje con la letra que se encontró tres posiciones más adelante en el alfabeto; por lo que cada una A se convirtía en D, cada B se hacía ed E, y así sucesivamente; las tres últimas letras del alfabeto fueron reemplazados por las tres primeras.
Por ejemplo, usando el cifrado César:

                                 "Omnia Gallia est divisa in partes tres"
                                 RPQND LDOOND HVZ GNBNVD NQ SDUZHV ZUHV

Otro ejemplo -si usáramos un desplazamiento de 3:

         * Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
        * Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Actualmente todos los cifrados de sustitución alfabética simple, se descifran
con facilidad y en la práctica no ofrece mucha seguridad en la comunicación,
pero el cifrado César muchas veces puede formar parte de sistemas más complejos
de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el
sistema ROT13.




## Definición del producto


¿Quiénes son los principales usuarios de producto?
° Los principales usuarios para este producto son amigos y familiares de la cumpleañera.Quienes están enterados de la
fiesta sorpresa (organizadores de fiesta sorpresa).



## ----- Decisiones para llegar a producto final


-Al reconocer mis principales usuarios considero épocas distintas,edades no tan contemporáneas ya que los familiares podrán ser tios, primos y hasta los abuelos entonces decido implementar instrucciones o pasos a seguir (confirmando que ellos saben de mi aplicación web y están conscientes de que el texto que ellos escriban será cifrado -viceversa) 
Colocando ya mis pasos a seguir ,el usuario se siente más cómodo porque solo es cuestión de leer uno por uno para poder entender la dinámica de la aplicación.

-Una de mis decisiones principales fue el de implementar un fondo blanco para que puea distinguirse a simple vist ( los pasos a seguir, mis cuadros de texto y mis botones).Además,pensando en las personas mayores como los familiares quizá, el blanco se le hará menos "pesado" con letras negras al momento de leer las instrucciones.

-Tomando en cuenta a los invitados jóvenes( diría invitados en general) decido desarrollar como sea posibles oraciones en segunda persona y así lograr una comunicación más directa.También utilizo un lenguaje no tan formal para que no solo sea directa,sino,amena.

-Coloco una imagen de flores con determinados colores ya que el color favorito de la cumpleañera es verde , ella no lo sabrá pero todos nosotros estamos enterados de su favoritismo por el color, así cuando ingresen a la página identifiquen que la aplicación es para su fiesta sorpresa.

¿Cuáles son los objetivos de estos usuarios en relación con el producto?
°Uno de los principales objetivos (con respecto a mi producto) es obtener un mensaje cifrado colocando un texto  y un número cual quiera que fuese para mandárselo al invitado que desee.
°Otro de los objetivos es que ese invitado que recibió el mensaje cifrado, ingrese a la aplicación web ,coloqque el número que le informó la otra persona y pueda visualizar el mensaje descifrado y así poder responder con los mismos pasos a seguir.


¿Cómo crees que el producto que estás creando les está resolviendo sus problemas?
Respondería esta pregunta comentando primero que podría ser la organizadora de la fiesta, tal vez la mejor amiga de la cumpleañera o hasta su misma hermana y quiero que sea un día muy genial para ella y los invitados,así que todo tiene que salir como lo espero.El gran problema es que WhatsApp es una aplicación móvil donde todos pueden ingresar y los mensajes se visualizan tal cual.Ella no debe enterarse para nada de la fiesta y tengo muy buenas ideas en mente para compartirles a todos los contactos.
Entonces crear una aplicación que nos permita cifrar y descifrar el texto que querrámos comunicar con simples pasos  sin que ella lo note sería una increíble herramienta para todos.




## Producto final realizado... pero,¿que existía antes?

 Versiones anteriores- 
 Esta es la primera versión implementando Html básico con etiquetas y diseño simple.
 Jugué con los colores celeste y azul.Le coloqué color negro a todo el texto.
 Al momento de probar esta interfaz mis usuarios leían la historia de Julio Cesar pero poco o casi nada les interesaba esa información, es decir no era trascendente ya que eso me lo preguntaban en persona.
 -Algunos usuarios ( mencionando que somos contemporáneos en edades) comentaron en que sería mejor colocar pasos a seguir y así los invitados o hasta cualquiera que viese la aplicación no se sienta perdido sin saber que colocar o como hacerlo.
 
 Nótese versión principal,simulacro:
 ![Versión# 1](imágenes%20para%20read%20me/IMG_5697.JPG)
 
 
 Versión #2:
 En esta versión solo quise jugar con los colores, estaba en mi idea o visión lograr una aplicación web con fondos oscuros, con imágenes profesionales ( ya que a la cumpleañera le gusta muchísimo la fotografía) pensando en el público diverso ,sería interesante colocar algo general , no enfocarme en alguna temática,tener algo misterioso y elegante y este fue mi intento [...]
 ![Versión# 2](imágenes%20para%20read%20me/IMG_5695.JPG)
 
 
 ## Implementando algo distinto -
 Expongo estos diagramas que hice para poder entender la lógica de mi proyecto( tenia que entender yo para lograr que los demás lo comprendan) .
 -Para poder explicar mi algoritmo en texto y no en código :
 
                      CIFRAR: 
  ![Diagrama](imágenes%20para%20read%20me/Diagrama%20de%20flujo3-%20Cifrar.jpg)
  
  
  ![DiagramaDecifrar](imágenes%20para%20read%20me/22.jpg)
  
  
  ### UI

Según lo requerido -mi  interfaz debe permitir al usuario:

* elegir un `offset` indicando cuántas posiciones queremos que el cifrado
  desplace cada caracter  ✔️
* insertar un mensaje (texto) que queremos cifrar  ✔️                    
* ver el resultado del mensaje cifrado   ✔️
* insertar un mensaje (texto) a descifrar   ✔️
* ver el resultado del mensaje descifrado    ✔️
  
  
                             ✔️✔️✔️✔️✔️

  
## Entrega

Mi proyecto es entregado -subiendo mi código a GitHub (`commit`/`push`) y la
interfaz es desplegada usando g-h pages. (GIT HUB Pages)              ✔️

  
  
  
  
  
  
  
  
  -----------------------------------------------------------------------------------------------------------------------------
 
 ## Objetivos

El objetivo principal de aprendizaje de este proyecto es tener tu primera
experiencia construyendo una aplicación web usando tus conocimientos de **User
Experience Design** y de **JavaScript**. Esto incluye diseñar un producto
pensando en los usuarios, construir una interfaz, escuchar eventos básicos del
DOM, escribir lógica para llevar a cabo el cifado/descifrado, tests unitarios
básicos para comprobar (y documentar) dicha lógica, y finalmente manipulación
del DOM para mostrar (escribir) los resultados.

Para completar el proyecto tendrás que familiarizarte con conceptos como
[valores, tipos, variables](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/javascript/01-basics),
[control de flujo](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/javascript/02-flow-control)
y [tests unitarios](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/testing).

Esperamos que en este proyecto puedas pensar en el usuario, entendiendo quién es
y su necesidad. La idea es que logres entender qué necesita el usuario para el
que crearás el producto y le ayudes a resolver esa necesidad de la mejor manera
posible.

Además, que puedas organizarte teniendo en cuenta el tiempo y los recursos
disponibles. Es la primera vez que evaluaremos tus habilidades blandas, pero debes
considerar que son habilidades que probablemente ya has utilizado en distintas
experiencias de tu vida. Lo importante es que realices el proyecto de manera
integral.



### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener to _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto cipher, el cual debe estar
  _exportado_ en el objeto global (`window`). Este objeto (`cipher`) debe
  contener dos métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos decifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

## Hacker edition

No estás limitada a implementar solo la parte obligatoria. Te sugerimos crear
también una función `cipher.createCipherWithOffset()` que reciba un `offset` y
devuelva un nuevo objeto con dos métodos (`encode` y `decode`) que solo reciban
el string y usen el `offset` que se pasó a `createCipherWithOffset` a la hora
de crear el objeto.

Lo anterior, nos ayuda a observar tu capacidad de autoaprendizaje, pudiendo
agregar a tu trabajo un elemento que lo lleva al siguiente nivel.

Para el diseño de la experiencia de usuario, puedes investigar y aplicar algunas
de las técnicas y herramientas relacionadas al proceso de diseño como
entrevistas y testeos con usuarios o sketching y prototipado.

Lo mismo en habilidades blandas, puedes realizar una planificación experta
teniendo en consideración la utilización de herramientas de planificación, como
un calendario, trello, papelógrafo u otras, creando un plan paso a paso de cómo
quiere abarcar el reto o problema. Realizando una estimación realista del
tiempo.

***

## Primeros pasos

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/) o
   [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar :penguin: GNU/Linux.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   del repo de tu cohort, tus _coaches_ te compartirán un _link_ a un repo
   privado y te darán acceso de lectura en ese repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. A codear se ha dicho! :rocket:

***

## Tips / Pistas

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

También te compartimos más información de lo que Michelle te ha explicado en el
video anterior:

* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Estos son algunos tips que te pueden ayudar en la organización y realización de
tu proyecto, teniendo en cuenta el desarrollo de tus _habilidades blandas_:

* Para comenzar realiza una organización de tu proyecto, ve con qué recursos
  cuentas y el tiempo que tienes para completarlo.
* Si hay algo que no sepas pregunta e intenta resolverlo; puedes comenzar con
  una búsqueda en google, luego consultando a tu squad y por último a tus
  coaches. Si hay algo que yo no sé, otro me puede ayudar. El aprendizaje es un
  proceso colaborativo.
* Una vez que empieces a avanzar pide feedback, tus compañeras pueden tener
  excelentes ideas o formas de resolver el proyecto que te pueden ayudar.
* Cuando te topes con un problema, busca alternativas, y para eso consulta
  diferentes fuentes.
* Si ya te ves invirtiendo mucho tiempo en detalles debes saber priorizar y
  seguir con lo más importante, los proyectos tienen tiempo limitado y debes
  saber administrarlo.
* Trabaja en equipo, pregunta e intenta completar el proyecto sin rendirte.
* Prepara tu presentación, si no logro comunicar mis ideas a los demás no se
  podrá apreciar todo el esfuerzo y trabajo que invertiste.


