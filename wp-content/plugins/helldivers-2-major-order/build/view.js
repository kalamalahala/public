/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

const url = "https://helldiverstrainingmanual.com/api/v1/war/major-orders";
const campaignStatus = "https://helldiverstrainingmanual.com/api/v1/war/campaign";
const automatonRed = "#ef7679";
const terminidOrange = "#ffa300";
fetch(url).then(response => response.json()).then(data => {
  data.forEach(order => {
    fetch(campaignStatus).then(response => response.json()).then(campaignData => {
      const planetGroup = document.querySelector(".mo-planets-group");
      planetGroup.innerHTML = "";

      // reorder planets by planet name
      campaignData.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      campaignData.forEach(planet => {
        if (planet.majorOrder) {
          const factionColor = planet.faction === "Terminids" ? terminidOrange : automatonRed;
          const requirementGroup = document.querySelector(".mo-requirements-group");
          requirementGroup.style.color = factionColor;
          const planetElement = document.createElement("div");
          planetElement.classList.add("mo-planet");
          const planetName = document.createElement("div");
          planetName.classList.add("mo-planet-name");
          planetName.style.color = factionColor;
          planetName.innerHTML = planet.name.toUpperCase();
          const planetProgress = document.createElement("div");
          planetProgress.classList.add("mo-planet-progress");
          planetProgress.style.backgroundColor = factionColor;
          let truncatedPercentage = planet.percentage.toFixed(2);
          // planetProgress.innerHTML = `${truncatedPercentage}%`;

          // Dynamically set the width of the progress bar
          const progressBarAfter = document.createElement("div");
          progressBarAfter.innerHTML = `${truncatedPercentage}%`;
          progressBarAfter.style.width = `${planet.percentage}%`;
          progressBarAfter.style.height = "100%"; // Set height to 100%
          progressBarAfter.style.backgroundColor = "#9fcce1"; // Set background color
          progressBarAfter.style.borderRadius = "5px"; // Set border radius
          progressBarAfter.style.position = "absolute"; // Position absolutely
          progressBarAfter.style.top = "0"; // Align to top
          progressBarAfter.style.left = "0"; // Align to left
          progressBarAfter.style.color = "black"; // Set text color
          progressBarAfter.style.display = "flex"; // Align text to center
          progressBarAfter.style.justifyContent = "flex-start"; // Align text to left
          progressBarAfter.style.paddingLeft = "5px"; // Add padding to text
          planetProgress.appendChild(progressBarAfter);
          planetElement.appendChild(planetName);
          planetElement.appendChild(planetProgress);
          planetGroup.appendChild(planetElement);
        }
      });

      // set grid-template-columns to valid planets
      if (campaignData.length > 1) {
        let planetsInCampaign = 0;
        campaignData.forEach(planet => {
          if (planet.majorOrder) {
            planetsInCampaign++;
          }
        });
        planetGroup.style.gridTemplateColumns = `repeat(${planetsInCampaign}, 1fr)`;
      }
    });
  });
  console.log(data);
  const bodyElement = document.querySelector(".mo-body");
  const taskDescription = document.querySelector(".mo-requirements p");
  const rewardsElement = document.querySelector(".reward");
  bodyElement.innerHTML = data[0].setting.overrideBrief;
  taskDescription.innerHTML = data[0].setting.taskDescription;
  rewardsElement.innerHTML = data[0].setting.reward.amount;
  const timeRemainingElement = document.querySelector(".mo-timer-countdown");
  const timeRemaining = data[0].expiresIn;
  // const remainingSeconds = timeRemaining % 60;
  // const remainingMinutes = Math.floor(timeRemaining / 60) % 60;
  const remainingHours = Math.floor(timeRemaining / 3600) % 24;
  const remainingDays = Math.floor(timeRemaining / 86400);
  timeRemainingElement.innerHTML = `${remainingDays}D ${remainingHours}H`;

  // const planetArray = data[0].planets;
  // console.log(planetArray);

  // planetArray.forEach((planet) => {
  // 	const planetGroup = document.querySelector(".mo-planets-group");
  // 	const planetElement = document.createElement("div");
  // 	planetElement.classList.add("mo-planet");

  // 	const planetName = document.createElement("div");
  // 	planetName.classList.add("mo-planet-name");
  // 	planetName.innerHTML = planet.name;

  // 	const planetProgress = document.createElement("div");
  // 	planetProgress.classList.add("mo-planet-progress");
  // 	planetProgress.innerHTML = `${planet.percentage}%`;

  // 	planetGroup.innerHTML = "";

  // 	planetElement.appendChild(planetName);
  // 	planetElement.appendChild(planetProgress);
  // 	planetGroup.appendChild(planetElement);
  // });
});

/*
    {
    "id32": 3339519263,
    "progress": [
        0
    ],
    "expiresIn": 414243,
    "setting": {
        "type": 4,
        "overrideTitle": "MAJOR ORDER",
        "overrideBrief": "Both the Terminids and Automatons are attacking. Defend our territory on both fronts.",
        "taskDescription": "Succeed in the Defense of at least 10 planets.",
        "tasks": [
            {
                "type": 12,
                "values": [
                    10,
                    0,
                    0,
                    0
                ],
                "valueTypes": [
                    3,
                    1,
                    11,
                    12
                ]
            }
        ],
        "reward": {
            "type": 1,
            "id32": 897894480,
            "amount": 50
        },
        "flags": 0
    }
}
*/

