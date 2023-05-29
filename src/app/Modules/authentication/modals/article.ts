
export class ArticleData {
article!:NewArticle
}

export class NewArticle{
    article!:Article
}

export class Article extends NewArticle {
    public body:string;
    public description:string;
    // public tagList:string;
    public tagList: tagList[];
    public title:string;

}
export class tagList{
    public tagList:string;
}
