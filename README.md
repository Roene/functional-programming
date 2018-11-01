# Functional Programming
Deze readme bestaat uit het onderzoek over de data van de OBA API. Hieronder is terug te lezen wat ik tijdens dit project heb gedaan en welke onderzoeksvragen ik heb opgesteld. 

## Inhoud
* [To Do](#to-do)
* [Installatie](#installatie)
* [Interessante data](#interessante-data)
* [Onderzoeksvragen](#onderzoeksvragen)
* [Problemen](#problemen)
* [Shout outs](#shout-outs)
* [Licentie](#licentie)

## To-Do
Tijdens dit project vond ik het lastig om uit te zoeken wat ik precies stap voor stap kon doen. Dit stappenplan van [Laursens](https://github.com/Razpudding) heeft mij hierin geholpen.

- [X] Hello API.
- [X] What the 🐒 zit er in de API? Krijg een idee van de informatie die je uit de API kan halen.
- [X] Verzin onderzoeksvragen.
- [X] Verzin deelvragen.
- [X] Bedenk welke variablen je nodig gaat hebben om je vraag te beantwoorden.
- [ ] Haal deze data uit de API en sla die op in jouw eigen "datastore".
- [ ] Doorzoek die data op patronen
- [ ] Visualiseer de patronen met D3

## Instalatie
Om dit project te installeren ga je naar je *terminal* en voer je dit uit : 
```
git clone https://github.com/Roene/functional-programming
cd functional-programming
npm install rijkvanzanten/node-oba-api
npm install
```
Dit project maakt gebruik van de volgende packages :
* [node-oba-api](https://github.com/rijkvanzanten/node-oba-api)
* [dotenv](https://www.npmjs.com/package/dotenv)

## Interessante data
📊 Tijdens het zoeken binnen de API ben ik gaan kijken welke data er terug kwam en welke hier interessant van is. 
* Titel
* Publicatie jaar
* Autheurs 
* Aantal pagina's van het boek & lengte in cm
* Genre(s) 
* Samenvatting van het boek

## Onderzoeksvragen
De eerste onderzoeksvragen die ik heb opgesteld waren deze :
* Zijn er meer boeken van Ajax dan van Feyenoord?
* Zijn er minder Engelse boeken dan Nederlandse boeken?
* Zijn er meer boeken met het genre horror dan met het genre fantasy?
* Gaan de meeste geschiedenis boeken over de WOII?

Deze vragen waren nog niet goed genoeg aangezien dit voornamelijk ja/nee vragen waren, deze feedback kwam van klasgenoten. 
Vandaar dat ik nieuwe vragen ben gaan opstellen deze staan hieronder :

* Hoe zijn horrorboeken ten opzichte van de fantasyboeken gegroeid in de periode 1975-2018?
* Zijn er sinds de invoering van de vrouwenrechten in Nederland meer vrouwelijke schrijvers gekomen?
* Heeft het aantal pagina's van een boek invloed op de hoogte van het boek?
* Zijn bepaalde genres sinds 1975 verdwenen / minder populair geworden? 
* Hoe zijn de boeken over de islam ten opzichte van de boeken over het christendom gegeroeid sinds 1990?

De vraag die ik het meest interessantste vond is de volgende : *Hoe zijn horror boeken ten opzichte van de fantasy boeken gegroeid in de periode 1975-2018?*
Vervolgens ben ik voor deze vraag deelvragen gaan opstellen :

* Zijn er meer boeken met het genre horror bij gekomen dan het genre fantasy?
* Zijn de horrorboeken dikker geworden ten opzichte van de fantasyboeken
	* Zijn hier nog speciale redenen voor? (Films die zijn uitgekomen bijvoorbeeld)
* Is er een verschil tussen de jaren heen van het aantal schrijvers voor deze genres?

## Hypothese
**H1** Sinds 1975 zijn er meer horrorboeken dan fantasyboeken bijgekomen

## Verwachte data
Ik verwacht deze data nodig te hebben om mijn onderzoeksvraag + deelvragen te beantwoorden :
* Genres (horror & fantasy) 🧟 🐉
* Publicatiedatum (1975 t/m 2018) 📅
* Aantal pagina's van het boek + lengte
* Type (boek) 📚
* Autheur(s)

Wat eventueel handig kan zijn (denk ik?) :
* Titels
* Samenvatting

## Bevindingen
Tijdens het zoeken in de ben ik tot de volgende conclusies gekomen :
> Je krijgt maar 20 resultaten per keer maar je kan met page: '2' een andere pagina opvragen 
> Veel data heb je niet nodig zoals bijvoorbeeld frabl & notes
> Sommige data is niet aanwezig

## Problemen
Tijdens het vak ben ik op de volgende problemen / vragen gekomen
* Het uitzoeken van hoe de API precies werkt, wat zijn de mogelijke opties om op te zoeken?
* Hoe kan ik filteren op verschillende data?
* Hoe kan ik het omschrijven naar mijn eigen data?
	* Hoe ga ik dit vervolgens opslaan?
* Hoe ga ik deze data visualisren?

## Shout outs
🙏🏻 Special thanks naar deze mensen die mij hebben geholpen tijdens dit project. 🙏🏻
* [Daniel van de Velde](https://github.com/DanielvandeVelde)

## Licentie
[MIT](https://choosealicense.com/licenses/mit/) © [Roene Verbeek](https://github.com/Roene)