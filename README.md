Api Requests

UserRouter
-----------
createUser()        => app/api/v1/user/create
getUser()           => app/api/v1/user/read:id(user)
getAllUsers()       => app/api/v1/user/read
updateUser()        => app/api/v1/user/update:id(user)
deleteUser()        => app/api/v1/user/delete:id(user)
blockUser()         => app/api/v1/user/block_list

ProductRouter
---------------
createProduct()      => app/api/v1/products/create
getSingleProduct()   => app/api/v1/orders/read:id(product)
getAllProducts()     => app/api/v1/products/readall
updateProduct()      => app/api/v1/products/update:id(product)
deleteProduct()      => app/api/v1/products/delete:id(product)



CartRouter
-------------
<!-- createCartProducts()    => app/api/v1/cart/create:id(user)  -->
getCartProducts()       => app/api/v1/cart/read:id(user)
updateCartProducts()    => app/api/v1/cart/update:id(user)
<!-- deleteCartProducts()    => app/api/v1/cart/delete:id(user) -->


OrderRouter
-------------
<!-- createOrder             => app/api/v1/orders/create -->
getOrderedProducts()    => app/api/v1/orders/readall:id(user)
updateOrderedProducts() => app/api/v1/orders/update:id(user)
<!-- deleteOrder             => app/api/v1/orders/delete?id(user)&id(product) -->