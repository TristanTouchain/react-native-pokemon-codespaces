# react-native-pokemon-codespaces

Ce project me permet à la fois de me remettre sur un projet React-Native et a été conçu depuis GitHub Codespaces sur un iPad (un petit challenge perso).

Je me suis tout d'abord baser sur NewsApi pour récupérer des data et pourquoi pas l'utiliser pour afficher les dernières news Tesla. Mais après avoir réaliser l'appel sur l'API, une erreur 426 apparaît.

Après quelques recherches, NewsApi a, depuis le 22 mai 2020, limité l'accès à son API gratuitement uniquement à des accès depuis un localhost.

N'ayant pas trop de temps aloué, j'ai changer mon fusil d'épaule et je me suis basé sur PokeApi.

L'app est donc une vue List avec une page de détails (très sommaire).

---

## Installation

Tout d'abord, installation du CLI Expo:
`npm install --global expo-cli`

puis un `yarn`

Et pour lancer le projet `yarn start --tunnel` qui lancera un page sur votre navigateur avec un QRCode à scanner depuis votre téléphone (qui a l'app `Expo Go` d'installer bien sûr)

C'est tout

---

## PokeApi

Cette API répertorie quasi tout ce qui existe sur ce jeu. Mais je me suis basé uniquement sur les petites bestioles et quelques caratéristiques.

Cette API est en REST. Il me faut donc plusieurs appel API pour récupérer toutes les données dont j'ai besoin.

---

## PokemonList et PokemonListItem

Un premier appel API est fait pour avoir la liste des Pokemon. Je n'ai alors en data que le nom et le lien API vers ses datas.

Il faut alors spécifier un `id` pour accéder au reste des données.

J'ai donc créé un composant `PokemonListItem` qui permet l'affichage de chaque Pokemon dans la liste. Mon but étant d'avoir une image, l'API PokeAPI n'en fournit pas. Mais j'ai trouvé un lien qui me permet de piocher dans les image d'une autre API.

On aurait pu y ajouter pas mal de détail à ce composant comme le type et son numéro.

---

## PokemonDetails

Ce composant est la modal qui s'affiche pour montrer les data spécifique à ce pokemon.

---

## React-Navigation

J'ai utilisé `react-navigation` pour ce projet. Assez efficace. Je n'ai pas cherché à faire une interface complexe. Un appui sur un ListItem m'envoi sur la page de description qui récupère l'`id` passé en props grâce à `navigate()`.
Un nouvel appel API est alors fait.

---

## REST vs GraphQL

Tous ces appels API aurait pu être évités grâce à du GraphQL qui m'aurais permis de récupérer la data voulu en une requête.
Même si il existe une beta, je n'ai pas voulu compliquer l'app au vu du temps que j'avais de disponible.

---

## Conclusion

L'app n'est pas parfaite, mais le principal y est. Je ne me suis pas penché vraiment sur le design.
Il y a beaucoup d'amélioration possible: Un lazyLoad sur les data, Une fiche de détails plus exhastive, un champ de recherche pour trouver rapidement le pokemon voulut.

J'espère que cela vous satisfera.
