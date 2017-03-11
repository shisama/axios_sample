const axios = require('axios');
const foo = "foo";
class Content {
  printArticles(data) {
      for (let item of data) {
        console.log(`${item.user.id}: \t${item.title}`);
      }
  };

  async getArticles(url) {
      const res = await axios.get(url);
      if (res.status !== 200) {
          console.log("Error!!");
          process.exit();
      }
      this.printArticles(res.data);
  };
}

module.exports = Content;