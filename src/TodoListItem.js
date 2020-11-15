import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodolistItem = ({todo, onRemove, onToggle, style}) => {
    const {id, text, checked} = todo;

    return (
        <div className="TodoListItem-virtualized" style={style}>
            <div className="TodoListItem">
                <div 
                className={cn('checkbox', {checked})} 
                onClick={() => onToggle(id)}
                >
                    {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
                </div>
                <div className="Remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    );
};

export default React.memo(TodolistItem, (preProps, nextProps) => preProps.todo === nextProps.todo,
);