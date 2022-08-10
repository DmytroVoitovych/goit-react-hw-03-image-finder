import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({hits, modal}) => {
    return (
        
        // console.log(hits)
        hits.map(hit => 
            <li key={hit.id} className={css['gallery-item']}>
            <img  src={hit.webformatURL} alt={hit.tags}  onClick={(e)=>modal(e, hit.largeImageURL, hit.tags)} loading='lazy' />
        </li>
        
        
            )
        
    );
    
};
 