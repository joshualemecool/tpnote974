-Ne pas oublier de faire $env:ENV="local" avant de lancer le test (finalement plus besoin car j'ai directement mit dans le path pour github)
-sur le playwright UI (si vous faites les tests là desus) faites features par features et pas tout d'un coup car j'ai l'impression que ça consomme beaucoup
et que ça fait bugué les tests
-j'ai rajouté le .env même s'il si c'est une mauvaise pratique mais sinon vous pourrez pas lancer les tests
-si vous supprimer le compte du .env à votre bdd bah forcément ça marchera plus donc ne reinitialisez pas votre bdd svppp
-le E2E sans l'UI fonctionne juste sur firefox j'ai l'impression mais avec l'UI il fonctionne totalement
-je rajoute pas le node module mais il faut : 
    ¤@faker-js\faker
    ¤@playwright
    ¤@types\node
et les autres trucs
