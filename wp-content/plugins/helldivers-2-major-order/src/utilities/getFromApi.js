import { appApiUrl, wpApiUrl, endpoints } from "./constants";

export async function getFromApi(mode = "wp", endpoint = "major-orders") {
	let apiUrl = mode === "wp" ? wpApiUrl : appApiUrl;
	const url = apiUrl + endpoints[endpoint];

	return fetch(url)
		.then((response) => response.json())
		.then((data) => {
			if (mode === "app") {
				// add planet data from campaign endpoint


				// send POST request to WP to update the data
				fetch(wpApiUrl + endpoints[endpoint], {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}).then((response) => {
					console.log("Data updated on WP");
				});
			}
			return data;
		});
}
