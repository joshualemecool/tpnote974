-Ne pas oublier de faire $env:ENV="local" avant de lancer le test
-sur le playwright UI (si vous faites les tests là desus) faites features par features et pas tout d'un coup car j'ai l'impression que ça consomme beaucoup
et que ça fait bugué les tests
-j'ai rajouté le .env même s'il si c'est une mauvaise pratique mais sinon vous pourrez pas lancer les tests
-si vous supprimer le compte du .env à votre bdd bah c'est de votre faute s'il arrive plus à se connecter pas la mienne pck mon register est fait avec un faker
-le E2E sans l'UI fonctionne juste sur firefox j'ai l'impression mais avec l'UI il fonctionne totalement
-je rajoute pas le node module mais il faut : 
    ¤@faker-js\faker
    ¤@playwright
    ¤@types\node
et les autres trucs