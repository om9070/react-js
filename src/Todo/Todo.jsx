import { useState } from "react";
import Todo from "./Todo";


function App() {
    const [inputList, setinput] = useState(" ");
    const [item, setitem] = useState([]);

    const itemEvent = (event) => {
        setinput(event.target.value)

    }

    const listitem = () => {
        setitem((olditem) => {
            return [...olditem, inputList];
        });
        setinput(" ");
    }


    const deleteitem = (id) => {
        console.log("delete")
        setitem((olditem) => {
            return olditem.filter((errelem, index) => {
                return index !== id;
            })
        })
    }


    return (
        <div className="App">
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>Todo list</h1>
                    <br />
                    <input type="text" placeholder="enter your notes" value={inputList} onChange={itemEvent} />
                    <button onClick={listitem}>+</button>

                    <ol>
                        {
                            item.map((itemval, index) => {
                                return <Todo key={index} id={index} text={itemval} onSelect={deleteitem} />
                            })
                        }
                    </ol>

                </div>

            </div>
        </div>
    );
}

export default App;
