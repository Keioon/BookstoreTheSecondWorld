'use strict';

const dataSources = {};

dataSources.booksList = [
  {
    id: 0,
    title: 'Droga Królów',
    autor: 'Brandon Sanderson',
    type: 'Fantasy',
    img: 'images/drogaKrólów.jpg',
    description: `'Droga Królów' to pierwszy tom znakomitej serii fantasy 'Archiwum Burzowego Światła', od której nie będziesz się w stanie oderwać! Kto z walecznej czwórki zbawi i ocali cały świat przed zagładą?<br>

    Czy zaledwie czwórka bohaterów może zmienić świat? Co, jeśli jedna z osób chce zniszczyć wszystko? 'Droga Królów' to fascynująca powieść fantasy, trzymająca w napięciu do ostatniej strony.<br>
    
    Zanim nastąpiło Ostatnie Spustoszenie, wszystko było łatwe, przyjemne i takie proste! Obecnie każdy musi walczyć o swoje życie, jednocześnie nie będąc pewnym, jaki to ma właściwie sens. Szczególną rolę odgrywają tutaj cztery postacie. Chirurg, który musiał zostać żołnierzem. Skrytobójca, który płacze zawsze, gdy zabija. Oszustka, czyli młoda kobieta skrywająca swoje prawdziwe ja. I arcyksiążę, żądny krwi. Ta drużyna absolutnie nie wygląda na grupę bohaterów zdolnych do uratowania świata. I nic dziwnego - jeden z nich chce bowiem czegoś zupełnie innego. 'Droga Królów' to prawdziwe poszukiwanie klucza do odzyskania pokoju w nękanym wojną królestwie.`,
    alt: 'Droga Królów',
    amount: 0,
    price: 45.99,
  },
  {
    id: 1,
    title: 'Słowa Światłości',
    autor: 'Brandon Sanderson',
    type: 'Fantasy',
    img: 'images/słowaŚwiatłości.jpg',
    description: `Doskonała kontynuacja 'Drogi królów'<br>

    Świetliści Rycerze muszą znów powstać
    W końcu wypowiedziano starożytne przysięgi, spreny powracają. Ludzie szukają tego, co zostało utracone. Być może ta misja ich zniszczy.
    <br>
    Wiatrowy zagubił się w strzaskanej krainie i balansuje na granicy między zemstą a honorem. Tkaczka Światła, którą powoli pochłania przeszłość, poszukuje kłamstwa, którym musi się stać. Kowal Więzi, zrodzony z krwi i śmierci, teraz próbuje odbudować to, co zostało zniszczone. Badaczka, od której zależą losy dwóch ludów, zostaje zmuszona do dokonania wyboru między powolną śmiercią a straszliwą zdradą wszystkiego, w co wierzy.
    <br>
    Najwyższy czas, by się przebudzili, nadchodzi bowiem Wieczna Burza.
    `,
    amount: 1,
    alt: 'Słowa Światłości',
    price: 45.99,
  },
  {
    id: 2,
    title: 'Dawca Przysięgi I',
    autor: 'Brandon Sanderson',
    type: 'Fantasy',
    img: 'images/dawcaPrzysięgiCI.jpg',
    description: `W „Dawcy Przysięgi“, trzecim tomie bestsellerowego Archiwum Burzowego Światła, ludzkość musi stawił czoło nowemu Spustoszeniu i powrotowi Pustkowców - wroga, którego liczebność jest równie wielka, jak pragnienie zemsty.<br>

    Alethyjskie armie pod dowództwem Dalinara Kholina odniosły chwilowe zwycięstwo, jednak cena była straszliwa: Parshendi przywołali gwałtowną Wielką Burzę, która teraz niszczy świat, a jej przejście uświadamia niegdyś spokojnym i potulnym parshmenom prawdziwą grozę ich trwającego wiele tysiącleci uwięzienia. Podczas desperackiej misji, by ostrzec rodzinę przed nowym zagrożeniem, Kaladin Burzą Błogosławiony musi pogodzić się ze świadomością, że ich gniew może być całkowicie uzasadniony.<br>
    
    Wysoko w górach pond burzami, w wieży Urithiru, Shallan Davar bada cuda starożytnej twierdzy Świetlistych Rycerzy i odkrywa mroczne tajemnice kryjące się w jej głębinach. Dalinar zaś uświadamia sobie, że jego święta misja zjednoczenia ojczystego Alethkaru miała zbyt ograniczony zasięg. Jeśli wszystkim narodom Rosharu nie uda się zapomnieć o krwawej przeszłości Dalinara, by się zjednoczyć - i o ile samemu Dalinarowi nie uda się stawić czoła tej przeszłości - nawet powrót Świetlistych Rycerzy nie zapobiegnie końcowi cywilizacji.`,
    amount: 2,
    alt: 'Dawca Przysięgi I',
    price: 34.99,
  },
  {
    id: 3,
    title: 'Dawca Przysięgi II',
    autor: 'Brandon Sanderson',
    type: 'Fantasy',
    img: 'images/dawcaPrzysięgiCII.jpg',
    description: `Przebudzeni parshendi – pieśniarze – pod wodzą służących Odium Stopionych wydają się niepowstrzymani. Wieczna Burza nieubłaganie powraca, za każdym razem sprowadzając śmierć i zniszczenie na ludzkie osady. Dalinar Kholin, udręczony powracającymi wspomnieniami przeszłości i nieżyjącej żony, nie szczędzi wysiłków, by zbudować koalicję ludzkich królestw, odkrywając przy tym swoje moce Kowala Więzi. Jednakże Odium ma wiele sług i wygląda na to, że jest przygotowany na każdą możliwość, a Świetlistym Rycerzom zagraża również tajemnica, która wcześniej doprowadziła do Odstępstwa ich starożytnych poprzedników.<br>

    Elhokar, Adolin, Shallan i Kaladin docierają do Kholinaru i odkrywają, że choć miasto jeszcze nie upadło, ich misja może się okazać o wiele trudniejsza, niż się spodziewali. Ludzie szepczą o mrocznej sile, która opanowała pałac i królową Aesudan, po ulicach zaś wędrują wyznawcy dziwacznego Kultu Chwil. A jedynym, co chroni miasto przed upadkiem, jest Straż Muru i jej tajemniczy dowódca, marszałek Lazur.<br>
    
    Tymczasem ostatnia z Parshendich, Venli, zaczyna pojmować, jakie skutki przyniosła jej decyzja, by odnaleźć starożytnych bogów pieśniarzy, i jaki los czeka pieśniarzy pod władzą Odium.`,
    alt: 'Dawca Przysięgi II',
    amount: 10,
    price: 34.99,
  },
  {
    id: 4,
    title: 'Rytm Wojny I', 
    autor: 'Brandon Sanderson',
    type: 'Fantasy',
    img: 'images/rytmWojnyCI.jpg',
    description: `Po utworzeniu koalicji ludzkich monarchów stawiających opór wrogiej inwazji, Dalinar Kholin i jego Świetliści Rycerze przez rok prowadzili przeciągającą się, brutalną wojnę. Żadna ze stron nie zyskała przewagi, a nad każdym strategicznym posunięciem wisi cień zdrady przebiegłego Taravangiana.<br>

    Teraz, gdy nowe wynalazki uczonych Navani Kholin zaczynają zmieniać oblicze wojny, wróg przygotowuje odważną i niebezpieczną operację. Następujący później wyścig zbrojeń może rzucić wyzwanie samemu sednu ideałów Świetlistych, a być może wyjawić również tajemnice starożytnej wieży, która niegdyś była sercem ich potęgi.`,
    alt: 'Rytm Wojny I',
    amount: 10,
    price: 39.99,
  },
  {
    id: 5,
    title: 'Rytm Wojny II', 
    autor: 'Brandon Sanderson',
    type: 'Fantasy',
    img: 'images/rytmWojnyCII.jpg',
    description: `W nowej powieści z cyklu 'Archiwum Burzowego Światła', pod tytułem 'Rytm wojny. Archiwum Burzowego Światła. Tom 4. Część 2' Kaladin i Navani toczą zacięty bój o ocalenie Rodzeństwa. Navani, aby dopiąć swego celu, decyduje się podjąć niebezpieczną grę ze Stopioną, nazywaną ongiś Panią Bólu.<br>

    W Emulu zaś wojska koalicji toczą zaciekłą wojnę. Jasnah próbuje umocnić swoją pozycję władczyni Alethkaru, a Dalinar z kolei pragnie zrozumieć swoje moce. A Adolin i Shallan mają do wypełnienia w Cieniomorzu pewne niebezpieczne zadanie. Kto wygra, a kto przegra? Rytmy wojny rozbrzmiały, i nic nie może ich już uciszyć.`,
    alt: 'Rytm Wojny II',
    amount: 10,
    price: 39.99,
  },
  {
    id: 6,
    title: 'Gildia Magów', 
    autor: 'Trudi Canavan', 
    type: 'Fantasy',
    img: 'images/gildiaMagów.jpg',
    description: `'Gildia Magów' jest pierwszym tomem słynnej 'Trylogii Czarnego Maga' autorstwa Trudi Canavan.<br>

    'Gildia magów' opowiada poruszającą i trzymającą w napięciu historię młodej dziewczyny, która miała nieszczęście urodzić się w biednej dzielnicy kraju Imardin - państwa raz do roku organizującego 'czystkę' ulic z ludzi ubogich, żebraków i włóczęgów. Proces ten przeprowadzają mistrzowie magii, otoczeni specjalną tarczą ochronną, przez którą nie ma szans przebić się osoba nieposiadająca mocy.<br>
    
    Podczas jednego z dorocznych oczyszczeń Sonea, zmęczona i wściekła za sposób, w jaki traktuje się ludzi z jej otoczenia, odkrywa w sobie nagle magiczne moce: kamień, którym z wściekłością rzuca w jednego z magów, niespodziewanie przebija się przez tarczę ochronną i dosięga celu. Wszyscy są w szoku - łącznie z samymi magami, teraz obawiającymi się o swoje bezpieczeństwo. Rozpoczynają się poszukiwania dziewczyny, która sama nie podejrzewa, że jej moc jest zagrożeniem nie tylko dla otoczenia, ale przede wszystkim dla niej samej.`,
    alt: 'Gildia Magów',
    amount: 10,
    price: 16.99,
  },
  {
    id: 7,
    title: 'Nowicjuszka', 
    autor: 'Trudi Canavan',
    type: 'Fantasy',
    img: 'images/nowicjuszka.jpg',
    description: `Imardin to miasto ponurych intryg i niebezpiecznej polityki, gdzie władzę sprawują ci, którzy obdarzeni są magią. W ten ustalony porządek wtargnęła uboga dziewczyna o niezwykłym talencie magicznym. Odkąd wstąpiła do Gildii Magów, jej życie zmieniło się nieodwracalnie - na lepsze czy gorsze?Sonea wiedziała, że nauka w Gildii Magów nie będzie łatwa, ale nie przewidziała niechęci, jakiej dozna ze strony innych nowicjuszy. Jej szkolnymi kolegami są synowie i córki najpotężniejszych rodów w królestwie, którzy zrobią wszystko, żeby poniosła klęskę - nie licząc się z kosztami. Niemniej przyjęcie opieki Wielkiego Mistrza może dla Sonei oznaczać jeszcze marniejszy los. Albowiem Wielki Mistrz Akkarin skrywa sekret znacznie czarniejszy niż barwa jego szaty.`,
    alt: 'Nowicjuszka',
    amount: 10,
    price: 16.99,
  },
  {
    id: 8,
    title: 'Wielki Mistrz',
    autor: 'Trudi Canavan',
    type: 'Fantasy',
    img: 'images/wielkiMistrz.jpg',
    description: `Sonea wiele nauczyła się w Gildii Magów. W ciągu ostatniego roku Regin dał jej spokój, a pozostali nowicjusze zaczęli traktować ją z niechętnym szacunkiem. Dziewczyna nie może jednak zapomnieć tego, co widziała w podziemnej komnacie Wielkiego Mistrza Akkarina, ani też ostrzeżenia, że odwieczny wróg Kyralii czujnie obserwuje Gildię.<br>

    W miarę jak Akkarin ujawnia coraz więcej swojej wiedzy, Sonea przestaje być pewna, komu ufać ani czego bać się najbardziej. Czy prawda może być aż tak przerażająca, jak przedstawia ją Wielki Mistrz? A może jest to podstęp, mający skłonić ją do uczestnictwa w jego mrocznych praktykach?<br>
    
    Wielki mistrz to trzeci tom znakomitej trylogii fantasy, skrzącej się od magii, akcji i przygód, będącej dziełem jednej z najciekawszych autorek fantastyki.`,
    alt: 'Wielki Mistrz',
    amount: 10,
    price: 16.99,
  },
  {
    id: 9,
    title: 'Misja Ambasadora',
    autor: 'Trudi Canavan',
    type: 'Fantasy',
    img: 'images/misjaAmbasadora.jpg',
    description: `Sonea jest przerażona, kiedy jej syn, który właśnie ukończył studia, postanawia dołączyć do grupy Ambasadorów Gildii, wybierających się do Sachaki. Kiedy nadchodzi wiadomość, że zaginął, Sonea chce koniecznie ruszyć na poszukiwania, ale nie może opuścić miasta, nie łamiąc prawa zabraniającego czarnym magom opuszczania Imardinu.<br>

    Kiedy pojawia się u niej Cery, prosząc o pomoc, ponieważ większość jego rodziny została zamordowana, Sonea dowiaduje się, że w półświatku od lat toczy się śmiertelna wojna między Złodziejami. Podejrzane przypadki śmierci sprawiają, że Gildia zaczyna się martwić, czy przypadkiem nie ma do czynienia z dzikimi magami.`,
    alt: 'Misja Ambasadora',
    amount: 10,
    price: 36.99,
  },
  {
    id: 10,
    title: 'Łotr',
    autor: 'Trudi Canavan',
    type: 'Fantasy',
    img: 'images/łotr.jpg',
    description: `'Łotr' - druga część popularnej trylogii “Zdrajcy”.<br>

    W tej części akcja nabiera tempa i jeszcze mocniej zachęca młodzież i dorosłych do wejścia w świat magii, gdzie nie brak niecodziennych zdarzeń i postaci.<br>
    
    Lorkin, który mieszka wśród sachakańskich buntowników, wykorzystuję tę sytuację do tego, by jak najwięcej dowiedzieć się o nich oraz ich niezwykłej magii. Jak łatwo przypuszczać, zdrajcy nie są jednak chętni do dzielenia się, bądź co bądź poufnymi informacjami w zamian za wiedzę uzdrowicielską, pomimo że pragną ją zdobyć. Buntownicy w opinii Lorkina obawiają się ujawnienia przed światem, choć istnieje prawdopodobieństwo, że lud ten ma o wiele bardziej ambitne plany.<br>
    
    Tymczasem Sonea, która doskonale zdaje sobie sprawę, że Cery uciekać w nieskończoność nie może, usiłuje odnaleźć dzikiego maga - nie wie tylko, że ów mag ma większe wpływy, niż mogła podejrzewać. Jedyną jej kartą przetargową jest matka maga, więziona w Strażnicy. Losy Dannyla w Sachace również nie wyglądają obiecująco; utracił ON poważanie elit po tym, jak dzięki niemu Lorkin zyskał możliwość dołączenia do Zdrajców. Ciekawa sytuacja ma miejsce na Uniwersytecie - dwie spośród nowicjuszek mają pewne podejrzenia i sugerują magom Gildii, że możliwe jest, iż największy ich wróg kryć może się wśród... nich.`,
    alt: 'Łotr',
    amount: 10,
    price: 36.99,
  },
  {
    id: 11,
    title: 'Królowa Zdrajców',
    autor: 'Trudi Canavan',
    type: 'Fantasy',
    img: 'images/królowaZdrajców.jpg',
    description: `Co tym razem wydarzy się w Sachace? Wraca Lorkin, który przebywał wśród buntowników przez kilka miesięcy. Nie jest świadomy, jak ważną misję ma dla niego Królowa Zdrajców. Zawarcie przymierza między Zdrajcami, a jego ludem zależy od tego, czy wykona ON swoje zadanie, czy nie. Nie jest ono też jedynym wyzwaniem, przed którym musi stanąć. Jest zmuszony zapanować nad potęgą, z jaką nigdy wcześniej nie miał do czynienia. W tym celu ma stać się czarnym magiem, który budzi przerażenie w wielu sercach na samą myśl o nim. Wiedza to potężna broń a ta, która stała się własnością Lorkina, może wywołać różne konsekwencje. Jak wpłynie ona na Gildię Magów lub samego bohatera? Nie jest to droga łatwa i wystawi ona charakter Lorkina na wiele prób i zagrożeń.<br>
    
    Czy podoła ON wszystkiemu, co rzucił mu los i misji, jaką mu powierzono? To ujawni 'Trylogia Zdrajcy. Tom 3. Królowa Zdrajców'. Autorka w mistrzowski sposób kończy wspaniałą serię i dlatego warto się przekonać, jaki finał ma historia Lorkina i innych postaci będących częścią tej trylogii. Przed rozpoczęciem tej lektury warto odświeżyć sobie również dwa poprzednie tomy - 'Misja Ambasadora' i 'Łotr'.`,
    alt: 'Królowa Zdrajców',
    amount: 10,
    price: 36.99,
  },
  {
    id: 12,
    title: 'Złodziejska Magia',
    autor: 'Trudi Canavan',
    type: 'Fantasy',
    img: 'images/złodziejskaMagia.jpg',
    description: `Pierwsza część trylogii “Prawo Milenium” - “Złodziejska magia”.<br>

    “Prawo Milenium. Księga 1. Złodziejska magia” to pierwszy tom cyklu. Akcja rozgrywa się równolegle, w dwóch kompletnie odmiennych od siebie światach, a elementem scalającym jest wszechobecna magia. Poznajemy więc studenta archeologii, zgłębiającego historię i tajniki magii, Tyena Ironsneltera, który podczas wykopalisk archeologicznych, szukając artefaktów przydatnych jego uczelni, odnajduje w jednym z grobowców niepozorną księgę. Okazuje się, że nazywa się Vella i ma niezwykłe właściwości, jej zadaniem jest gromadzenie wiedzy posiadanej przez osoby, z którymi się zetknie i przekazywanie tej wiedzy dalej. Vella była kiedyś kobietą, a w księgę o magicznych właściwościach zamienił ją przed wiekami potężny czarodziej. Tyen szybko przekona się, że zetknięcie się z Vellą przysporzy mu wielu kłopotów.<br>
    
    Drugą równorzędną bohaterką “Złodziejskiej magii” jest córka farbiarza, Rielle Lazuli. Żyje ona w teokratycznym środowisku, gdzie magia dostępna jest wybranym, a przeciętny obywatel korzystając z niej, zdaniem kapłanów, okrada anioły. Rielle chodzi do szkoły zakonnej, a jej zadaniem jest znalezienie odpowiedniego, dobrze urodzonego kandydata na męża. Jednak dziewczyna z trudem ukrywa swój talent do magii, a na dodatek zakochuje się w biednym, choć charyzmatycznym i utalentowanym malarzu.<br>
    
    Obie historie toczą się równolegle, niezależnie od siebie. Jednakże łączy je fakt, że bohaterowie wpadają w tarapaty w związku z korzystaniem z magii, a także przekonują się, że ich przyjaciele mogą okazać się niegodni zaufania, a pomoc może nadejść z najmniej oczekiwanej strony. Akcja rozgrywa się szybko, brak tu nużących opisów, a Trudi Canavan sprawnie operuje słowem tworząc powieść, która wciąga do ostatniej strony i pozostawia niedosyt, skłaniający do sięgnięcia po kolejne tomy cyklu.`,
    alt: 'Złodziejska Magia',
    amount: 10,
    price: 36.99,
  },
  {
    id: 13,
    title: 'Anioł Burz', 
    autor: 'Trudi Canavan',
    type: 'Fantasy',
    img: 'images/aniołBurz.jpg',
    description: `“Prawo Milenium - Księga druga. Anioł burz” jest drugą częścią trylogii Trudi Canavan. Od wydarzeń przedstawionych w “Złodziejskiej magii” minęło pięć lat. Akcja początkowo rozgrywa się, podobnie jak w pierwszej odsłonie cyklu, równolegle, później jednak drogi głównych bohaterów przecinają się. Tym razem jednak autorka przedstawia uniwersum składające się z wielu niezwykle zróżnicowanych “światów”, pomiędzy którymi bohaterowie przemieszczają się.<br>

    Tyen osiadł w szkole magii w Liftre, gdzie naucza magii mechanicznej, jednocześnie poszerzając swą wiedzę ogólną na temat magii. Jednak po dwudziestu latach nieobecności powraca do Liftre Raen, najpotężniejszy mag w historii. Jego prawa zabraniają nauczania magii w szkołach oraz przenoszenia się między światami, toteż szkoła zostaje zamknięta, a Tyen pozostaje bez dachu nad głową i celu w życiu. Pozostaje mu jednak do wypełnienia złożona Velli obietnica przywrócenia jej ludzkiej postaci. Czy uda mu się ją wypełnić? Czy przyłączy się do buntowników protestujących przeciwko rządom Raena? A może zawrze pakt z wielkim magiem?<br>
    
    Tymczasem Rielle, skazana za używanie magii, mieszka wśród tkaczy gobelinów w Schpecie. Wiele się nauczyła, jest utalentowaną rzemieślniczką, która wciąż nie zdaje sobie sprawy z tego, jak wielką moc magiczną posiada. Do miasta wkracza wojna, pojawia się też Anioł Burz, Valhan, który pragnie zabrać Rielle do swojego świata, obiecując uczyć ją magii. Czy dziewczyna może mu zaufać?`,
    alt: 'Anioł Burz',
    amount: 10,
    price: 39.99,
  },
  {
    id: 14,
    title: 'Obietnica Następcy',
    autor: 'Trudi Canavan',
    type: 'Fantasy',
    img: 'images/obietnicaNastępcy.jpg',
    description: `Trzeci tom trylogii fantasy „Prawo Milenium” autorki światowych bestsellerów Trudi Canavan.<br>

    Od konfrontacji buntowników z Raenem minęło pięć lat. W tym czasie Qall, chłopiec ocalony przez Rielle, bezpiecznie dorósł wśród Podróżników, a Tyen znalazł sobie nowy dom i ukrył się przed ludźmi, którzy okrzyknęli go zdrajcą i nazwali Szpiegiem.<br>
    
    Pięć lat chaosu, nad którym Baluka i Odnowiciele ledwie byli w stanie zapanować. Wszędzie toczą się wojny, niektóre światy zostały opanowane przez machiny wojenne, inne pozbawili mocy magowie pragnący nieśmiertelności.<br>
    
    W czasach gdy wojna zagraża z trudem wypracowanemu przez Rielle i Tyena pokojowi, a Qall wkracza w dorosłość, lojalność zostanie poddana próbie. Złożone obietnice mogą wszystko zmienić. Zależy od nich życie Qalla.<br>
    
    Dahli ma bowiem możliwość przywrócenia władzy Raenowi i nie cofnie się przed niczym, by osiągnąć swój cel.`,
    alt: 'Obietnica Następcy',
    amount: 10,
    price: 39.99,
  },
  {
    id: 15,
    title: 'Klątwa Kreatorów',
    autor: 'Trudi Canavan',
    type: 'Fantasy',
    img: 'images/klątwaKreatorów.jpg',
    description: `'Klątwa Kreatorów' to czwarta część niesamowitej serii fantasy 'Prawo Millenium'.
    <br>
    Wejdź do mrocznego świata i przeżyj przygodę, w której śmierć oraz rozpacz mieszają się z magią i ocaleniem. Odkryj, czy ludzkość zostanie ocalona oraz czy Kreatorom uda się przywrócić magię na ziemi.<br>
    
    Rielle nosi teraz wielki i znaczący tytuł – jest Kreatorem. Jej misją jest przywrócenie światom magii. Nie potrafi już zliczyć, ile światów polecono jej ocalić.<br>
    
    Tyen odrzucił dawny sposób życia. Nie jest już szpiegiem. Zamiast tego zaczął szkolić nowych magów. Szuka przy tym sposobu na rozwiązanie problemu urządzeń bojowych, które rozprzestrzeniają się coraz szybciej, na kolejne, niepodejrzewające nadchodzącej zguby światy.
    <br>
    Kiedy stary wróg przynosi ze sobą powiew czegoś znacznie gorszego niż unicestwione światy i szaleni magowie, Rielle i Tyen muszą połączyć siły, aby stanąć oko w oko z zagrożeniem, z którym jeszcze nikt ze światów nie musiał się mierzyć. Tylko tak ocalą ludzkość i odkryją tajemnice, które pozwolą im spojrzeć na świat zupełnie inaczej.`,
    alt: 'Klątwa Kreatorów',
    amount: 10,
    price: 39.99,
  },
  {
    id: 16,
    title: 'Ostatnie Życzenie',
    autor: 'Andrzej Sapkowski',
    type: 'Fantasy',
    img: 'images/wiedźminOstatnieŻyczenie.jpg',
    description: `Pozycja, która przedstawia początki historii słynnego Geralta z Rivii. Sięgnij po tę lekturę i zanurz się w świecie, pełnym niebezpiecznych stworzeń, nierzadko napadających na ludzkie osady.<br>

    'Ostatnie życzenie' to jeden ze zbiorów opowiadań z cyklu wiedźmińskiego, który zdobył ogromną popularność nie tylko w Polsce, ale i na całym świecie, między innymi za sprawą gry komputerowej, a następnie dzięki serialowi, wyprodukowanemu przez platformę Netflix.<br>
    
    Główny bohater, Geralt z Rivii, jest wiedźminem, czyli osobą, która w zamian za wynagrodzenie, pozbywa się rozlicznych potworów. Działa według ściśle określonego systemu moralnego, dzieląc wszystko na to, co dobre i na to, co złe, nie uznając natomiast niczego pośrodku. Nie zabija, jeśli nie musi tego robić. Woli stawiać na uroki, które czasem też mogą rozwiązać problem. W trakcie swoich przygód poznaje piękną czarodziejkę, Yennefer, która wzbudza w nim fascynację. Jakie zlecenia czekają na niego w najbliższej przyszłości?`,
    alt: 'Ostatnie Życzenie',
    amount: 10,
    price: 69.99
  },
  {
    id: 17,
    title: 'Miecz Przeznaczenia',
    autor: 'Andrzej Sapkowski',
    type: 'Fantasy',
    img: 'images/wiedźminMieczPrzeznaczenia.jpg',
    description: `“Miecz przeznaczenia” autorstwa Andrzeja Sapkowskiego to drugi z kolei tom popularnej serii o Wiedźminie, pogromcy potworów, który nie cofnie się przed niczym. Jaka przygoda spotka go tym razem?<br>

    Geralt nie ma łatwego życia, mimo że jest doskonale wyćwiczony w tym, co robi i posiada niezaprzeczalny talent. Tym razem przedstawia Czytelnikowi swoją złotą zasadę: nie zabija smoków, ponieważ to gatunek, który jest zagrożony wymarciem. Zgodnie z kodeksem, dozwolone jest jedynie usuwanie latawców, oszluzgów oraz widłogonów. Tym razem jednak powinien chyba zrobić wyjątek.<br>
    
    Pewien wyjątkowo irytujący smok daje się we znaki społeczności i niejeden człowiek z całego serca życzy mu śmierci. Właśnie dlatego grupa smokobójców wyrusza, by się z nim rozprawić. Oprócz Geralta, jest wśród nich Yennefer, Rębacze z Crinfrid oraz Eyck z Denesle. Z tym konkretnym gadem nie pójdzie im jednak wcale tak łatwo.`,
    alt: 'Miecz Przeznaczenia',
    amount: 10,
    price: 69.99
  },
  {
    id: 18,
    title: 'Krew Elfów', 
    autor: 'Andrzej Sapkowski',
    type: 'Fantasy',
    img: 'images/wiedźminKrewElfów.jpg',
    description: `'Krew elfów' to pierwsza z pięciu części sagi o Wiedźminie Geralcie. Król polskiej fantastyki, Andrzej Sapkowski, raczy czytelników wspaniałą i wciągającą literaturą na najwyższym poziomie.<br>

    Pierwsza z książek opisująca przygody Wiedźmina jest, tak jak kolejne tomy, napisana z humorem, pełna trafnych spostrzeżeń oraz wciągających i dynamicznych dialogów. Jeśli jeszcze nie sięgnąłeś po tę książkę, nie czekaj i daj przenieść się do świata, w którym żyją elfy, czarodziejki i wiedźmini!<br>
    
    'Krew elfów' opowiada o losach Geralta - wiedźmina, który opiekuje się dzieckiem-niespodzianką. Tym dzieckiem jest dziewczynka o imieniu Ciri. W prezentowanym tomie poznajemy też czarodziejkę Triss, która również ma wpływ na wychowanie dziecka. Autor powoli wprowadza czytelnika w nowy świat, kreuje i daje poznać otaczającą bohaterów rzeczywistość. Fabuła książki rozgrywa się w świecie określanym przez samego autora jako quasi-średniowiecze. Mamy więc tu nie tylko zwykłych ludzi, ale też mutantów, krasnoludów i elfów.`,
    alt: 'Krew Elfów', 
    amount: 10,
    price: 69.99,
  },
  {
    id: 19,
    title: 'Czas Pogardy',
    autor: 'Andrzej Sapkowski',
    type: 'Fantasy',
    img: 'images/wiedźminCzasPogardy.jpg',
    description: `Prezentowana książka to opowieść o niesamowitej przygodzie, bogatej w wyjątkowe detale, z jak zawsze wyjątkowo specyficznymi bohaterami. I choć twórczość Andrzeja Sapkowskiego to tematyka fantasy, to ubrana jest w tak ciekawą i urozmaiconą historię, że trudno się od niej oderwać nawet tym, którzy na co dzień gustują w zupełnie innych gatunkach.
    <br>
    'Czas pogardy' to czwarty tom sagi o Wiedźminie Geralcie. Nadchodzi zapowiadany wcześniej przez Intlinne czas miecza i topora. W tej części świat Ciri i Wiedźmina ogarniają płomienie. Na powierzchnię zaczynają wyłazić złowieszcze szczury, uwielbiające czynić zło. Rozpoczynają atakować w sposób zdradziecki i okrutny. Ludzie powoli tracą wszystko, co mieli. W konsekwencji - dla otaczającego ich świata i obcych osób mają już tylko tytułową pogardę. To także tom, w którym Geralt po raz pierwszy zaczyna wchodzić w świat polityki.`,
    alt: 'Czas Pogardy',
    amount: 10,
    price: 69.99
  },
  {
    id: 20,
    title: 'Chrzest Ognia',
    autor: 'Andrzej Sapkowski',
    type: 'Fantasy',
    img: 'images/wiedźminChrzestOgnia.jpg',
    description: `'Wiedźmin. Tom 5. Chrzest ognia' to kontynuacja losów tytułowego zabójcy wampirów, kikimor i innych stworzeń czyhających na ludzkie życia. W tej części Geralt z Rivii wraz z Jaskrem nadal podąża tropem Ciri - magicznie uzdolnionej dziewczynki, z którą związany jest przeznaczeniem. Opuszcza zamieszkany przez driady las Brokilon i tworzy nietypową grupę z osób skorych do udzielenia mu pomocy. Trafiają do niej łuczniczka Milva, zdrajca Cahir oraz tajemniczy cyrulik Regis.<br>

    Tymczasem Nilfgard zrywa rozejm z Temerią. Maszerujące wojska skutecznie utrudniają wędrówkę wiedźmina, który wraz z towarzyszami zmuszony zostaje do zmiany trasy. Wojna ma także inne, daleko idące konsekwencje. Może doprowadzić do sojuszu czarodziejek, które nie zamierzają biernie przyglądać się wszystkim wydarzeniom. Wśród nich znajdzie się Yennefer z Vengerbergu - ukochana Geralta oraz przyszywana matka Ciri. Nastał trudny czas dla Geralta z Rivii, który być może po raz kolejny będzie musiał zapomnieć o swojej neutralności i opowiedzieć się po jednej ze stron.`,
    alt: 'Chrzest Ognia',
    amount: 10,
    price: 69.99
  },
  {
    id: 21,
    title: 'Wieża Jaskółki',
    autor: 'Andrzej Sapkowski',
    type: 'Fantasy',
    img: 'images/wiedźminWieżaJaskółki.jpg',
    description: `Klęska jest nieunikniona. Świadczy o tym niemal wszystko i każda bardziej spostrzegawcza istota dostrzeże to bez problemu. Przyczyną wydaje się jesienne Ekwinokcjum. Wszystko staje się coraz dziwniejsze i bardziej przerażające. Nadciąga niespodziewana zawierucha, a Leiki śpiewają konajączkę. Ten sam sen nawiedza jednocześnie trzy różne osoby na terenie świątyni Melitele.<br>

    Tymczasem Ciri powoli dochodzi do siebie po niedawno odniesionych obrażeniach. Przebywa w chacie pustelnika Vysygoty. Na szczęście jej zdrowiu już nic nie zagraża. Kiedy przybrana córka Geralta dochodzi do wcześniejszej sprawności, postanawia przybliżyć gospodarzowi szczegóły swej podróży, łącznie z tym, w jaki sposób trafiła do miejsca, w którym obecnie się znajduje. Ciri nawet nie zdaje sobie sprawy z tego, że Geralt wciąż przetrząsa okolicę, by ją odnaleźć. Nie jest ON jednak jedyną osobą, która jej szuka. Na 'łowy' wyrusza także cesarz Emhyr var Emreis, pragnie ON ją poślubić i zbliżyć się do tronu Cintry.`,
    alt: 'Wieża Jaskółki',
    amount: 10,
    price: 69.99
  },
  {
    id: 22,
    title: 'Pani Jeziora',
    autor: 'Andrzej Sapkowski',
    type: 'Fantasy',
    img: 'images/wiedźminPaniJeziora.jpg',
    description: `Nie trzeba być fanem gatunku fantasy, by zatracić się w świecie sagi 'Wiedźmin', która została stworzona przez równie fantastycznego, co kolejne tomy historii, autora Andrzeja Sapkowskiego. Sapkowski znany jest właśnie z tej tematyki książek i w tej sadze udowadnia, że do serc czytelników trafia się nieprzeciętnymi, barwnymi historiami.<br>

    'Pani Jeziora' to siódmy już tom sagi o Wiedźminie. Sapkowski przenosi nas do królestwa Aen Elle, do którego dostaje się jedna z głównych bohaterek - Ciri. Gdy jednak dowiaduje się, co czeka na nią w królestwie oraz czego oczekuje od niej Król Olch, dziewczyna postanawia uciec. W bezpiecznym opuszczeniu tego miejsca pomagają jej... jednorożce.<br>
    
    W tym samym czasie śledzimy także losy głównego bohatera całej sagi - Wiedźmina Geralta, który zmuszony jest opuścić Caed Myrkvid. W końcu drogi Ciri i Geralta przecinają się, a akcja z każdą kolejną stroną nabiera tempa. Niewątpliwie Pani Jeziora to ponownie barwna, naszpikowana detalami historia, w której odnajdą się tylko ci, którzy pokuszą się o otwarcie pierwszej strony kolejnego tomu wiedźmińskiej sagi.`,
    alt: 'Pani Jeziora',
    amount: 10,
    price: 69.99
  },
  {
    id: 23,
    title: 'Sezon Burz',
    autor: 'Andrzej Sapkowski',
    type: 'Fantasy',
    img: 'images/wiedźminSezonBurz.jpg',
    description: `'Sezon burz' to kolejna część przygód Geralta z Rivii. Choć słowo 'kolejna' może tu być mylące, bo nie jest ona kontynuacją sagi. Wydarzenia w niej opisane są chronologicznie wcześniejsze, niż te z poprzednich tomów cyklu o Wiedźminie. 'Sezon burz' jest właściwie oddzielną opowieścią, opartą na uniwersum wykreowanym przez Andrzeja Sapkowskiego, spotykamy w nim jednakże postaci z innych tomów sagi, jak na przykład barda i poetę Jaskra czy czarodziejkę, ukochaną Wiedźmina, Yennefer.<br>

    Nietypowo dla Andrzeja Sapkowskiego, akcja powieści toczy się z początku jednowątkowo, jednak z czasem wydarzenia się zagęszczają. Geralt zostaje wysłany na misję do Rissbergu. Po stoczeniu morderczej walki z drapieżnikiem Arachnomorfem i zabiciu bestii, udaje się do miasta Kerack, chcąc się najeść do syta i odpocząć. By wejść do grodu, musi zdeponować swoje miecze w kordegardzie. Następnie wdaje się w bójkę ze strażniczkami miasta Kerack i zostaje aresztowany. Dzięki tajemniczemu darczyńcy czeka, co prawda na wyrok na wolności, jednakże okazuje się, że ktoś ukradł jego miecze. Na domiar złego kochliwy Wiedźmin wdaje się w romans z rudowłosą czarodziejką Koral, która oczywiście wykorzystuje go do własnych celów.`,
    alt: 'Sezon Burz',
    amount: 10,
    price: 69.99
  },
  {
    id: 24,
    title: 'Szpony i Kły',
    autor: 'Andrzej Sapkowski',
    type: 'Fantasy',
    img: 'images/wiedźminSzponyIKły.jpg',
    description: `Oto zbiór opowiadań nawiązujących do opowieści o wiedźminie Andrzeja Sapkowskiego. Teksty zawarte w prezentowanej książce zostały wyróżnione w konkursie zorganizowanym z okazji trzydziestolecia pierwszego wydania przygód Geralta.<br>

    Główny bohater serii Sapkowskiego, prawdę mówiąc młodzieniaszkiem nie był już wtedy, gdy mieliśmy okazję spotkać go po raz pierwszy. Tak to jest jednak z bohaterami opowieści, zwłaszcza takimi jak on. Nie starzeją się. Nie szkodzi im upływ czasu. Ciągle na nowo potrafią rozbudzać wyobraźnię zarówno Czytelników, jak i kolejnych pokoleń twórców.`,
    alt: 'Szpony i Kły',
    amount: 10,
    price: 29.99
  },
  {
    id: 25,
    title: 'Adeptka',
    autor: 'Rachel E. Carter',
    type: 'Fantast',
    img: 'images/adeptka.jpg',
    description: `Ryiah przetrwała próbny rok w Akademii Magii, ale dopiero teraz zaczyna się dla niej prawdziwa nauka.<br>

    Dziewczyna dostała się do wymarzonej frakcji bojowej, ale musi stawić czoła nauczycielowi, którego nie znosi, i wrogo nastawionej Priscilli. Sytuacji nie ułatwia też relacja z Darrenem, oscylująca między wrogością a sympatią, może nawet fascynacją...<br>
    
    Kiedy jeden z uczniów zostaje zabity w nieprzyjacielskim ataku, nauka schodzi jednak na dalszy plan. W powietrzu wisi wojna, być może Ryiah będzie musiała wykorzystać swoje umiejętności szybciej, niż sądziła.`,
    alt: 'Adeptka',
    amount: 10,
    price: 29.99
  },
  {
    id: 26,
    title: 'Cień Rycerza', 
    autor: 'Sebastien De Castell',
    type: 'Fantasy',
    img: 'images/cieńRycerza.jpg',
    description: `Tristia to kraj przeżarty intrygami i korupcją. Idealista, młody król Paelis nie żyje, a Wielkie Płaszcze - legendarni wędrowni trybuni, którzy zaprowadzali w królestwie sprawiedliwość - zostali uznani za zdrajców i napiętnowani. Zanim jednak głowę Paelisa zatknięto na żerdzi, ten zobowiązał każdego ze swoich stu czterdziestu czterech trybunów do wykonania innej misji.<br>

    Pierwszy kantor Falcio val Mond z pomocą swoich przyjaciół - Kesta i Brastiego - wypełnił ostatnie zadanie króla: odnalazł jego czaroity... no dobrze: jeden z czaroitów, który zresztą okazał się czymś - a właściwie kimś - zupełnie innym, niż można się było spodziewać. Teraz misja Wielkich Płaszczy polega na ochronie czaroitu - dziewczyny! - przed próbującymi ją zgładzić. Nie byłoby z tym większego kłopotu, gdyby na ich drodze nie stali dashini - owiani legendą asasyni - i książęta, którzy zrobią wszystko, by zachować władzę w swoich rozbitych księstewkach. Na domiar złego Falcia zabija powoli jakaś trucizna, więc może nie ma już co wspominać o kolejnym zagrożeniu: Lamencie Wielkich Płaszczy...`,
    alt: 'Cień Rycerza', 
    amount: 10,
    price: 29.99
  },
  {
    id: 27,
    title: 'Czarodzieje',
    autor: 'Lev Grossman',
    type: 'Fantasy',
    img: 'images/czarodzieje.jpg',
    description: `Pierwsza część trylogii 'Czarodzieje' autorstwa Lva Grossmana i obowiązkowa pozycja dla fanów świata magii, zaklęć i czarów.<br>

    Quentin Coldwater to nastolatek, który za sprawą tajemniczej koperty odmienia swoje życie. Dostaje możliwość podejścia do skomplikowanych egzaminów wstępnych i zdaje je bez problemu. Na skutek tego zostaje przyjęty w poczet uczniów szkoły Brakebills mieszczącej się w Nowym Jorku.
    <br>
    Nie jest to zwykła szkoła, uczniami tej szkoły są magowie, a Quentin, który do tej pory o czarach czytał tylko w książkach, od teraz sam będzie miał możliwość stać się prawdziwym czarodziejem. Nauka w szkole trwa pięć lat, przez ten czas główny bohater poznaje nowych przyjaciół: Alice - szarą myszkę, którą cechuje ogromna wiedza, talent magiczny i dojrzałość psychiczna, tajemniczego Eliota, Janet oraz Josha. W dniu zakończenia szkoły wszyscy uczniowie otrzymują wyjątkowy tatuaż z zaklętym w nim demonem, którego właściciel może użyć tylko raz, jako swojego zastępcę w walce.<br>
    
    Opowieść ukazuje jak stopniowo w życiu zmieniają się cele, marzenia, zachowania ludzi w zależności od tego, czego doświadczamy. Powieść w której nie zawsze dobro zwycięża nad złem, a magia nie jest łatwa i przyjemna.`,
    alt: 'Czarodzieje',
    amount: 10,
    price: 29.99
  },
  {
    id: 28,
    title: 'Król Magii',
    autor: 'Lev Grossman',
    type: 'Fantasy',
    img: 'images/królMagii.jpg',
    description: `Druga część przygód bohaterów powieści Czarodzieje, porywającej historii o magii i innych światach, która przewraca do góry nogami dotychczasowy świat fantasy.`,
    alt: 'Król Magii',
    amount: 10,
    price: 29.99
  },
  {
    id: 29,
    title: 'Kraina Czarodzieja',
    autor: 'Lev Grossman',
    type: 'Fantasy',
    img: 'images/krainaCzarodzieja.jpg',
    description: `Quentin Coldwater stracił wszystko. Został wygnany z Fillory, magicznej krainy dziecięcych marzeń, w której niegdyś panował. To, o co dotychczas tak zaciekle walczył, zostało daleko, w miejscu, którego chłopak może już więcej nie odwiedzić. Nie mając nic do stracenia, powraca więc tam, gdzie wszystko się zaczęło - do Uniwersytetu Brakebills. Przeszłość jednak znajduje go wszędzie...<br>

    Tymczasem magiczne bariery chroniące Fillory zostają naruszone na skutek inwazji barbarzyńców z Północy. Eliot i Janet, rządzący krainą, ruszają na poszukiwania ratunku dla ukochanego kraju, prędko jednak odkrywają, że sytuacja jest dużo bardziej złożona i tragiczna, niż ktokolwiek mógł to sobie wyobrazić.`,
    alt: 'Kraina Czarodzieja',
    amount: 10,
    price: 29.99
  },
  {
    id: 30,
    title: 'Czas Żelaza',
    autor: 'Angus Watson',
    type: 'Fantasy',
    img: 'images/czasŻelaza.jpg',
    description: `Nikt nie rodzi się legendą. Legendę wykuwa przeznaczenie.<br>

    Dug Fokarz to pechowy najemnik, który zmierza na południe, aby zaciągnąć się do armii króla Zadara. Przeszkadza mu w tym nieustanne ratowanie z opresji niewłaściwych ludzi.<br>
    
    Dug znalazł się więc po złej stronie barykady względem wielotysięcznej armii, do której chciał dołączyć, a to dopiero początek jego kłopotów.<br>
    
    'Powieść Watsona jest krwawa i nieprzyzwoita - pełno tu morderczej walki i rubasznego humoru, od czasu do czasu błyśnie iskierka magii. Fakty historyczne przeplatają się ze swobodą twórczą autora, mamy więc do czynienia z oldschoolową epicką opowieścią spod znaku magii i miecza, okraszoną subtelnymi odwołaniami do współczesności, które czynią z niej łakomy kąsek nie tylko dla miłośników gatunku!'`,
    alt: 'Czas Żelaza',
    amount: 10,
    price: 29.99
  },
  {
    id: 31,
    title: 'Żelazna Wojna',
    autor: 'Angus Watson',
    type: 'Fantasy',
    img: 'images/żelaznaWojna.jpg',
    description: `'Gdybyśmy tylko byli kowalami własnego losu, a nie byli zdani na łaskę jakiegoś innego kowala, który kuje go za nas.'<br>
    Wojownicy Wieku Żelaza, Dug i Lowa, opanowali zamek Maidun i oswobodzili niewolników. Ale teraz muszą utrzymać twierdzę.<br>
    Plemiona brytyjskie zamiast jednoczyć się w obliczu rzymskiej inwazji, stają przeciw sobie, a Maidun jawi się im, jako łatwy cel.<br>
    Szpiedzy Lowy przenikają do Galii. Odkrywają brytyjskich druidów na usługach Rzymian i spotykają charyzmatycznego generała - Juliusza Cezara. Na lojalności pojawia się rysa.
    War is coming. Kto zapłaci jej cenę?'`,
    alt: 'Żelazna Wojna',
    amount: 10,
    price: 29.99
  },
  {
    id: 32,
    title: 'Tron z Żelaza',
    autor: 'Angus Watson',
    type: 'Fantasy',
    img: 'images/tronZŻelaza.jpg',
    description: `Legiony Cezara wyrąbały i wymordowały sobie drogę przez całą Galię, a teraz spoglądają łakomym okiem na leżącą za morzem Brytanię. W ich szeregach znajdują się zrodzeni z czarnej magii potworni legioniści. Armia Królowej Lowy musi stawić czoło nadciągającej inwazji, choć jej najlepszy dowódca nie żyje, a jej młoda druidka utraciła magiczną moc. Nad Brytami wisi widmo śmierci i niewoli, ale choć stoją w obliczu zagłady, królowa-wojowniczka nie powiedziała jeszcze ostatniego słowa.`,
    alt: 'Tron z Żelaza',
    amount: 10,
    price: 29.99
  },
  {
    id: 33,
    title: 'Drużyna Pierścienia',
    autor: 'John Ronald Reuel Tolkien',
    type: 'Fantasy',
    img: 'images/drużynaPierścienia.jpg',
    description: `W spokojnej wiosce w Shire młody hobbit Frodo zostaje obarczony niezwykle odpowiedzialnym zadaniem. Ma ON podjąć niebezpieczną podróż przez Środziemie do Szczelin Zagłady, by tam zniszczyć Pierścień Jedyny. Musi bowiem udaremnić niecne plany Władcy Ciemności…`,
    alt: 'Drużyna Pierścienia',
    amount: 10,
    price: 29.99
  },
  {
    id: 34,
    title: 'Dwie Wieże',
    autor: 'John Ronald Reuel Tolkien',
    type: 'Fantasy',
    img: 'images/dwieWieże.jpg',
    description: `Po śmierci Boromira i pojmaniu Merry’egó i Pippina rozbita Drużyna Pierścienia podąża niestrudzenie ku swemu przeznaczeniu, choć żaden z jej członków nie wie, co dzieje się z Samem i Frodem. A tropiony przez Nazgule Powiernik Pierścienia z uporem idzie dalej. Podążając za Gollumem, przemierza Martwe Bagna, by stanąć wreszcie u stóp Minas Morgul – przerażającej fortecy strzegącej drogi do Krainy Cienia...`,
    alt: 'Dwie Wieże',
    amount: 10,
    price: 29.99
  },
  {
    id: 35,
    title: 'Powrót Króla',
    autor: 'John Ronald Reuel Tolkien',
    type: 'Fantasy',
    img: 'images/powrótKróla.jpg',
    description: `Zebrały się armie Władcy Ciemności, a jego przerażający cień sięga coraz dalej. Połączone siły ludzi, krasnoludów, elfów i entów stają naprzeciw nawałnicy mroku. Tymczasem Frodo i Sam uparcie wędrują w głąb Mordoru, zamierzając zrealizować cel ich heroicznej misji i zniszczyć Pierścień Jedyny.`,
    alt: 'Powrót Króla',
    amount: 10,
    price: 29.99
  },
  {
    id: 36,
    title: 'Misja 100',
    autor: 'Kass Morgan',
    type: 'Sci-Fi',
    img: 'images/misja100.jpg',
    description: `Trzysta lat po spustoszeniu Ziemi przez kataklizm ludzie mieszkają w stacji kosmicznej, dryfującej z dala od toksycznej atmosfery ojczystej planety. Zasoby kurczą się dramatycznie, dlatego liczebność populacji jest ściśle kontrolowana, a wykroczenia karane śmiercią. Czasu jest jednak coraz mniej. Władze kolonii decydują więc o wysłaniu setki młodocianych przestępców na Ziemię, żeby przekonać się, czy planeta nadaje się do zamieszkania. Czy dla grupy wyrzutków będzie to szansa na nowe życie? A może przeciwnie ? pewna śmierć?<br>

    Zesłańcy lądują na pięknej, dzikiej planecie, gdzie czają się niebezpieczeństwa, o jakich nikomu się nie śniło. W obliczu zagrożenia rodzą się konflikty, mające podłoże w tajemnicach z przeszłości. W domu nikt nie uważał ich za bohaterów, jednak dla całej ludzkości są teraz ostatnią nadzieją na przetrwanie.`,
    alt: 'Misja 100',
    amount: 10,
    price: 29.99
  },
  {
    id: 37,
    title: 'Dzień 21',
    autor: 'Kass Morgan',
    type: 'Sci-Fi',
    img: 'images/dzień21.jpg',
    description: `Kass Morgan w kolejnej powieści z cyklu sprawia, że czytelnikowi zaczyna żywiej bić serce: ujawnia tajemnice z przeszłości, stawia bohaterów przed wyzwaniami i sprawdza, czy ich uczucia przetrwają w nowej rzeczywistości. Stu zesłańców walczy o przeżycie, wiedząc, że uda im się to tylko dzięki solidarności.<br>

    Od lądowania misji stu na porzuconej niegdyś  Ziemi minęło już 21 dni. Są pierwszymi od stuleci ludźmi, którzy postawili stopę na ojczystej planecie, a przynajmniej tak im się dotąd wydawało… Wells usiłuje przekonać zesłańców, aby wspólnie stawili czoło nieznanym wrogom. Clarke wyrusza na Mount Weather w poszukiwaniu innych przybyszów z Kolonii, a Bellamy chce za wszelką cenę uratować siostrę. Tymczasem na statku Glass musi wybrać pomiędzy miłością swojego życia a… życiem.`,
    alt: 'Dzień 21',
    amount: 10,
    price: 29.99
  },
  {
    id: 38,
    title: 'Powrót na Ziemię',
    autor: 'Kass Morgan',
    type: 'Sci-Fi',
    img: 'images/powrótNaZiemię.jpg',
    description: `Setka zesłańców na Ziemię staje przed największym wyzwaniem. Inni Ziemianie powracają do domu. Kilka tygodni po lądowaniu na Ziemi młodzi koloniści zdołali założyć obóz i zaprowadzić porządek w dzikim środowisku. Delikatna równowaga ulega jednak zakłóceniu, kiedy na Ziemię docierają nowe lądowniki. Ci, którzy dostali się na ich pokłady, mogą mówić o szczęściu, ponieważ w Kolonii właśnie kończy się tlen, ale szczęście Glass po wylądowaniu na Ziemi wydaje się dobiegać kresu. Clarke prowadzi wyprawę ratunkową na miejsce lądowania, lecz jej myśli krążą ciągle wokół rodziców, którzy być może jednak żyją. Tymczasem Wells walczy, by pozostać przywódcą mimo przybycia na Ziemię wicekanclerza w asyście uzbrojonych strażników, a Bellamy musi zdecydować, czy uciec od odpowiedzialności za przestępstwa, czy też stawić czoło rzeczywistości. Dla setki zesłańców nadszedł czas, by zjednoczyć siły i walczyć o wolność odnalezioną na Ziemi. Alternatywą będzie utrata wszystkiego, co kochają – w tym również ukochanych osób.`,
    alt: 'Powrót na Ziemię',
    amount: 10,
    price: 24.99
  },
  {
    id: 39,
    title: 'Rebelia',
    autor: 'Kass Morgan',
    type: 'Sci-Fi',
    img: 'images/rebelia.jpg',
    description: `Wojna nuklearna zniszczyła naszą planetę i teraz ludzkość walczy o jej odbudowę. Minął już miesiąc, odkąd wylądowały nowe statki kosmiczne i reszta kolonistów dołączyła do setki nastolatków na Ziemi. Ci, niegdyś nazwani młodocianymi przestępcami, są teraz liderami wśród osadników.<br>

    Podczas gdy wszyscy świętują razem swoje pierwsze wakacje, następuje atak grupy obcych, których niezwykłe okrzyki bojowe wypełniają powietrze. Nowo przybyli zabijają dziesiątki osób, porywają więźniów i grabią kluczowe surowce. Kiedy Bellamy i jego dziewczyna Clarke odkrywają, że Wells, Octavia i Glass zostali złapani, obiecują za wszelką cenę ich odnaleźć. Niestety, w drodze na ratunek przyjaciołom coraz częściej się sprzeczają, nie mogąc dojść do porozumienia w sprawie planu uratowania swoich przyjaciół.`,
    alt: 'Rebelia',
    amount: 10,
    price: 24.99
  },
  {
    id: 40, 
    title: 'Początek',
    autor: 'Wasilij Machanienko', 
    type: 'Fantasy',
    img: 'images/początek.jpg',
    description: `Barliona. Wirtualny świat pełen potworów, walk, przygód, tajemnic i graczy spragnionych tego, co w prawdziwym życiu niedostępne: elfów i magii, krasnoludów i gnomów, smoków i księżniczek oraz niezapomnianych konfrontacji.<br>

    Gracze Barliony pozostają online całymi miesiącami zamknięci w podtrzymujących funkcje życiowe kapsułach, nie wracają do realu, ścigając się z innymi w levelowaniu postaci i zdobywaniu kolejnych osiągnięć. W Barlionie prawie wszystko jest dozwolone, a gracze nie odczuwają bólu i cierpienia. Tak działają filtry doznań: każdy cios, potknięcie, rana odbierane są przez graczy tak, jakby rozgrywały się na ekranie monitora: zupełnie bez bólu.<br>
    
    Ale od każdej zasady są wyjątki. Istnieje grupa graczy, dla których Barliona zamieniła się w piekło. To przestępcy, zesłani tam w ramach odbywania kary – ich filtry doznań są wyłączone. Odczuwają wszystko tak, jak w najprawdziwszym realu.<br>
    
    Główny bohater został skazany na osiem lat więzienia za nieumyślnie popełnione przestępstwo. W ramach kary osadzono go w jednej z barliońskich kopalni i przydzielono mu postać Szamana, jedną z najmniej popularnych klas. Ma wyzerowane statystyki. Nie zna reguł dotyczących życia więźniów – ich świat w Barlionie wygląda zgoła inaczej niż świat wolnych graczy.<br>
    
    Czy uda mu się przetrwać? Czy poradzi sobie z panującymi w wirtualnych więzieniach złem i przemocą? O tym przeczytacie w bestsellerowej powieści LitRPG Wasilija Machanienki: „Droga Szamana. Etap 1: Początek“.`,
    alt: 'Początek',
    amount: 10,
    price: 63.99
  },
  {
    id: 41,
    title: 'Gambit Kartosa',
    autor: 'Wasilij Machanienko',
    type: 'Fantasy',
    img: 'images/gambitKartosa.jpg',
    description: `Barliona – wirtualny świat rozrywki stworzony dzięki najnowocześniejszym technologiom, z pełną imersją i niesamowitymi doznaniami. Gwarantem waluty w grze jest rząd, co przyciąga całe rzesze amatorów łatwego zarobku. Jednak Barliona ma też mroczną stronę: darmową siłę roboczą są w niej skazańcy ze świata rzeczywistego. Podczas gdy ciała więźniów pozostają zamknięte w autonomicznych kapsułach, ich umysły przenoszą się do wirtualnych kopalń Barliony.<br>

    Dmitrij Machan przeżył już wiele. Po wyroku skazującym na osiem lat ciężkich prac musi radzić sobie jako Szaman, najmniej popularna klasa gracza; na domiar złego ma równie niepopularną specjalność Jubilera. Jego walka o przetrwanie w niczym nie przypomina wirtualnej zabawy.<br>
    
    Machan dociera do odległych od stolicy krain. Nie traci czasu i zaczyna rozwijać swoje umiejętności. Dobrze wie, że najszybszym sposobem levelowania postaci są zadania. Ale zadania, które otrzymuje Szaman, są unikalne i legendarne, a jedno z nich uruchamia globalną aktualizację Gry. Trudno nie wpakować się wtedy w kłopoty, tym bardziej że Kartos – Mroczne Imperium, lenno Symulatorów, kryjące w sobie unikalne przedmioty i zasoby – jest w stanie poświęcić o wiele więcej niż tylko jednego gracza, by zdobyć to, czego pragnie najbardziej...`,
    alt: 'Gambit Kartosa',
    amount: 10,
    price: 63.99
  },
  {
    id: 42,
    title: 'Tajemnica Mrocznego Lasu',
    autor: 'Wasilij Machanienko',
    type: 'Fantasy',
    img: 'images/tajemnicaMrocznegoLasu.jpg',
    description: `Wirtualny świat Barliony to miejsce relaksu i rozrywki. Właśnie tam toczy się drugie życie amatorów fantastycznych przygód i emocjonujących doznań ‑ wszystkiego, czego nigdy nie doświadczyliby w realu. A ponieważ w Barlionie można łatwo zarobić najprawdziwsze pieniądze, nic dziwnego, że w kapsułach podtrzymujących funkcje życiowe i zapewniających pełną immersję w świecie gry spędza czas znaczna część ludzkiej populacji.<br>

    Jednak nie dla wszystkich Barliona jest ziemią obiecaną. Ktoś wpadł na pomysł, że skazanych bardziej opłaci się umieszczać w kapsułach niż w więzieniach – ci odsiadują w Barlionie swoje wyroki. W dodatku wykonują tam niewolniczą pracę… Jednym z nich jest Dmitrij Machan. Zasądzono mu osiem lat wirtualnego więzienia i Barliona stała się dla niego areną walki o przetrwanie. Jako Szaman – jedna z niższych klas graczy – przeżył już wiele: katorżniczą pracę w kopalniach, zdradę współwięźniów, wreszcie ponowny proces, dzięki któremu wypuszczono go do otwartego świata Barliony.<br>
    
    Czego chcieć więcej? Machan mógłby się teraz nie wychylać i cieszyć względną wolnością do końca odsiadki. Jednak Szamana nic nie powstrzyma… Szybko zostaje przywódcą klanu i zabiera pięćdziesięciu najlepszych graczy kontynentu, by odkryć tajemnice Mrocznego Lasu.<br>
    
    Wejdź do niezwykłego, pasjonującego, hybrydowego świata literatury LitRPG, łączącego to, co najlepsze w książkach i grach.`,
    alt: 'Tajemnica Mrocznego Lasu',
    amount: 10,
    price: 63.99
  },
  {
    id: 43,
    title: 'Zamek Widmo',
    autor: 'Wasilij Machanienko',
    type: 'Fantasy',
    img: 'images/zamekWidmo.jpg',
    description: `Pozycja Machana w Barlionie znacznie wzrosła. Choć wciąż ma status przestępcy, nie przeszkadza mu to w zdobywaniu poziomów i nowych sojuszników. Czy jest już gotów, by zdobyć własną siedzibę? Odpowiedź kryje się w fantastycznej powieści 'Zamek widmo. Droga szamana. Etap 4'.<br>

    W świecie przyszłości kryminaliści nie trafiają do klasycznych więzień. Zamiast tego odpracowują swoją karę w wirtualnym świecie Barliona. Pozbawieni wielu praw, stojący na gorszej pozycji od pozostałych uczestników rozgrywki, latami oddają część swojego zarobku twórcom gry. Co się jednak stanie, kiedy w tym uniwersum pojawi się skazaniec pragnący czegoś więcej?<br>
    
    Machan, obecnie Szaman Najwyższy oraz przywódca klanu Legendy Barliony, ponownie trafia do centrum wydarzeń. Więzień, który przyczynił się do ukształtowania nowego podziału sił w cyfrowym świecie, staje się obiektem zarówno podziwu, jak i zawiści innych graczy. Wielu z nich chętnie pozbawiłoby go żywota, najlepiej wielokrotnie. Machan wydaje się jednak nie do zatrzymania!<br>
    
    W czwartej części ponownie spotyka się z samym Imperatorem, który składa mu nietypową propozycję: szaman będzie mógł wraz ze swoim klanem zasiedlić tajemniczy zamek Altameda, o ile wcześniej wypędzi z niego Upiory. Skazaniec nie może przepuścić takiej okazji, lecz tym razem ma przed sobą zadanie, z którym nie poradzi sobie jedynie za pomocą szczęścia i duchowej intuicji. Po raz pierwszy będzie musiał przekazać część odpowiedzialności w ręce swoich przyjaciół. Czy na pewno może im zaufać?`,
    alt: 'Zamek Widmo',
    amount: 10,
    price: 63.99
  },
  {
    id: 44,
    title: 'Szachy Karmadonta',
    autor: 'Wasilij Machanienko',
    type: 'Fantasy',
    img: 'images/szachyKarmadonta.jpg',
    description: `Barliona. Wirtualny świat przygód i tajemnic. Świat, w którym gracze spragnieni tego, czego w prawdziwym życiu nigdy nie zaznają, realizują swoje najśmielsze marzenia. Przebywasz tu online całymi miesiącami. Zamknięty w kapsule podtrzymującej funkcje życiowe, ścigasz się z innymi w levelowaniu postaci i zdobywasz kolejne osiągnięcia. Tu niemal wszystko jest dozwolone. I możesz całkiem nieźle zarobić. Chyba że jesteś więźniem. Wtedy to, co dla innych jest rozrywką, dla ciebie może stać się udręką.<br>
    Machan myśli zapewne, że po ostatniej niespodziewanej lawinie wydarzeń jego życie w Barlionie potoczy się utartymi koleinami. Przecież ucichły już wichry Mrocznego Lasu, zamek Altameda ma swojego właściciela, a Gieranika, cóż Ten jak knuł, tak knuje.<br>
    Tylko czy Machana zadowoliłoby takie przewidywalne życie? Skądże! Szykujcie się więc na nowe perypetie, potwory i lochy. Będzie ciekawie Najwyższy Szaman nie znosi przecież codziennej, mozolnej harówki. Potrzebuje też ucznia. Ma jednak wysokie wymagania: pierwszy lepszy chętny na pewno nie nada się do tej roli. A może nowy statek? Czemu nie? Musi być jednak zupełnie wyjątkowy, jedyny w swoim rodzaju!`,
    alt: 'Szachy Karmadonta',
    amount: 10,
    price: 63.99
  },
  {
    id: 45,
    title: 'Nowy Początek',
    autor: 'Wasilij Machanienko',
    type: 'Fantasy',
    img: 'images/nowyPoczątek.jpg',
    description: `Zapraszamy do wirtualnego świata Barliony! Tak doskonałego, że nie dałoby się go odróżnić od rzeczywistości, gdyby nie to, że jest istną krainą marzeń: czeka tu na ciebie nie tylko zatrzęsienie niesamowitych przygód, ale także szansa bardzo przyzwoitego zarobku.<br>

    Zajmij więc miejsce w podtrzymującej życie kapsule, pozwól, by kontrolę nad funkcjami życiowymi twojego ciała przejął system, i zanurz się w fantastycznym świecie o wiele lepszym niż ten, od którego robisz sobie przerwę. Poczujesz prawdziwą wolność... pod warunkiem że nie odsiadujesz tu kary. Bo więźniowie zesłani do Barliony mają gorzej niż dobrowolni gracze. I to o wiele gorzej.<br>
    
    Dmitrij Machan, owiany legendą Szaman ze świata Barliony, odsiedział już swój wyrok w wirtualnej rzeczywistości. Przeżył jedenaście miesięcy niesamowitych przygód i potyczek - to chyba lepiej niż osiem lat ciężkiego więzienia?<br>
    
    Tymczasem Barliona nie chce łatwo wypuścić Szamana i ma na to sposób: granica między dwiema rzeczywistościami, w których przebywa Machan, zaciera się... Wygląda na to, że wyjście z kapsuły nie jest takie proste - zanim to nastąpi, trzeba ukończyć Drogę.<br>
    
    Wejdź do niezwykłego, pasjonującego, hybrydowego świata literatury LitRPG, łączącego to, co najlepsze w książkach i grach.`,
    alt: 'Nowy Początek',
    amount: 10,
    price: 63.99
  },
  {
    id: 46,
    title: 'Hobbit',
    autor: 'John Ronald Reuel Tolkien',
    type: 'Fantasy',
    img: 'images/hobbit.jpg',
    description: `Świat Śródziemia to obecnie jednej z najbardziej znanych i lubianych światów fantastycznych stworzonych w historii literatury. Miejsce, gdzie ludzie, elfy, krasnoludy, smoki i czarodzieje żyją razem, chociaż nie zawsze w zgodzie. Warto przypomnieć sobie początek historii, kontynuowanej w trylogii “Władca pierścieni” i sięgnąć po książkę “Hobbit, czyli tam i z powrotem”, autorstwa J. R. R. Tolkiena.<br>

    Tytułowy bohater, Bilbo Baggins, to istota mniejsza od krasnoluda, ale większa od liliputa. To lubiany przez wszystkich samotnik, jest niskiego wzrostu i trochę przy kości. Jedzenie sprawia mu ogromną frajdę i stanowi jego główne zajęcie. Ważne jednak jest to, że lubi gotować wyłącznie dla siebie. Kiedy gości swoich przyjaciół i znajomych zawsze stara się poczęstować czymś smacznym, jednak zazwyczaj robi to z dość dużą niechęcią. Żyje spokojnie, z dala od problemów i zaskakujących wydarzeń. <br>
    Spokojne życie hobbita kończy się w chwili, kiedy jego stary przyjaciel, czarodziej Gandalf, staje u wejścia do jego malutkiego domku. Gandalf ma plan, a Bilbo stanowi jego nieodłączną część. Thorin wraz z kompanią postanawiają wyruszyć do Samotnej Góry, która do tej pory była pilnie strzeżona przez smoka Smauga. To terytorium i własność krasnoludów, jednak od wielu lat nie mogą w nim przebywać właśnie przez smoka - intruza. Bilbo ma pomóc w całej eskapadzie, jako ktoś mały, zwinny i przebiegły, kto może dostać się do środka.`,
    alt: 'Hobbit',
    amount: 10,
    price: 32.36
  },
  {
    id: 47,
    title: 'Kandydatka',
    autor: 'Rachel E. Carter',
    type: 'Fantasy',
    img: 'images/kandydatka.jpg',
    description: `Obłędnie fascynująca seria o ambitnym rodzeństwie, próbującym szczęścia w szkole magii.<br>

    Dwudziestoletnia Ryiah jest czarną maginią frakcji bojowej, ale nie jest Czarnym Magiem. Jeszcze. Niemal od zawsze pragnęła zdobyć legendarną szatę, jednak tylko tego jednego roku będzie mogła wziąć udział w prestiżowym - i jedynym w swoim rodzaju - turnieju dla magów... Szkoda, że będzie musiała wystąpić przeciwko pewnemu księciu - temu, którego dotąd jeszcze nigdy nie pokonała. Nabór kandydatów wreszcie nadchodzi. Zwycięzca otrzymuje szaty, ale w królestwie czyha coś mrocznego. Wrogie królestwa otaczają ojczyznę Ryiah. Pora zawrzeć sojusz. Niestety dla Ryiah to dopiero początek. Bo największy wróg mieszka w samym pałacu.`,
    alt: 'Kandydatka',
    amount: 10,
    price: 28.99
  },
  {
    id: 48, 
    title: 'Każdy Musi Płacić',
    autor: 'Robert Foryś',
    type: 'Fantasy',
    img: 'images/każdyMusiPłacić.jpg',
    description: `Fabuła to kilka przeplatających się wątków. Heinz, bękart cesarza, obecnie członek zakonu rycerskiego, wraca do cesarstwa, żeby prosić ojca o pomoc dla swojego zakonu. Jego powrót jest nie na rękę dworskim koteriom. Sam cesarz walczy z episkopem o władzę nad wiernymi. Obie strony zwołują zjazdy, sobory i szykują się do ostatecznej rozprawy. W te polityczne gierki wmieszani zostają justycjariusz (coś w rodzaju inkwizytora) Tankrid i jego dawna ukochana Armina, która jest czymś pośrednim między mniszką, komandosem i szpiegiem. Ot, taka reguła zakonna :) W tle rozgrywa się wątek Mai, nowicjuszki z zakonu Arminy, która po zabójstwie wyżej postawionej mniszki musi uchodzić z klasztoru.`,
    alt: 'Każdy Musi Płacić',
    amount: 10,
    price: 24.99
  },
  {
    id: 49,
    title: 'Krew Świętego',
    autor: 'Sebastien De Castell',
    type: 'Fantasy',
    img: 'images/krewŚwiętego.jpg',
    description: `“Krew Świętego” to trzeci tom zajmującej serii autorstwa Sebastiena de Castell - Wielkie Płaszcze.<br>

    Kto i w jakim celu morduje świętych w czasach, gdy nikt się tego nie spodziewa?<br>
    
    Facio, Pierwszy Kantor, żyje w przekonaniu, że od zawsze miał pecha, a jeśli bogowie naprawdę nie chcą jego śmierci, to przynajmniej się na niego uwzięli. Mężczyzna nigdy nie potrafił znajdować sobie przyjaciół, za to świetnie szło mu przysparzanie sobie wrogów, zwłaszcza tych władających ogromną siłą, niekoniecznie ludzką. Bluźnierstwa nie sprawiają mu kłopotu, choć z paroma świętymi udaje mu się utrzymywać przyzwoite stosunki. Sytuacja powoli się zmienia, jednak niestety wcale nie na lepsze.<br>
    
    Gdy kolejny święty ginie, pojawia się poważne podejrzenie, że być może sami bogowie nie życzą sobie, aby Aline zasiadła kiedykolwiek na tronie. Kościoły zaczynają się więc zbroić, powołując do życia dawne zakony żołnierzy, Inkwizytorów oraz asasynów. Falcio wie, że nie może dopuścić do tego, by jego kraj zmienił się w teokrację. Jako że siedząc bezczynnie, na pewno nic nie wskóra, podejmuje się odnalezienia mordercy świętych. Nie będzie to jednak takie proste. Jedynym śladem po działalności tajemniczego mordercy jest żelazna maska, tak przerażająca, że bez trudu przyprawia świętych o obłęd i zupełnie rozbraja. Tyle że odnalezienie zabójcy to jedno, a pokonanie go, to drugie.`,
    alt: 'Krew Świętego',
    amount: 10,
    price: 28.99
  },
  {
    id: 50,
    title: 'Lewa Ręka Boga',
    autor: 'Paul Hoffman',
    type: 'Fantasy',
    img: 'images/lewaRękaBoga.jpg',
    description: `Niezwykła, wymykająca się klasyfikacjom powieść z elementami fantasy Paula Hoffmana, amerykańskiego pisarza i scenarzysty. „Lewa ręka Boga” otwiera epicką trylogię o młodym Thomasie Cale, niepokornym akolicie Powieszonego Odkupiciela. W Sanktuarium nie ma miejsca na litość i miłosierdzie. Ci, którzy trafiają do kamiennego labiryntu sal, mają tylko jedno zadanie: walczyć aż do śmierci o Jedynie Słuszną Wiarę.<br>

    Tomas Cale ma piętnaście albo szesnaście lat – nie pamięta. Nie pamięta również tego, jak nazywał się, nim trafił w ręce okrutnych braci. Niezwykle utalentowany, zarówno czarujący, jak i zdolny do niebywałego okrucieństwa, w chwili słabości pozwala sobie na nieodpowiedzialny czyn. W odruchu litości zabija pastwiącego się nad młodą kobietą odkupiciela, podpisując na siebie wyrok śmierci. Tomas musi uciekać przed karzącą ręką Powieszonego Odkupiciela i jego fanatycznych wyznawców.<br>
    
    Wraz z ocaloną dziewczyną i przyjaciółmi, Henrim i Kleistem, opuszcza Sanktuarium, by stawić czoła rzeczywistości poza jego murami. Niełatwy charakter, porywczość i budzące niepokój zdolności nie ułatwią mu ukrycia się pomiędzy normalnymi ludźmi…`,
    alt: 'Lewa Ręka Boga',
    amount: 10,
    price: 32.39
  },
  {
    id: 51,
    title: 'Anioł Śmierci',
    autor: 'Paul Hoffman',
    type: 'Fantasy',
    img: 'images/lewaRękaBogaII.jpg',
    description: `Trzymająca w napięciu powieść fantasy, kontynuacja znakomitej „Lewej Ręki Boga”. Po upadku Memphis Thomas Cale powraca do upiornego Sanktuarium. W ślad za nim podążają jego przyjaciele – Mętny Henri, Klais i Idrys Pukke. Jednak Klais szybko opuszcza kompanię, by spróbować ułożyć sobie na nowo życie wśród kleftów, zbójeckich górali. U boku chłopaka pozostaje tylko Henri. Zakon ma wobec Cale’a dalekosiężne plany... Odkupiciel angażuje młodzieńca do realizacji swej wizji – Cale, niegdyś jedyny niepokorny i skłonny do współczucia uczeń zgromadzenia, teraz ma stać się Aniołem Śmierci, wcielonym boskim gniewem, ostatecznym narzędziem zniszczenia. Upadek ludzkości i krwawa łaźnia są konieczne, jak mówi Bosco. Jedynie poprzez zniszczenie możliwe są powtórne narodziny świata, powtórne stworzenie. Cale wydaje się akceptować swój los – przeznaczenie niszczyciela świata. Absolutna potęga jest w zasięgu jego ręki, chłopak ma pod swoim dowództwem potężny oddział przyboczny, dwustu czyśćcowych skazańców. Pierwsze zadanie kończy się spektakularnym sukcesem... Już niebawem Cale stanie na czele największej armii odkupicieli i rozpocznie krwawe dzieło zbawienia. Jednak dusza Cale’a jest bardziej skomplikowana niż mogliby przypuszczać jego mentorzy. Miotany sprzecznymi odczuciami, zrozpaczony, chory z nienawiści młodzieniec nie jest narzędziem idealnym – wystarczy jeden błąd odkupicieli, by Cale zszedł z przeznaczonej mu ścieżki.`,
    alt: 'Anioł Śmierci',
    amount: 10,
    price: 32.39
  },
  {
    id: 52,
    title: 'Trzepotanie Jego Skrzydeł',
    autor: 'Paul Hoffman',
    type: 'Fantasy',
    img: 'images/trzepotanieJegoSkrzydeł.jpg',
    description: `Trzeci i ostatni tom trylogii fantasy (LEWA RĘKA BOGA cz. I i II oraz TRZEPOTANIE JEGO SKRZYDEŁ) o młodym akolicie Powieszonego Odkupiciela. Thomas Cale staje na czele armii w ostatecznym starciu z papieżem Bosco, który konsekwentnie realizuje swój plan sprowadzenia na ludzkość Apokalipsy.<br>

    Sprzedany przez rodziców do Sanktuarium Odkupicieli, przeszedł tam szkolenie mające go zamienić w maszynę do zabijania, Anioła Śmierci, którego celem jest naprawienie boskiej pomyłki – zniszczenie ludzkości. Thomas Cale długo przymykał oczy na prawdę o sobie. W końcu dociera do niego, że nie jest tylko pozbawionym ludzkich uczuć, dobrze wyszkolonym narzędziem do zadawania śmierci. Czuje się coraz słabszy, jego dusza umiera, a ekscentryczna lekarka na wyspie Cypr próbuje mu pomóc. Tymczasem w pościg za nim ruszają fanatyczni wyznawcy Jedynej Prawdziwej Wiary, przeciwko którym się zbuntował. Chwila wyrównania rachunków zbliża się nieubłaganie. Nie chcąc jej odsuwać, wciąż nieuzdrowiony Cale wyrusza do Memphis, by zmierzyć się ze znienawidzonym papieżem Bosco. Los ludzkości leży teraz wyłącznie w rękach Thomasa Cale.`,
    alt: 'Trzepotanie Jego Skrzydeł',
    amount: 10,
    price: 32.39
  },
  {
    id: 53,
    title: 'Lizbończyk',
    autor: 'Fernando Sobral',
    type: 'Detective Cryminal',
    img: 'images/lizbończyk.jpg',
    description: `Nocą Lizbona to widmowe miasto, w którym roi się od zbrodni.
    Od miłości. I od lęków. Tam, gdzie kończy się jedna Lizbona i zaczyna druga, jedynie potężne reklamy stwarzają pozory szczęścia.<br>
    Detektyw Manuel da Rosa dobrze o tym wie. Jego conocne włóczęgi przez stolicę urywają się, gdy ginie Ernesto Ávila, handlarz dziełami sztuki.<br>
    W miarę jak detektyw odkrywa Lizbonę pełną odmiennych aromatów i kultur, zagłębia się on również w tajemniczą przeszłość zmarłego — człowieka, który nie chciał, żeby go znano. Przypomina mu to o czasie, gdy on sam starał się zapomnieć własną tożsamość.
    I o związku z Aną Moreno. Wszystko gmatwa się wraz z przybyciem fascynującej i tajemniczej postaci, Susany Wong, która może stanowić klucz do wszystkich sekretów.`,
    alt: 'Lizbończyk',
    amount: 10,
    price: 22.39
  },
  {
    id: 54,
    title: 'Mroczny Triumf',
    autor: 'Robin Lafevers',
    type: 'Fantasy',
    img: 'images/mrocznyTriumf.jpg',
    description: `Zemsta jest słodka. Ekscytujący sequel 'Posępnej litości' Sybella jest bezwzględną zabójczynią, służebnicą śmierci wyszkoloną przez zakonnice z Mortain. Do dziś nosi blizny będące świadectwem krzywd, jakich doznała od ojca. Mroczna przeszłość nie przestała jej jednak nawiedzać, szuka więc zemsty. Tym razem nie będzie litości. Nie przybyłam do zakonu Świętego Mortaina całkiem zielona. Miałam już wtedy za sobą trzy trupy i dwóch kochanków. Mimo to mogłam się tam nauczyć wielu rzeczy, od siostry Serafiny stosowania trucizn, od siostry Thominy posługiwania się ostrzem, a od siostry Arnette, niczym map konstelacji gwiazd, umiejscowienia najwrażliwszych punktów na ciele mężczyzny, w które to ostrze najskuteczniej wbić.`,
    alt: 'Mroczny Triumf',
    amount: 10,
    price: 22.19
  },
  {
    id: 55,
    title: 'Nadzór',
    autor: 'Charlle Fletcher',
    type: 'Fantasy',
    img: 'images/nadzór.jpg',
    description: `Wciągająca opowieść nasycona magią, nadprzyrodzonymi zwierzętami i nieznanymi strażnikami, którzy starają się to wszystko utrzymać w tajemnicy przed naszym światem.<br>

    Świat powieści science-fiction stoi otworem przed każdym, kto chciałby do niego wejść. Pojedynki magów, nadprzyrodzona siła i wszechobecne czarownice skutecznie potrafią podsycić emocje Czytelników już od wielu lat. Dla każdego fana powieści o podobnej tematyce, powstała książka 'Nadzór', którą napisał Charlie Fletcher. Z pewnością żaden fan tego gatunku nie będzie nią zawiedziony!<br>
    
    Między zwyczajnym, a tym magicznym światem istnieje cienka granica. Strzeże jej pięcioro ludzi, którzy pilnują, aby oba światy w żaden sposób się nie mieszały. Kiedyś do Nadzoru należało tysiące dusz, niestety te czasy dawno minęły. W mieście można spotkać bezwzględnych morderców, którzy nie zawahają się zabić dla własnych korzyści. Podobnie swobodnie poruszają się tu magiczne stwory z nadprzyrodzonymi zdolnościami, ponieważ nikt nie sprawuje nad nimi władzy i opieki. Nadzór jest niesamowicie słaby. Gdy pewnej nocy, pod drzwiami jego siedziby zjawia się tajemnicza postać z pełnym workiem, wszyscy liczą na cud. Wydaje się, że oto nadszedł kres chudych lat i kolejni chętni będą mogli stanąć w szeregach Nadzoru. Niestety, szybko okazuje się to wszystko jest dobrze ukartowaną pułapką, która nie ma na celu wzmocnienia strażników. Zbliża się ich szybki i gwałtowny upadek, a w pobliżu nie ma nikogo, kto mógłby pomóc naprawić zaistniałą sytuację.`,
    alt: 'Nadzór',
    amount: 10,
    price: 32.49
  },
  {
    id: 56,
    title: 'Ostatni',
    autor: 'Charlle Fletcher',
    type: 'Fantasy',
    img: 'images/ostatni.jpg',
    description: `„Nadzór jest najbardziej niebezpieczny, gdy zostaje mu niewielu członków. Wielu z tych, którzy o tym zapomnieli, już nie żyje”.<br>

    Nadzór tysiące lat temu zaprzysiągł, że będzie chronić krainy śmiertelników i istot nadnaturalnych przed żerowaniem na sobie nawzajem. Teraz, gdy tajne stowarzyszenie znalazło się na skraju zagłady, jego siedziba została zniszczona, a ostatni członkowie rozproszyli się po świecie, Nadzór musi walczyć o przetrwanie. Będzie też musiał stawić czoła najgroźniejszemu wrogowi, z jakim się kiedykolwiek zetknął: sobie samemu.<br>
    
    Oto „Sukcesorzy”, poruszająca ostatnia część mrocznej i zniewalającej trylogii „Nadzoru”.`,
    alt: 'Ostatni',
    amount: 10,
    price: 32.49
  },
  {
    id: 57,
    title: 'Paradoks',
    autor: 'Charlle Fletcher',
    type: 'Fantasy',
    img: 'images/paradoks.jpg',
    description: `Ostatnia Ręka Nadzoru wciąż patroluje granicę pomiędzy tym, co naturalne a tym, co nadprzyrodzone, rozświetlając ciemności nikłym płomieniem świecy. Nikt nie potrafi przewidzieć, jak sobie poradzi. Nowym członkom brakuje wyszkolenia, a weterani są zmęczeni i bezbronni. Ta słabość przyciąga do miasta nowych wrogów, ale także zaskakujących sprzymierzeńców zza oceanu.<br>

    Najbardziej jednak szokujące są nowe rewelacje dotyczące przeszłości Nadzoru, które ujawniają prawdziwe niebezpieczeństwo zagrażające światu. Ich źródło kryje się w miejscu, w którym utknęli Sharp i Sara. To właśnie tam będą oni musieli rozwikłać sekret Czarnych Luster i zmierzyć się z tym, co się w nich czai, uważając, aby nie podążyło za nimi do domu.<br>
    
    Ciemne wody się wznoszą, świece migoczą, ale światło nie gaśnie. Póki co...`,
    alt: 'Paradoks',
    amount: 10,
    price: 32.49
  },
  {
    id: 58,
    title: 'Nick i Nora Playlista Dla Dwojga',
    autor: `'Rachel Cohn' 'David Levithan'`,
    type: 'Romance',
    img: 'images/nickINoraPlaylistaDlaDwojga.jpg',
    description: `„Wiem, że to dziwne pytanie, ale czy miałabyś coś przeciwko udawaniu mojej dziewczyny przez następne pięć minut?'.<br>

    Nick jest bywalcem nowojorskiej sceny rockowej – muzyką próbuje uleczyć złamane serce. Norah także przeżyła zawód miłosny. Pozornie tych dwoje nie łączy nic poza gustem muzycznym, jednak ich przypadkowe spotkanie kończy się szaloną pierwszą randką, która ma szansę zmienić życie obojga...<br>
    
    'Nick i Norah', napisana przez gwiazdy literatury młodzieżowej Rachel Cohn i Davida Levithana, to seksowna, zabawna, ale i wzruszająca opowieść. Jej bohaterowie próbują zapomnieć o złamanych sercach, chcą dowiedzieć się, kim właściwie są, ale przede wszystkim… chcą trafić na występ ukochanego zespołu. Dokąd zaprowadzi ich ta noc? Rockandrollowy romans na dwa głosy, który zainspirował twórców filmu 'Nick i Norah', z Michaelem Cerą ('Juno', 'Bogaci bankruci') i Kat Dennings ('Thor', 'Dwie spłukane dziewczyny'). Bestseller New York Timesa.`,
    alt: 'Nick i Nora Playlista Dla Dwojga',
    amount: 10,
    price: 32.49
  },
  {
    id: 59,
    title: 'Ostatnia Walka',
    autor: 'Rachel E. Carter',
    type: 'Fantasy',
    img: 'images/ostatniaWalka.jpg',
    description: `Poznaj niezwykłą historię miłości i zdrady. Czy bezpieczeństwo królestwa i wierność jego mieszkańcom warta jest porzucenia wszystkich swoich ideałów i wierzeń?<br>

    Królestwo niepokojąco szybko wstępuje na drogę wojny, a coraz większe niepokoje przybierają na sile, stwarzając ryzyko buntu. Ulice stają się niebezpieczne, a na szali postawione jest los setek tysięcy ludzi. Król Blayne nie cofnie się przed niczym, by osiągnąć swe cele. Choć jego słowa są szlachetne i godne pochwały, to liczne spiski i knowania daleko odbiegają od moralności. Ryiah odkrywa jego sekrety, przez co znajduje się w niewygodnej pozycji, a od decyzji, które musi podjąć, zależeć będą losy świata. Czy zdoła wyrzec się swej miłości i dotychczasowego życia, aby uchronić królestwo będące jej domem? Musi wybrać drogę, którą wskazuje jej serce lub rozum. Która z nich okaże się właściwa?<br>
    
    Ryiah dostaje propozycję, która może ocalić królestwo, ale niezależnie od powodzenia misji, może skończyć się nadaniem jej statusu zdrajczyni i zaprowadzić wprost pod katowski topór. Przekonanie osób władających królestwem Pythus, aby zerwali swój sojusz ze skorumpowanym królem Jeraru, pomoże dzielnym rebeliantom, zaciekle walczącym o swoją przyszłość, ale wiąże się również z licznymi konsekwencjami. Jeśli zdoła przekonać ich do swojego zdania, być może ocali ludzi przed nadchodzącą wojną. Aby to osiągnąć, będzie musiała okłamać i przechytrzyć najpotężniejszego maga w królestwie, którego kroków nie potrafi przewidzieć, mimo że powinna doskonale go znać. W końcu jest jej mężem...`,
    alt: 'Ostatnia Walka',
    amount: 10,
    price: 32.49
  },
  {
    id: 60,
    title: 'Ostrze Zdrajcy',
    autor: 'Sebastien De Castell',
    type: 'Fantasy',
    img: 'images/ostrzeZdrajcy.jpg',
    description: `Wielkie Płaszcze. Sędziowie, bohaterowie... zdrajcy?<br>

    Król nie żyje, Wielkie Płaszcze rozwiązano, a Falcio val Mond i jego towarzysze Kest i Brasti skończyli jako straż przyboczna szlachcica, który na domiar złego nie chce im płacić. Ale mogło być gorzej - ich chlebodawca mógłby leżeć martwy, podczas gdy oni musieliby bezradnie patrzeć, jak zabójca podrzuca fałszywe dowody wikłające ich w morderstwo. Chwileczkę... Przecież to właśnie się zdarzyło!<br>
    
    W najbardziej zepsutym mieście świata zawiązuje się spisek koronacyjny, a to oznacza, że wszystko, o co walczą Falcio, Kest i Brasti, może lec w gruzach. Jeśli tych trzech zechce przeciąć intrygę, ocalić niewinnych i wskrzesić Wielkie Płaszcze, będą musiały wystarczyć im rapiery w dłoniach i obszarpane skórzane odzienie. Dziś bowiem każdy arystokrata jest tyranem, każdy rycerz - bandytą, a jedyne, czemu można ufać, to ostrze zdrajcy.`,
    alt: 'Ostrze Zdrajcy',
    amount: 10,
    price: 32.49
  },
  {
    id: 61,
    title: 'Pierwszy Rok',
    autor: 'Rachel E. Carter',
    type: 'Fantasy',
    img: 'images/pierwszyRok.jpg',
    description: `Rudowłosa piętnastolatka Ryiah (zwana Ry) i jej brat bliźniak Alexander mają jedno marzenie: zostać magami. Realizacja tego celu się przybliża, gdy zostają przyjęci do Akademii Magii. Okazuje się jednak, że kandydatów na adeptów jest wielu, zaś rodzeństwo wyróżnia się na tle rówieśników niskim pochodzeniem, brakami<br>
    w wiedzy i niedostatkiem siły fizycznej. Wywodzący się z arystokratycznego rodu książę Darren i jego przyjaciółka Priscilla szczególnie dają odczuć rodzeństwu, gdzie jest ich miejsce.
    Ry odstaje od grupy tak wyraźnie, że padają nawet sugestie, iż powinna zrezygnować. Dziewczyna jednak się nie poddaje, potajemnie przesiaduje w bibliotece, ćwiczy walkę wręcz z córką rycerza Ellą. Nieoczekiwanie z pomocą Ry przychodzi jej dotychczasowy wróg, Darren. Chłopak zaczyna okazywać jej swoją sympatię. Czy to podstęp? Czy Ry uda się zdać egzaminy i kontynuować naukę w wymarzonej szkole?`,
    alt: 'Pierwszy Rok',
    amount: 10,
    price: 31.59
  },
  {
    id: 62,
    title: 'Przygody Sherlocka Holmesa',
    autor: 'Artur Conan Doyle',
    type: 'Detective',
    img: 'images/przygodySherlockaHolmesa.jpg',
    description: `The Adventures of Sherlock Holmes z podręcznym słownikiem angielsko-polskim (Przygody Sherlocka Holmesa) opublikowane w 1892 roku przez szkockiego pisarza, sir Arthura Conana Doyle’a. Książka zawiera dwanaście opowiadań, w których detektyw z Baker Street rozwiązuje skomplikowane sprawy kryminalne. Jego głównym atrybutem, wykorzystywanym przy rozwiązywaniu wszystkich przypadków jest dedukcja. Niezbędna okazuje się również znajomość psychologii, prawa, chemii, policyjnej kroniki wypadków jak również literatury sensacyjnej i nieodłączna fajka. Dzięki ponadprzeciętnej sprawności fizycznej potrafi wyjść cało ze wszystkich opresji. W pracy towarzyszy mu wierny druh, przyjaciel i kronikarz wszystkich dokonań, dr Watson.`,
    alt: 'Przygody Sherlocka Holmesa',
    amount: 10,
    price: 31.59
  },
  {
    id: 63,
    title: 'To',
    autor: 'Stephen King',
    type: 'Horror',
    img: 'images/to.jpg',
    description: `Najbardziej przerażająca powieść króla grozy. Doceniona przez miliony czytelników na całym świecie. Ciebie też porwie.<br>

    Dla dzieci miasteczko Derry jest całym światem. Dla dorosłych, którzy zawsze wiedzą wszystko najlepiej, to po prostu rodzinne miasto - swojskie, porządne, idealne do życia. Ale to dzieci widzą - i czują - co tak strrrasznie różni Derry od innych miejsc.<br>
    
    W kanałach miasteczka zalęgło się TO. Bliżej nieokreślone, przybiera najróżniejsze postacie - klauna, ogromnego ptaszyska, głosu w rurach. Poluje na dzieci. Tylko dzieci potrafią dostrzec TO. I to one stają do walki z potworem.`,
    alt: 'To',
    amount: 10,
    price: 38.99
  },
  {
    id: 64,
    title: 'To 2',
    autor: 'Stephen King',
    type: 'Horror',
    img: 'images/to2.jpg',
    description: `Mijają lata, dzieci opuszczają rodzinne miasto. Zgroza i potworności trwają głęboko pogrzebane i przykryte całunem zapomnienia... Dopóki już jako dorośli nie zostaną wezwani, by raz jeszcze stanąć do walki z TO, które miota się w zakamarkach ich pamięci, zamieniając dawne koszmary w przerażającą rzeczywistość.`,
    alt: 'To 2',
    amount: 10,
    price: 38.99
  },
  {
    id: 65,
    title: 'Tron Tyrana',
    autor: 'Sebastien De Castell',
    type: 'Fantasy',
    img: 'images/tronTyrana.jpg',
    description: `Czwarty tom wyjątkowej serii fantasy spod znaku płaszcza i szpady.<br>

    Po latach zmagań i poświęceń Falcio val Mond, Pierwszy Kantor Wielkich Płaszczy, jest bliski realizacji marzenia swojego zmarłego króla i obsadzenia na tronie jego córki Aline, by raz na zawsze przywrócić praworządność w Tristii.<br>
    
    Jednak, jak to w przypadku Wielkich Płaszczy bywa, sprawy się komplikują. W sąsiednim kraju enigmatyczny nowy przywódca Avares jednoczy barbarzyńskie armie, od dawna nękające granice Tristii. Co gorsza, ponoć ma nowego sojusznika: Trin, która dwukrotnie próbowała zabić Aline, by zdobyć tron Tristii dla siebie. Mając za sobą armie Avaresa, dowodzone przez żądnego krwi wojownika, Trin będzie nie do powstrzymania.`,
    alt: 'Tron Tyrana',
    amount: 10,
    price: 38.99
  },
  {
    id: 66,
    title: 'Tunele',
    autor: `'Roderick Gordon' 'Brian Williams'`,
    type: 'Fantasy',
    img: 'images/tunele.jpg',
    description: `Czternastoletni Will różni się od swoich rówieśników nie tylko wyglądem – jest albinosem – ale przede wszystkim zainteresowaniami. Wraz z ojcem, doktorem Burrowsem, kustoszem miejskiego muzeum, uwielbia kopać tunele. Posługując się planami miasta, poszukiwacze odkrywają starą stację metra oraz wiele innych, znacznie mniej fascynujących i zaspokajających ciekawość poszukiwaczy, miejsc. Chłopiec pragnie zaimponowac ojcu, dlatego każdego dnia, drążąc tunel, ma nadzieję natknąć się na coś olśniewającego. Właściwie tylko doktor Burrows interesuje się wykopaliskami syna. Pozostała część rodziny żyje własnym życiem – matka całe dnie spędza przed telewizorem, uzbrojona w piloty starannie ułożone na oparciach fotela; dwunastoletnia siostra Rebeka natomiast utrzymuje porządek w domu, płaci rachunki, przygotowuje posiłki. Domownicy nie interesują się sobą nawzajem. Nawet, gdy w tajemniczych okolicznościach znika ojciec rodziny, reakcja i poważne kroki zostają podjęte dopiero po kilku dniach. Po bezskutecznej interwencji policji Will postanawia wziąć sprawy w swoje ręce i wraz z przyjacielem, Chesterem, wyrusza na poszukiwania ojca. Jak łatwo się domyślić, chłopcy odkrywają w piwnicy wydrążony tunel, który prowadzi ich w miejsce, jakiego w najmroczniejszych snach nie byliby w stanie sobie wyobrazić. Przygoda, która mieniła się pięknymi barwami, zmieniła się w koszmar, który może kosztowac chłopców życie.`,
    alt: 'Tunele',
    amount: 10,
    price: 38.99
  },
  {
    id: 67,
    title: 'Tunele Głębiej',
    autor: `'Roderick Gordon' 'Brian Williams'`,
    type: 'Fantasy',
    img: 'images/tuneleGłębiej.jpg',
    description: `'Tunele. Głębiej' to kontynuacja fascynujących przygód Willa Burrowsa i jego przyjaciela Chestera, których poznaliśmy w pierwszej części serii pt. 'Tunele'. Bohaterowie, szukając zaginionego w tajemniczych okolicznościach ojca Willa - doktora Burrowsa, odkryli tajemniczy, podziemny świat zwany Kolonią. W drugiej części chłopcy schodzą jeszcze niżej, docierają do Głębi, gdzie czekają ich nowe, dramatyczne wyzwania. Muszą uciekać przed okrutnymi Styksami, którzy na dodatek przygotowują spisek wymierzony przeciwko światu Górnoziemców. Czy przyjaciołom uda się przetrwać? Czy odnajdą ojca Willa? Zejdź głębiej i przeżyj niesamowitą przygodę. Rozwiąż wszystkie zagadki czytając 'Tunele. Głębiej'.`,
    alt: 'Tunele Głębiej',
    amount: 10,
    price: 33.99
  },
  {
    id: 68,
    title: 'Tunele Otchłań',
    autor: `'Roderick Gordon' 'Brian Williams'`,
    type: 'Fantasy',
    img: 'images/tuneleOtchłań.jpg',
    description: `Trzeci tom serii o fascynującej podróży Willa i Chestera po podziemnej krainie. Poszukując doktora Burrowsa, chłopcy spadają jeszcze głębiej – w otchłań, gdzie już nie istnieje grawitacja. Odkrywają zaginioną starożytną cywilizację i poznają kolejne tajemnice świata ukrytego pod powierzchnią.`,
    alt: 'Tunele Otchłań',
    amount: 10,
    price: 33.99
  },
  {
    id: 69,
    title: 'Tunele Bliżej',
    autor: `'Roderick Gordon' 'Brian Williams'`,
    type: 'Fantasy',
    img: 'images/tuneleBliżej.jpg',
    description: `'Tunele. Bliżej' to kontynuacja fascynującej podróży Willa Burrowsa w głąb tajemniczych, podziemnych światów, która zachwyciła młodszych i starszych fanów przygody i fantasy na całym świecie.<br>

    W samym środku Ziemi Will wpada w kolejne kłopoty, a przy okazji odkrywa zapomniane cywilizacje i inne tajemnice. Jego tropem nieustannie podążają Styksowie. W tym czasie w Górnoziemiu Drake z zespołem zaskakujących sojuszników przygotowuje się do walki, która przyniesie ludziom ocalenie albo… śmierć.`,
    alt: 'Tunele Bliżej',
    amount: 10,
    price: 33.99
  },
  {
    id: 70,
    title: 'Tunele Spirala',
    autor: `'Roderick Gordon' 'Brian Williams'`,
    type: 'Fantasy',
    img: 'images/tuneleSpirala.jpg',
    description: `Piąty tom światowego bestsellera. Zaskakujący, brutalny, budzący grozę i przerażenie!<br>

    Według Barry’ego Cunninghama – odkrywcy Harry’ego Pottera – to najbardziej pasjonująca książka z tej fantastycznej serii. <br>
    
    Styksowie rozkręcają w Górnoziemiu spiralę chaosu. Niebawem zaczną ostateczną ofensywę i podbój świata. Tym razem to kobiety Styksów przygotowują straszną i odrażającą niespodziankę. Na ich drodze staną jedynie Will ze swoimi przyjaciółmi, a także zespół złożony z ekscentryków i wyrzutków oraz… emerytowanych komandosów. Czy mają szansę pokonać Styksów? <br>
    
    Czy w obronie ludzkości dojdzie do wojny biologicznej z użyciem śmiercionośnych wirusów?
    Czy do zagłady światów we wnętrzu Ziemi doprowadzi wybuch bomby atomowej?<br>
    
    Sądzisz, że Styksowie to paskudna rasa? Jest jeszcze gorzej, niż myślisz. O wiele, wiele gorzej!<br>
    Zastanawiasz się, jak rozmnażają się Styksowie? Gdy poznasz tę mroczną tajemnicę, przekonasz się, że lepiej byłoby tego nie wiedzieć...`,
    alt: 'Tunele Spirala',
    amount: 10,
    price: 33.99
  },
  {
    id: 71,
    title: 'U4 .Jules',
    autor: 'Carole Trebor',
    type: 'Sci-fi',
    img: 'images/u4Jules.jpg',
    description: `JEDEN WIRUS, JEDNA HISTORIA, 4 AUTORÓW, 4 TOMY SERII<br>

    Doskonały przekład nietypowej serii stworzonej przez cenionych we Francji autorów książek dla młodzieży.<br>
    
    
    Akcja wszystkich czterech powieści wchodzących w jej skład toczy się współcześnie, od 1 listopada do 24 grudnia. Na świecie wybucha epidemia wywołana przez niezwykle groźnego wirusa U4, na którego nie ma remedium. W ciągu miesiąca wirus wyniszcza niemal całą ludzkość. Epidemię w zagadkowy sposób przeżywają tylko młodzi ludzie między 15 a 18 rokiem życia. I to właśnie z perspektywy czworga spośród ocalałych nastolatków – dwóch dziewcząt Koridwen i Stéphane oraz dwóch chłopców Yannisa i Jules’a – czytelnik ogląda postapokaliptyczny świat. Ich historie rozgrywają się równolegle, a opowieści przenikają się w taki sposób, że nawet najuważniejszy czytelnik ani przez moment nie ma wrażenia, że „już kiedyś to czytał”.<br>
    
    Każdy z tomów stanowi oddzielną całość, ale wszystkie wzajemnie się dopełniają.Jules, podobnie jak pozostali tytułowi bohaterowie serii „U4”, jest ekspertem w grze komputerowej Warriors of Time. Ostatni przed apokalipsą komunikat Mistrza Gry Khronosa zwoływał ekspertów do Paryża i obiecywał im możliwość przeniesienia się w czasie i uratowania świata przed epidemią.`,
    alt: 'U4 .Jules',
    amount: 10,
    price: 24.99
  },
  {
    id: 72,
    title: 'U4 .Koriwden',
    autor: 'Yves Grevet',
    type: 'Sci-fi',
    img: 'images/u4Koriwden.jpg',
    description: `Bohaterką powieści jest Koridwen, dziewczyna z maleńkiej bretońskiej osady. Swoje oryginalne imię dostała na cześć celtyckiej czarodziejki Cerridwen, patronki nauki, natchnienia, szczęścia i śmierci, bogini budzącej respekt, wolnej, odważnej i niezależnej. Wszystkie te cechy ma również bohaterka powieści. Po katastrofie, gdy wirus uśmiercił wszystkich dorosłych, ta silna, pragmatyczna dziewczyna przejmuje opiekę nad swoim niepełnosprawnym kuzynem. Wraz z nim wyrusza traktorem w podróż do Paryża. Ma do przejechania pięćset kilometrów, ale chce stawić się na spotkanie wyznaczone przez Khronosa, mistrza gry Warriors of Time, i podjąć próbę ratowania świata. Już w drodze do stolicy wielokrotnie musi wykazać się odwagą i hartem ducha, a po dotarciu na miejsce – stawić czoła niebezpiecznym bandom, fałszywym przyjaciołom oraz dzikim psom. Spotyka ludzi, którzy stają się dla niej ważni, i po kolei ich traci. Każdego dnia Koridwen odkrywa, że jest odważna, zaradna i niezłomna. Z biegiem czasu coraz bardziej umacnia się w niej zaszczepiona przez babkę wiara w moc celtyckich zwyczajów i przepowiedni. Koridwen przekonuje się też, że potrafi być bezwzględna, jeśli trzeba walczyć o życie. I przede wszystkim – uświadamia sobie, że niezależność ważniejsza jest dla niej niż przyjaźń i miłość. Koridwen odwróci bieg czasu, ale czy dzięki temu uratuje świat?<br>
    U4 to seria 4 powieści napisanych przez 4 autorów. Każde z nich stworzyło innego bohatera i jego historię. Tak oto pojawili się: Koridwen, Sthepane, Jules i Yannis.
    Kolejne tomy powieści dopełniają się nawzajem, pokazując czytelnikowi świat U4. Warto poznać wszystkie.<br>
    U4 adresowane jest do czytelników na tyle dojrzałych, aby mogli zmierzyć się z obrazem świata po apokalipsie i wejść do ludzkiej dżungli...`,
    alt: 'U4 .Koriwden',
    amount: 10,
    price: 24.99
  },
  {
    id: 73,
    title: 'U4 .Stephanie',
    autor: 'Vincent Villeminot',
    type: 'Sci-fi',
    img: 'images/u4Stephanie.jpg',
    description: `Stéphane, córka słynnego wirusologa, tuż przed katastrofą chodziła do najlepszego liceum w Lyonie. Była równie zdolna co gwałtowna. Często wdawała się w bójki i z tego powodu musiała zmieniać szkoły. Złość Stéphane eksplodowała głównie w odpowiedzi na uwagi dotyczące jej wyglądu oraz raczej męskiego imienia. Dziewczyna o siwych włosach i takim imieniu nie miała łatwego dzieciństwa. W grze Warriors of Time Stéphane wybrała sobie nick odpowiadający jej naturze: Lady Rottweiler.<br>
    Ta zdecydowana nastolatka o analitycznym umyśle jako jedyna z czworga bohaterów serii nie uwierzyła w zapewnienia mistrza gry – Khronosa – o możliwości przeniesienia się w czasie. Uważała, że jedynym sposobem na ocalenie świata jest szczepionka, której opracowanie lub odnalezienie zależy od zespołu jej ojca. Wcale nie wybierała się na zwołane przez Khronosa spotkanie Ekspertów pod wieżą Zegarowa? w Paryżu. Jednak wskutek fatalnego zbiegu okoliczności musiała opuścić Lyon i wraz z innymi podążyć do stolicy Francji. Nie po to jednak, żeby cofnąć czas. Po to, by szukać ojca. I w końcu odpowiedzieć sobie na pytanie, czy nauka i autorytet mogą być remedium na koniec świata.<br>
    U4 to seria 4 powieści napisanych przez 4 autorów. Każde z nich stworzyło innego bohatera i jego historię. Tak oto pojawili się: Koridwen, Sthepane, Jules i Yannis.<br>
    Kolejne tomy powieści dopełniają się nawzajem, pokazując czytelnikowi świat U4. Warto poznać wszystkie.<br>
    U4 adresowane jest do czytelników na tyle dojrzałych, aby mogli zmierzyć się z obrazem świata po apokalipsie i wejść do ludzkiej dżungli...`,
    alt: 'U4 .Stephanie',
    amount: 6,
    price: 24.99
  },
  {
    id: 74,
    title: 'U4 .Yannis',
    autor: 'Florence Hinckel',
    type: 'Sci-fi',
    img: 'images/u4Yannis.jpg',
    description: `Yannis przed katastrofa? nie miał innych obowiązków niż nauka. Mama gotowała, prała, sprzątała i przytulała, a ojciec prowadził sklep. Tuz? po katastrofie rozpieszczony chłopak był całkowicie bezradny. Przy życiu trzymała go tylko nadzieja na odwrócenie biegu wydarzeń. Tak jak innym Ekspertom, tę nadzieję dał mu komunikat mistrza gry Khronosa, który oferował możliwość cofnięcia się w czasie. Yannis wybrał się więc w szalona?, samotna? podróż z Marsylii do Paryża, aby spotkać mistrza i uratować świat.<br>
    W tej wyprawie, której droga wiodła między innymi przez dzikie, ośnieżone góry, początkowo towarzyszył mu jedynie pies – Happy. I przyroda. Przyroda widziana oczami Yannisa jest wspaniała: majestatyczna i dzika. Dla wrażliwego, delikatnego, ale bardzo upartego chłopca, który nigdy wcześniej nie wyjeżdżał z Marsylii, wszystko jest pierwsze, wszystko jest odkryciem.?I właśnie ta prawda i ten zachwyt nad pięknem świata okażą się dla niego najważniejsze. Będą ratunkiem, a także lekarstwem na zdradę, manipulację i okrucieństwo
    U4 to seria 4 powieści napisanych przez 4 autorów. Każde z nich stworzyło innego bohatera i jego historię. Tak oto pojawili się: Koridwen, Sthepane, Jules i Yannis.<br>
    Kolejne tomy powieści dopełniają się nawzajem, pokazując czytelnikowi świat U4. Warto poznać wszystkie.<br>
    U4 adresowane jest do czytelników na tyle dojrzałych, aby mogli zmierzyć się z obrazem świata po apokalipsie i wejść do ludzkiej dżungli...`,
    alt: 'U4 .Yannis',
    amount: 6,
    price: 24.99
  }
  // {
  //   id: 
  //   title: 
  //   autor:
  //   type: 
  //   img: 
  //   description:
  //   amount:
  //   price: 
  // },
];

dataSources.cart = {
  amountOfProduct: 0,
  price: 0,
  deliveryFee: 20,
  products: [
  ],
  totalPrice: 0,
};

dataSources.autorsList = [
  'Artur Conan Doyle',
  'Andrzej Sapkowski',
  'Angus Watson',
  'Brandon Sanderson',
  'Brian Williams',
  'Carole Trebor',
  'Charlle Fletcher',
  'David Levithan',
  'Fernando Sobral',
  'Florence Hinckel',
  'John Ronald Reuel Tolkien',
  'Kass Morgan',
  'Lev Grossman',
  'Paul Hoffman',
  'Rachel Cohn',
  'Rachel E. Carter',
  'Robert Foryś',
  'Robin Lafevers',
  'Roderick Gordon',
  'Sebastien De Castell',
  'Stephen King',
  'Trudi Canavan',
  'Vincent Villeminot',
  'Wasilij Machanienko',
  'Yves Grevet'
];

export default dataSources;