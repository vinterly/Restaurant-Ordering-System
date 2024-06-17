from config import app, db
from models import MenuItem, Order

# Sample menu items
menu_items = [
    MenuItem(name="Spicy Tomato Soup", description="A rich, creamy tomato soup with a Nordic twist of spicy chili heat.", price=139.00, available=True, is_hot=True, image_filename="tomato_soup.jpg"),
    MenuItem(name="Nordic Chicken Caesar Salad", description="Tender chicken and fresh romaine lettuce, topped with our signature Caesar dressing.", price=129.00, available=True, is_hot=False, image_filename="chicken_caesar_salad.jpg"),
    MenuItem(name="Hot Nordic Pizza", description="A fiery pizza with spicy chicken, jalapeño, and a touch of sweet pineapple.", price=199.00, available=True, is_hot=True, image_filename="pineapple_pizza.jpg"),
    MenuItem(name="Nordic Veggie Pizza", description="A vegan-friendly pizza loaded with fresh, locally sourced vegetables.", price=239.00, available=True, is_hot=False, image_filename="vegan_pizza.jpg"),
    MenuItem(name="Nordic Pasta Carbonara", description="A creamy pasta dish featuring pancetta and parmesan, inspired by Nordic flavors.", price=169.00, available=False, is_hot=False, image_filename="pasta_carbonara.jpg"),
    MenuItem(name="Pizza Dressing", description="A delicious garlic dressing to complement our Nordic-style pizzas.", price=39.50, available=True, is_hot=False, image_filename="sauces.jpg")
]


# Sample orders
orders = [
    Order(items="1,3", total=338, status="pending"),
    Order(items="4,6", total=278.5, status="completed")
]

with app.app_context():
    db.drop_all()
    db.create_all()

    db.session.add_all(menu_items)
    db.session.add_all(orders)
    db.session.commit()

    print("Database initialised with sample data.")