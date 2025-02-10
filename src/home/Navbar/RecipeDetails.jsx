import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar1 from "../Navbar/Navbar1";
import Navbar2 from "../Navbar/Navbar2";

const RecipeDetails = () => {
  const { id } = useParams(); // Get Recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://679de9fe946b0e23c06214a8.mockapi.io/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <>
    <div>
    <Navbar1 />
    <Navbar2 />
    </div>
   <div className="bg-zinc-200 min-h-screen p-10">
    <div className="flex justify-center items-center p-10 mt-20">
      <div className="w-2/3 bg-white shadow-lg rounded-lg flex">
        {/* Recipe Image */}
        <img
          src={recipe.image ? recipe.image : "/placeholder.jpg"}
          alt={recipe.title}
          className="w-1/2 h-auto object-cover rounded-l-lg"
          onError={(e) => (e.target.src = "/placeholder.jpg")} // Default image agar error aaye
        />
        
        {/* Recipe Details */}
        <div className="p-6 w-1/2">
          <h2 className="text-3xl font-bold">{recipe.title}</h2>
          <p className="text-gray-700 mt-2">{recipe.description}</p>
          
          <h3 className="text-lg font-semibold mt-4">Ingredients:</h3>
          <ul className="list-disc pl-5">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <p className="mt-4"><b>Prep Time:</b> {recipe.prepTime} mins</p>
          <p><b>Cook Time:</b> {recipe.cookTime} mins</p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default RecipeDetails;
