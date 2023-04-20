const API_KEY = "99306e7ca6e449e791d2f6c2f669930d";
const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes)
{
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe) => {

        //recipe item
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");

        //recipe image
        recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image";

        //recipe title
        recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;

        //recipe ingredient
        recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerHTML = `
        <strong>Ingredients:</strong> ${recipe.extendedIngredients
        .map((ingredient) => ingredient.original)
        .join(" ,")}`;

        //recipe button
        recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe";






        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipeListEl.append(recipeItemEl);
    });
}

async function getRecipies()
{
    const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
    );

    const data = await response.json();

    return data.recipes;
}

async function init()
{
    const recipes = await getRecipies();
    console.log(recipes)
    displayRecipes(recipes);

}

init();