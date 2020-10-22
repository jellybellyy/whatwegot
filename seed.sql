INSERT INTO users (first_name, last_name, username, password) VALUES ('Harry', 'Potter', 'hpotter', '004a00b3fac8202b02e70a2d9f1dd653c5866bf1e2be9a489f8173810b4e641e');
INSERT INTO users (first_name, last_name, username, password) VALUES ('Ron', 'Weasley', 'rweasley', '004a00b3fac8202b02e70a2d9f1dd653c5866bf1e2be9a489f8173810b4e641e');
INSERT INTO users (first_name, last_name, username, password) VALUES ('Hermione', 'Granger', 'hgranger', '004a00b3fac8202b02e70a2d9f1dd653c5866bf1e2be9a489f8173810b4e641e');


INSERT INTO items (name, quantity, purchase_date, expiry_date, description, user_id) VALUES ('Tomatoes', '5', '2020-10-18', '2020-10-25', '', '1');
INSERT INTO items (name, quantity, purchase_date, expiry_date, description, user_id) VALUES ('Milk', '2 Cartons', '2020-10-20', '2020-10-30', 'One chocolate, One Original', '1');
INSERT INTO items (name, quantity, purchase_date, expiry_date, description, user_id) VALUES ('Tuna', '1 Can', '2020-10-02', '2020-10-20', 'Chilli Tuna', '1');

INSERT INTO items (name, quantity, purchase_date, expiry_date, description, user_id) VALUES ('Samyang Spicy Noodles', '5 Packets', '2020-10-23', '2020-11-23', 'Carbonara flavour', '2');
INSERT INTO items (name, quantity, purchase_date, expiry_date, description, user_id) VALUES ('Chocolate Frogs', '3 Packets', '2020-09-02', '2020-10-31', 'Be careful, they jump!', '2');
INSERT INTO items (name, quantity, purchase_date, expiry_date, description, user_id) VALUES ('Watermelon', '1', '2020-10-10', '2020-10-20', 'Seedless', '2');

INSERT INTO items (name, quantity, purchase_date, expiry_date, description, user_id) VALUES ('Cheetos', '2 Packs', '2020-10-01', '2020-12-25', 'Flaming Hot', '3');
INSERT INTO items (name, quantity, purchase_date, expiry_date, description, user_id) VALUES ('Soju', '3 Bottles', '2020-03-20', '2021-06-30', 'One green grape, One strawberry, One calamansi', '3');
INSERT INTO items (name, quantity, purchase_date, expiry_date, description, user_id) VALUES ('Ice Cream', '1 Tub', '2020-10-02', '2020-10-20', 'Salted Caramel', '3');


INSERT INTO recipes (name, description, user_id) VALUES ('Mashed Potatoes', 'Creamy and delicious mashed potatoes that you can whip up in under an hour!', '1');
INSERT INTO recipes (name, description, user_id) VALUES ('Avocado Toast', 'Perfect for a quick breakfast!', '1');

INSERT INTO recipes (name, description, user_id) VALUES ('Popcorn Chicken', 'Crispiest popcorn chicken you will ever try in your life!', '2');
INSERT INTO recipes (name, description, user_id) VALUES ('Mug Brownies', 'Easy 3 ingredients brownies you can make with a mug and a microwave!', '2');

INSERT INTO recipes (name, description, user_id) VALUES ('Ice Cream', 'Easy way to make ice cream when you have a craving!', '3');
INSERT INTO recipes (name, description, user_id) VALUES ('Nachos', 'Perfect with guacomle, sour cream, and some pico de gallo!', '3');


INSERT INTO ingredients (name, quantity, recipe_id) VALUES ('Potatoes', '1kg', '1');
INSERT INTO ingredients (name, quantity, recipe_id) VALUES ('Milk', '2 Cups', '1');

INSERT INTO ingredients (name, quantity, recipe_id) VALUES ('Avocados', '4', '2');
INSERT INTO ingredients (name, quantity, recipe_id) VALUES ('Bread', '2 Slices', '2');

INSERT INTO ingredients (name, quantity, recipe_id) VALUES ('Chicken', '500g', '3');
INSERT INTO ingredients (name, quantity, recipe_id) VALUES ('Breadcrumbs', '2 Cups', '3');

