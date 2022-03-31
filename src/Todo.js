import { keyboard } from '@testing-library/user-event/dist/keyboard';
import './Todo.css'

function Todo() {
    const [items, setItems] = React.useState([
        {key: getKey(), text: 'Learn JavaScript', done: false},
        {key: getKey(), text: 'Learn React', done: false},
        {key: getKey(), text: 'Get some good sleep', done: false},
    ]);

    return (
        <div className="panel">
            <div className="panel-heading">
                ⚛️ React ToDo
            </div>
            {items.map(item => (
                <label className="panel-block">
                    <input type="checkbox" />
                    {item.text}
                </label>
            ))}
            <div className="panel-block">
                {items.length} items
            </div>
        </div>
    );
} 