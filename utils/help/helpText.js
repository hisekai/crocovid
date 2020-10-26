const { green, yellow, cyan, dim } = require("chalk");

const helpText = `
  Upotreba
      ${green(`npx crocovid`)} ${yellow(`[--opcije]`)} ${cyan(`<naredba>`)}

  Opcije
      --version,       -v       Prikaži trenutnu verziju
      --english,       -e       Prikaži sav text na Engleskom jeziku
      --counties,      -c       Prikaži podatke za sve županije
      --detail,        -d       Prikaži podatke za određenu županiju
      --world          -w       Usporedi Hrvatsku i svijet kroz vrijeme ${dim(
			`(default: 10 dana)`
		)}
      --sort           -s       Prikaži podatke i sortiraj ih prema broju
                                zaraženih, aktivnih, i umrlih

  Naredbe
        help                    Prikaži pomoć za korištenje crocovida

  Primjeri
        crocovid                Prikaži općenito podatke za Hrvatsku i svijet
        crocovid -c             Prikaži najnovije podatke za županije
        crocovid -cs aktivni    Sortiraj podatke županija prema broju aktivnih slučajeva
                                opcije: ${dim(`aktivni, preminuli, zarazeni`)}
        crocovid -d Zagrebačka  Prikaži podatke samo za Zagrebačku županiju
`;

module.exports = helpText;
