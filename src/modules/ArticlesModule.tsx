"use client";
import { useRouter } from "next/navigation";

//types
import { NewsArticle } from "@/generated/prisma/client";
import { DropdownComponentOption } from "@/components/dropdown/DropdownComponent.types";

//components
import ArticleCardComponent from "@/components/ArticleCardComponent";
import DropdownComponent from "@/components/dropdown/DropdownComponent";

type ArticlesModuleProps = {
    category?: string;
    filteredArticles: NewsArticle[];
};

function ArticlesModule({ filteredArticles, category }: ArticlesModuleProps) {
    const router = useRouter();

    const options: DropdownComponentOption[] = [
        { label: "All", value: "" },
        { label: "Stories", value: "stories" },
        { label: "Learn", value: "learn" },
        { label: "Events", value: "events" },
        { label: "Courses", value: "courses" },
    ];

    const handleCategoryChange = (value: string) => {
        if (value === "") {
            router.push("/news");
        } else {
            router.push(`/news?category=${value}`);
        }
    }

    return (
        <section className="articlesModule">
            <div className="container">
                <div className="grid">
                    <div className="col-4 sm-col-12">
                        <div className="filter">
                            <label htmlFor="dropdown">Filter category</label>
                            <DropdownComponent
                                options={options}
                                value={category ? category : ""} //currently selected value
                                onChange={handleCategoryChange}
                            />
                        </div>
                    </div>
                    {
                        filteredArticles.length > 0 ? (
                            filteredArticles?.map((article: NewsArticle) => (
                                <div key={article.id} className="col-4 sm-col-6 md-col-4 lg-col-3">
                                    <ArticleCardComponent
                                        article={article}
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="body">There are no articles.</p>
                        )
                    }
                </div>
            </div>
        </section>
    );
}
export default ArticlesModule;