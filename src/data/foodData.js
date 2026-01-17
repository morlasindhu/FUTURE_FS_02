// src/data/foodData.js

export const categories = [
  { slug: "starters", name: "Starters", image: "https://fusionculinaryarts.com/wp-content/uploads/2021/02/paneer-tikka-indian-starters-recipes-1024x660.jpg" },
  { slug: "pizza", name: "Pizza", image: "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg" },
  { slug: "burgers", name: "Burgers", image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS.jpg" },
  { slug: "cuisines", name: "Cuisines", image: "https://cdn.britannica.com/93/240093-050-5CA6A932/Masoor-dal-lentil-stew.jpg" },
  { slug: "soups", name: "Soups", image: "https://www.cookingclassy.com/wp-content/uploads/2014/10/vegetable-soup-7.jpg" },
  { slug: "desserts", name: "Desserts", image: "https://images5.alphacoders.com/404/404896.jpg" },
  { slug: "drinks", name: "Drinks", image: "https://tse2.mm.bing.net/th/id/OIP.c4iAClGgUryhZupcrRNAfwHaE7?pid=Api&P=0&h=180" },
  { slug: "sandwiches", name: "Sandwiches", image: "https://tse2.mm.bing.net/th/id/OIP.gYoYdZQhus3i-y_D5aoBlwHaE7?pid=Api&P=0&h=180" },
];

// each category key holds an array of 15 items
export const foodItems = {
  starters: [
    { id: 1001, name: "Gobi Manchurian", description: "Crispy florets in tangy sauce", price: 120, image: "https://i.ytimg.com/vi/tGlLmbBQ1bk/maxresdefault.jpg" },
    { id: 1002, name: "Paneer Tikka", description: "Smoky marinated paneer", price: 150, image: "https://img.freepik.com/premium-photo/juicy-tandoori-paneer-tikka-white-background-paneer-tikka-image-photography_1020697-118609.jpg?w=2000" },
    { id: 1003, name: "Veg Momos", description: "Steamed dumplings with chutney", price: 90, image: "https://i3.ytimg.com/vi/zhtUpm1focY/maxresdefault.jpg" },
    { id: 1004, name: "Spring Rolls", description: "Crispy veg rolls", price: 100, image: "https://tse4.mm.bing.net/th/id/OIP.T4jjkA8_QgtpyKYH7f--_AHaLG?pid=Api&P=0&h=180" },
    { id: 1005, name: "Crispy Corn", description: "Sweet corn tossed in sauce", price: 110, image: "https://i.pinimg.com/originals/f4/9d/97/f49d97cb1fd022c9914d12d2f973ac13.jpg" },
    { id: 1006, name: "Chili Paneer", description: "Spicy paneer with peppers", price: 160, image: "https://i.pinimg.com/originals/bd/d2/cf/bdd2cf973419568da097ed78072c43d2.jpg" },
    { id: 1007, name: "Baby Corn Manchurian", description: "Baby corn in Manchurian gravy", price: 130, image: "https://img-global.cpcdn.com/recipes/8d754b978d9419b4/1200x630cq70/photo.jpg" },
    { id: 1008, name: "Aloo Tiki", description: "Pan-fried potato patties", price: 90, image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Crispy-Aloo-Tikki-Recipe.jpg" },
    { id: 1009, name: "Hara Bhara Kebab", description: "Spinach & peas kebab", price: 120, image: "https://www.healthkart.com/connect/wp-content/uploads/2023/01/900x500_banner_HK-hara-bhara-kabab.png" },
    { id: 1010, name: "Soya Chunks Fry", description: "Crispy soya bites", price: 110, image: "https://tse4.mm.bing.net/th/id/OIP.p_1IcbIWxX5Zi2sD2xroFQHaE8?pid=Api&P=0&h=180" },
    { id: 1011, name: "Cottage Cheese Fingers", description: "Paneer fingers with dip", price: 140, image: "https://i.ytimg.com/vi/TATnWnUxF1Q/hqdefault.jpg" },
    { id: 1012, name: "Garlic Bread", description: "Buttery garlic bread", price: 80, image: "https://spicecravings.com/wp-content/uploads/2021/09/Air-Fryer-Garlic-Bread-Featured.jpg" },
    { id: 1013, name: "Crispy Potato Wedges", description: "Seasoned baked wedges", price: 95, image: "https://kitchen-by-the-sea.com/wp-content/uploads/2023/05/Crispy-Potato-Wedges-5.jpg" },
    { id: 1014, name: "Honey Chilli Potato", description: "Sweet & spicy potatoes", price: 120, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHhP1YQflnvTI51l1HnThBfIzmi57BpX623NjlWBIfCYWMIY5DV3Hx2jipdQ5dXrKVJlvvwIwjiQDGFpghaii80o3XkBXxhI4xw2f73Pm3IDmpCz6ulCMw4yMU_gxhD0QiNBMNCQ4qy62x/s1182/20201102_233302.jpg" },
    { id: 1015, name: "Spicy Tofu Bites", description: "Tofu in spicy glaze", price: 150, image: "https://up.yimg.com/ib/th/id/OIP.aqDa5dSqF-wUUP4SlR_oQwHaJQ?pid=Api&rs=1&c=1&qlt=95&w=94&h=117" },
  ],

  pizza: [
    { id: 2001, name: "Margherita Pizza", description: "Classic cheese & tomato", price: 220, image: "https://tse2.mm.bing.net/th/id/OIP.Rp6u4rmsNsJ_7t_SeWzuCgHaE8?pid=Api&P=0&h=180" },
    { id: 2002, name: "Pepperoni Pizza", description: "Spicy pepperoni", price: 320, image: "https://fantinomondello.ca/wp-content/uploads/2021/02/pepperoni_cheese_pizza.jpg" },
    { id: 2003, name: "Veggie Delight", description: "Mushrooms, peppers, onion", price: 280, image: "https://recipefund.com/wp-content/uploads/jet-form-builder/f133c249d4a29961d2fd87ee9713e9c1/2023/08/Vegie-Deight-Pizza-1.png" },
    { id: 2004, name: "Paneer Tikka Pizza", description: "Indian twist", price: 300, image: "https://tse2.mm.bing.net/th/id/OIP.F8wqGlrXzQ8sf1KZHCUcPAHaHY?pid=Api&P=0&h=180" },
    { id: 2005, name: "BBQ Chicken Pizza", description: "Tangy BBQ chicken", price: 350, image: "https://cdn.grofers.com/assets/search/usecase/banner/barbecue_chicken_pizza_01.png" },
    { id: 2006, name: "Mexican Pizza", description: "Spicy & colorful", price: 300, image: "https://4.bp.blogspot.com/-wHbTvKSOJGE/Uvk3B7O0QuI/AAAAAAAAB50/kaLvl-BT8qM/s1600/IMG_0708.JPG" },
    { id: 2007, name: "Four Cheese", description: "Cheddar, mozzarella, feta, parmesan", price: 330, image: "https://static.vecteezy.com/system/resources/previews/038/452/761/non_2x/ai-generated-irresistible-cheese-pizza-a-delicious-blend-of-melted-cheese-and-perfect-crust-ai-generated-photo.jpg" },
    { id: 2008, name: "Hawaiian Pizza", description: "Ham & pineapple", price: 320, image: "https://tse3.mm.bing.net/th/id/OIP.WbWXLaLxX7Qa_qzYOtXR0AHaEK?pid=Api&P=0&h=180" },
    { id: 2009, name: "Veg Supreme", description: "Loaded veggies", price: 290, image: "https://i0.wp.com/www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven.png?resize=720%2C480&is-pending-load=1#038;ssl=1" },
    { id: 2010, name: "Cheese Burst", description: "Extra cheese", price: 340, image: "https://tse2.mm.bing.net/th/id/OIP.5ucE_gHNWtswiR_KkNqnmgHaEK?pid=Api&P=0&h=180" },
    { id: 2011, name: "Tandoori Paneer Pizza", description: "Tandoori flavor", price: 320, image: "https://recipesblob.oetker.in/assets/2d2a87f7533e439aa3e6ed9bd63656e7/1272x764/tandoori-pizza.jpg" },
    { id: 2012, name: "Peri Peri Veg", description: "Spicy peri peri", price: 300, image: "https://tse3.mm.bing.net/th/id/OIP.NfOLmPTIu78byQ5Xhe55ygHaD4?pid=Api&P=0&h=180" },
    { id: 2013, name: "Mushroom & Olive", description: "Earthy & briny", price: 310, image: "https://cdn.grofers.com/assets/search/usecase/banner/mushroom_and_olive_pizza.png" },
    { id: 2014, name: "Garden Fresh", description: "Seasonal vegetables", price: 280, image: "http://images.heb.com/is/image/HEBGrocery/recipe-hm-large/garden-fresh-veggie-pizza-recipe.jpg" },
    { id: 2015, name: "Spicy Corn", description: "Corn with chili flakes", price: 260, image: "https://product-assets.faasos.io/production/product/image_1669628712219_Low_IFC_Corn_and_Cheese_Pizza.jpg"}
  ],

burgers: [
  { id: 3001, name: "Classic Veg Burger", description: "Veg patty with lettuce", price: 120, image: "https://tse3.mm.bing.net/th/id/OIP.mCUG88hVQotiSxdyXb847wHaEo?pid=Api&P=0&h=180" },

  { id: 3002, name: "Cheese Burger", description: "Double cheese", price: 160, image: "https://tse1.mm.bing.net/th/id/OIP.vfO_YzFn7CQ49gcb7Fy4egHaEW?pid=Api&P=0&h=180" },

  { id: 3003, name: "Veggie Delight Burger", description: "Loaded veg", price: 150, image: "https://as2.ftcdn.net/jpg/08/83/27/51/1000_F_883275155_ufFPpVaDG0h6EOAEkkN9LQ0tH9ot0fXE.jpg" },

  { id: 3004, name: "Paneer Burger", description: "Tandoori paneer patty", price: 180, image: "https://patelcafenrestro.com/wp-content/uploads/2024/07/DM-2024-07-29T143428.249.png" },

  { id: 3005, name: "Spicy Chicken Burger", description: "Crispy spicy chicken", price: 220, image: "https://img.freepik.com/premium-photo/eye-level-view-spicy-chicken-burger-crispy-flavorful-ai-generated-visual_385755-229.jpg?w=2000" },

  { id: 3006, name: "BBQ Burger", description: "BBQ sauce & cheese", price: 230, image: "https://tse3.mm.bing.net/th/id/OIP.HX5RQD8UpQU9ahLlwhXrgwHaHa?pid=Api&P=0&h=180" },

  { id: 3007, name: "Mushroom Swiss", description: "Sautéed mushrooms", price: 210, image: "https://tse2.mm.bing.net/th/id/OIP.PYvpChADVS-ngKL4GegfUwHaE7?pid=Api&P=0&h=180" },

  { id: 3008, name: "Double Patty", description: "Extra protein", price: 260, image: "https://img.freepik.com/premium-photo/delicious-double-patty-cheese-burger-black-background_964427-242.jpg" },

  { id: 3009, name: "Crispy Corn Burger", description: "Crunchy corn patty", price: 140, image: "https://tse3.mm.bing.net/th/id/OIP.rrbQq6LS2Ul9Npvt2Tr_CwHaHa?pid=Api&P=0&h=180" },

  { id: 3010, name: "Veg Cutlet Burger", description: "Classic street style", price: 130, image: "https://foodisafourletterword.com/wp-content/uploads/2022/05/Ebi_Katsu_Burger_Recipe_07-1024x683.jpg" },

  { id: 3011, name: "Loaded Fries Burger", description: "Fries inside burger", price: 170, image: "https://tse2.mm.bing.net/th/id/OIP.LMbbC9CBMdEhHd_C-LKblQHaE8?pid=Api&P=0&h=180" },

  { id: 3012, name: "Peri Peri Burger", description: "Peri peri flavor", price: 190, image: "https://tse2.mm.bing.net/th/id/OIP.tKRqv0sLZGb37bLSxCiXqgHaE8?pid=Api&P=0&h=180" },

  { id: 3013, name: "Classic Cheese Melt", description: "Melted cheese", price: 160, image: "https://tse4.mm.bing.net/th/id/OIP.rEtc13T4G2SC3GsPM9CL8AHaEK?pid=Api&P=0&h=180" },

  { id: 3014, name: "Paneer & Chutney", description: "Indian paneer burger", price: 175, image: "https://img.freepik.com/premium-photo/spicy-paneer-tikka-burger-best-indian-fast-food-paneer-tikka-picture-photography_1020697-119084.jpg?w=1380" },

  { id: 3015, name: "Herb Veg Burger", description: "Herb spiced patty", price: 150, image: "https://tse1.mm.bing.net/th/id/OIP.Ho5VaPM9Sj2rOYMMm6fXPAHaFg?pid=Api&P=0&h=180" },
],



  cuisines: [
  { id: 4001, name: "Paneer Butter Masala", description: "Creamy curry", price: 180, image: "https://www.cookwithmanali.com/wp-content/uploads/2019/05/Paneer-Butter-Masala-Recipe.jpg" },
  { id: 4002, name: "Dal Tadka", description: "Homestyle lentils", price: 120, image: "https://indianhealthyrecipe.com/wp-content/uploads/2024/01/restaurant-style-dal-tadka-how-to-make-best-dal-tadka.1024x1024-7.jpg" },
  { id: 4003, name: "chicken Biryani", description: "Fragrant rice", price: 160, image: "https://img.freepik.com/premium-photo/chicken-biryani-kerala-style-chicken-dhum-biriyani-made-using-jeera-rice-spices-arranged_667286-4606.jpg?w=2000" },
  { id: 4004, name: "Butter Chicken", description: "Classic non-veg", price: 240, image: "https://tse4.mm.bing.net/th/id/OIP.j7ljUAYn_DJwvfgB7EqSEwHaHa?pid=Api&P=0&h=180" },
  { id: 4005, name: "Chole Bhature", description: "Spicy chickpeas", price: 140, image: "https://2.bp.blogspot.com/-w4KOeWh0DXk/UA7pfsmVXhI/AAAAAAAARSk/qAOZ30Zy1AM/s1600/cb+five+s.jpg" },
  { id: 4006, name: "Naan & Raita", description: "Tandoori bread", price: 80, image: "https://www.kingarthurbaking.com/sites/default/files/styles/kaf_thumbnail_small_2x_400x271_/public/2020-06/whole-wheat-naan-with-raita.jpg?itok=bK31EAMD" },
  { id: 4007, name: "Schezwan Veg", description: "Indo-Chinese", price: 180, image: "https://tse1.mm.bing.net/th/id/OIP.Bv2V6BDcBeXNDzpYo8a5GQHaFQ?pid=Api&P=0&h=180" },
  { id: 4008, name: "Fish Curry and rice", description: "Coastal flavours", price: 260, image: "https://thumbs.dreamstime.com/b/fish-curry-rice-38457168.jpg" },
  { id: 4009, name: "Pulao", description: "Aromatic pilaf", price: 140, image: "https://kohinoor-joy.com/wp-content/uploads/2020/11/veg-pulao.jpg" },
  { id: 4010, name: "chicken Korma", description: "Rich creamy curry", price: 220, image: "https://yellowchilis.com/wp-content/uploads/2023/01/chicken-korma-1024x1024.jpg" },
  { id: 4011, name: "Tadka Dal", description: "Ghee tempered", price: 110, image: "https://tse1.mm.bing.net/th/id/OIP.imsQeQrDAjOEcQPSOLT-mwHaHa?pid=Api&P=0&h=180" },
  { id: 4012, name: "Veg Korma", description: "Mixed veg curry", price: 170, image: "https://tse3.mm.bing.net/th/id/OIP.h-jOkqQZqbJ3J25WTMEuYwHaHa?pid=Api&P=0&h=180" },
  { id: 4013, name: "Masala Dosa", description: "Crispy dosa with potato", price: 120, image: "https://vanitascorner.com/wp-content/uploads/2018/01/Mysore-Masala-Dosa.jpg" },
  { id: 4014, name: "Rogan Josh", description: "Kashmiri classic", price: 280, image: "https://tse3.mm.bing.net/th/id/OIP.mSfuhkT6NdII5moVqrwjmAHaE7?pid=Api&P=0&h=180" },
  { id: 4015, name: "Kathi Roll", description: "Street-style wrap", price: 150, image: "https://tse4.mm.bing.net/th/id/OIP._PjvaFKM-jAZwOaE2V5dxgHaDv?pid=Api&P=0&h=180" },
],


   soups: [
  {
    id: 5001,
    name: "Tomato Soup",
    description: "Warm classic",
    price: 90,
    image: "https://tse1.mm.bing.net/th/id/OIP.gxbsM82coyudS03ZbMV0qAHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 5002,
    name: "Sweet Corn Soup",
    description: "Creamy & sweet",
    price: 100,
    image: "https://tse4.mm.bing.net/th/id/OIP.zPPkKQ-FMirlCNxoIEnX0wHaE8?pid=Api&P=0&h=180"
  },
  {
    id: 5003,
    name: "Hot & Sour Soup",
    description: "Tangy & spicy",
    price: 110,
    image: "https://tse2.mm.bing.net/th/id/OIP.cTx2sTxbAw7_W_vyc7NafwHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 5004,
    name: "Mushroom Soup",
    description: "Earthy flavors",
    price: 120,
    image: "https://tse2.mm.bing.net/th/id/OIP.CjLSBBrW1sL4jzIOjFqYewHaE8?pid=Api&P=0&h=180"
  },
  {
    id: 5005,
    name: "Chicken Soup",
    description: "Comfort classic",
    price: 140,
    image: "https://soupchick.s3.amazonaws.com/wp-content/uploads/2024/05/07133502/Homemade-Chicken-Soup-Recipe02.png"
  },
  {
    id: 5006,
    name: "Clear Vegetable Soup",
    description: "Light & healthy",
    price: 90,
    image: "https://tse3.mm.bing.net/th/id/OIP.qeyKy-exw3ezSu5JpjMLuwHaE8?pid=Api&P=0&h=180"
  },
  {
    id: 5007,
    name: "Lentil Soup",
    description: "Protein rich",
    price: 100,
    image: "https://www.inspiredtaste.net/wp-content/uploads/2019/04/Easy-Lentil-Soup-Recipe-1-1200.jpg"
  },
  {
    id: 5008,
    name: "Tom Yum Soup",
    description: "Thai spicy-sour",
    price: 160,
    image: "https://tse3.mm.bing.net/th/id/OIP.Owq03leIwA4pY8JhqLAwIQHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 5009,
    name: "Spinach Soup",
    description: "Green goodness",
    price: 100,
    image: "https://tse1.mm.bing.net/th/id/OIP.ho264AnHTeMFdFZW1Y9AnQHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 5010,
    name: "Pumpkin Soup",
    description: "Creamy fall favorite",
    price: 110,
    image: "https://tse1.mm.bing.net/th/id/OIP.9QftJEuGZWkmdoQ8Q7cDiQHaLH?pid=Api&P=0&h=180"
  },
  {
    id: 5011,
    name: "Miso Soup",
    description: "Japanese starter",
    price: 120,
    image: "https://i.pinimg.com/originals/9a/bf/1a/9abf1a21c8e7919c94f08f7b8c75cf7b.png"
  },
  {
    id: 5012,
    name: "Broccoli Soup",
    description: "Healthy & warm",
    price: 105,
    image: "https://tse3.mm.bing.net/th/id/OIP.VraIvnyVfbR-VfIkmvGocAHaEO?pid=Api&P=0&h=180"
  },
  {
    id: 5013,
    name: "Corn & Chicken Soup",
    description: "Hearty mix",
    price: 140,
    image: "https://soupchick.s3.amazonaws.com/wp-content/uploads/2024/07/04114509/Chicken-Corn-Soup-Recipe-1-1024x1024.png"
  },
  {
    id: 5014,
    name: "Noodle Soup",
    description: "Comfort bowl",
    price: 130,
    image: "https://www.inspiredtaste.net/wp-content/uploads/2018/09/Easy-Chicken-Noodle-Soup-Recipe-1200.jpg"
  },
  {
    id: 5015,
    name: "Clear Chicken Soup",
    description: "Light and healing",
    price: 120,
    image: "https://tse1.mm.bing.net/th/id/OIP.zBFCApEdLsxnL6n5hiPZ3wHaHa?pid=Api&P=0&h=180"
  }
],


  desserts: [
  {
    id: 6001,
    name: "Chocolate Brownie",
    description: "Warm chocolate",
    price: 120,
    image: "https://img.buzzfeed.com/video-api-prod/assets/fafe8090b4f3434f80c33b6e4ce40e24/BFV21539_BestFudgyBrownies-ThumbB1080.jpg"
  },
  {
    id: 6002,
    name: "Gulab Jamun",
    description: "Sugar syrup delight",
    price: 80,
    image: "https://www.aromaticessence.co/wp-content/uploads/2018/09/5A015CBB-F43D-41E9-8972-11B9FCB5537D.jpeg"
  },
  {
    id: 6003,
    name: "Ice Cream Scoop",
    description: "Vanilla scoop",
    price: 90,
    image: "https://tse1.mm.bing.net/th/id/OIP.vZX_Uai8jx9tAdVLbtIpogHaFJ?pid=Api&P=0&h=180"
  },
  {
    id: 6004,
    name: "Rasmalai",
    description: "Soft cheese dumplings",
    price: 110,
    image: "https://tse1.mm.bing.net/th/id/OIP.0frATGcG_YP_Ee5-5vhx8wHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 6005,
    name: "Chocolate Lava Cake",
    description: "Molten center",
    price: 160,
    image: "https://tse2.mm.bing.net/th/id/OIP.KzRxvzJi8QJkX_bFBdrnSAHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 6006,
    name: "Tres Leches",
    description: "Cream soaked cake",
    price: 150,
    image: "https://tse4.mm.bing.net/th/id/OIP.2h8XLSNmhqTrzEx6SxSj2AHaJQ?pid=Api&P=0&h=180"
  },
  {
    id: 6007,
    name: "Cheesecake",
    description: "Creamy cheese",
    price: 180,
    image: "https://stateofdinner.com/wp-content/uploads/2023/03/philadelphia-cheesecake-featured.jpg"
  },
  {
    id: 6008,
    name: "Fruit Salad",
    description: "Seasonal fruits",
    price: 90,
    image: "https://healthyfitnessmeals.com/wp-content/uploads/2022/05/Fruit-salad-recipe-3.jpg"
  },
  {
    id: 6009,
    name: "Jalebi",
    description: "Crispy syrupy",
    price: 70,
    image: "https://www.cookwithnabeela.com/wp-content/uploads/2024/02/1Jalebi.webp"
  },
  {
    id: 6010,
    name: "Brownie Ala Mode",
    description: "Brownie with ice cream",
    price: 160,
    image: "https://tse3.mm.bing.net/th/id/OIP.bpE3YUc932smUhRVtRQC6gHaLH?pid=Api&P=0&h=180"
  },
  {
    id: 6011,
    name: "Panna Cotta",
    description: "Silky Italian dessert",
    price: 140,
    image: "https://tse1.mm.bing.net/th/id/OIP.K5hoQ1fGr_gPR6RXdRU9CQHaE8?pid=Api&P=0&h=180"
  },
  {
    id: 6012,
    name: "Kulfi",
    description: "Traditional ice cream",
    price: 90,
    image: "https://tse2.mm.bing.net/th/id/OIP.uxoMiqWhmGAWuT3LLUAo-gHaE8?pid=Api&P=0&h=180"
  },
  {
    id: 6013,
    name: "Carrot Halwa",
    description: "Gajar ka halwa",
    price: 110,
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/11/gajar-halwa-carrot-halwa.jpg"
  },
  {
    id: 6014,
    name: "Mango Mousse",
    description: "Smooth mango delight",
    price: 150,
    image: "https://www.chefnotrequired.com/wp-content/uploads/2023/03/mango-mousse-blog-hero.jpeg"
  },
  {
    id: 6015,
    name: "Ladoo",
    description: "Sweet balls",
    price: 80,
    image: "https://img.freepik.com/premium-photo/indian-sweet-food-motichoor-laddu-bundi-laddu-isolated-white-background_55610-10.jpg?w=2000"
  }
],

  drinks: Array.from({length:15}).map((_,i)=>({
  id:7001+i,
  name: [
    "Cold Coffee","Lemonade","Masala Chai","Green Tea","Iced Tea",
    "Mango Shake","Vanilla Shake","Chocolate Frappe","Buttermilk",
    "Orange Juice","Apple Juice","Ginger Lemon","Grapes Juice",
    "Energy Drink","Mineral Water"
  ][i],
  description:"Refreshing drink",
  price: [95,65,35,80,75,120,110,160,40,90,95,70,45,140,30][i],
  image: [
    "https://www.windingcreekranch.org/wp-content/uploads/2022/05/Homemade-iced-coffee-1200-1200.jpg",
    "https://www.cookingclassy.com/wp-content/uploads/2019/06/lemonade-2.jpg",
    "https://budleaf.com/wp-content/uploads/2023/04/How-to-make-masala-chai-1568x1039.jpeg",
    "https://cdn.justea.net/what_is_best_green_tea_to_drink.jpg",
    "https://www.errenskitchen.com/wp-content/uploads/2014/08/lemon-Iced-Tea.jpg",
    "https://tastyoven.com/wp-content/uploads/2022/06/mango-shake-3.jpeg",
    "https://www.justdoughit.com/wp-content/uploads/VANILLA-MILKSHAKE-505CU.jpg",
    "https://www.whiskaffair.com/wp-content/uploads/2020/08/Chocolate-Chip-Frappe-2-3.jpg",
    "https://tse3.mm.bing.net/th/id/OIP.FAdJUPyYkOSrgYK8Ys1Z0gHaE6?pid=Api&P=0&h=180",
    "https://wallpaperaccess.com/full/2185825.jpg",
    "https://www.tun-asia.com/wp-content/uploads/2014/08/Apple-Juice-3.jpg",
    "https://c8.alamy.com/comp/G8YW6K/ginger-and-lemon-juice-in-a-glass-and-pitcher-plank-ginger-lemon-lime-G8YW6K.jpg",
    "https://tse3.mm.bing.net/th/id/OIP.Edn0Wv1r_IwfRQFlafWTZwHaE8?pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th/id/OIP.I21Yg5ryQ-2O65lziiFeuQHaE8?pid=Api&P=0&w=300&h=300",
    "https://tse4.mm.bing.net/th/id/OIP.IlqPHmQQqTeNABq3Z8lVBwHaFc?pid=Api&P=0&h=180"
  ][i]
})),


 sandwiches: [
  { id:8001, name:"Veg Sandwich", description:"Grilled veg sandwich", price:120,
    image:"https://tse2.mm.bing.net/th/id/OIP.-BeJWqRh3DIoK-CbkyUHpQHaLH?pid=Api&P=0&h=180" },

  { id:8002, name:"Grilled Paneer Sandwich", description:"Spicy paneer", price:140,
    image:"https://i.ytimg.com/vi/3dKn6xISmtI/maxresdefault.jpg" },

  { id:8003, name:"Club Sandwich", description:"Triple layer", price:160,
    image:"https://www.jocooks.com/wp-content/uploads/2020/10/club-sandwich-1-9.jpg" },

  { id:8004, name:"Cheese Toast", description:"Melty cheese", price:90,
    image:"https://tse4.mm.bing.net/th/id/OIP.XS6ReFBz4-EAXS-MzyP5sQHaG7?pid=Api&P=0&h=180" },

  { id:8005, name:"Veg Cheese Sandwich", description:"Cheese & veggies", price:130,
    image:"https://i.ytimg.com/vi/TWcBpbUrxic/maxresdefault.jpg" },

  { id:8006, name:"Tomato Basil Sandwich", description:"Fresh herbs", price:140,
    image:"https://tse4.mm.bing.net/th/id/OIP.gdxNj4OmWX4EHKRLfgNBrQHaKE?pid=Api&P=0&h=180" },

  { id:8007, name:"Paneer & Mint Sandwich", description:"Mint chutney", price:150,
    image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/paneer-sandwich-recipe.jpg" },

  { id:8008, name:"Aloo Tikki Sandwich", description:"Spicy potato", price:110,
    image:"https://1.bp.blogspot.com/-EbrIytaIups/X-HuxyJc_7I/AAAAAAAAAEc/eTmrPgeMk3QF3zVS1AdNGAB_aBMHgzv0wCLcBGAsYHQ/w1200-h630-p-k-no-nu/sandwich%2Bphoto.jpg" },

  { id:8009, name:"Veg Panini", description:"Pressed sandwich", price:160,
    image:"https://janeskitchenmiracles.com/wp-content/uploads/Grilled-Vegetable-Panini-recipe.jpg" },

  { id:8010, name:"Mayo Veg Sandwich", description:"Classic mayo", price:120,
    image:"https://i.ytimg.com/vi/r90fqXlItKI/maxresdefault.jpg" },

  { id:8011, name:"Spinach & Cheese", description:"Healthy & tasty", price:150,
    image:"https://www.budgetbytes.com/wp-content/uploads/2022/01/Spinach-and-Feta-Grilled-Cheese-stack.jpg" },

  { id:8012, name:"Corn & Cheese", description:"Sweet corn goodness", price:130,
    image:"https://i.pinimg.com/originals/eb/08/5b/eb085b071fc5614b8ad6e2b4e1fb0025.jpg" },

  { id:8013, name:"Veggie Delight Roll", description:"Wrapped sandwich", price:140,
    image:"https://tse4.mm.bing.net/th/id/OIP.bODTtQjSbrMEOk4w4e_JugHaEK?pid=Api&P=0&h=180" },

  { id:8014, name:"Chutney Paneer Sandwich", description:"Herb chutney", price:150,
    image:"https://blastoflavours.com/wp-content/uploads/2020/05/IMG_20200520_123048.jpg" },

  { id:8015, name:"Herb Garlic Sandwich", description:"Garlic flavor", price:130,
    image:"https://i.ytimg.com/vi/cr70vljvx3Y/maxresdefault.jpg" }
]
};




