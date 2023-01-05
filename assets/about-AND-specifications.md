Designprojekt FED22d<br>
Grafiska verktyg och gränssnittsdesign<br>
Januari 2023<br>
Av Susanne Arnetz Linder, Joel del Pilar, Robin Sevelin och Jenny Waller.<br>

/**************************************************************************************************************************/

## PROJEKT
Designa till en onepage hemsida till den fiktiva restaurangen KOMMANDORANS.
Uppgiften handlade om att i ett team av 4 utforma en design till en onepage hemsida som vi sedan ska lämna över till nästa grupp för att koda upp sidan.

### OM DESIGNEN:
Inspirerade av FED20 arbeten i samma kurs, fastnade vi för projektet MATATELJEN, och med en tidigare kock i gruppen, jullov med föreställning med Emil i Lönneberga samt lite hur världen ser ut just nu, så bollades det idéer från Kommandoran och fattighuset, till en restaurang på Söder i Stockholm nischad till just gårdslivet förr.
Vår fiktiva meny bygger på olika karaktärer ur Lönneberga och olika ätbara segment därifrån.
 Som syns i vår MoodBoard, bilder i svartvitt, färger i dovt, brunt, grått och beiget, och mat med kål, rotfrukter, potatis och såklart inspirerad av Astrid Lindgrens berättelse om när Emil kommer i kontakt med Kommandoran och korv.
Till detta en kontrastfärg för att riktigt sticka ut på våra highlights samt CTA’s.<br><br>

Typsnitt valdes där rubrik skulle vara något bestämt och kraftigt, med auktoritär känsla, och där sub-rubrik och brödtext är mer enkla och i kontrast med vår rubrik, men samtidigt passar ihop som en helhet.<br><br>

Och som twist till en enkel meny, med vanliga råvaror, där det naturliga, enkla är i fokus, i en tid då både det lokala, närproducerade och det hantverksmannamässiga är i kontrast till de större restaurangkedjorna samt importerade råvaror, så hamnade vi här.<br>
En liten, dov, jordnära restaurang i hjärtat på Södermalm i Stockholm.
Där meny, råvaror, känsla och de visuella uttrycken speglas i vår design men en liten modern twist.<br><br>

Vi har gjort både mood board, grafisk profil gällande element samt mockups av olika devices i FIGMA, bildbehandlat foton i photoshop samt de vektorgrafik element vi har är gjorda i illustrator.

## SPECIFIKATIONER 

#### MoodBoard, Components samt Layout
Figma, länk:<br>
https://www.figma.com/file/vuF2awgrtiQRkeBkI1ufSO/Krossade-Tomater?node-id=9%3A29&t=c1BWFICsPgYNtlbV-1
<br><br>
#### Layout finns för följande devices och mått:
Mobil 375 * 667px <br>
Tablet 744 * 1133px<br>
Desktop 1440 * 1024px<br>
<br><br>
#### Typsnitt
Header Fugaz one - https://fonts.google.com/specimen/Fugaz+One?query=fugaz<br>
Subheader Roboto slab - https://fonts.google.com/specimen/Roboto+Slab?query=roboto+slab<br>
Paragraph Roboto - https://fonts.google.com/specimen/Roboto?query=roboto<br>
<br><br>
#### Färger
#8f7b6e<br>
#c5afa2<br>
#ffe9cf<br>
#343833<br>
#00c9ac (kontrasterande färg)<br>

#### komponenter i Designen:
* 5 st färger (angett vilka som är primära, sekundära, osv.), utöver svart och vitt.
* Rubriker nivå 1-6 (typsnitt, storlek, stil typ kursiv/fet, radavstånd)
* Normal text (paragrafer)
* Disclaimer-text (tänk cookies-text)
* Länkar och deras utseenden vid olika “states”, t.ex. hover/klick/aktiv, osv.
* 2 knappar - En primär knapp (tänk “Skicka”) - En sekundär knapp (tänk “Avbryt”) - “Hover states” för knapparna inkl. disabled state
* Ett inputfält (formgivet), ej dropdown
* Ett “kortelement” -Tänk citat, produktrecension, erbjudande, highlight eller någon annan sorts “lift up”-komponent
* En bild (bilden kan också ingå i kortelementet)
* Huvudmeny
* Footer
* Någonting som går att spara ner i SVG-format och utnyttja, t.ex. en logotyp/ikon/graf<br><br>

#### ÖVRIGT
I mappen Assets finns följande:
* Hero - background heroImg för Mobile, tablet, Desktop & original.
* Img - chefs-table img
* Layout printscreen - mobil, tablet & desktop printscreen som .png-filer
* Logo - logga i png
* Socials - sociala loggor som svg-ikoner
* Svg - logga som svg samt korv-meny i svg 
* texts - meny i oformaterat textformat


##### MÖJLIGA ANIMATIONER:
vår meny i form av 3 korvar är i SVG-format och lager-namngivna per korv, 
ID för vardera är:<br>
* #sausage_x5f_top
* #sausage_x5f_middle
* #sausage_x5f_bottom.<br><br>

Möjlighet att byta ut loggan i png till samma bild (men enfärgad SVG) finns med:
* för stora delen av bilden, konturerna där allt hänger ihop är ID #kommandoran.
* Vill man ge sig på en animering av blink med vänstra ögat är denna frilagd och har ID #left_x5F_eye<br><br>

##### KNAPPAR:
På vår sida med Components i FIGMA har våra knappar 4 states:<br>
* Primary - knapp på sida
* Primary Hover - färg vid hover
* Primary Focus State
* Disabled är utgråad, denna är tänkt att vara vid Boka-bord OM inte alla fält är ifyllda. Vid alla fält ifyllda ska denna bli aktiv.<br><br>
Se färg-referenser design & states I FIGMA:<br>
https://www.figma.com/file/vuF2awgrtiQRkeBkI1ufSO/Krossade-Tomater?node-id=0%3A1&t=9TQwXXHjtCBHRtOU-1

##### TEXTLÄNKAR:
På vår sida med Components i FIGMA har våra textlänkar 3 states:<br>
* en färg för aktiva länkar
* En färg för hover på länkarna
* En färg för klickade länkar<br><br>
Se färg-referenser design & states I FIGMA:
https://www.figma.com/file/vuF2awgrtiQRkeBkI1ufSO/Krossade-Tomater?node-id=0%3A1&t=9TQwXXHjtCBHRtOU-1

##### INPUT FIELD:
På vår sida med Components i FIGMA har våra inputfält 3 states:<br>
* en färgborder för default- icke ifyllda fält
* En färgborder för confirmed rätt ifyllda fält
* En färgborder för felifyllt/ inte ifylld, error, fält.<br><br>

Se färg-referenser design & states I FIGMA:<br>
https://www.figma.com/file/vuF2awgrtiQRkeBkI1ufSO/Krossade-Tomater?node-id=0%3A1&t=9TQwXXHjtCBHRtOU-1

### Länkar i projektet
https://wweb.dev/resources/css-separator-generator/ CSS - separator<br>
https://www.pexels.com/photo/photography-of-sliced-bread-1079020/ (brödbild)<br>

Arbetsfil FIGMA med moodBoard, Components Design samt Design Devices:<br>
https://www.figma.com/file/vuF2awgrtiQRkeBkI1ufSO/Krossade-Tomater?node-id=0%3A1&t=9TQwXXHjtCBHRtOU-1
<br><br>
MVH<br>
Team Krossade Tomater
