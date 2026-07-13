//services & types
import { NewsArticle } from "@/generated/prisma/client";
import { setCategoryColour } from "@/services/setCategoryColour";
import { formatArticleDate } from "@/services/formatDate";

//components
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/components/mdx-components";
import ButtonComponent from "@/components/ButtonComponent";
import ArticleCardComponent from "@/components/ArticleCardComponent";

type ArticleModuleProps = {
    article: NewsArticle;
    randomArticles: NewsArticle[];
};

function ArticleModule({ article, randomArticles }: ArticleModuleProps) {
    return ( 
         <div className="articleModule">
            <div className="container">
                <div className="grid">
                    <div className="col-4 sm-col-12">
                        <div className="grid">
                            <div className="col-4 sm-col-7">
                                <div className="articleModule__main">
                                    <div className="articleModule__category" style={{ backgroundColor: `${setCategoryColour(article?.articleCategory)}` }}>{article?.articleCategory}</div>
                                    <div className="articleModule__block">
                                        <div className="articleModule__block-author">{article?.articleAuthor}</div>
                                        <div className="articleModule__block-date">{article ? formatArticleDate(article.articleCreateDate) : null}</div>
                                    </div>
                                    <div className="h5 articleModule__heading">{article?.articleTitle}</div>
                                    <MDXRemote source={article?.articleText ?? "<p className='body'>Opps, we can't find this article right now, we are working on resolving this issue. Thank you for your patience</p>"} components={components} />
                                    <ButtonComponent
                                        href="/news"
                                        buttonType="link"
                                        variant="primary"
                                        disabled={false}
                                    >
                                        Back to news
                                    </ButtonComponent>
                                </div>
                            </div>
                            <div className="col-4 sm-start-9 sm-col-4">
                                <div className="side-panel">
                                    <div className="side-panel__heading">Featured articles</div>
                                    {
                                        randomArticles?.map((article) => (
                                            <ArticleCardComponent
                                                key={article.id}
                                                article={article}
                                            />                                    
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
     );
}

export default ArticleModule;