 const countries = [
      {
        "name": "Afghanistan",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan.svg"
      },
      {
        "name": "Albania",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg"
      },
      {
        "name": "Algeria",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg"
      },
      {
        "name": "Andorra",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg"
      },
      {
        "name": "Angola",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg"
      },
      {
        "name": "Antigua and Barbuda",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg"
      },
      {
        "name": "Argentina",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
      },
      {
        "name": "Armenia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg"
      },
      {
        "name": "Australia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg"
      },
      {
        "name": "Austria",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg"
      },
      {
        "name": "Azerbaijan",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg"
      },
      {
        "name": "Bahamas",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg"
      },
      {
        "name": "Bahrain",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg"
      },
      {
        "name": "Bangladesh",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg"
      },
      {
        "name": "Barbados",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg"
      },
      {
        "name": "Belarus",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg"
      },
      {
        "name": "Belgium",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg"
      },
      {
        "name": "Belize",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg"
      },
      {
        "name": "Benin",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg"
      },
      {
        "name": "Bhutan",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg"
      },
      {
        "name": "Bolivia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg"
      },
      {
        "name": "Bosnia and Herzegovina",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg"
      },
      {
        "name": "Botswana",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg"
      },
      {
        "name": "Brazil",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"
      },
      {
        "name": "Brunei",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg"
      },
      {
        "name": "Bulgaria",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg"
      },
      {
        "name": "Burkina Faso",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg"
      },
      {
        "name": "Burundi",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg"
      },
      {
        "name": "Cabo Verde",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg"
      },
      {
        "name": "Cambodia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg"
      },
      {
        "name": "Cameroon",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg"
      },
      {
        "name": "Canada",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
      },
      {
        "name": "Central African Republic",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg"
      },
      {
        "name": "Chad",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg"
      },
      {
        "name": "Chile",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg"
      },
      {
        "name": "China",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"
      },
      {
        "name": "Colombia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
      },
      {
        "name": "Comoros",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg"
      },
      {
        "name": "Congo (Congo-Brazzaville)",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg"
      },
      {
        "name": "Costa Rica",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg"
      },
      {
        "name": "Croatia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg"
      },
      {
        "name": "Cuba",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg"
      },
      {
        "name": "Cyprus",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg"
      },
      {
        "name": "Czechia (Czech Republic)",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg"
      },
      {
        "name": "Denmark",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg"
      },
      {
        "name": "Djibouti",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg"
      },
      {
        "name": "Dominica",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg"
      },
      {
        "name": "Dominican Republic",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg"
      },
      {
        "name": "Ecuador",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg"
      },
      {
        "name": "Egypt",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg"
      },
      {
        "name": "El Salvador",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg"
      },
      {
        "name": "Equatorial Guinea",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg"
      },
      {
        "name": "Eritrea",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg"
      },
      {
        "name": "Estonia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg"
      },
      {
        "name": "Eswatini (fmr. Swaziland)",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Eswatini.svg"
      },
      {
        "name": "Ethiopia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg"
      },
      {
        "name": "Fiji",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg"
      },
      {
        "name": "Finland",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg"
      },
      {
        "name": "France",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
      },
      {
        "name": "Gabon",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg"
      },
      {
        "name": "Gambia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg"
      },
      {
        "name": "Georgia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg"
      },
      {
        "name": "Germany",
        "flag": "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"
      },
      {
        "name": "Ghana",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg"
      },
      {
        "name": "Greece",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg"
      },
      {
        "name": "Grenada",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg"
      },
      {
        "name": "Guatemala",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg"
      },
      {
        "name": "Guinea",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg"
      },
      {
        "name": "Guinea-Bissau",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg"
      },
      {
        "name": "Guyana",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg"
      },
      {
        "name": "Haiti",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg"
      },
      {
        "name": "Holy See",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg"
      },
      {
        "name": "Honduras",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg"
      },
      {
        "name": "Hungary",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg"
      },
      {
        "name": "Iceland",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg"
      },
      {
        "name": "India",
        "flag": "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
      },
      {
        "name": "Indonesia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg"
      },
      {
        "name": "Iran",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg"
      },
      {
        "name": "Iraq",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg"
      },
      {
        "name": "Ireland",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg"
      },
      {
        "name": "Israel",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg"
      },
      {
        "name": "Italy",
        "flag": "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
      },
      {
        "name": "Jamaica",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg"
      },
      {
        "name": "Japan",
        "flag": "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg"
      },
      {
        "name": "Jordan",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg"
      },
      {
        "name": "Kazakhstan",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg"
      },
      {
        "name": "Kenya",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg"
      },
      {
        "name": "Kiribati",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg"
      },
      {
        "name": "Kuwait",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg"
      },
      {
        "name": "Kyrgyzstan",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg"
      },
      {
        "name": "Laos",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg"
      },
      {
        "name": "Latvia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg"
      },
      {
        "name": "Lebanon",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg"
      },
      {
        "name": "Lesotho",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg"
      },
      {
        "name": "Liberia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg"
      },
      {
        "name": "Libya",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg"
      },
      {
        "name": "Liechtenstein",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg"
      },
      {
        "name": "Lithuania",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg"
      },
      {
        "name": "Luxembourg",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg"
      },
      {
        "name": "Madagascar",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg"
      },
      {
        "name": "Malawi",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg"
      },
      {
        "name": "Malaysia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg"
      },
      {
        "name": "Maldives",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg"
      },
      {
        "name": "Mali",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg"
      },
      {
        "name": "Malta",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg"
      },
      {
        "name": "Marshall Islands",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg"
      },
      {
        "name": "Mauritania",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg"
      },
      {
        "name": "Mauritius",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg"
      },
      {
        "name": "Mexico",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg"
      },
      {
        "name": "Micronesia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg"
      },
      {
        "name": "Moldova",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg"
      },
      {
        "name": "Monaco",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg"
      },
      {
        "name": "Mongolia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg"
      },
      {
        "name": "Montenegro",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg"
      },
      {
        "name": "Morocco",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg"
      },
      {
        "name": "Mozambique",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg"
      },
      {
        "name": "Myanmar (formerly Burma)",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg"
      },
      {
        "name": "Namibia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg"
      },
      {
        "name": "Nauru",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg"
      },
      {
        "name": "Nepal",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg"
      },
      {
        "name": "Netherlands",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg"
      },
      {
        "name": "New Zealand",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg"
      },
      {
        "name": "Nicaragua",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg"
      },
      {
        "name": "Niger",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg"
      },
      {
        "name": "Nigeria",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg"
      },
      {
        "name": "North Korea",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg"
      },
      {
        "name": "North Macedonia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg"
      },
      {
        "name": "Norway",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg"
      },
      {
        "name": "Oman",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg"
      },
      {
        "name": "Pakistan",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
      },
      {
        "name": "Palau",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg"
      },
      {
        "name": "Palestine State",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"
      },
      {
        "name": "Panama",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg"
      },
      {
        "name": "Papua New Guinea",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg"
      },
      {
        "name": "Paraguay",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg"
      },
      {
        "name": "Peru",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg"
      },
      {
        "name": "Philippines",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg"
      },
      {
        "name": "Poland",
        "flag": "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg"
      },
      {
        "name": "Portugal",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"
      },
      {
        "name": "Qatar",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg"
      },
      {
        "name": "Romania",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg"
      },
      {
        "name": "Russia",
        "flag": "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg"
      },
      {
        "name": "Rwanda",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg"
      },
      {
        "name": "Saint Kitts and Nevis",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg"
      },
      {
        "name": "Saint Lucia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg"
      },
      {
        "name": "Saint Vincent and the Grenadines",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg"
      },
      {
        "name": "Samoa",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg"
      },
      {
        "name": "San Marino",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg"
      },
      {
        "name": "Sao Tome and Principe",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg"
      },
      {
        "name": "Saudi Arabia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
      },
      {
        "name": "Senegal",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg"
      },
      {
        "name": "Serbia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg"
      },
      {
        "name": "Seychelles",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg"
      },
      {
        "name": "Sierra Leone",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg"
      },
      {
        "name": "Singapore",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg"
      },
      {
        "name": "Slovakia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg"
      },
      {
        "name": "Slovenia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg"
      },
      {
        "name": "Solomon Islands",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg"
      },
      {
        "name": "Somalia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg"
      },
      {
        "name": "South Africa",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg"
      },
      {
        "name": "South Korea",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg"
      },
      {
        "name": "South Sudan",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg"
      },
      {
        "name": "Spain",
        "flag": "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
      },
      {
        "name": "Sri Lanka",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg"
      },
      {
        "name": "Sudan",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg"
      },
      {
        "name": "Suriname",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg"
      },
      {
        "name": "Sweden",
        "flag": "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg"
      },
      {
        "name": "Switzerland",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg"
      },
      {
        "name": "Syria",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg"
      },
      {
        "name": "Tajikistan",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg"
      },
      {
        "name": "Tanzania",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg"
      },
      {
        "name": "Thailand",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg"
      },
      {
        "name": "Timor-Leste",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg"
      },
      {
        "name": "Togo",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg"
      },
      {
        "name": "Tonga",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg"
      },
      {
        "name": "Trinidad and Tobago",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg"
      },
      {
        "name": "Tunisia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg"
      },
      {
        "name": "Turkey",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"
      },
      {
        "name": "Turkmenistan",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg"
      },
      {
        "name": "Tuvalu",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg"
      },
      {
        "name": "Uganda",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg"
      },
      {
        "name": "Ukraine",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg"
      },
      {
        "name": "United Arab Emirates",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg"
      },
      {
        "name": "United Kingdom",
        "flag": "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
      },
      {
        "name": "United States",
        "flag": "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
      },
      {
        "name": "Uruguay",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg"
      },
      {
        "name": "Uzbekistan",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg"
      },
      {
        "name": "Vanuatu",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg"
      },
      {
        "name": "Venezuela",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg"
      },
      {
        "name": "Vietnam",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
      },
      {
        "name": "Yemen",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg"
      },
      {
        "name": "Zambia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg"
      },
      {
        "name": "Zimbabwe",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg"
      }
    ]
  

    export default countries;
  