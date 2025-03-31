
const TheMeanDBClient = {

    /**
     * Will return an Array of recipes
     *
     * returns an empty Array if nothing found
     */
    searchRecipesByName: (name) => {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
            .then(response => response.json())
            .then(json => json.meals ? json.meals : [])
    },

    /**
     * Returns a recipe, or null if not found
     */
    findRecipeById: (id) => {
        return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(json => json.meals ? json.meals[0] : null)
    }

}

export default TheMeanDBClient