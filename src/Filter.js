import React, { useState } from 'react'
import classNames from 'classnames';

function Filter({value, onChange}) {
    const handleClick = (key, e) => {
        e.preventDefault();
        onChange(key);
    };

    return (
        <div className="panel-tabs">
            <a
                href="#"
                onClick={handleClick.bind(null, 'ALL')}
                className={classNames({ 'is-active': value === 'ALL'})}
            >ALL</a>
            <a
                href="#"
                onClick={handleClick.bind(null, 'TODO')}
                className={classNames({ 'is-active': value === 'TODO'})}
            >TODO</a>
            <a
                href="#"
                onClick={handleClick.bind(null, 'DONE')}
                className={classNames({ 'is-active': value === 'DONE'})}
            >DONE</a>
        </div>
    );
}

export default Filter;