export const formatCommentAuthorName = (author) => {
    if (author === "Silver Sickle Moon Sparkling Mountain") {
        return "Sil";
    }
    return author.split(" ")[0];
};
