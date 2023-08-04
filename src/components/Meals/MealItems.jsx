import Styles from './MealItems.module.css'

const MealItems = () => {
    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];
  return (
    <ul className={Styles["meal-list"]}>
        {DUMMY_MEALS.map(({name,description,price})=>
            <li className={Styles["meal-list__item"]}><div className={Styles.name}>{name}</div>
            <div className={Styles.desc}>{description}</div>
            <div className={Styles.price}>${price}</div>
            <div className={Styles.line}></div>
            </li>   
        )}
    </ul>
    )
}

export default MealItems