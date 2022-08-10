import css from './Searchbar.module.css';
import { Component } from 'react';



export const Searchbar = ({submit, input, value })=>{

   

   

    
      return  (<>
            <header className="searchbar">
                <form className={css.form} onSubmit={submit} >
                    <button type="submit" className="button">
                        <span name="button-label">Search</span>
                    </button>

                    <input
                        name='input'
                        type="text"
                        autoComplete="off"
                      autoFocus
                    
                      placeholder="Search images and photos"
                                        />
                </form>
            </header >
        </>)
    
};