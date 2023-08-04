import Styles from './Header.module.css'

const header = () => {
  return (
    <>
    <header className={Styles.header}>
      <h2>ReactMeals</h2>
      <button>Your cart <span>0</span></button>
    </header>
    <img src="" alt="" />
    </>
    )
}

export default header