/*
this week's order

{
    "id32": 3330700246,
    "progress": [
        0,
        0,
        0
    ],
    "expiresIn": 503770,
    "setting": {
        "type": 4,
        "overrideTitle": "MAJOR ORDER",
        "overrideBrief": "Termicide exposure has been linked to a hyper-reproductive adaptation causing massive bug outbreaks. Meridia is already lost, but the remaining Barrier Planets can still be saved.",
        "taskDescription": "Deactivate the Terminid Control System on Erata Prime, Fenrir III, and Turing.",
        "tasks": [
            {
                "type": 11,
                "values": [
                    1,
                    1,
                    168
                ],
                "valueTypes": [
                    3,
                    11,
                    12
                ]
            },
            {
                "type": 11,
                "values": [
                    1,
                    1,
                    125
                ],
                "valueTypes": [
                    3,
                    11,
                    12
                ]
            },
            {
                "type": 11,
                "values": [
                    1,
                    1,
                    126
                ],
                "valueTypes": [
                    3,
                    11,
                    12
                ]
            }
        ],
        "reward": {
            "type": 1,
            "id32": 897894480,
            "amount": 50
        },
        "flags": 0
    }
}
*/

/*
campaign json

[
  {
    "planetIndex": 78,
    "name": "Crimsica",
    "faction": "Terminids",
    "players": 8490,
    "health": 593230,
    "maxHealth": 600000,
    "percentage": 1.12833333333333,
    "defense": true,
    "majorOrder": false,
    "biome": {
      "slug": "crimsonmoor",
      "description": "A crimson algae has propagated wildly across this entire planet, coating its rocky hills with a constant red that masks the spilt blood of the heroes who defend it from tyranny."
    },
    "expireDateTime": 1714487512.438
  },
  {
    "planetIndex": 259,
    "name": "Omicron",
    "faction": "Terminids",
    "players": 10415,
    "health": 229635,
    "maxHealth": 1000000,
    "percentage": 77.0365,
    "defense": false,
    "majorOrder": false,
    "biome": {
      "slug": "tundra",
      "description": "A perenially chilly climate has allowed short, colourful shrubs to flourish across this planet's surface."
    },
    "expireDateTime": null
  },
  {
    "planetIndex": 198,
    "name": "Marfark",
    "faction": "Automatons",
    "players": 3782,
    "health": 285098,
    "maxHealth": 1000000,
    "percentage": 71.4902,
    "defense": false,
    "majorOrder": false,
    "biome": {
      "slug": "winter",
      "description": "Submerged in eternal winter, this world's frosty peaks glimmer in the light of its too-distant star."
    },
    "expireDateTime": null
  },
  {
    "planetIndex": 203,
    "name": "Menkent",
    "faction": "Automatons",
    "players": 4685,
    "health": 383561,
    "maxHealth": 1000000,
    "percentage": 61.6439,
    "defense": false,
    "majorOrder": false,
    "biome": {
      "slug": "desolate",
      "description": "Scorching temperatures, high winds, and low precipitation cause a near-constant cycle of fires to sweep this planet, punctuated by short bursts of lush rebirth between infernos."
    },
    "expireDateTime": null
  },
  {
    "planetIndex": 201,
    "name": "Meissa",
    "faction": "Automatons",
    "players": 1185,
    "health": 414734,
    "maxHealth": 1000000,
    "percentage": 58.5266,
    "defense": false,
    "majorOrder": false,
    "biome": {
      "slug": "jungle",
      "description": "Abundant with life, this wet planet is covered in deep oceans, thick forests, and tall grasses."
    },
    "expireDateTime": null
  },
  {
    "planetIndex": 158,
    "name": "Choepessa IV",
    "faction": "Automatons",
    "players": 1595,
    "health": 450775,
    "maxHealth": 1000000,
    "percentage": 54.9225,
    "defense": false,
    "majorOrder": false,
    "biome": {
      "slug": "icemoss",
      "description": "Ice and moss-covered rock can be found across most of the surface of this planet."
    },
    "expireDateTime": null
  },
  {
    "planetIndex": 160,
    "name": "Chort Bay",
    "faction": "Automatons",
    "players": 4256,
    "health": 456830,
    "maxHealth": 1000000,
    "percentage": 54.317,
    "defense": false,
    "majorOrder": false,
    "biome": {
      "slug": "toxic",
      "description": "Dense, toxic fumes from deep within the planet's crust seep out of cracks in the earth and coat the ground in a sickly haze."
    },
    "expireDateTime": null
  },
  {
    "planetIndex": 125,
    "name": "Fenrir III",
    "faction": "Terminids",
    "players": 68983,
    "health": 531982,
    "maxHealth": 1000000,
    "percentage": 46.8018,
    "defense": false,
    "majorOrder": true,
    "biome": {
      "slug": "moon",
      "description": "A rocky, lonely moon with extremely valuable mineral deposits underneath the surface."
    },
    "expireDateTime": null
  },
  {
    "planetIndex": 126,
    "name": "Turing",
    "faction": "Terminids",
    "players": 41381,
    "health": 583140,
    "maxHealth": 1000000,
    "percentage": 41.686,
    "defense": false,
    "majorOrder": true,
    "biome": {
      "slug": "ethereal",
      "description": "This world teems with ethereal, boundless, and peculiar plant life that spreads silent and uninterrupted across its entire surface."
    },
    "expireDateTime": null
  },
  {
    "planetIndex": 156,
    "name": "Charbal-VII",
    "faction": "Automatons",
    "players": 292,
    "health": 640744,
    "maxHealth": 1000000,
    "percentage": 35.9256,
    "defense": false,
    "majorOrder": false,
    "biome": {
      "slug": "toxic",
      "description": "Dense, toxic fumes from deep within the planet's crust seep out of cracks in the earth and coat the ground in a sickly haze."
    },
    "expireDateTime": null
  },
  {
    "planetIndex": 168,
    "name": "Erata Prime",
    "faction": "Terminids",
    "players": 12378,
    "health": 643231,
    "maxHealth": 1000000,
    "percentage": 35.6769,
    "defense": false,
    "majorOrder": true,
    "biome": {
      "slug": "desert",
      "description": "A desert planet prone to unpredictable and dangerous,sand twisters."
    },
    "expireDateTime": null
  },
  {
    "planetIndex": 34,
    "name": "Hellmire",
    "faction": "Terminids",
    "players": 5271,
    "health": 1000000,
    "maxHealth": 1000000,
    "percentage": 0,
    "defense": false,
    "majorOrder": false,
    "biome": {
      "slug": "desolate",
      "description": "Scorching temperatures, high winds, and low precipitation cause a near-constant cycle of fires to sweep this planet, punctuated by short bursts of lush rebirth between infernos."
    },
    "expireDateTime": null
  },
  {
    "planetIndex": 204,
    "name": "Merak",
    "faction": "Automatons",
    "players": 1180,
    "health": 1000000,
    "maxHealth": 1000000,
    "percentage": 0,
    "defense": false,
    "majorOrder": false,
    "biome": {
      "slug": "toxic",
      "description": "Dense, toxic fumes from deep within the planet's crust seep out of cracks in the earth and coat the ground in a sickly haze."
    },
    "expireDateTime": null
  }
]
*/

