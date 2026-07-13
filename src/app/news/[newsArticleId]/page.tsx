//services & types
import { getNewsArticle } from "@/services/newsArticle";
import { getNewsArticles } from "@/services/newsArticle";
import { NewsArticle } from "@/generated/prisma/client";

//components
import { notFound } from "next/navigation";
import ArticleModule from "@/modules/ArticleModule";

//modules
import BannerModule from "@/modules/BannerModule";

type NewsArticleIdProps = {
    params: Promise<{ newsArticleId: string }>;
};

async function NewsArticleId({ params }: NewsArticleIdProps) {
    //get all the articles
    const articles = await getNewsArticles();

    //select three articles from the articles array at random
    const getRandomArticles = (articles: NewsArticle[]): NewsArticle[] => {
        return articles
        .sort(() => Math.random() - 0.5) //shuffle array
        .slice(0, 3); //take first 3 obj from shuffled array
    };
    const randomArticles = getRandomArticles(articles);
    
    //get the specific article which matches the param
    const newsArticleId = (await params).newsArticleId;
    const article = await getNewsArticle(parseInt(newsArticleId));

    if(!article) {
        notFound();
    }

    return (
        <>
            <BannerModule 
                bannerTitle="News article"
                bannerImage={article.articleImage}
                bannerImageAlt={article.articleTitle}
            />
            <ArticleModule  
                article={article}
                randomArticles={randomArticles}
            />
        </>
    );
}

export default NewsArticleId;


{/* <div className="body body--large articleModule__title">What is the Access Archery Fund (AAF)?</div>
<p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
<div className="body body--large articleModule__title">Who is eligable to apply for funding?</div>
<p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <Link href="/" className="body body--heavy articleModule__link">minim veniam</Link>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
<div className="body body--large articleModule__title">What the fund will support?</div>
<ul>
    <li className="body">laboris nisi ut aliquip ex ea commodo consequat</li>
    <li className="body">deserunt mollit anim id est laborum</li>
    <li className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
</ul>
<p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p> */}