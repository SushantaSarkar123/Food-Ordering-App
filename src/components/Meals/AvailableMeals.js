import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken burger",
    description: "The Classic Burger",
    price: 99,
  },
  {
    id: "m2",
    name: "Fried chicken",
    description: "Special crispy chicken.",
    price: 149,
  },
  {
    id: "m3",
    name: "Veg Burger",
    description: "American, raw, meaty",
    price: 69,
  },
  {
    id: "m4",
    name: "Veg Fried Rice",
    description: "Healthy",
    price: 149,
  },
  {
    id: "m5",
    name: "Badapav",
    description: "Healthy...and green...",
    price: 49,
  },{
    id: "m6",
    name: "Biriyani",
    description: "Healthy...and green...",
    price: 149,
  },
    {
    id: "m7",
    name: "Grilled Salmon",
    description: "Fresh salmon fillet grilled to perfection, served with lemon butter sauce.",
    price: 249,
    },
    
    {
    id: "m8",
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, Parmesan cheese, croutons, and Caesar dressing.",
    price: 129,
    },
    
    {
    id: "m9",
    name: "Mushroom Risotto",
    description: "Creamy risotto cooked with mushrooms, onions, and white wine.",
    price: 189,
    },
    
    {
    id: "m10",
    name: "Beef Steak",
    description: "Tender grilled beef steak served with mashed potatoes and gravy.",
    price: 299,
    },
    
    {
    id: "m11",
    name: "Fish and Chips",
    description: "Crispy battered fish served with fries and tartar sauce.",
    price: 179,
    },
    
    {
    id: "m12",
    name: "Sushi Platter",
    description: "Assorted sushi rolls including California, tuna, and salmon rolls.",
    price: 219,
    },
    
    {
    id: "m13",
    name: "Chicken Caesar Wrap",
    description: "Grilled chicken, romaine lettuce, Parmesan cheese, and Caesar dressing wrapped in a tortilla.",
    price: 149,
    },
    
    {
    id: "m14",
    name: "Vegetable Stir-Fry",
    description: "Fresh mixed vegetables stir-fried in a savory sauce, served with rice.",
    price: 139,
    },
    
    {
    id: "m15",
    name: "Cheeseburger",
    description: "Juicy beef patty topped with cheese, lettuce, tomato, and pickles.",
    price: 179,
    },
    
    {
    id: "m16",
    name: "Tandoori Chicken",
    description: "Chicken marinated in yogurt and spices, roasted in a tandoor oven.",
    price: 209,
    },
    
    {
    id: "m17",
    name: "Pancakes",
    description: "Fluffy pancakes served with butter and maple syrup.",
    price: 99,
    },
    
    {
    id: "m18",
    name: "Vegetable Soup",
    description: "Hearty soup made with fresh vegetables and herbs.",
    price: 89,
    },
    
    {
    id: "m19",
    name: "Shrimp Scampi",
    description: "Tender shrimp sautéed in garlic butter sauce, served over pasta.",
    price: 219,
    },
    
    {
    id: "m20",
    name: "BBQ Ribs",
    description: "Tender pork ribs basted in barbecue sauce, served with coleslaw.",
    price: 269,
    },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
