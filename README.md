# Functional Programming
Deze readme bestaat uit het onderzoek over de data van de OBA API. Hieronder is terug te lezen wat ik tijdens dit project heb gedaan en welke onderzoeksvragen ik heb opgesteld. 

## Inhoud
* [To Do](#to-do)
* [Installatie](#installatie)
* [Interessante data](#interessante-data)
* [Onderzoeksvragen](#onderzoeksvragen)
* [Deelvragen](#deelvragen)
* [Problemen](#problemen)
* [Shout outs](#shout-outs)
* [Licentie](#licentie)

## To-Do
- [X] Hello API.
- [X] What the 🐒 zit er in de API? Krijg een idee van de informatie die je uit de API kan halen.
- [X] Verzin onderzoeksvragen.
- [X] Verzin deelvragen.
- [ ] Bedenk welke variablen je nodig gaat hebben om je vraag te beantwoorden.
- [ ] Haal deze data uit de API en sla die op in jouw eigen "datastore".
- [ ] Doorzoek die data op patronen
- [ ] Visualiseer de patronen met D3

## Instalatie

```
git clone https://github.com/Roene/functional-programming#deelvragen
cd functional-programming
npm install rijkvanzanten/node-oba-api
npm install
```

## Interessante data
Tijdens het zoeken binnen de API ben ik gaan kijken welke data er terug kwam en welke hier interessant van is. 
* Titel
* Publicatie jaar
* Autheurs 
* Aantal pagina's van het boek & lengte in cm/
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
* Zijn er sinds 2000 zijn er meer boeken over de islam bijgekomen dan over het christendom?

De vraag die ik het meest interessantste vond is de volgende : *Hoe zijn horror boeken ten opzichte van de fantasy boeken gegroeid in de periode 1975-2018?*
Vervolgens ben ik voor deze vraag deelvragen gaan opstellen.

### Deelvragen
* Zijn er meer boeken met het genre horror bij gekomen dan het genre fantasy?
* Zijn de horrorboeken dikker geworden ten opzichte van de fantasyboeken
	* Zijn hier nog speciale redenen voor? (Films die zijn uitgekomen bijvoorbeeld)
* Is er een verschil tussen de jaren heen van het aantal schrijvers voor deze genres?

## Hypothese
**H1** Sinds 1975 zijn er meer horrorboeken dan fantasyboeken bijgekomen

## Verwachte data
Ik verwacht deze data nodig te hebben om mijn vragen te beantwoorden

## Bevindingen


## Problemen
Tijdens het vak ben ik tot de volgende problemen opgelopen :
* Het uitzoeken van hoe de API precies werkt, wat zijn de mogelijke opties om op te zoeken?
* Hoe filteren op verschillende data?

## Shout outs
Special thanks naar deze mensen die mij hebben geholpen tijdens dit project. 
* [Daniel van de Velde](https://github.com/DanielvandeVelde)

## Licentie
[MIT](https://choosealicense.com/licenses/mit/)