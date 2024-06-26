import 'package:plantial/models/product.dart';

class CartItem {
  Product product;
  int quantity;

  CartItem({required this.product, this.quantity = 1});

  factory CartItem.fromJson(Map<String, dynamic> json){
    return CartItem(
      product: Product.fromJson(json['_id']),
      quantity: json['quantity'],
    );
  }

  Map toJson() => {
    'product': product.toJson(),
    'quantity': quantity
  };
}