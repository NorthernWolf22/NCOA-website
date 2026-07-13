

//determine the category colours
export const setCategoryColour = (category?: string | null) => {
    let categoryColour = "";

    switch (category) {
        case "STORIES":
            categoryColour = "#FFA500";
            break;
        case "EVENTS":
            categoryColour = "#505081";
            break;
        case "LEARN":
            categoryColour = "#1FA7A0";
            break;
        case "COURSES":
            categoryColour = "#A5D63F";
            break;
    };

    return categoryColour;
};