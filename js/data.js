const dataSources = {}

dataSources.bookList = [
  {
    id: 0,
    title: "Droga Królów",
    autor: "Brandon Sanderson",
    type: "Fantasy",
    img: "images/drogaKrólów.jpg",
    price: 45.99,
  },
  {
    id: 1,
    title: "Słowa Światłości",
    autor: "Brandon Sanderson",
    type: "Fantasy",
    img: "images/słowaŚwiatłości.jpg",
    price: 45.99,
  },
  {
    id: 2,
    title: "Dawca Przysięgi I",
    autor: "Brandon Sanderson",
    type: "Fantasy",
    img: "images/słowaŚwiatłości.jpg",
    pice: 34.99,
  },
  {
    id: 3,
    title: "Dawca Przysięgi II",
    autor: "Brandon Sanderson",
    type: "Fantasy",
    img: "images/rytmWojnyCI.jpg",
    pice: 34.99,
  },
  {
    id: 4,
    title: "Rytm Wojny I", 
    autor: "Brandon Sanderson",
    type: "Fantasy",
    img: "images/rytmWojnyCI.jpg",
    pice: 40,
  },
  {
    id: 5,
    title: "Rytm Wojny II", 
    autor: "Brandon Sanderson",
    type: "Fantasy",
    img: "images/rytmWojnyCII.jpg",
    pice: 34.99,
  },
  {
    id: 6,
    title: "Gildia Magów", 
    autor: "Trudi Canavan", 
    type: "Fantasy",
    img: "images/gildiaMagów.jpg",
    price: 45.99
  },
  {
    id: 7,
    title: "Nowicjuszka", 
    autor: "Trudi Canavan",
    type: "Fantasy",
    img: "images/nowicjuszka.jpg",
    pice: 45.99,
  },
  {
    id: 8,
    title: "Wielki Mistrz",
    autor: "Trudi Canavan",
    type: "Fantasy",
    img: "images/wielkiMistrz.jpg",
    price: 45.99
  },
  {
    id: 9,
    title: "Misja Ambasadora",
    autor: "Trudi Canavan",
    type: "Fantasy",
    img: "images/misjaAmbasadora.jpg",
    price: 45.99
  },
  {
    id: 10,
    title: "Łotr",
    autor: "Trudi Canavan",
    type: "Fantasy",
    img: "images/łotr.jpg",
    price: 45.99
  },
  {
    id: 11,
    title: "Królowa Zdrajców",
    autor: "Trudi Canavan",
    type: "Fantasy",
    img: "images/królwaZdrajców.jpg",
    price: 45.99
  },
  {
    id: 12,
    title: "Złodziejska Magia",
    autor: "Trudi Canavan",
    type: "Fantasy",
    img: "images/złodziejskaMagia.jpg",
    price: 42.99
  },
  {
    id: 13,
    title: "Anioł Burz", 
    autor: "Trudi Canavan",
    type: "Fantasy",
    img: "images/aniołBurz.jpg",
    price: 42.99
  },
  {
    id: 14,
    title: "Obietnica Następcy",
    autor: "Trudi Canavan",
    type: "Fantasy",
    img: "images/obietnicaNastępcy.jpg",
    price: 42.99
  },
  {
    id: 15,
    title: "Klątwa Kreatorów",
    autor: "Trudi Canavan",
    type: "Fantasy",
    img: "images/klątwaKreatorów.jpg",
    price: 42.99
  },
  {
    id: 16,
    title: "Krew Elfów", 
    autor: "Andrzej Sapkowski",
    type: "Fantasy",
    img: "images/wiedźminKrewElfów.jpg",
    price: 36.99,
  },
  {
    id: 17,
    title: "Czas Pogardy",
    autor: "Andrzej Sapkowski",
    type: "Fantasy",
    img: "images/wiedźminCzasPogardy.jpg",
    price: 36.99
  },
  {
    id: 18,
    title: "Chrzest Ognia",
    autor: "Andrzej Sapkowski",
    type: "Fantasy",
    img: "image/wiedźminChrzestOgnia.jpg",
    price: 36.99
  },
  {
    id: 19,
    title: "Wieża Jaskółki",
    autor: "Andrzej Sapkowski",
    type: "Fantasy",
    img: "images/wiedźminWieżaJaskółki.jpg",
    price: 36.99
  },
  {
    id: 20,
    title: "Pani Jeziora",
    autor: "Andrzej Sapkowski",
    type: "Fantasy",
    img: "images/wiedźminPaniJeziora.jpg",
    price: 36.99
  },
  {
    id: 21,
    title: "Ostatnie Życzenie",
    autor: "Andrzej Sapkowski",
    type: "Fantasy",
    img: "images/wiedźminOstatnieŻyczenie.jpg",
    price: 31.99 
  },
  {
    id: 22,
    title: "Miecz Przeznaczenia",
    autor: "Andrzej Sapkowski",
    type: "Fantasy",
    img: "images/wiedźminMieczPrzeznaczenia.jpg",
    price: 31.99
  },
  {
    id: 23,
    title: "Sezon Burz",
    autor: "Andrzej Sapkowski",
    type: "Fantasy",
    img: "images/wiedźminSezonBurz.jpg",
    price: 31.99
  },
  {
    id: 24,
    title: "Szpony i Kły",
    autor: "Andrzej Sapkowski",
    type: "Fantasy",
    img: "images/wiedźminSzponyIKły.jpg",
    price: 28.99
  },
  {
    id: 25,
    title: "Adeptka",
    autor: "Rachel E. Carter",
    type: "Fantast",
    img: "image/adeptka.jpg",
    price: 32.99
  },
  {
    id: 26,
    title: "Cień Rycerza", 
    autor: "Sebastien De Castell",
    type: "Fantasy",
    img: "images/cieńRycerza.jpg",
    price: 32.99
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