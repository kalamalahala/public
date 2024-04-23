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

/* eslint-disable no-console */
console.log("Hello World! (from create-block-helldivers-2-major-order block)");
/* eslint-enable no-console */

// fetch https://helldiverstrainingmanual.com/api/v1/war/major-orders
const url = "https://helldiverstrainingmanual.com/api/v1/war/major-orders";
fetch(url).then(response => response.json()).then(data => {
  data.forEach(order => {
    // convert 'expiresIn' to #D #H #M #S
    const expiresIn = order.expiresIn;
    const days = Math.floor(expiresIn / (24 * 60 * 60));
    const hours = Math.floor(expiresIn % (24 * 60 * 60) / (60 * 60));
    const minutes = Math.floor(expiresIn % (60 * 60) / 60);
    const seconds = Math.floor(expiresIn % 60);
    console.log(days, hours, minutes, seconds);
    const majorOrder = document.createElement("div");
    majorOrder.innerHTML = `
                <div style="color: white;">
                <h2>${order.setting.overrideTitle}</h2>
                <p>${days} days ${hours} hours ${minutes} minutes ${seconds} seconds</p>
                <p>${order.setting.overrideBrief}</p>
                <p>${order.setting.taskDescription}</p>
                <p>${order.setting.reward.amount} XP</p>
                </div>
            `;
    const block = document.querySelector(".helldivers-2-major-order-block");
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
/******/ })()
;
//# sourceMappingURL=view.js.map