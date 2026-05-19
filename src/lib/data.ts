import tuna from "@/assets/dish-tuna.jpg";
import maki from "@/assets/dish-maki.jpg";
import seaweed from "@/assets/dish-seaweed.jpg";
import miso from "@/assets/dish-miso.jpg";
import pizza from "@/assets/dish-pizza.jpg";
import wings from "@/assets/dish-wings.jpg";
import burger from "@/assets/dish-burger.jpg";
import poke from "@/assets/dish-poke.jpg";

export const featured = [
  { name: "Smoked Wings", desc: "Hickory glaze, citrus zest", price: "$22", image: wings },
  { name: "Fire Burger", desc: "Double smash, aged cheddar", price: "$26", image: burger },
  { name: "Poke Power Bowl", desc: "Salmon, avocado, edamame", price: "$24", image: poke },
  { name: "Wood-fired Pizza", desc: "San marzano, basil", price: "$28", image: pizza },
];

export const menuItems = [
  { name: "Tuna Salad", price: "$40.00", image: tuna },
  { name: "Vegetable Maki", price: "$27.00", image: maki },
  { name: "Seaweed Salad", price: "$17.49", image: seaweed },
  { name: "White Miso Soup", price: "$15.00", image: miso },
  { name: "Best Tuna Bowl", price: "$24.00", image: poke },
  { name: "Wood-fired Pizza", price: "$70.00", image: pizza },
];

export const galleryImages = [tuna, pizza, wings, burger, poke, maki];

export const testimonials = [
  { text: "The toppings taste fresh, the cheese melts perfectly, and the smoky flavor gives it a homemade touch.", name: "Marlena V.", stars: 5 },
  { text: "The first thing you notice when you walk into Flämm is the amazing smell from the grill — pure magic.", name: "Devon R.", stars: 5 },
  { text: "My comfort food spot. Service is always friendly, delivery is reliable, and the flavors are bold.", name: "Priya S.", stars: 5 },
  { text: "Perfectly crispy without being greasy. The fries stayed crunchy and the pizza was still hot.", name: "Theo M.", stars: 5 },
  { text: "Easily the best low-carb bowls in town. Protein-packed, full of flavor, and beautifully plated.", name: "Sasha K.", stars: 5 },
  { text: "Their wings are unreal. The smoky glaze is addictive — I dream about them mid-week.", name: "Andre B.", stars: 5 },
];

export const cookingWords = [
  { word: "Sear", size: 56, x: 8, y: 12, rotate: -6 },
  { word: "Fry", size: 38, x: 32, y: 28, rotate: 4 },
  { word: "Grill", size: 72, x: 52, y: 8, rotate: -3, stroke: true },
  { word: "Roast", size: 44, x: 18, y: 56, rotate: 2 },
  { word: "Bake", size: 50, x: 64, y: 60, rotate: -2 },
  { word: "Garnish", size: 32, x: 78, y: 34, rotate: 6 },
  { word: "Knead", size: 36, x: 40, y: 72, rotate: -4, oval: true },
];
