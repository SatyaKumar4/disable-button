import { useState } from 'react'

const cover = "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg"
const title = "Atomic Habits";
const Author = "James Clear";
const price = 50;

const BookObject = [
    {
        cover: "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg",
        title: "Atomic Habits",
        author: "James Clear"
    },
    {
        cover: 'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg',
        title: "The Psychology of money",
        author: "Morgan Housel"
    },
    {
        cover: 'https://images-eu.ssl-images-amazon.com/images/I/81N4EM2zVSL._AC_UL600_SR600,400_.jpg',
        title: "The hidden hindu",
        author: "Akshat Gupta"
    }

];



const BookList = () => {
    return (
        <section className="BookList">
            <Book author={Author} title={title} cover={cover} />
            <Book author={Author} title={title} cover={cover} />

        </section>
    )
}

// const BookDetails = BookObject.map(()=>)


export const Book = ({ cover, title, author }) => {
    const [addedToCart, setAddedToCart] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setAddedToCart(true);
        setCartCount(cartCount + 1);
    }

    const handleRemoveFromCart = () => {
        setAddedToCart(false);
        setCartCount(cartCount - 1);
    }

    return (

        <article className="Book">
            <img src={cover} alt='Atomic Habits'></img>
            <h2>{title}</h2>
            <h4>{author}</h4>
            <p>${price}</p>
            {!addedToCart && <button onClick={handleAddToCart} type="button" class="btn btn-dark">Add to cart</button>}
            {addedToCart && (<>
          <button onClick={handleRemoveFromCart} type="button" class="btn btn-dark">Remove from cart</button>
        </>)}
            <p>{cartCount}</p>
        </article>
    )
}






export default BookList;