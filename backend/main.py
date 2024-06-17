from flask import request, jsonify
from config import app, db
from models import MenuItem, Order

@app.route("/menu", methods=["GET"])
def get_menu():
    menu_items = MenuItem.query.all()
    json_menu_items = list(map(lambda item: item.to_json(), menu_items))
    return jsonify({"menuItems": json_menu_items})

@app.route("/order", methods=["POST"])
def create_order():
    items = request.json.get("items")
    total = request.json.get("total")

    if not items or not total:
        return (
            jsonify({"message": "Unable to place empty order."}), 
            400,
        )

    new_order = Order(items=items, total=total)
    try:
        db.session.add(new_order)
        db.session.commit()
        order_id = new_order.id
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Order successfully placed.", "orderId": order_id}), 201

@app.route("/order/<int:id>", methods=["GET"])
def get_order(id):
    order = Order.query.get(id)

    if not order:
        return jsonify({"message": "Order not found."}), 404

    return jsonify(order.to_json())

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)

