"use client";

import ImagePicker from "@/components/imagePicker";
import classes from "./page.module.css";
import { shareMeal } from "@/util/actions";
import MealSubmit from "@/components/MealSubmit";
import { useFormState } from "react-dom";

const ShareMealPage = () => {
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your Image" name="image" />

          <p className={classes.actions}>
            {state.message && <h2>{state.message}</h2>}
            <MealSubmit />
          </p>
        </form>
      </main>
    </>
  );
};

export default ShareMealPage;
