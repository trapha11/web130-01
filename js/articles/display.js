const MAX_ARTICLES = 5;

export let displayArticles = (articles) => {
    let numberToDisplay = Math.min(articles.length, MAX_ARTICLES),
        i;
    for (i = 0; i < numberToDisplay; i++) {
        let article = articles[i],
            $elem = $('#article-'+ (i + 1));
        $elem.find('h1, h2, h3').html(article.title);
        $elem.find('.category').html(article.category);
        $elem.find('.date').html(article.createdAt);
        $elem.find('.more').html(article.content).text(function(articles, currentText) {
            return currentText.substr(0,445);
        }).append("<br /><a href='view.html'>Continue Reading ...</a>");
        $elem.find('.view').html(article.content);
    }
};