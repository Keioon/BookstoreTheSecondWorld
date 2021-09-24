Kiedy dołączasz do istniejącego projektu, w którym jest już zainicjowany NPM (czyli takiego, gdzie istnieje już plik package.json), nie musisz ponownie wywoływać komendy npm init -y. Podobnie będzie w sytuacji, gdy będziesz zakładać nowy projekt, kopiując z poprzedniego  plik package.json, aby nie musieć przeprowadzać ponownej konfiguracji. To, co musisz natomiast zrobić w takich przypadkach, to zainstalować wszystkie pakiety, których lista znajduje się w pliku package.json. W tym celu wystarczy uruchomić komendę npm install.

Start:
Umieszczenie w katalogu projektu pliku package.json.
Uruchomienie task runnera komendą npm run init-project, a następnie trybu watch komendą npm run watch