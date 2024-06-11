// Images from unsplash.com

// Logo, icons
import logo from "./logo.png";
import basket_icon from "./icons8-basket-64.png";

// Menu items
import tomato_soup from "./tomato_soup.jpg";
import pineapple_pizza from "./pineapple_pizza.jpg";
import vegan_pizza from "./vegan_pizza.jpg";
import pasta_carbonara from "./pasta_carbonara.jpg";
import salad from "./chicken_caesar_salad.jpg";
import sauces from "./sauces.jpg";

export const assets = {
    logo,
    basket_icon
}

export const menu_items = [
    {
        _id: "1",
        image: tomato_soup,
        name: "Tomato Soup",
        description: "A spicy tomato soup made with fresh tomatoes and a hint of basil. Served with a side of garlic bread.",
        price: 169,
        available: true,
        hot: true
    },
    {
        _id: "2",
        image: pineapple_pizza,
        name: "Pineapple Pizza",
        description: "A Hawaiian-style pizza with a generous serving of pineapple chunks, ham, and mozzarella cheese.",
        price: 199,
        available: true,
        hot: true
    },
    {
        _id: "3",
        image: vegan_pizza,
        name: "Vegan Pizza",
        description: "A vegan pizza made with fresh vegetables, vegan cheese, and a gluten-free crust.",
        price: 229,
        available: true,
        hot: false
    },
    {
        _id: "4",
        image: pasta_carbonara,
        name: "Pasta Carbonara",
        description: "Spaghetti pasta cooked al dente and tossed in a creamy carbonara sauce with bacon bits.",
        price: 189,
        available: true,
        hot: false
    },
    {
        _id: "5",
        image: salad,
        name: "Chicken Caesar Salad",
        description: "A classic Caesar salad made with fresh romaine lettuce, grilled chicken, croutons, and Caesar dressing.",
        price: 149,
        available: false,
        hot: false
    },
    {
        _id: "6",
        image: sauces,
        name: "Assorted Sauces",
        description: "A selection of assorted sauces to complement your meal. Choose from a variety of flavours.",
        price: 49,
        available: true,
        hot: false
    }
]