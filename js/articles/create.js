import { createArticle } from './queries';

let createData = (title, category, content) => {
    return {
        "input": {
            "authorId": Cookies.get('userId'),
            "title": title,
            "category": category,
            "content": content
        }
    };
};


$('#create-button').on('click', (event) => {
    // Don't actually submit form
    event.preventDefault();

    let title = $('input[name="title"]').val(),
        category = $('[name="category"]').val(),
        content = $('[name="content"]').val(),
        data = createData(title, category, content);

    $.ajax({
        type: "POST",
        url: "https://us-west-2.api.scaphold.io/graphql/tpham572",
        data: JSON.stringify({
            query: createArticle,
            variables: data
        }),
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + Cookies.get('token')
        },
        success: function(response) {
            if (response.hasOwnProperty('data')) {
                alert('You created a new article!');
                $('form')[0].reset();
                //alert(response.errors[0].message);
            //} else if (response.hasOwnProperty('data')) {
                //console.log(response.data);
            }  
        },
        error: function(response) {
            console.log(response);
            if (response.hasOwnProperty('errors')) {
                alert(response.errors[0].message);
            }
        }
    });
});