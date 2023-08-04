import Styles from "./Summary.module.css";
const Summary = () => {
  return (
    <section className={Styles.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selections of available meals
          and enjoy a delicious lunch or dinner at home
        </p>
        <p>
          All our meals are vooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
    </section>
  );
};

export default Summary;
