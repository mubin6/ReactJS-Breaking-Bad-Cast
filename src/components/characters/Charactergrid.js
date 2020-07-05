import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner'

const Charactergrid = ({items, isLoading}) => {
    const itemCard = () => {
        return (
            <section className="cards">
                {items.map(item => (
                    <CharacterItem key={item.char_id} item={item} />
                ))}
            </section>
        )
    }
    return isLoading? (<Spinner />) : itemCard(); 
}

export default Charactergrid;
