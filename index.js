const Content = require('./content');
const content = new Content();
const URL = "https://qiita.com/api/v2/items";

// 記事を表示する
content.getArticles(URL);