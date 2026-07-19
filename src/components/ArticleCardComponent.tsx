import Image from "next/image";
import Link from "next/link";

//types
import { NewsArticle } from "@/generated/prisma/client";

//utils
import { setCategoryColour } from "@/utils/setCategoryColour";

//components
import LinkComponent from "./LinkComponent";

//images
import defaultArticleCardImage from "../../public/images/two_archers_in_front.jpg";

type ArticleCardProps = {
    article: NewsArticle;
};

function ArticleCardComponent({ article }: ArticleCardProps) {
    return (
        <LinkComponent
            linkType="link"
            href={`/news/${article.id}`}
            className="articleCard"
        >
            <div className="articleCard__image-wrapper">
                <Image
                    src={article.articleImage ? article.articleImage : defaultArticleCardImage}
                    alt={article.articleImageAlt ? article.articleImageAlt : ""}
                    fill
                    className="articleCard__image"
                />
            </div>
            <div className="body body--large articleCard__title" style={{ borderTop: `8px solid ${setCategoryColour(article?.articleCategory)}` }}>{article.articleTitle}</div>
        </LinkComponent>
    );
}

export default ArticleCardComponent;