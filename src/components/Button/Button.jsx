import  css  from './Button.module.css';

export const Button = ({ click,status }) => { return <button type="submit" className={css.button} onClick={() => click()}>Upload more</button> }; 