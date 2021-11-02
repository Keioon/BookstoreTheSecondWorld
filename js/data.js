const dataSources = {}

dataSources.booksList = [
  {
    id: 0,
    title: "Droga Królów",
    autor: "Brandon Sanderson",
    type: "Fantasy",
    img: "images/drogaKrólów.jpg",
    description: `"Droga Królów" to pierwszy tom znakomitej serii fantasy "Archiwum Burzowego Światła", od której nie będziesz się w stanie oderwać! Kto z walecznej czwórki zbawi i ocali cały świat przed zagładą?

    <p>Czy zaledwie czwórka bohaterów może zmienić świat? Co, jeśli jedna z osób chce zniszczyć wszystko? "Droga Królów" to fascynująca powieść fantasy, trzymająca w napięciu do ostatniej strony.</p>
    
    <p>Zanim nastąpiło Ostatnie Spustoszenie, wszystko było łatwe, przyjemne i takie proste! Obecnie każdy musi walczyć o swoje życie, jednocześnie nie będąc pewnym, jaki to ma właściwie sens. Szczególną rolę odgrywają tutaj cztery postacie. Chirurg, który musiał zostać żołnierzem. Skrytobójca, który płacze zawsze, gdy zabija. Oszustka, czyli młoda kobieta skrywająca swoje prawdziwe ja. I arcyksiążę, żądny krwi. Ta drużyna absolutnie nie wygląda na grupę bohaterów zdolnych do uratowania świata. I nic dziwnego - jeden z nich chce bowiem czegoś zupełnie innego. "Droga Królów" to prawdziwe poszukiwanie klucza do odzyskania pokoju w nękanym wojną królestwie.</p>`,
    amount: 0,
    price: 45.99,
  },
  {
    id: 1,
    title: "Słowa Światłości",
    autor: "Brandon Sanderson",
    type: "Fantasy",
    img: "images/słowaŚwiatłości.jpg",
    description: `Doskonała kontynuacja "Drogi królów"

    Świetliści Rycerze muszą znów powstać
    
    W końcu wypowiedziano starożytne przysięgi, spreny powracają. Ludzie szukają tego, co zostało utracone. Być może ta misja ich zniszczy.
    
    Wiatrowy zagubił się w strzaskanej krainie i balansuje na granicy między zemstą a honorem. Tkaczka Światła, którą powoli pochłania przeszłość, poszukuje kłamstwa, którym musi się stać. Kowal Więzi, zrodzony z krwi i śmierci, teraz próbuje odbudować to, co zostało zniszczone. Badaczka, od której zależą losy dwóch ludów, zostaje zmuszona do dokonania wyboru między powolną śmiercią a straszliwą zdradą wszystkiego, w co wierzy.
    
    Najwyższy czas, by się przebudzili, nadchodzi bowiem Wieczna Burza.
    `,
    amount: 10,
    price: 45.99,
  },
  {
    id: 2,
    title: "Dawca Przysięgi I",
    autor: "Brandon Sanderson",
    type: "Fantasy",
    img: "images/słowaŚwiatłości.jpg",
    description: `W „Dawcy Przysięgi“, trzecim tomie bestsellerowego Archiwum Burzowego Światła, ludzkość musi stawił czoło nowemu Spustoszeniu i powrotowi Pustkowców - wroga, którego liczebność jest równie wielka, jak pragnienie zemsty.

    Alethyjskie armie pod dowództwem Dalinara Kholina odniosły chwilowe zwycięstwo, jednak cena była straszliwa: Parshendi przywołali gwałtowną Wielką Burzę, która teraz niszczy świat, a jej przejście uświadamia niegdyś spokojnym i potulnym parshmenom prawdziwą grozę ich trwającego wiele tysiącleci uwięzienia. Podczas desperackiej misji, by ostrzec rodzinę przed nowym zagrożeniem, Kaladin Burzą Błogosławiony musi pogodzić się ze świadomością, że ich gniew może być całkowicie uzasadniony.
    
    Wysoko w górach pond burzami, w wieży Urithiru, Shallan Davar bada cuda starożytnej twierdzy Świetlistych Rycerzy i odkrywa mroczne tajemnice kryjące się w jej głębinach. Dalinar zaś uświadamia sobie, że jego święta misja zjednoczenia ojczystego Alethkaru miała zbyt ograniczony zasięg. Jeśli wszystkim narodom Rosharu nie uda się zapomnieć o krwawej przeszłości Dalinara, by się zjednoczyć - i o ile samemu Dalinarowi nie uda się stawić czoła tej przeszłości - nawet powrót Świetlistych Rycerzy nie zapobiegnie końcowi cywilizacji.`,
    amount: 2,
    pice: 34.99,
  },
  {
    id: 3,
    title: "Dawca Przysięgi II",
    autor: "Brandon Sanderson",
    type: "Fantasy",
    img: "images/rytmWojnyCI.jpg",
    description: `Przebudzeni parshendi – pieśniarze – pod wodzą służących Odium Stopionych wydają się niepowstrzymani. Wieczna Burza nieubłaganie powraca, za każdym razem sprowadzając śmierć i zniszczenie na ludzkie osady. Dalinar Kholin, udręczony powracającymi wspomnieniami przeszłości i nieżyjącej żony, nie szczędzi wysiłków, by zbudować koalicję ludzkich królestw, odkrywając przy tym swoje moce Kowala Więzi. Jednakże Odium ma wiele sług i wygląda na to, że jest przygotowany na każdą możliwość, a Świetlistym Rycerzom zagraża również tajemnica, która wcześniej doprowadziła do Odstępstwa ich starożytnych poprzedników.

    Elhokar, Adolin, Shallan i Kaladin docierają do Kholinaru i odkrywają, że choć miasto jeszcze nie upadło, ich misja może się okazać o wiele trudniejsza, niż się spodziewali. Ludzie szepczą o mrocznej sile, która opanowała pałac i królową Aesudan, po ulicach zaś wędrują wyznawcy dziwacznego Kultu Chwil. A jedynym, co chroni miasto przed upadkiem, jest Straż Muru i jej tajemniczy dowódca, marszałek Lazur.
    
    Tymczasem ostatnia z Parshendich, Venli, zaczyna pojmować, jakie skutki przyniosła jej decyzja, by odnaleźć starożytnych bogów pieśniarzy, i jaki los czeka pieśniarzy pod władzą Odium.`,
    amount: 10,
    pice: 34.99,
  },
  {
    id: 4,
    title: "Rytm Wojny I", 
    autor: "Brandon Sanderson",
    type: "Fantasy",
    img: "images/rytmWojnyCI.jpg",
    description: `Po utworzeniu koalicji ludzkich monarchów stawiających opór wrogiej inwazji, Dalinar Kholin i jego Świetliści Rycerze przez rok prowadzili przeciągającą się, brutalną wojnę. Żadna ze stron nie zyskała przewagi, a nad każdym strategicznym posunięciem wisi cień zdrady przebiegłego Taravangiana.

    Teraz, gdy nowe wynalazki uczonych Navani Kholin zaczynają zmieniać oblicze wojny, wróg przygotowuje odważną i niebezpieczną operację. Następujący później wyścig zbrojeń może rzucić wyzwanie samemu sednu ideałów Świetlistych, a być może wyjawić również tajemnice starożytnej wieży, która niegdyś była sercem ich potęgi.`,
    amount: 10,
    pice: 39.99,
  },
  {
    id: 5,
    title: "Rytm Wojny II", 
    autor: "Brandon Sanderson",
    type: "Fantasy",
    img: "images/rytmWojnyCII.jpg",
    description: `W nowej powieści z cyklu "Archiwum Burzowego Światła", pod tytułem "Rytm wojny. Archiwum Burzowego Światła. Tom 4. Część 2" Kaladin i Navani toczą zacięty bój o ocalenie Rodzeństwa. Navani, aby dopiąć swego celu, decyduje się podjąć niebezpieczną grę ze Stopioną, nazywaną ongiś Panią Bólu.

    W Emulu zaś wojska koalicji toczą zaciekłą wojnę. Jasnah próbuje umocnić swoją pozycję władczyni Alethkaru, a Dalinar z kolei pragnie zrozumieć swoje moce. A Adolin i Shallan mają do wypełnienia w Cieniomorzu pewne niebezpieczne zadanie. Kto wygra, a kto przegra? Rytmy wojny rozbrzmiały, i nic nie może ich już uciszyć.`,
    amount: 10,
    pice: 39.99,
  },
  {
    id: 6,
    title: "Gildia Magów", 
    autor: "Trudi Canavan", 
    type: "Fantasy",
    img: "images/gildiaMagów.jpg",
    description: `"Gildia Magów" jest pierwszym tomem słynnej "Trylogii Czarnego Maga" autorstwa Trudi Canavan.

    "Gildia magów" opowiada poruszającą i trzymającą w napięciu historię młodej dziewczyny, która miała nieszczęście urodzić się w biednej dzielnicy kraju Imardin - państwa raz do roku organizującego "czystkę" ulic z ludzi ubogich, żebraków i włóczęgów. Proces ten przeprowadzają mistrzowie magii, otoczeni specjalną tarczą ochronną, przez którą nie ma szans przebić się osoba nieposiadająca mocy.
    
    Podczas jednego z dorocznych oczyszczeń Sonea, zmęczona i wściekła za sposób, w jaki traktuje się ludzi z jej otoczenia, odkrywa w sobie nagle magiczne moce: kamień, którym z wściekłością rzuca w jednego z magów, niespodziewanie przebija się przez tarczę ochronną i dosięga celu. Wszyscy są w szoku - łącznie z samymi magami, teraz obawiającymi się o swoje bezpieczeństwo. Rozpoczynają się poszukiwania dziewczyny, która sama nie podejrzewa, że jej moc jest zagrożeniem nie tylko dla otoczenia, ale przede wszystkim dla niej samej.`,
    amount: 10,
    pice: 16.99,
  },
  {
    id: 7,
    title: "Nowicjuszka", 
    autor: "Trudi Canavan",
    type: "Fantasy",
    img: "images/nowicjuszka.jpg",
    description: `Imardin to miasto ponurych intryg i niebezpiecznej polityki, gdzie władzę sprawują ci, którzy obdarzeni są magią. W ten ustalony porządek wtargnęła uboga dziewczyna o niezwykłym talencie magicznym. Odkąd wstąpiła do Gildii Magów, jej życie zmieniło się nieodwracalnie - na lepsze czy gorsze?Sonea wiedziała, że nauka w Gildii Magów nie będzie łatwa, ale nie przewidziała niechęci, jakiej dozna ze strony innych nowicjuszy. Jej szkolnymi kolegami są synowie i córki najpotężniejszych rodów w królestwie, którzy zrobią wszystko, żeby poniosła klęskę - nie licząc się z kosztami. Niemniej przyjęcie opieki Wielkiego Mistrza może dla Sonei oznaczać jeszcze marniejszy los. Albowiem Wielki Mistrz Akkarin skrywa sekret znacznie czarniejszy niż barwa jego szaty.`,
    amount: 10,
    pice: 16.99,
  },
  {
    id: 8,
    title: "Wielki Mistrz",
    autor: "Trudi Canavan",
    type: "Fantasy",
    img: "images/wielkiMistrz.jpg",
    description: `Sonea wiele nauczyła się w Gildii Magów. W ciągu ostatniego roku Regin dał jej spokój, a pozostali nowicjusze zaczęli traktować ją z niechętnym szacunkiem. Dziewczyna nie może jednak zapomnieć tego, co widziała w podziemnej komnacie Wielkiego Mistrza Akkarina, ani też ostrzeżenia, że odwieczny wróg Kyralii czujnie obserwuje Gildię.

    W miarę jak Akkarin ujawnia coraz więcej swojej wiedzy, Sonea przestaje być pewna, komu ufać ani czego bać się najbardziej. Czy prawda może być aż tak przerażająca, jak przedstawia ją Wielki Mistrz? A może jest to podstęp, mający skłonić ją do uczestnictwa w jego mrocznych praktykach?
    
    Wielki mistrz to trzeci tom znakomitej trylogii fantasy, skrzącej się od magii, akcji i przygód, będącej dziełem jednej z najciekawszych autorek fantastyki.`,
    amount: 10,
    pice: 16.99,
  },
  {
    id: 9,
    title: "Misja Ambasadora",
    autor: "Trudi Canavan",
    type: "Fantasy",
    img: "images/misjaAmbasadora.jpg",
    description: `Sonea jest przerażona, kiedy jej syn, który właśnie ukończył studia, postanawia dołączyć do grupy Ambasadorów Gildii, wybierających się do Sachaki. Kiedy nadchodzi wiadomość, że zaginął, Sonea chce koniecznie ruszyć na poszukiwania, ale nie może opuścić miasta, nie łamiąc prawa zabraniającego czarnym magom opuszczania Imardinu.

    Kiedy pojawia się u niej Cery, prosząc o pomoc, ponieważ większość jego rodziny została zamordowana, Sonea dowiaduje się, że w półświatku od lat toczy się śmiertelna wojna między Złodziejami. Podejrzane przypadki śmierci sprawiają, że Gildia zaczyna się martwić, czy przypadkiem nie ma do czynienia z dzikimi magami.`,
    amount: 10,
    pice: 36.99,
  },
  {
    id: 10,
    title: "Łotr",
    autor: "Trudi Canavan",
    type: "Fantasy",
    img: "images/łotr.jpg",
    description: `"Łotr" - druga część popularnej trylogii “Zdrajcy”.

    W tej części akcja nabiera tempa i jeszcze mocniej zachęca młodzież i dorosłych do wejścia w świat magii, gdzie nie brak niecodziennych zdarzeń i postaci.
    
    Lorkin, który mieszka wśród sachakańskich buntowników, wykorzystuję tę sytuację do tego, by jak najwięcej dowiedzieć się o nich oraz ich niezwykłej magii. Jak łatwo przypuszczać, zdrajcy nie są jednak chętni do dzielenia się, bądź co bądź poufnymi informacjami w zamian za wiedzę uzdrowicielską, pomimo że pragną ją zdobyć. Buntownicy w opinii Lorkina obawiają się ujawnienia przed światem, choć istnieje prawdopodobieństwo, że lud ten ma o wiele bardziej ambitne plany.
    
    Tymczasem Sonea, która doskonale zdaje sobie sprawę, że Cery uciekać w nieskończoność nie może, usiłuje odnaleźć dzikiego maga - nie wie tylko, że ów mag ma większe wpływy, niż mogła podejrzewać. Jedyną jej kartą przetargową jest matka maga, więziona w Strażnicy. Losy Dannyla w Sachace również nie wyglądają obiecująco; utracił ON poważanie elit po tym, jak dzięki niemu Lorkin zyskał możliwość dołączenia do Zdrajców. Ciekawa sytuacja ma miejsce na Uniwersytecie - dwie spośród nowicjuszek mają pewne podejrzenia i sugerują magom Gildii, że możliwe jest, iż największy ich wróg kryć może się wśród... nich.`,
    amount: 10,
    pice: 36.99,
  },
  {
    id: 11,
    title: "Królowa Zdrajców",
    autor: "Trudi Canavan",
    type: "Fantasy",
    img: "images/królwaZdrajców.jpg",
    description: `Co tym razem wydarzy się w Sachace? Wraca Lorkin, który przebywał wśród buntowników przez kilka miesięcy. Nie jest świadomy, jak ważną misję ma dla niego Królowa Zdrajców. Zawarcie przymierza między Zdrajcami, a jego ludem zależy od tego, czy wykona ON swoje zadanie, czy nie. Nie jest ono też jedynym wyzwaniem, przed którym musi stanąć. Jest zmuszony zapanować nad potęgą, z jaką nigdy wcześniej nie miał do czynienia. W tym celu ma stać się czarnym magiem, który budzi przerażenie w wielu sercach na samą myśl o nim. Wiedza to potężna broń a ta, która stała się własnością Lorkina, może wywołać różne konsekwencje. Jak wpłynie ona na Gildię Magów lub samego bohatera? Nie jest to droga łatwa i wystawi ona charakter Lorkina na wiele prób i zagrożeń.
    
    Czy podoła ON wszystkiemu, co rzucił mu los i misji, jaką mu powierzono? To ujawni "Trylogia Zdrajcy. Tom 3. Królowa Zdrajców". Autorka w mistrzowski sposób kończy wspaniałą serię i dlatego warto się przekonać, jaki finał ma historia Lorkina i innych postaci będących częścią tej trylogii. Przed rozpoczęciem tej lektury warto odświeżyć sobie również dwa poprzednie tomy - "Misja Ambasadora" i "Łotr".`,
    amount: 10,
    pice: 36.99,
  },
  {
    id: 12,
    title: "Złodziejska Magia",
    autor: "Trudi Canavan",
    type: "Fantasy",
    img: "images/złodziejskaMagia.jpg",
    description: `Pierwsza część trylogii “Prawo Milenium” - “Złodziejska magia”.

    “Prawo Milenium. Księga 1. Złodziejska magia” to pierwszy tom cyklu. Akcja rozgrywa się równolegle, w dwóch kompletnie odmiennych od siebie światach, a elementem scalającym jest wszechobecna magia. Poznajemy więc studenta archeologii, zgłębiającego historię i tajniki magii, Tyena Ironsneltera, który podczas wykopalisk archeologicznych, szukając artefaktów przydatnych jego uczelni, odnajduje w jednym z grobowców niepozorną księgę. Okazuje się, że nazywa się Vella i ma niezwykłe właściwości, jej zadaniem jest gromadzenie wiedzy posiadanej przez osoby, z którymi się zetknie i przekazywanie tej wiedzy dalej. Vella była kiedyś kobietą, a w księgę o magicznych właściwościach zamienił ją przed wiekami potężny czarodziej. Tyen szybko przekona się, że zetknięcie się z Vellą przysporzy mu wielu kłopotów.
    
    Drugą równorzędną bohaterką “Złodziejskiej magii” jest córka farbiarza, Rielle Lazuli. Żyje ona w teokratycznym środowisku, gdzie magia dostępna jest wybranym, a przeciętny obywatel korzystając z niej, zdaniem kapłanów, okrada anioły. Rielle chodzi do szkoły zakonnej, a jej zadaniem jest znalezienie odpowiedniego, dobrze urodzonego kandydata na męża. Jednak dziewczyna z trudem ukrywa swój talent do magii, a na dodatek zakochuje się w biednym, choć charyzmatycznym i utalentowanym malarzu.
    
    Obie historie toczą się równolegle, niezależnie od siebie. Jednakże łączy je fakt, że bohaterowie wpadają w tarapaty w związku z korzystaniem z magii, a także przekonują się, że ich przyjaciele mogą okazać się niegodni zaufania, a pomoc może nadejść z najmniej oczekiwanej strony. Akcja rozgrywa się szybko, brak tu nużących opisów, a Trudi Canavan sprawnie operuje słowem tworząc powieść, która wciąga do ostatniej strony i pozostawia niedosyt, skłaniający do sięgnięcia po kolejne tomy cyklu.`,
    amount: 10,
    pice: 36.99,
  },
  {
    id: 13,
    title: "Anioł Burz", 
    autor: "Trudi Canavan",
    type: "Fantasy",
    img: "images/aniołBurz.jpg",
    description: `“Prawo Milenium - Księga druga. Anioł burz” jest drugą częścią trylogii Trudi Canavan. Od wydarzeń przedstawionych w “Złodziejskiej magii” minęło pięć lat. Akcja początkowo rozgrywa się, podobnie jak w pierwszej odsłonie cyklu, równolegle, później jednak drogi głównych bohaterów przecinają się. Tym razem jednak autorka przedstawia uniwersum składające się z wielu niezwykle zróżnicowanych “światów”, pomiędzy którymi bohaterowie przemieszczają się.

    Tyen osiadł w szkole magii w Liftre, gdzie naucza magii mechanicznej, jednocześnie poszerzając swą wiedzę ogólną na temat magii. Jednak po dwudziestu latach nieobecności powraca do Liftre Raen, najpotężniejszy mag w historii. Jego prawa zabraniają nauczania magii w szkołach oraz przenoszenia się między światami, toteż szkoła zostaje zamknięta, a Tyen pozostaje bez dachu nad głową i celu w życiu. Pozostaje mu jednak do wypełnienia złożona Velli obietnica przywrócenia jej ludzkiej postaci. Czy uda mu się ją wypełnić? Czy przyłączy się do buntowników protestujących przeciwko rządom Raena? A może zawrze pakt z wielkim magiem?
    
    Tymczasem Rielle, skazana za używanie magii, mieszka wśród tkaczy gobelinów w Schpecie. Wiele się nauczyła, jest utalentowaną rzemieślniczką, która wciąż nie zdaje sobie sprawy z tego, jak wielką moc magiczną posiada. Do miasta wkracza wojna, pojawia się też Anioł Burz, Valhan, który pragnie zabrać Rielle do swojego świata, obiecując uczyć ją magii. Czy dziewczyna może mu zaufać?`,
    amount: 10,
    pice: 39.99,
  },
  {
    id: 14,
    title: "Obietnica Następcy",
    autor: "Trudi Canavan",
    type: "Fantasy",
    img: "images/obietnicaNastępcy.jpg",
    description: `Trzeci tom trylogii fantasy „Prawo Milenium” autorki światowych bestsellerów Trudi Canavan.

    Od konfrontacji buntowników z Raenem minęło pięć lat. W tym czasie Qall, chłopiec ocalony przez Rielle, bezpiecznie dorósł wśród Podróżników, a Tyen znalazł sobie nowy dom i ukrył się przed ludźmi, którzy okrzyknęli go zdrajcą i nazwali Szpiegiem.
    
    Pięć lat chaosu, nad którym Baluka i Odnowiciele ledwie byli w stanie zapanować. Wszędzie toczą się wojny, niektóre światy zostały opanowane przez machiny wojenne, inne pozbawili mocy magowie pragnący nieśmiertelności.
    
    W czasach gdy wojna zagraża z trudem wypracowanemu przez Rielle i Tyena pokojowi, a Qall wkracza w dorosłość, lojalność zostanie poddana próbie. Złożone obietnice mogą wszystko zmienić. Zależy od nich życie Qalla.
    
    Dahli ma bowiem możliwość przywrócenia władzy Raenowi i nie cofnie się przed niczym, by osiągnąć swój cel.`,
    amount: 10,
    pice: 39.99,
  },
  {
    id: 15,
    title: "Klątwa Kreatorów",
    autor: "Trudi Canavan",
    type: "Fantasy",
    img: "images/klątwaKreatorów.jpg",
    description: `"Klątwa Kreatorów" to czwarta część niesamowitej serii fantasy "Prawo Millenium".

    Wejdź do mrocznego świata i przeżyj przygodę, w której śmierć oraz rozpacz mieszają się z magią i ocaleniem. Odkryj, czy ludzkość zostanie ocalona oraz czy Kreatorom uda się przywrócić magię na ziemi.
    
    Rielle nosi teraz wielki i znaczący tytuł – jest Kreatorem. Jej misją jest przywrócenie światom magii. Nie potrafi już zliczyć, ile światów polecono jej ocalić.
    
    Tyen odrzucił dawny sposób życia. Nie jest już szpiegiem. Zamiast tego zaczął szkolić nowych magów. Szuka przy tym sposobu na rozwiązanie problemu urządzeń bojowych, które rozprzestrzeniają się coraz szybciej, na kolejne, niepodejrzewające nadchodzącej zguby światy.
    
    Kiedy stary wróg przynosi ze sobą powiew czegoś znacznie gorszego niż unicestwione światy i szaleni magowie, Rielle i Tyen muszą połączyć siły, aby stanąć oko w oko z zagrożeniem, z którym jeszcze nikt ze światów nie musiał się mierzyć. Tylko tak ocalą ludzkość i odkryją tajemnice, które pozwolą im spojrzeć na świat zupełnie inaczej.`,
    amount: 10,
    pice: 39.99,
  },
  {
    id: 16,
    title: "Ostatnie Życzenie",
    autor: "Andrzej Sapkowski",
    type: "Fantasy",
    img: "images/wiedźminOstatnieŻyczenie.jpg",
    description: `Pozycja, która przedstawia początki historii słynnego Geralta z Rivii. Sięgnij po tę lekturę i zanurz się w świecie, pełnym niebezpiecznych stworzeń, nierzadko napadających na ludzkie osady.

    "Ostatnie życzenie" to jeden ze zbiorów opowiadań z cyklu wiedźmińskiego, który zdobył ogromną popularność nie tylko w Polsce, ale i na całym świecie, między innymi za sprawą gry komputerowej, a następnie dzięki serialowi, wyprodukowanemu przez platformę Netflix.
    
    Główny bohater, Geralt z Rivii, jest wiedźminem, czyli osobą, która w zamian za wynagrodzenie, pozbywa się rozlicznych potworów. Działa według ściśle określonego systemu moralnego, dzieląc wszystko na to, co dobre i na to, co złe, nie uznając natomiast niczego pośrodku. Nie zabija, jeśli nie musi tego robić. Woli stawiać na uroki, które czasem też mogą rozwiązać problem. W trakcie swoich przygód poznaje piękną czarodziejkę, Yennefer, która wzbudza w nim fascynację. Jakie zlecenia czekają na niego w najbliższej przyszłości?`,
    amount: 10,
    pice: 69.99
  },
  {
    id: 17,
    title: "Miecz Przeznaczenia",
    autor: "Andrzej Sapkowski",
    type: "Fantasy",
    img: "images/wiedźminMieczPrzeznaczenia.jpg",
    description: `“Miecz przeznaczenia” autorstwa Andrzeja Sapkowskiego to drugi z kolei tom popularnej serii o Wiedźminie, pogromcy potworów, który nie cofnie się przed niczym. Jaka przygoda spotka go tym razem?

    Geralt nie ma łatwego życia, mimo że jest doskonale wyćwiczony w tym, co robi i posiada niezaprzeczalny talent. Tym razem przedstawia Czytelnikowi swoją złotą zasadę: nie zabija smoków, ponieważ to gatunek, który jest zagrożony wymarciem. Zgodnie z kodeksem, dozwolone jest jedynie usuwanie latawców, oszluzgów oraz widłogonów. Tym razem jednak powinien chyba zrobić wyjątek.
    
    Pewien wyjątkowo irytujący smok daje się we znaki społeczności i niejeden człowiek z całego serca życzy mu śmierci. Właśnie dlatego grupa smokobójców wyrusza, by się z nim rozprawić. Oprócz Geralta, jest wśród nich Yennefer, Rębacze z Crinfrid oraz Eyck z Denesle. Z tym konkretnym gadem nie pójdzie im jednak wcale tak łatwo.`,
    amount: 10,
    pice: 69.99
  },
  {
    id: 18,
    title: "Krew Elfów", 
    autor: "Andrzej Sapkowski",
    type: "Fantasy",
    img: "images/wiedźminKrewElfów.jpg",
    description: `"Krew elfów" to pierwsza z pięciu części sagi o Wiedźminie Geralcie. Król polskiej fantastyki, Andrzej Sapkowski, raczy czytelników wspaniałą i wciągającą literaturą na najwyższym poziomie.

    Pierwsza z książek opisująca przygody Wiedźmina jest, tak jak kolejne tomy, napisana z humorem, pełna trafnych spostrzeżeń oraz wciągających i dynamicznych dialogów. Jeśli jeszcze nie sięgnąłeś po tę książkę, nie czekaj i daj przenieść się do świata, w którym żyją elfy, czarodziejki i wiedźmini!
    
    "Krew elfów" opowiada o losach Geralta - wiedźmina, który opiekuje się dzieckiem-niespodzianką. Tym dzieckiem jest dziewczynka o imieniu Ciri. W prezentowanym tomie poznajemy też czarodziejkę Triss, która również ma wpływ na wychowanie dziecka. Autor powoli wprowadza czytelnika w nowy świat, kreuje i daje poznać otaczającą bohaterów rzeczywistość. Fabuła książki rozgrywa się w świecie określanym przez samego autora jako quasi-średniowiecze. Mamy więc tu nie tylko zwykłych ludzi, ale też mutantów, krasnoludów i elfów.`,
    amount: 10,
    pice: 69.99,
  },
  {
    id: 19,
    title: "Czas Pogardy",
    autor: "Andrzej Sapkowski",
    type: "Fantasy",
    img: "images/wiedźminCzasPogardy.jpg",
    description: `Prezentowana książka to opowieść o niesamowitej przygodzie, bogatej w wyjątkowe detale, z jak zawsze wyjątkowo specyficznymi bohaterami. I choć twórczość Andrzeja Sapkowskiego to tematyka fantasy, to ubrana jest w tak ciekawą i urozmaiconą historię, że trudno się od niej oderwać nawet tym, którzy na co dzień gustują w zupełnie innych gatunkach.

    "Czas pogardy" to czwarty tom sagi o Wiedźminie Geralcie. Nadchodzi zapowiadany wcześniej przez Intlinne czas miecza i topora. W tej części świat Ciri i Wiedźmina ogarniają płomienie. Na powierzchnię zaczynają wyłazić złowieszcze szczury, uwielbiające czynić zło. Rozpoczynają atakować w sposób zdradziecki i okrutny. Ludzie powoli tracą wszystko, co mieli. W konsekwencji - dla otaczającego ich świata i obcych osób mają już tylko tytułową pogardę. To także tom, w którym Geralt po raz pierwszy zaczyna wchodzić w świat polityki.`,
    amount: 10,
    pice: 69.99
  },
  {
    id: 20,
    title: "Chrzest Ognia",
    autor: "Andrzej Sapkowski",
    type: "Fantasy",
    img: "image/wiedźminChrzestOgnia.jpg",
    description: `"Wiedźmin. Tom 5. Chrzest ognia" to kontynuacja losów tytułowego zabójcy wampirów, kikimor i innych stworzeń czyhających na ludzkie życia. W tej części Geralt z Rivii wraz z Jaskrem nadal podąża tropem Ciri - magicznie uzdolnionej dziewczynki, z którą związany jest przeznaczeniem. Opuszcza zamieszkany przez driady las Brokilon i tworzy nietypową grupę z osób skorych do udzielenia mu pomocy. Trafiają do niej łuczniczka Milva, zdrajca Cahir oraz tajemniczy cyrulik Regis.

    Tymczasem Nilfgard zrywa rozejm z Temerią. Maszerujące wojska skutecznie utrudniają wędrówkę wiedźmina, który wraz z towarzyszami zmuszony zostaje do zmiany trasy. Wojna ma także inne, daleko idące konsekwencje. Może doprowadzić do sojuszu czarodziejek, które nie zamierzają biernie przyglądać się wszystkim wydarzeniom. Wśród nich znajdzie się Yennefer z Vengerbergu - ukochana Geralta oraz przyszywana matka Ciri. Nastał trudny czas dla Geralta z Rivii, który być może po raz kolejny będzie musiał zapomnieć o swojej neutralności i opowiedzieć się po jednej ze stron.`,
    amount: 10,
    pice: 69.99
  },
  {
    id: 21,
    title: "Wieża Jaskółki",
    autor: "Andrzej Sapkowski",
    type: "Fantasy",
    img: "images/wiedźminWieżaJaskółki.jpg",
    description: `Klęska jest nieunikniona. Świadczy o tym niemal wszystko i każda bardziej spostrzegawcza istota dostrzeże to bez problemu. Przyczyną wydaje się jesienne Ekwinokcjum. Wszystko staje się coraz dziwniejsze i bardziej przerażające. Nadciąga niespodziewana zawierucha, a Leiki śpiewają konajączkę. Ten sam sen nawiedza jednocześnie trzy różne osoby na terenie świątyni Melitele.

    Tymczasem Ciri powoli dochodzi do siebie po niedawno odniesionych obrażeniach. Przebywa w chacie pustelnika Vysygoty. Na szczęście jej zdrowiu już nic nie zagraża. Kiedy przybrana córka Geralta dochodzi do wcześniejszej sprawności, postanawia przybliżyć gospodarzowi szczegóły swej podróży, łącznie z tym, w jaki sposób trafiła do miejsca, w którym obecnie się znajduje. Ciri nawet nie zdaje sobie sprawy z tego, że Geralt wciąż przetrząsa okolicę, by ją odnaleźć. Nie jest ON jednak jedyną osobą, która jej szuka. Na "łowy" wyrusza także cesarz Emhyr var Emreis, pragnie ON ją poślubić i zbliżyć się do tronu Cintry.`,
    amount: 10,
    pice: 69.99
  },
  {
    id: 22,
    title: "Pani Jeziora",
    autor: "Andrzej Sapkowski",
    type: "Fantasy",
    img: "images/wiedźminPaniJeziora.jpg",
    description: `Nie trzeba być fanem gatunku fantasy, by zatracić się w świecie sagi "Wiedźmin", która została stworzona przez równie fantastycznego, co kolejne tomy historii, autora Andrzeja Sapkowskiego. Sapkowski znany jest właśnie z tej tematyki książek i w tej sadze udowadnia, że do serc czytelników trafia się nieprzeciętnymi, barwnymi historiami.

    "Pani Jeziora" to siódmy już tom sagi o Wiedźminie. Sapkowski przenosi nas do królestwa Aen Elle, do którego dostaje się jedna z głównych bohaterek - Ciri. Gdy jednak dowiaduje się, co czeka na nią w królestwie oraz czego oczekuje od niej Król Olch, dziewczyna postanawia uciec. W bezpiecznym opuszczeniu tego miejsca pomagają jej... jednorożce.
    
    W tym samym czasie śledzimy także losy głównego bohatera całej sagi - Wiedźmina Geralta, który zmuszony jest opuścić Caed Myrkvid. W końcu drogi Ciri i Geralta przecinają się, a akcja z każdą kolejną stroną nabiera tempa. Niewątpliwie Pani Jeziora to ponownie barwna, naszpikowana detalami historia, w której odnajdą się tylko ci, którzy pokuszą się o otwarcie pierwszej strony kolejnego tomu wiedźmińskiej sagi.`,
    amount: 10,
    pice: 69.99
  },
  {
    id: 23,
    title: "Sezon Burz",
    autor: "Andrzej Sapkowski",
    type: "Fantasy",
    img: "images/wiedźminSezonBurz.jpg",
    description: `"Sezon burz" to kolejna część przygód Geralta z Rivii. Choć słowo "kolejna" może tu być mylące, bo nie jest ona kontynuacją sagi. Wydarzenia w niej opisane są chronologicznie wcześniejsze, niż te z poprzednich tomów cyklu o Wiedźminie. "Sezon burz" jest właściwie oddzielną opowieścią, opartą na uniwersum wykreowanym przez Andrzeja Sapkowskiego, spotykamy w nim jednakże postaci z innych tomów sagi, jak na przykład barda i poetę Jaskra czy czarodziejkę, ukochaną Wiedźmina, Yennefer.

    Nietypowo dla Andrzeja Sapkowskiego, akcja powieści toczy się z początku jednowątkowo, jednak z czasem wydarzenia się zagęszczają. Geralt zostaje wysłany na misję do Rissbergu. Po stoczeniu morderczej walki z drapieżnikiem Arachnomorfem i zabiciu bestii, udaje się do miasta Kerack, chcąc się najeść do syta i odpocząć. By wejść do grodu, musi zdeponować swoje miecze w kordegardzie. Następnie wdaje się w bójkę ze strażniczkami miasta Kerack i zostaje aresztowany. Dzięki tajemniczemu darczyńcy czeka, co prawda na wyrok na wolności, jednakże okazuje się, że ktoś ukradł jego miecze. Na domiar złego kochliwy Wiedźmin wdaje się w romans z rudowłosą czarodziejką Koral, która oczywiście wykorzystuje go do własnych celów.`,
    amount: 10,
    pice: 69.99
  },
  {
    id: 24,
    title: "Szpony i Kły",
    autor: "Andrzej Sapkowski",
    type: "Fantasy",
    img: "images/wiedźminSzponyIKły.jpg",
    description: `Oto zbiór opowiadań nawiązujących do opowieści o wiedźminie Andrzeja Sapkowskiego. Teksty zawarte w prezentowanej książce zostały wyróżnione w konkursie zorganizowanym z okazji trzydziestolecia pierwszego wydania przygód Geralta.

    Główny bohater serii Sapkowskiego, prawdę mówiąc młodzieniaszkiem nie był już wtedy, gdy mieliśmy okazję spotkać go po raz pierwszy. Tak to jest jednak z bohaterami opowieści, zwłaszcza takimi jak on. Nie starzeją się. Nie szkodzi im upływ czasu. Ciągle na nowo potrafią rozbudzać wyobraźnię zarówno Czytelników, jak i kolejnych pokoleń twórców.`,
    amount: 10,
    pice: 29.99
  },
  {
    id: 25,
    title: "Adeptka",
    autor: "Rachel E. Carter",
    type: "Fantast",
    img: "image/adeptka.jpg",
    description: `Ryiah przetrwała próbny rok w Akademii Magii, ale dopiero teraz zaczyna się dla niej prawdziwa nauka.

    Dziewczyna dostała się do wymarzonej frakcji bojowej, ale musi stawić czoła nauczycielowi, którego nie znosi, i wrogo nastawionej Priscilli. Sytuacji nie ułatwia też relacja z Darrenem, oscylująca między wrogością a sympatią, może nawet fascynacją...
    
    Kiedy jeden z uczniów zostaje zabity w nieprzyjacielskim ataku, nauka schodzi jednak na dalszy plan. W powietrzu wisi wojna, być może Ryiah będzie musiała wykorzystać swoje umiejętności szybciej, niż sądziła.`,
    amount: 10,
    pice: 29.99
  },
  {
    id: 26,
    title: "Cień Rycerza", 
    autor: "Sebastien De Castell",
    type: "Fantasy",
    img: "images/cieńRycerza.jpg",
    description: `Ryiah przetrwała próbny rok w Akademii Magii, ale dopiero teraz zaczyna się dla niej prawdziwa nauka.

    Dziewczyna dostała się do wymarzonej frakcji bojowej, ale musi stawić czoła nauczycielowi, którego nie znosi, i wrogo nastawionej Priscilli. Sytuacji nie ułatwia też relacja z Darrenem, oscylująca między wrogością a sympatią, może nawet fascynacją...
    
    Kiedy jeden z uczniów zostaje zabity w nieprzyjacielskim ataku, nauka schodzi jednak na dalszy plan. W powietrzu wisi wojna, być może Ryiah będzie musiała wykorzystać swoje umiejętności szybciej, niż sądziła.`,
    amount: 10,
    pice: 29.99
  },
  {
    id: 27,
    title: "Czarodzieje",
    autor: "Lev Grossman",
    type: "Fantasy",
    img: "images/czarodzieje.jpg",
    price: 34.99
  },
  {
    id: 28,
    title: "Król Magii",
    autor: "Lev Grossman",
    type: "Fantasy",
    img: "images/królMagii.jpg",
    price: 34.99
  },
  {
    id: 29,
    title: "Kraina Czarodzieja",
    autor: "Lev Grossman",
    type: "Fantasy",
    img: "images/krainaCzarodzieja.jpg",
    price: 34.99
  },
  {
    id: 30,
    title: "Czas Żelaza",
    autor: "Angus Watson",
    type: "Fantasy",
    img: "images/czasŻelaza.jpg",
    price: 30.99
  },
  {
    id: 31,
    title: "Żelazna Wojna",
    autor: "Angus Watson",
    type: "Fantasy",
    img: "images/żelaznaWojna.jpg",
    price: 30.99
  },
  {
    id: 32,
    title: "Tron z Żelaza",
    autor: "Angus Watson",
    type: "Fantasy",
    img: "images/tronZŻelaza.jpg",
    price: 30.99
  },
  {
    id: 33,
    title: "Drużyna Pierścienia",
    autor: "John Ronald Reuel Tolkien",
    type: "Fantasy",
    img: "images/drużynaPierścienia.jpg",
    price: 33.99
  },
  {
    id: 34,
    title: "Dwie Wieże",
    autor: "John Ronald Reuel Tolkien",
    type: "Fantasy",
    img: "images/dwieWieże.jpg",
    price: 33.99
  },
  {
    id: 35,
    title: "Powrót Króla",
    autor: "John Ronald Reuel Tolkien",
    type: "Fantasy",
    img: "images/powrótKróla.jpg",
    price: 33.99
  },
  {
    id: 36,
    title: "Misja 100",
    autor: "Kass Morgan",
    type: "Sci-Fi",
    img: "images/misja100.jpg",
    price: 36.99
  },
  {
    id: 37,
    title: "Dzień 21",
    autor: "Kass Morgan",
    type: "Sci-Fi",
    img: "images/dzień21.jpg",
    price: 36.99
  },
  {
    id: 38,
    title: "Powrót na Ziemię",
    autor: "Kass Morgan",
    type: "Sci-Fi",
    img: "images/powrótNaZiemię.jpg",
    price: 36.99
  },
  {
    id: 39,
    title: "Rebelia",
    autor: "Kass Morgan",
    type: "Sci-Fi",
    img: "image/rebelia.jpg",
    price: 36.99
  },
  {
    id: 40, 
    title: "Początek",
    autor: "Wasilij Machanienko", 
    type: "Fantasy",
    img: "images/początek.jpg",
    price: 42.99
  },
  {
    id: 41,
    title: "Gambit Kartosa",
    autor: "Wasilij Machanienko",
    type: "Fantasy",
    img: "images/gambitKartosa.jpg",
    price: 42.99
  },
  {
    id: 42,
    title: "Tajemnica Mrocznego Lasu",
    autor: "Wasilij Machanienko",
    type: "Fantasy",
    img: "images/tajemnicaMrocznegoLasu.jpg",
    price: 42.99 
  },
  {
    id: 43,
    title: "Zamek Widmo",
    autor: "Wasilij Machanienko",
    type: "Fantasy",
    img: "images/zamekWidmo.jpg",
    price: 42.99
  },
  {
    id: 44,
    title: "Szachy Karmadonta",
    autor: "Wasilij Machanienko",
    type: "Fantasy",
    img: "images/szachyKarmadonta.jpg",
    price: 42.99
  },
  {
    id: 45,
    title: "Nowy Początek",
    autor: "Wasilij Machanienko",
    type: "Fantasy",
    img: "images/nowyPoczątek.jpg",
    price: 42.99
  },
  {
    id: 46,
    title: "Hobbit",
    autor: "John Ronald Reuel Tolkien",
    type: "Fantasy",
    img: "images/hobbit.jpg",
    price: 32.99
  },
  {
    id: 47,
    title: "Kandydatka",
    autor: "Rachel E. Carter",
    type: "Fantasy",
    img: "images/kandydatka.jpg",
    price: 32.99
  },
  {
    id: 48, 
    title: "Każdy Musi Płacić",
    autor: "Robert Foryś",
    type: "Fantasy",
    img: "images/każdyMusiPłacić.jpg",
    price: 32.99
  },
  {
    id: 49,
    title: "Krew Świętego",
    autor: "Sebastien De Castell",
    type: "Fantasy",
    img: "images/krewŚwiętego.jpg",
    price: 32.99
  },
  {
    id: 50,
    title: "Lewa Ręka Boga",
    autor: "Paul Hoffman",
    type: "Fantasy",
    img: "images/lewaRękaBoga.jpg",
    price: 34.99
  },
  {
    id: 51,
    title: "Anioł Śmierci",
    autor: "Paul Hoffman",
    type: "Fantasy",
    img: "images/lewaRękaBogaII.jpg",
    price: 34.99
  },
  {
    id: 52,
    title: "Trzepotanie Jego Skrzydeł",
    autor: "Paul Hoffman",
    type: "Fantasy",
    img: "images/trzepotanieJegoSkrzydeł.jpg",
    price: 34.99
  },
  {
    id: 53,
    title: "Lizbończyk",
    autor: "Fernando Sobral",
    type: "'Detective', 'Cryminal'",
    img: "images/lizbończyk.jpg",
    price: 28.99
  },
  {
    id: 54,
    title: "Mroczny Triumf",
    autor: "Robin Lafevers",
    type: "Fantasy",
    img: "images/mrocznyTriumf.jpg",
    price: 28.99
  },
  {
    id: 55,
    title: "Nadzór",
    autor: "Charlle Fletcher",
    type: "Fantasy",
    img: "images/nadzór.jpg",
    price: 32.99
  },
  {
    id: 56,
    title: "Ostatni",
    autor: "Charlle Fletcher",
    type: "Fantasy",
    img: "images/ostatni.jpg",
    price: 32.99
  },
  {
    id: 57,
    title: "Paradoks",
    autor: "Charlle Fletcher",
    type: "Fantasy",
    img: "images/paradoks.jpg",
    price: 32.99,
  },
  {
    id: 58,
    title: "Nick i Nora Playlista Dla Dwojga",
    autor: "'Rachel Cohn', 'David Levithan'",
    type: "Romance",
    img: "images/nickINoraPlaylistaDlaDwojga.jpg",
    price: 33.99
  },
  {
    id: 59,
    title: "Ostatnia Walka",
    autor: "Rachel E. Carter",
    type: "Fantasy",
    img: "images/ostatniaWalka.jpg",
    price: 32.99
  },
  {
    id: 60,
    title: "Ostrze Zdrajcy",
    autor: "Sebastien De Castell",
    type: "Fantasy",
    img: "images/ostrzeZdrajcy.jpg",
    price: 33.99
  },
  {
    id: 61,
    title: "Pierwszy Rok",
    autor: "Rachel E. Carter",
    type: "Fantasy",
    img: "images/pierwszyRok.jpg",
    price: 33.99
  },
  {
    id: 62,
    title: "Przygody Sherlocka Holmesa",
    autor: "Artur Conan Doyle",
    type: "Detective",
    img: "images/przygodySherlockaHolmesa.jpg",
    price: 37.99
  },
  {
    id: 63,
    title: "To",
    autor: "Stephen King",
    type: "Horror",
    img: "images/to.jpg",
    price: 38.99
  },
  {
    id: 64,
    title: "To 2",
    autor: "Stephen King",
    type: "Horror",
    img: "images/to2.jpg",
    price: 38.99
  },
  {
    id: 65,
    title: "Tron Tyrana",
    autor: "Sebastien De Castell",
    type: "Fantasy",
    img: "images/tronTyrana.jpg",
    price: 33.99
  },
  {
    id: 66,
    title: "Tunele",
    autor: "'Roderick Gordon','Brian Williams'",
    type: "Fantasy",
    img: "images/tunele.jpg",
    price: 35.99
  },
  {
    id: 67,
    title: "Tunele Głębiej",
    autor: "'Roderick Gordon','Brian Williams'",
    type: "Fantasy",
    img: "images/tuneleGłębiej.jpg",
    price: 35.99
  },
  {
    id: 68,
    title: "Tunele Otchłań",
    autor: "'Roderick Gordon','Brian Williams'",
    type: "Fantasy",
    img: "images/tuneleOtchłań.jpg",
    price: 35.99
  },
  {
    id: 69,
    title: "Tunele Spirala",
    autor: "'Roderick Gordon','Brian Williams'",
    type: "Fantasy",
    img: "images/tuneleSpirala.jpg",
    price: 35.99
  },
  {
    id: 70,
    title: "U4 .Jules",
    autor: "Carole Trebor",
    type: "Sci-fi",
    img: "images/u4Jules.jpg",
    price: 33.99
  },
  {
    id: 71,
    title: "U4 .Koriwden",
    autor: "Yves Grevet",
    type: "Sci-fi",
    img: "images/u4Koriwden.jpg",
    price: 33.99
  },
  {
    id: 72,
    title: "U4 .Stephanie",
    autor: "Vincent Villeminot",
    type: "Sci-fi",
    img: "images/u4Stephanie.jpg",
    price: 33.99
  },
  {
    id: 73,
    title: "U4 .Yannis",
    autor: "Florence Hinckel",
    type: "Sci-fi",
    img: "images/u4Yannis.jpg",
    price: 33.99
  }
  // {
  //   id: 
  //   title: 
  //   autor:
  //   type: 
  //   img: 
  //   price: 
  // },
];

dataSources.autorsList = [
  "Artu Conan Doyle",
  "Andrzej Sapkowski",
  "Angus Watson",
  "Brandon Sanderson",
  "Brian Williams",
  "Carole Trebor",
  "Charlle Fletcher",
  "David Levithan",
  "Fernando Sobral",
  "Florence Hinckel",
  "John Ronald Reuel Tolkien",
  "Kass Morgan",
  "Lev Grossman",
  "Paul Hoffman",
  "Rachel Cohn",
  "Rachel E. Carter",
  "Robert Foryś",
  "Robin Lafevers",
  "Roderick Gordon",
  "Sebastien De Castell",
  "Stephen King",
  "Trudi Canavan",
  "Vincent Villeminot",
  "Wasilij Machanienko",
  "Yves Grevet"
]