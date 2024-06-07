from config import app, db
from models import MenuItem, Order

# Sample menu items
menu_items = [
    MenuItem(name="Spicy Tomato Soup", description="Creamy tomato soup with chilis.", price=139.00, available=True, is_hot=True),
    MenuItem(name="Chicken Caesar Salad", description="Chicken and fresh romaine lettuce with Caesar dressing.", price=129.00, available=True, is_hot=False),
    MenuItem(name="Hot Mess Pizza", description="Pizza with spicy chicken, jalapeño and pineapple.", price=199.00, available=True, is_hot=True),
    MenuItem(name="Veggie Pizza", description="Vegan-friendly pizza with vegetables.", price=239.00, available=True, is_hot=False),
    MenuItem(name="Pasta Carbonara", description="Creamy pasta with pancetta and parmesan.", price=169.00, available=False, is_hot=False),
    MenuItem(name="Pizza dressing", description="Delicious pizza dressing with garlic.", price=39.50,available=True, is_hot=False)
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