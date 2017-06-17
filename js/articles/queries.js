// All articles
export const getAllArticles = `
    query getAllArticles {
        viewer {
            allArticles{
                edges {
                    node {
                        id
                        title
                        content
                        category
                        createdAt
                        author {
                            id
                            name
                        }
                    }
                }
            }
        }
    }`;


// Campus category articles
export const getCampusArticles = `
    query getCampusArticles($where: ArticleWhereArgs) {
        viewer {
            allArticles(where: $where) {
                edges {
                    node {
                        id
                        title
                        content
                        category
                        createdAt
                        author {
                            id
                            name
                        }
                    }
                }
            }
        }
    }`;

// Community category articles
export const getCommunityArticles = `
    query getCommunityArticles($where: ArticleWhereArgs) {
        viewer {
            allArticles(where: $where) {
                edges {
                    node {
                        id
                        title
                        content
                        category
                        createdAt
                        author {
                            id
                            name
                        }
                    }
                }
            }
        }
    }`;

// Opinion category articles
export const getOpinionArticles = `
    query getCampusArticles($where: ArticleWhereArgs) {
        viewer {
            allArticles(where: $where) {
                edges {
                    node {
                        id
                        title
                        content
                        category
                        createdAt
                        author {
                            id
                            name
                        }
                    }
                }
            }
        }
    }`;

// Create new article
export const createArticle = `
    mutation createArticleQuery($input: CreateArticleInput!) {
        createArticle(input: $input) {
            changedArticle {
                id
                modifiedAt
                title
                content
                category
                author {
                    id
                    name
                }
            }
        }
    }`;