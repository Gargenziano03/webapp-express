# Esercizio
* Ciao è ora di mettere alla prova le vostre conoscenze iniziando a costruire la vostra prima app completa!
* Il nostro obbiettivo é creare una semplice app gestionale per inserire film e recensioni pubbliche.
## Ecco i primi step:
- Pensate alla struttura del database che vorreste creare e disegnate il diagramma ER
- Utilizzando il file in allegato, creiamo un database con MySQL Workbench (importandolo dal file)
- Creiamo una nuova applicazione Express
- Colleghiamo l’app al db e verifichiamo che tutto funzioni
- Prepariamo una rotta index per ottenere la lista dei film
- Prepariamo una rotta show per ottenere i dettagli di un singolo film e le sue recensioni
## Bonus
- Inserire i dati di connessione al database come variabili d’ambiente
- Inserire le vostre API in controller
- Inserire le vostre rotte in un router
- Inserire un middleware per le rotte inesistenti
- Inserire un middleware per la gestione errori

# Movies Reviews App
* Un’app di recensione di film in cui si possono lasciare reviews pubblici.

# descrizione
* L'app Book Reviews App è un sistema di gestione dei film che permette agli utenti di lasciare recensioni pubbliche

# Caratteristiche chiave
* Lasciare commenti pubblici sui libri
* Gestione dei libri con sistema di votazione

## DATABASE
* Table: movies
* Table: reviews

## Movies Table
* id | PK - AI
* title | VARCHAR(255) - NOTNULL
* director | VARCHAR(255) -NOTNULL
* genre | VARCHAR(255) - NULL
* release_year| YEAR - NULL
* abstract | TEXT(500) - NULL
* image | VARCHAR(255) - NULL
* created_at | TIMESTAMP - NOTNULL
* updated_at | TIMESTAMP - NOTNULL

## Reviews Table (one to many)
* id | PK - AI
* movie_id | FK 
* name | VARCHAR(255) - NOTNULL
* vote | TINYINT - NOTNULL
* text | TEXT - NULL
* created_at | TIMESTAMP - NOTNULL
* updated_at | TIMESTAMP - NOTNULL