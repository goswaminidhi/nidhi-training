const c0 = {
  items: [],
  coupon: null
};

//adding items to the cart

function addItem(cart, item) {
  const exists = cart.items.some((i) => i.id === item.id);

  let newItems;

  if (exists) {
    newItems = cart.items.map((i) =>
      i.id === item.id
        ? { ...i, qty: i.qty + item.qty }
        : i
    );
  } else {
    newItems = [...cart.items, { ...item }];
  }

  return {
    ...cart,
    items: newItems
  };
}

// Define real values for the item (previously undefined variables)
const item = {
  id: 1,
  name: "Pen",
  price: 20,
  qty: 2
};

const c1 = addItem(c0, { id: 1, name: "Pen", price: 20, qty: 2 });
const c2 = addItem(c1, { id: 1, name: "Pen", price: 20, qty: 1 });   // Pen qty → 3
const c3 = addItem(c2, { id: 2, name: "Bag", price: 600, qty: 1 });

console.log("New cart:", c3);


//Update quantity
function updateQty(cart, id, qty){
    let newItem;
    if(qty <= 0){
        newItem = cart.items.filter((i) => i.id !== id);
    }
    
    else {
    newItem = cart.items.map((i) =>
      i.id === id
        ? { ...i, qty: qty } : i
    );
  }
   return {
    ...cart,
    items: newItem
  };
    
}

//Remove Item from cart
function removeItem(cart, id){
    const newItems = cart.items.filter((item) => item.id !== id);

    return {
        ...cart,
        items: newItems
    };
}

function getSubTotal(cart){
    return cart.items.reduce((sum , i) => sum + i.price * i.qty,0);
}
//Apply coupon
function applyCoupon(cart , code){
      const subTotal = getSubTotal(cart);

    if( code == "SAVE10"  && subTotal >= 500){
        return {...cart, coupon : code };
    }
    if( code == "SAVE50"  && subTotal >= 500){
        return {...cart, coupon : code };
    }
    return cart;
}


function getTotal(cart){
    const subTotal = getSubTotal(cart);
    if(cart.coupon == "SAVE10"){
        return subTotal - subTotal * 10 / 100;
    }else if(cart.coupon == "SAVE50") {
        return subTotal - 50;
    }else{
        return subTotal;
    }
}


console.log(getTotal(applyCoupon(c3, "SAVE10")));
console.log(getTotal(c3));
console.log(getTotal(updateQty(c3, 2, 0)));

console.log(c0.items.length);