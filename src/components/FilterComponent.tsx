
"use client";

import { NewsArticle } from "@/generated/prisma/client";
import { useState } from "react";

type FilterComponentProps = {
    articles: NewsArticle[];
};

function FilterComponent({ articles }: FilterComponentProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const filterArticles = articles.filter((article) => article.articleCategory === selectedCategory);

    return ( 
        <div className="filterComponent">
            <label htmlFor="category-select">Filter category</label>
            <select name="" id="category-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="">--Select--</option>
                <option value="stories">Stories</option>
                <option value="learn">Learn</option>
                <option value="events">Events</option>
                <option value="courses">Courses</option>
            </select>
        </div>
    );
}

export default FilterComponent;