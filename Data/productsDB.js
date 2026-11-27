const products = [
  {
    "name": "Classic Set",
    "description": "24 pieces: 8 salmon nigiri, 4 tuna nigiri, 6 California rolls and 6 cucumber maki.",
    "price": 24.9,
    "category": "sushi",
    "tags": [],
    "stock": 20,
    "images": "Products/Sushi/classic-set.png"
  },
  {
    "name": "Salmon Lovers Set",
    "description": "26 pieces: 8 salmon nigiri, 6 seared salmon nigiri, 6 salmon avocado rolls and 6 salmon maki.",
    "price": 29.9,
    "category": "sushi",
    "tags": [],
    "stock": 18,
    "images": "Products/Sushi/salmon-lovers-set.png"
  },
  {
    "name": "Spicy Set",
    "description": "28 pieces: 7 spicy tuna rolls, 7 spicy salmon rolls, 7 baked rolls and 7 crispy shrimp rolls.",
    "price": 29.9,
    "category": "sushi",
    "tags": ["spicy"],
    "stock": 16,
    "images": "Products/Sushi/spicy-set.png"
  },
  {
    "name": "Unagi Set",
    "description": "24 pieces: 12 rolls topped with glazed eel and 12 topped with avocado, all with cream cheese and cucumber.",
    "price": 28.9,
    "category": "sushi",
    "tags": [],
    "stock": 15,
    "images": "Products/Sushi/unagi-set.png"
  },
  {
    "name": "Baked Set",
    "description": "28 pieces: 14 baked rolls on nori and 14 on sesame rice, with a creamy spicy topping, spring onion and eel sauce.",
    "price": 29.9,
    "category": "sushi",
    "tags": ["spicy"],
    "stock": 14,
    "images": "Products/Sushi/baked-set.png"
  },
  {
    "name": "Hosomaki Mix",
    "description": "32 pieces: small nori rolls with 8 cucumber, 8 tuna, 8 salmon and 8 shrimp.",
    "price": 24.9,
    "category": "sushi",
    "tags": [],
    "stock": 22,
    "images": "Products/Sushi/hosomaki-mix.png"
  },
  {
    "name": "Teriyaki Chicken Set",
    "description": "28 pieces: 7 teriyaki chicken rolls, 7 crispy chicken katsu rolls, 7 chicken and avocado rolls and 7 chicken and mango rolls.",
    "price": 27.9,
    "category": "sushi",
    "tags": [],
    "stock": 15,
    "images": "Products/Sushi/teriyaki-chicken-set.png"
  },
  {
    "name": "Tropical Set",
    "description": "32 pieces: 16 rolls topped with salmon and mango and 16 topped with mango, with cream cheese and cucumber.",
    "price": 34.9,
    "category": "sushi",
    "tags": [],
    "stock": 12,
    "images": "Products/Sushi/tropical-set.png"
  },
  {
    "name": "Seared Salmon Set",
    "description": "24 pieces: 12 rolls topped with torched salmon and a creamy sauce, 6 seared salmon nigiri and 6 rolls with spring onion.",
    "price": 27.9,
    "category": "sushi",
    "tags": [],
    "stock": 14,
    "images": "Products/Sushi/seared-salmon-set.png"
  },
  {
    "name": "Seared Beef Set",
    "description": "24 pieces: 12 rolls topped with seared beef and crispy onion, 6 seared beef nigiri and 6 rolls with beef and asparagus.",
    "price": 34.9,
    "category": "sushi",
    "tags": [],
    "stock": 10,
    "images": "Products/Sushi/seared-beef-set.png"
  },
  {
    "name": "Dragon & Tempura Set",
    "description": "36 pieces: 12 dragon rolls with eel and avocado, 12 shrimp tempura rolls and 12 crunchy salmon rolls.",
    "price": 38.9,
    "category": "sushi",
    "tags": [],
    "stock": 10,
    "images": "Products/Sushi/dragon-tempura-set.png"
  },
  {
    "name": "Crunchy Tempura Set",
    "description": "36 pieces: 12 glazed eel rolls, 12 shrimp tempura rolls and 12 crunchy salmon rolls.",
    "price": 36.9,
    "category": "sushi",
    "tags": [],
    "stock": 10,
    "images": "Products/Sushi/crunchy-tempura-set.png"
  },
  {
    "name": "Tonkotsu Ramen",
    "description": "Rich pork bone broth with chashu pork, soft-boiled eggs, nori and spring onion.",
    "price": 13.5,
    "category": "ramen",
    "tags": [],
    "stock": 25,
    "images": "Products/Ramen/tonkotsu-ramen.png"
  },
  {
    "name": "Spicy Miso Ramen",
    "description": "Fiery miso broth with chilli oil, minced pork, sweetcorn and spring onion.",
    "price": 13.0,
    "category": "ramen",
    "tags": ["spicy"],
    "stock": 22,
    "images": "Products/Ramen/spicy-miso-ramen.png"
  },
  {
    "name": "Shoyu Chicken Ramen",
    "description": "Clear soy broth with sliced chicken, bamboo shoots, a soft-boiled egg and nori.",
    "price": 12.5,
    "category": "ramen",
    "tags": [],
    "stock": 24,
    "images": "Products/Ramen/shoyu-chicken-ramen.png"
  },
  {
    "name": "Tantanmen",
    "description": "Creamy sesame and chilli broth with minced pork, bok choy and spring onion.",
    "price": 13.5,
    "category": "ramen",
    "tags": ["spicy"],
    "stock": 18,
    "images": "Products/Ramen/tantanmen.png"
  },
  {
    "name": "Veggie Miso Ramen",
    "description": "Plant-based miso broth with tofu, spinach, shiitake mushrooms and sweetcorn.",
    "price": 12.0,
    "category": "ramen",
    "tags": ["vegetarian", "vegan"],
    "stock": 20,
    "images": "Products/Ramen/veggie-miso-ramen.png"
  },
  {
    "name": "Vegan Mushroom Ramen",
    "description": "Dark shiitake broth with mushrooms, tofu cubes and spring onion.",
    "price": 12.5,
    "category": "ramen",
    "tags": ["vegetarian", "vegan"],
    "stock": 16,
    "images": "Products/Ramen/vegan-mushroom-ramen.png"
  },
  {
    "name": "Strawberry Daifuku",
    "description": "Soft rice cake filled with sweet bean paste and a whole strawberry.",
    "price": 5.5,
    "category": "desserts",
    "tags": ["vegetarian", "vegan", "gluten-free"],
    "stock": 24,
    "images": "Products/Desserts/strawberry-daifuku.png"
  },
  {
    "name": "Mitarashi Dango",
    "description": "Three chewy rice dumplings on a skewer with a sweet soy glaze.",
    "price": 4.8,
    "category": "desserts",
    "tags": ["vegetarian", "vegan"],
    "stock": 30,
    "images": "Products/Desserts/mitarashi-dango.png"
  },
  {
    "name": "Soufflé Pancakes",
    "description": "Fluffy Japanese pancakes with butter and maple syrup.",
    "price": 7.5,
    "category": "desserts",
    "tags": ["vegetarian"],
    "stock": 16,
    "images": "Products/Desserts/souffle-pancakes.png"
  },
  {
    "name": "Matcha Roll Cake",
    "description": "Light sponge roll filled with matcha cream.",
    "price": 5.8,
    "category": "desserts",
    "tags": ["vegetarian"],
    "stock": 18,
    "images": "Products/Desserts/matcha-roll-cake.png"
  },
  {
    "name": "Matcha Parfait",
    "description": "Matcha ice cream, red bean, whipped cream and mochi in a tall glass.",
    "price": 7.9,
    "category": "desserts",
    "tags": ["vegetarian"],
    "stock": 14,
    "images": "Products/Desserts/matcha-parfait.png"
  },
  {
    "name": "Coconut Mango Pudding",
    "description": "Silky coconut pudding topped with fresh mango.",
    "price": 5.5,
    "category": "desserts",
    "tags": ["vegetarian", "gluten-free"],
    "stock": 20,
    "images": "Products/Desserts/coconut-mango-pudding.png"
  },
  {
    "name": "Caramel Purin",
    "description": "Classic Japanese custard pudding with caramel sauce.",
    "price": 4.8,
    "category": "desserts",
    "tags": ["vegetarian", "gluten-free"],
    "stock": 22,
    "images": "Products/Desserts/caramel-purin.png"
  },
  {
    "name": "Yuzu Jelly Cup",
    "description": "Light citrus jelly with fresh orange and yuzu peel.",
    "price": 4.5,
    "category": "desserts",
    "tags": ["vegetarian", "vegan", "gluten-free"],
    "stock": 26,
    "images": "Products/Desserts/yuzu-jelly-cup.png"
  },
  {
    "name": "Green Tea",
    "description": "Chilled Japanese green tea with a fresh, grassy taste.",
    "price": 3.2,
    "category": "drinks",
    "tags": ["vegetarian", "vegan", "gluten-free"],
    "stock": 60,
    "images": "Products/Drinks/green-tea.png"
  },
  {
    "name": "Matcha Latte",
    "description": "Smooth matcha green tea blended with milk.",
    "price": 4.5,
    "category": "drinks",
    "tags": ["vegetarian", "gluten-free"],
    "stock": 35,
    "images": "Products/Drinks/matcha-latte.png"
  },
  {
    "name": "Ramune",
    "description": "Classic Japanese lemon-lime soda with a refreshing fizz.",
    "price": 3.5,
    "category": "drinks",
    "tags": ["vegetarian", "vegan", "gluten-free"],
    "stock": 40,
    "images": "Products/Drinks/ramune.png"
  },
  {
    "name": "Iced Jasmine Tea",
    "description": "Chilled jasmine tea, lightly sweetened.",
    "price": 3.5,
    "category": "drinks",
    "tags": ["vegetarian", "vegan", "gluten-free"],
    "stock": 38,
    "images": "Products/Drinks/iced-jasmine-tea.png"
  },
  {
    "name": "Yuzu Lemonade",
    "description": "Zesty lemonade made with Japanese yuzu citrus.",
    "price": 4.0,
    "category": "drinks",
    "tags": ["vegetarian", "vegan", "gluten-free"],
    "stock": 30,
    "images": "Products/Drinks/yuzu-lemonade.png"
  },
  {
    "name": "Spicy Ginger Soda",
    "description": "Fresh ginger soda with a chilli kick.",
    "price": 3.8,
    "category": "drinks",
    "tags": ["vegetarian", "vegan", "gluten-free", "spicy"],
    "stock": 25,
    "images": "Products/Drinks/spicy-ginger-soda.png"
  },
  {
    "name": "Peach Oolong Tea",
    "description": "Iced oolong tea with sweet white peach.",
    "price": 3.9,
    "category": "drinks",
    "tags": ["vegetarian", "vegan", "gluten-free"],
    "stock": 32,
    "images": "Products/Drinks/peach-oolong-tea.png"
  },
  {
    "name": "Hojicha Cold Brew",
    "description": "Chilled roasted green tea with a smooth, nutty taste.",
    "price": 3.8,
    "category": "drinks",
    "tags": ["vegetarian", "vegan", "gluten-free"],
    "stock": 34,
    "images": "Products/Drinks/hojicha-cold-brew.png"
  },
  {
    "name": "Plum Soda",
    "description": "Sparkling ume plum soda, sweet, floral and tangy.",
    "price": 3.9,
    "category": "drinks",
    "tags": ["vegetarian", "vegan", "gluten-free"],
    "stock": 36,
    "images": "Products/Drinks/plum-soda.png"
  },
  {
    "name": "Lychee Soda",
    "description": "Sparkling lychee drink with a light floral sweetness.",
    "price": 3.9,
    "category": "drinks",
    "tags": ["vegetarian", "vegan", "gluten-free"],
    "stock": 40,
    "images": "Products/Drinks/lychee-soda.png"
  },
  {
    "name": "Melon Soda",
    "description": "Bright green melon soda, sweet and fizzy.",
    "price": 3.9,
    "category": "drinks",
    "tags": ["vegetarian", "vegan", "gluten-free"],
    "stock": 38,
    "images": "Products/Drinks/melon-soda.png"
  }
]
