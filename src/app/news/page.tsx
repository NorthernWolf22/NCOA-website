//services
import { getNewsArticles } from "../../services/getNewsArticle";

//modules
import BannerModule from "../../modules/BannerModule";
import ArticlesModule from "@/modules/ArticlesModule";

//image
import targets_on_field from "../../../public/images/banner-images/targets_on_field.jpg";

type NewsPageProps = {
    searchParams: Promise<{
        category?: string;
    }>;
};

async function NewsPage({searchParams}: NewsPageProps) {
    const { category } = await searchParams;
    const articles = await getNewsArticles();

    const filteredArticles = category
        ? articles.filter(
              article =>
                  article.articleCategory.toLowerCase() === category.toLowerCase()
          )
        : articles;

    return (
        <>
            <BannerModule
                bannerTitle="News"
                bannerImage={targets_on_field}
                bannerImageAlt="two archers"
            />
            <ArticlesModule
                category={category}
                filteredArticles={filteredArticles}
            />
        </>
    );
}

export default NewsPage;