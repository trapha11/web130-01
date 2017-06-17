import { getCampusArticles } from './queries';
import { displayArticles } from './display';


if (js_page == 'campus_page') {
    
    let campusFilter= {
        "where": {
            "category": {
                "eq": "Campus"
            }
        }
    };
    $.ajax({
        type: "POST",
        url: "https://us-west-2.api.scaphold.io/graphql/tpham572",
        data: JSON.stringify({
            query: getCampusArticles,
            variables: campusFilter
        }),
        contentType: 'application/json',
        success: function(response) {
            let articles = [];
            if (response.hasOwnProperty('data')) {
                let articleEdges = response.data.viewer.allArticles.edges;
                for (var article of articleEdges) {
                    articles.push(article.node);
                }
            }
            
            displayArticles(articles);
        }
    });
}