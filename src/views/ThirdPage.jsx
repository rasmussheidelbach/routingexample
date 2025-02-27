import { useState } from 'react';
import mystyle from './ThirdPAge.module.css';

const itemlist = [
    { id: "1", name: "item 1", desc: "item 1 description. A fja laædsj æaljf puæaasr." },
    { id: "2", name: "item 2", desc: "item 2 description. A fgsugf lkhdj klahdj dkhf." },
    { id: "3", name: "item 3", desc: "item 3 description. A kpidf kfd jfkji uows lsr." },
];

function ThirdPage() {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClickOpen = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedItem(null);
    };

    return (
        <div>
            <h1>Third page</h1>
            <ul>
                {itemlist.map((item) => (
                    <li key={item.id} className={`${mystyle.cursor} ${mystyle.nodisc}`}>
                        <button onClick={() => handleClickOpen(item)}>{item.name}</button>
                    </li>
                ))}
            </ul>

            {open && (
                <div className={mystyle.dialog}>
                    <h2>{selectedItem.name}</h2>
                    <p>{selectedItem.desc}</p>
                    <button onClick={handleClose}>Close</button>
                </div>
            )}
        </div>
    );
};

export default ThirdPage;
