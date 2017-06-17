var createArticle = `mutation createArticleQuery($input: CreateArticleInput!){
  createArticle(input: $input){
    changedArticle{
      id
      modifiedAt
      title
      content
      category
      author {
        edges{
          node{
            username
            id
          }
        }
      }
    }
  } 
}`;

var articleData = {
  "input": {
    "title": "the first article ever written",
    "content": "Blah Blah Blah",
    "category": "Campus",
    "clientMutationId": "VXNlcjox"
  }
};

var getArticle = `query getArticleQuery($input: ID!){
  getArticle(id:$input){
    title
    id
    content
    modifiedAt
  }
}`;

var getArticleData = {
  "input": "QXJ0aWNsZTox"
};

var getAllArticles = `query getAllArticles {
  viewer {
    allArticles {
      edges {
        node{
          title
          category
          content
          author {
            edges{
              node {
                id
                name
              }
            }
          }
        }
      }
    }
  }
}`;


$.ajax({
    type: "POST",
    url: "https://us-west-2.api.scaphold.io/graphql/tpham572",
    data: JSON.stringify({
        query: getAllArticles
    }),
    contentType: 'application/json',
    success: function(response){
        console.log(response);
        let articles = [];
        if (response.hasOwnProperty('data')) {
            let articleEdges = response.data.viewer.allArticles.edges;
            for (var article of articleEdges){
                articles.push(article.node);
            }
        }
        
        $('#article-1').find('h2').html(articles[0].title);
        $('#article-1').find('article').html(articles[0].content);
        
        $('#article-2').find('h3').html(articles[1].title);
        $('#article-2').find('article').html(articles[1].content)
        .text(function(articles, currentText) {
            return currentText.substr(0,445);
        }).append("<br /><a href='#'>Continue Reading ...</a>");
        
        
        $('#article-3').find('h3').html(articles[0].title);
        $('#article-3').find('article').html(articles[0].content).text(function(articles, currentText) {
            return currentText.substr(0,445);
        }).append("<br /><a href='#'>Continue Reading ...</a>");
        
        $('#article-4').find('h3').html(articles[1].title);
        $('#article-4').find('article').html(articles[1].content).text(function(articles, currentText) {
            return currentText.substr(0,445);
        }).append("<br /><a href='#'>Continue Reading ...</a>");
        
        console.log('HERE IS THE ARTICLES ARRAY');
        console.log(articles);
    }
});
