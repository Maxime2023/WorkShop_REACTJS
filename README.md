# WorkShop_REACTJS

Premier programme en React

Introduction

React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état.
L'objectif de ce Workshop est de découvrir React au travers d’une application de recensement de films.

Prérequis

Pour commencer notre Workshop vous devez installer NodeJs.

https://nodejs.org/en/

SetUp

1.	Utiliser la commande suivante sur votre bureau : 
« npx create-react-app films »
2.	Une fois à la racine de votre projet effectuez la commande suivante :
3.	« npm i »
4.	Il vous faudra installer les dépendances suivantes :

https://www.npmjs.com/package/axios

https://reacttraining.com/react-router/web/guides/quick-start

TP

Le But de ce projet est de vous initier à la programmation Web, en récupérant les informations à partir d’une API, pour créer un catalogue de films.

API : https://api.themoviedb.org/3/discover/movie?api_key=4d4ed145d3584846f5922b6a467e1f85

Ce projet comporte 2 parties : 
La première est de récupérer tous les films populaires sur l’API et de les afficher
La seconde est d’afficher les informations détaillées d’un film lors d’un clic

Afin d'avoir les memes informations :
- On utilisera le fichier App.js, présent lors du téléchargement de reactJs, dans celui ci sera présent la liste des différents films.
- On utilisera un deuxieme fichier Description.js, qui lui servira à afficher les infos détaillées du film séléctionnée.



