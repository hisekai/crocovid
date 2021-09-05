# crocovid

Fetches COVID-19 stats for Croatia from [koronavirus.hr](https://www.koronavirus.hr/) via CLI.
The CLI is in Croatian but there is an option to print text in English.
It allows for the following:

-   quick overview of the stats for Croatia and the world
-   print stats by counties
-   sort stats across counties by number of cases, active cases, and deaths
-   print stats for a single county

## Usage

In order to use this CLI run the following command.

```sh
npx crocovid
```

### N.B.

The npx command temporarily installs the crocovid package so it might take some time to print data.
You could install crocovid globally:

```sh
npm i -g crocovid
```

and then you'd only need to run crocovid from your terminal without waiting for it to install.

## Examples

Display general stats for counties

```sh
npx crocovid -c
```

Sort counties by the number of active cases
Options: aktivni, preminuli, zarazeni

```sh
npx crocovid -cs aktivni
```

Display stats for a single county.
N.B. You will receive a prompt where you pick a county

```sh
npx crocovid -d
```

Display stats for Croatia and the world in the past 10 days

```sh
npx crocovid -w
```

Display stats for counties and print the text in English

```sh
npx crocovid -ce
```

Display the helptext

```sh
npx help
```
