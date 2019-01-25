import React from 'react'

const Header = ({name}) => (<div className="header-content">
    <div className="header-title-text"> Mis vídeos favoritos {name}</div>
    <input type="button" value="Añadir video" className="header-button-add" />
</div>);

export default Header;