/* final nested fetch
[
    {
        "id32": 3330700246,
        "progress": [
            0,
            0,
            0
        ],
        "expiresIn": 497470,
        "setting": {
            "type": 4,
            "overrideTitle": "MAJOR ORDER",
            "overrideBrief": "Termicide exposure has been linked to a hyper-reproductive adaptation causing massive bug outbreaks. Meridia is already lost, but the remaining Barrier Planets can still be saved.",
            "taskDescription": "Deactivate the Terminid Control System on Erata Prime, Fenrir III, and Turing.",
            "tasks": [
                {
                    "type": 11,
                    "values": [
                        1,
                        1,
                        168
                    ],
                    "valueTypes": [
                        3,
                        11,
                        12
                    ]
                },
                {
                    "type": 11,
                    "values": [
                        1,
                        1,
                        125
                    ],
                    "valueTypes": [
                        3,
                        11,
                        12
                    ]
                },
                {
                    "type": 11,
                    "values": [
                        1,
                        1,
                        126
                    ],
                    "valueTypes": [
                        3,
                        11,
                        12
                    ]
                }
            ],
            "reward": {
                "type": 1,
                "id32": 897894480,
                "amount": 50
            },
            "flags": 0
        },
        "planets": [
            {
                "planetIndex": 125,
                "name": "Fenrir III",
                "faction": "Terminids",
                "players": 78416,
                "health": 533981,
                "maxHealth": 1000000,
                "percentage": 46.6019,
                "defense": false,
                "majorOrder": true,
                "biome": {
                    "slug": "moon",
                    "description": "A rocky, lonely moon with extremely valuable mineral deposits underneath the surface."
                },
                "expireDateTime": null
            },
            {
                "planetIndex": 126,
                "name": "Turing",
                "faction": "Terminids",
                "players": 46188,
                "health": 611634,
                "maxHealth": 1000000,
                "percentage": 38.8366,
                "defense": false,
                "majorOrder": true,
                "biome": {
                    "slug": "ethereal",
                    "description": "This world teems with ethereal, boundless, and peculiar plant life that spreads silent and uninterrupted across its entire surface."
                },
                "expireDateTime": null
            },
            {
                "planetIndex": 168,
                "name": "Erata Prime",
                "faction": "Terminids",
                "players": 13881,
                "health": 698826,
                "maxHealth": 1000000,
                "percentage": 30.117400000000004,
                "defense": false,
                "majorOrder": true,
                "biome": {
                    "slug": "desert",
                    "description": "A desert planet prone to unpredictable and dangerous,sand twisters."
                },
                "expireDateTime": null
            }
        ]
    }
]
*/
/******/ })()
;
//# sourceMappingURL=view.js.map