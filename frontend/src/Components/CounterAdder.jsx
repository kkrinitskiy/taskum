import React from 'react';
import { useState } from 'react';
import Counter from './Counter';

const CounterAdder = () => {

    const [components, setComponents] = useState([]);

    const addComponent = () => {
      setComponents([
        ...components, 
        <Counter key={components.length}/>
      ]);
    };
  
    const removeComponent = () => {
      if (components.length > 0) {
        setComponents(components.slice(0, -1));
      }
    };


    return (
        <div>

            <button onClick={addComponent}>Добавить счетчик</button>
            <button onClick={removeComponent}>Удалить счетчик</button>


            <div>
            {components.map((component) => component)}
            </div>
            
        </div>
    );
};

export default CounterAdder;