INSERT INTO ingredients (name, quantity, recipe_id) VALUES ('Cocoa Powder', '2 Cups', '4');
INSERT INTO ingredients (name, quantity, recipe_id) VALUES ('Milk', '1/2 Cup', '4');
INSERT INTO ingredients (name, quantity, recipe_id) VALUES ('Egg', '1', '4');

INSERT INTO ingredients (name, quantity, recipe_id) VALUES ('Milk', '700ml', '5');
INSERT INTO ingredients (name, quantity, recipe_id) VALUES ('Vanilla Essence', '1 Teaspoon', '5');

INSERT INTO ingredients (name, quantity, recipe_id) VALUES ('Tortilla Chips', '500g', '6');
INSERT INTO ingredients (name, quantity, recipe_id) VALUES ('Tomatoes', '6 Large Ones', '6');


INSERT INTO instructions (instructions, recipe_id) VALUES ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. At elementum eu facilisis sed odio. Sit amet volutpat consequat mauris nunc congue nisi. Id cursus metus aliquam eleifend mi in nulla posuere. Egestas congue quisque egestas diam in arcu cursus. Tincidunt dui ut ornare lectus sit amet est placerat. Aliquam vestibulum morbi blandit cursus risus at ultrices. Tempor id eu nisl nunc mi. Ac felis donec et odio pellentesque.', '1');
INSERT INTO instructions (instructions, recipe_id) VALUES ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec ultrices dui sapien eget mi proin sed libero enim. Eget egestas purus viverra accumsan in. Ut porttitor leo a diam sollicitudin. Sit amet mauris commodo quis. Suspendisse interdum consectetur libero id faucibus. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Imperdiet nulla malesuada pellentesque elit eget. Ut sem viverra aliquet eget sit amet. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Vitae tortor condimentum lacinia quis vel eros. Enim sed faucibus turpis in eu mi.', '2');
INSERT INTO instructions (instructions, recipe_id) VALUES ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Blandit libero volutpat sed cras ornare. Id donec ultrices tincidunt arcu non. Quis varius quam quisque id. Neque sodales ut etiam sit amet. Vel facilisis volutpat est velit egestas dui. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Posuere ac ut consequat semper viverra nam libero justo laoreet. Morbi tristique senectus et netus et. Ultrices sagittis orci a scelerisque purus semper eget.', '3');
INSERT INTO instructions (instructions, recipe_id) VALUES ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra. Arcu cursus vitae congue mauris rhoncus aenean vel. Tempus iaculis urna id volutpat. Blandit aliquam etiam erat velit. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Placerat orci nulla pellentesque dignissim enim sit amet. Elit duis tristique sollicitudin nibh sit amet commodo. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Elit at imperdiet dui accumsan sit. Pellentesque habitant morbi tristique senectus et netus et malesuada. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Ipsum nunc aliquet bibendum enim facilisis. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Non curabitur gravida arcu ac. Sit amet porttitor eget dolor morbi non. Amet venenatis urna cursus eget nunc scelerisque viverra. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius.', '4');
INSERT INTO instructions (instructions, recipe_id) VALUES ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Est lorem ipsum dolor sit amet consectetur adipiscing. Mi proin sed libero enim sed faucibus turpis in. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Orci sagittis eu volutpat odio facilisis mauris. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Nunc sed blandit libero volutpat sed cras ornare arcu. Sit amet volutpat consequat mauris nunc congue nisi. Est ante in nibh mauris cursus mattis molestie a iaculis. Duis at tellus at urna condimentum mattis pellentesque. Amet facilisis magna etiam tempor orci. Sit amet aliquam id diam. At ultrices mi tempus imperdiet. A erat nam at lectus urna. Mauris a diam maecenas sed enim ut sem viverra.', '5');
INSERT INTO instructions (instructions, recipe_id) VALUES ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue. Purus semper eget duis at tellus at urna condimentum. Nunc consequat interdum varius sit amet mattis vulputate enim. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Sit amet venenatis urna cursus. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Pellentesque habitant morbi tristique senectus. Vitae tortor condimentum lacinia quis vel eros donec ac.', '6');