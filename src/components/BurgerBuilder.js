import React, { useEffect, useState } from "react";
import classes from "../styles/BurgerBuilder.module.css";

export default function BurgerBuilder() {
   const [salad, setSalad] = useState(0);
   const [meat, setMeat] = useState(0);
   const [cheese, setCheese] = useState(0);
   const [bacon, setBacon] = useState(0);
   const [prize, setPrize] = useState(0.0);

   useEffect(() => {
      let sum = prize;
      sum = salad * 1.0 + meat * 3.5 + cheese * 2.0 + bacon * 2.5;
      setPrize(sum);
   }, [salad, meat, cheese, bacon, prize]);

   const burgerElements = () => {
      let burger = [];
      for (let i = 0; i < salad; i++) {
         burger.push(<div key={i} className={classes.salad}></div>);
      }
      for (let i = 0; i < cheese; i++) {
         burger.push(<div key={`a${i}`} className={classes.cheese}></div>);
      }
      for (let i = 0; i < meat; i++) {
         burger.push(<div key={`b${i}`} className={classes.meat}></div>);
      }

      for (let i = 0; i < bacon; i++) {
         burger.push(<div key={`c${i}`} className={classes.bacon}></div>);
      }
      return burger;
   };

   return (
      <div className={classes.main}>
         {/* burger controller  */}
         <div className={classes.controller}>
            <div className={classes.prize}>Prize : ${prize.toFixed(2)}</div>
            <div className={classes.controller_element}>
               <div className={classes.element_name}>Salad :</div>
               <button
                  onClick={() => setSalad((i) => i + 1)}
                  className={classes.add}
               >
                  Add
               </button>
               <button
                  onClick={() => setSalad((i) => (i > 0 ? i - 1 : 0))}
                  className={classes.remove}
               >
                  Remove
               </button>
            </div>

            <div className={classes.controller_element}>
               <div className={classes.element_name}>Cheese :</div>
               <button
                  onClick={() => setCheese((i) => i + 1)}
                  className={classes.add}
               >
                  Add
               </button>
               <button
                  onClick={() => setCheese((i) => (i > 0 ? i - 1 : 0))}
                  className={classes.remove}
               >
                  Remove
               </button>
            </div>

            <div className={classes.controller_element}>
               <div className={classes.element_name}>Meat :</div>
               <button
                  onClick={() => setMeat((i) => i + 1)}
                  className={classes.add}
               >
                  Add
               </button>
               <button
                  onClick={() => setMeat((i) => (i > 0 ? i - 1 : 0))}
                  className={classes.remove}
               >
                  Remove
               </button>
            </div>

            <div className={classes.controller_element}>
               <div className={classes.element_name}>Bacon :</div>
               <button
                  onClick={() => setBacon((i) => i + 1)}
                  className={classes.add}
               >
                  Add
               </button>
               <button
                  onClick={() => setBacon((i) => (i > 0 ? i - 1 : 0))}
                  className={classes.remove}
               >
                  Remove
               </button>
            </div>
         </div>
         {/* burger builder  */}
         <div className={classes.burger}>
            <div className={classes.burger_top}></div>
            {salad || cheese || meat || bacon ? (
               burgerElements()
            ) : (
               <div className={classes.dummy}>Your ingredients goes here</div>
            )}
            <div className={classes.burger_bottom}></div>
         </div>
      </div>
   );
}
