import React from 'react';
import { ItemContainer } from './styles';

function ItemRepositorio({ itemRepo, handleRemoveRepo }) {

  const handleRemove = () => {
    handleRemoveRepo(itemRepo.id);
  }

  return (
    <ItemContainer>
      <h3>{itemRepo.name}</h3>
      <p>{itemRepo.full_name}</p>
      <a href={itemRepo.html_url} rel='noreferrer' target='_blank'>Ver Repositório</a>
      <div>
        <a href="javascript:void(0)" onClick={handleRemove} className='remover'>Remover</a>
      </div>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepositorio;
