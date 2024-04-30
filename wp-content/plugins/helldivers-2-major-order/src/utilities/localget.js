export async function localGet(url = '/wp-json/helldivers-2-major-order/v1/', endpoint = 'major-order') {
  return fetch(url + endpoint)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
}