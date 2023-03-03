Hola, este programa esta hecho con el proposito de proveer informacion climatica a en base a los
proximos 5 dias. Su resultado final es darnos la temperatura promedio de estos y al ser un programa 
con escalabilidad en mente se oriento en base a esto, tenindo en cuenta el paradigma de programacion
orientada a objetos

Hablando de objetos en el programa halleremos 12 archivos, descartando este texto y las 2 imagenes, el programa
funcionalmente se base en 9 de ellos, 6 para el front-end/ui y 3 que consisten en un backend basado en
archivos python con un utilizacion de un framework llamado Flask, tambien cabe notar que se utiliza
bootstrap en el front

                    1)index.html
                        Es la interface grafica principal

                    2)index.css
                        Junto a classes de bootstrap esta encargado de estilizar el html

                    3)viewer.js
                        Este archivo contiene funciones listeners encargadas de monitorizar y responder a ciertos eventos entre ellos:
                            *transmitir informacion al servidor 
                            *despedir alertas creadas a base de una insercion de codigo html estilizado con bootstrap
                    
                    4)retriever.js
                        Ademas de ser el primer objeto con el que se topa el input, es el principal encargado de 
                        llavar la informacion al html.
                        Se basa en la utilizacion asyncronica de una methodo que se mostrara en el proximo objeto.
                        Suelta 2 alertas:
                            *Una indicando que la informacion esta siendo procesada 
                            *Otra cuando se le devuelve un resultado

                    5)classifier.js
                        Este objeto secreo con dos propositos en mente:
                            *En caso de escalar a futuro la funcionalidad del proyecto poder crear metodos de clasificacion 
                            del input
                            *Ser el encargado de buscar atravez de un fetch la ip del usuario

                    6)fetcher.js
                        Este objeto como deja saber el nombre esta basado en metodos que utilizan el fetch para
                        enviar con un request http un post que contenga un json el cual se pueda utilizar para proveer
                        al servidor con informacion de cual es:
                            *input(supuesta ciudad) 
                            *la ip obtenida atravez del objeto classifier
                    7)router.py
                        Este objeto define las vias y responde a los preflights de el navegador
                        Tambien prepara la informacion para enviar a la openweathemap y prepara el resultado en
                        forma de un array

                        Tambien es el archivo que representa el servidor

                    8)requester.py
                        Es es el unico archivo que no comparte el nombre de su objeto, howler. 
                        Este objeto envia el reques a open weather map, si este devuelve  codigo que no sea 200 utiliza
                        al siguiente objeto ip_peeper
                    9)peep.py
                        ip_peeper utiliza Ip-Api para poder hallar la localidad de la ip y entonces utilizar eso para
                        hallar las condiciones climaticas usando requester (objeto anterior)

Router.py debe esta ejecutandose antes de usar el programa

Requerimientos:
        *Flask
        *Bootstrap

