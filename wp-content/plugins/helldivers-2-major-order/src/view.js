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

import { localGet } from "./utilities/localget";


function main() {
  const url = "https://helldiverstrainingmanual.com/api/v1/war/major-orders";
  const campaignStatus =
    "https://helldiverstrainingmanual.com/api/v1/war/campaign";
  const automatonRed = "#ef7679";
  const terminidOrange = "#ffa300";
	const data = localGet();
	console.log(data);
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			data.forEach((order) => {
				fetch(campaignStatus)
					.then((response) => response.json())
					.then((campaignData) => {
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

						// create planet elements
						campaignData.forEach((planet) => {
							if (planet.majorOrder) {
								const factionColor =
									planet.faction === "Terminids"
										? terminidOrange
										: automatonRed;
								const requirementGroup = document.querySelector(
									".mo-requirements-group",
								);
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

								// Set progress bar width and apply styling
								const progressBarAfter = document.createElement("div");
								progressBarAfter.innerHTML = `${truncatedPercentage}%`;
								progressBarAfter.style.width = `${planet.percentage}%`;
								progressBarAfter.style.height = "100%";
								progressBarAfter.style.backgroundColor = "#9fcce1";
								progressBarAfter.style.borderRadius = "5px";
								progressBarAfter.style.position = "absolute";
								progressBarAfter.style.top = "0";
								progressBarAfter.style.left = "0";
								progressBarAfter.style.color = "black";
								progressBarAfter.style.display = "flex";
								progressBarAfter.style.justifyContent = "flex-start";
								progressBarAfter.style.paddingLeft = "5px";
								planetProgress.appendChild(progressBarAfter);
								planetElement.appendChild(planetName);
								planetElement.appendChild(planetProgress);
								planetGroup.appendChild(planetElement);
							}
						});

						// set grid-template-columns to valid planets
						if (campaignData.length > 1) {
							let planetsInCampaign = 0;
							campaignData.forEach((planet) => {
								if (planet.majorOrder) {
									planetsInCampaign++;
								}
							});

							planetGroup.style.gridTemplateColumns = `repeat(${planetsInCampaign}, 1fr)`;
						}
					});
			});

			const bodyElement = document.querySelector(".mo-body");
			const taskDescription = document.querySelector(".mo-requirements p");
			const rewardsElement = document.querySelector(".reward");

			bodyElement.innerHTML = data[0].setting.overrideBrief;
			taskDescription.innerHTML = data[0].setting.taskDescription;
			rewardsElement.innerHTML = data[0].setting.reward.amount;

			const timeRemainingElement = document.querySelector(
				".mo-timer-countdown",
			);
			const timeRemaining = data[0].expiresIn;
			const remainingHours = Math.floor(timeRemaining / 3600) % 24;
			const remainingDays = Math.floor(timeRemaining / 86400);

			timeRemainingElement.innerHTML = `${remainingDays}D ${remainingHours}H`;
		});
}

document.addEventListener("DOMContentLoaded", main);