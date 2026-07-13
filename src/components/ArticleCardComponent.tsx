import { NewsArticle } from "@/generated/prisma/client";
import { setCategoryColour } from "@/services/setCategoryColour";
import Image from "next/image";
import Link from "next/link";
import LinkComponent from "./LinkComponent";

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
                    src={article.articleImage}
                    alt={article.articleTitle}
                    fill
                    className="articleCard__image"
                />
            </div>
            <div className="body body--large articleCard__title" style={{ borderTop: `8px solid ${setCategoryColour(article?.articleCategory)}` }}>{article.articleTitle}</div>
        </LinkComponent>
    );
}

export default ArticleCardComponent;