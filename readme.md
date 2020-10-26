# crocovid

Fetches COVID-19 stats for Croatia from [koronavirus.hr](https://www.koronavirus.hr/) via CLI.
The CLI is in Croatian but there is an option to print text in English.
It allows for the following:
 - quick overview of the stats for Croatia and the world
 - print stats by counties
 - sort stats across counties by number of cases, active cases, and deaths
 - print stats for a single county

## Usage

In order to use this CLI run the following command.
```
npx crocovid
```
## Examples

Display general stats for counties
```
npx crocovid -c
```

Sort counties by the number of active cases
Options: aktivni, preminuli, zarazeni
```
npx crocovid -cs aktivni
```

Display stats for a single county.
N.B. You will receive a prompt where you pick a county
```
npx crocovid -d 
```

Display stats for Croatia and the world in the past 10 days
```
npx crocovid -w
```

Display stats for counties and print the text in English
```
npx crocovid -ce
```
