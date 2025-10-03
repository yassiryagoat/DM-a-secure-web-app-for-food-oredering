import React from 'react';
import { assets_Menu } from '../../assets/assets';
import './ExplorerMenu.css';

const ExplorerMenu = ({ category, setCategory }) => {
  

  return (
    <div>
      <div className="explore-menu" id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy you.</p>
        <div className="explorer-menu-list">
    {assets_Menu.map(item => (
        <div key={item.id} onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}>
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_item} alt='' />
            <p>{item.menu_name}</p>
        </div>
    ))}
</div>

      </div>
    </div>
  );
};

export default ExplorerMenu;