import { Loader } from "components/Loader/Loader";
import  css  from './Button.module.css';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
export const Button = ({ click,status }) => { return <button type="submit" className={css.button} onClick={() => click()}>Upload more</button> }; 