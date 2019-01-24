const axios = require('axios');
const url = "https://qiita.com/api/v2/items";

async function main() {
  try {
    const res = await axios.get(url);
    const items = res.data;
    for (const item of items) {
      console.log(`${item.user.id}: \t${item.title}`);
    }
  } catch (error) {
    const {
      status,
      statusText
    } = error.response;
    console.log(`Error! HTTP Status: ${status} ${statusText}`);
  }
}

main();