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

/* eslint-disable no-console */
console.log("Hello World! (from create-block-helldivers-2-major-order block)");
/* eslint-enable no-console */

// fetch https://helldiverstrainingmanual.com/api/v1/war/major-orders
const url = "https://helldiverstrainingmanual.com/api/v1/war/major-orders";
fetch(url)
	.then((response) => response.json())
	.then((data) => {
		data.forEach((order) => {
			const majorOrder = document.createElement("div");
			majorOrder.innerHTML = `
                <div style="background-color: #f0f0f0; padding: 1rem; margin-bottom: 1rem;">
                <h2>${order.setting.overrideTitle}</h2>
                <p>${order.setting.overrideBrief}</p>
                <p>${order.setting.taskDescription}</p>
                <p>${order.setting.reward.amount} XP</p>
                </div>
            `;

			// append to block .wp-block-create-block-helldivers-2-major-order
			const block = document.querySelector(
				".wp-block-create-block-helldivers-2-major-order",
			);
			block.appendChild(majorOrder);
		});
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
