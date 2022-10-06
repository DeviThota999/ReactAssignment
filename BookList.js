import React from 'react';
import ReactDom from "react-dom";
const books = [
  {
    id: 1,
    img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
    cost: "$10",
  },

  {
    id: 2,
    img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
    title: "Ikigai: The Japanese secret to a long and happy life",
    author: "Héctor García",
    cost: "$20",
  },

  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/91b0X3BfLfL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    cost: "$20",
  },
  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/513P8XoCAEL._AC_UL160_SR160,160_.jpg",
    title: "Introduction to Algorithms, 3rd Edition (The MIT Press) 3rd Edition",
    author: "Thomas H. Cormen",
    cost: "$10",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/41aM-m+YxNL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg",
    title: "A Common-Sense Guide to Data Structures and Algorithms",
    author: "Jay Wengrow",
    cost: "$15",
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/51OmSzXyBxL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg",
    title: "Python Programming For Beginners",
    author: "Leonard J. Ledger",
    cost: "$40",
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/I/41TTSojIUDL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg",
    title: "Hands-On Data Structures and Algorithms with Kotlin",
    author: "Chandra Sekhar Nayak",
    cost: "$40",
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/I/51flQ-b+F8L._SX258_BO1,204,203,200_.jpg",
    title: "Complex Network Analysis in Python",
    author: "Dmitry Zinoviev",
    cost: "$40",
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/I/41cKu8jHRML._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg",
    title: "Mastering Go",
    author: "Mihalis Tsoukalos",
    cost: "$40",
  },
  {
    id: 10,
    img: "https://m.media-amazon.com/images/I/51z2JdQ8D4L._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg",
    title: "Enterprise API Management: Design and deliver valuable business APIs",
    author: "Luis Weir",
    cost: "$20",
  },
  {
    id: 11,
    img: "https://m.media-amazon.com/images/I/41xowwUUSwL._SY344_BO1,204,203,200_.jpg",
    title: "Hacking the System Design Interview",
    author: "Stanley Chiang",
    cost: "$50",
  },
  {
    id: 12,
    img: "https://m.media-amazon.com/images/I/41tKWuKfTsL._SX348_BO1,204,203,200_.jpg",
    title: "C#: 3 books in 1 - The Ultimate Beginner, Intermediate & Advanced Guides to Master C#",
    author: "Mark Reed",
    cost: "$60",
  
    
  },
  {
    id: 13,
    img: "https://m.media-amazon.com/images/I/519Rxi+A8WL._SX258_BO1,204,203,200_.jpg",
    title: "Learn Docker - Fundamentals of Docker 19.x",
    author: "Gabriel N. Schenker",
    cost: "$30",

  },
  {
    id: 14,
    img: "https://m.media-amazon.com/images/I/31Eci4wjF2L._SX258_BO1,204,203,200_.jpg",
    title: "The Kubernetes Book",
    author: "Nigel Poulton",
    cost: "$32",
  },
  {
    id: 15,
    img: "https://m.media-amazon.com/images/I/51ytXEvq6gL._SX258_BO1,204,203,200_.jpg",
    title: "Go for DevOps: Learn how to use the Go language to automate servers, the cloud, Kubernetes, GitHub, Packer, and Terraform",
    author: "John Doak",
    cost: "$39",
  },
];

function BookList() {
  return (
    <div className="heading" >
      <label>
     <h1 style={{color:"Black", textAlign:"center",marginTop:"20px"}}>Shop it :)</h1>
      </label>
  
    <section className="bookList">
      {books.map((book) => {
        // const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    
    </section>
    </div>
  );
}

const Book = ({ img, title, author,cost }) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("good Choice!! Added to your wishList");
  };
  const complexExample = (author) => {
    console.log(author);
    alert(author);
  };
  const price = (cost) => {
    console.log(cost);
    alert(cost);
  };
  return (
 
    <article
      className="book" 
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button"  onClick={clickHandler}>
        add WishList
      </button>
      <button type="button" style={{marginTop:"20px",marginLeft:"20px"}} onClick={() => price(cost)}>
        Cost
      </button>
      <br></br>
      <button type="button" style={{marginTop:"20px"}} onClick={() => complexExample(author)}>
        Author's Name
      </button>
      
    </article>
  );
};

// ReactDOM.render(<BookList />, document.getElementById("root"));
export default BookList;