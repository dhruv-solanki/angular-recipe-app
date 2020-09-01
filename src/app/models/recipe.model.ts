export class Recipe {
    public id: number;
    public name: string;
    public category: string;
    public country: string;
    public image: string;

    public youtubeLink: string;
    public blogLink: string;

    public ingredients: string[];
    public measures: string[];
    public instructions: string[];

    constructor(id: number, name: string, category: string, country: string, image: string) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.country = country;
        this.image = image;
    }

    setLinks(youtubeLink: string, blogLink: string) {
        this.youtubeLink = youtubeLink;
        this.blogLink = blogLink;
    }

    setRecipeDetails(ingredients: string[], measures: string[], instructions: string[]) {
        this.ingredients = ingredients;
        this.measures = measures;
        this.instructions = instructions;
    }
}