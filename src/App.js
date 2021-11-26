import { useState } from "react";


function App() {
    const [inputList, setinput] = useState(" ");
    const [item, setitem] = useState([]);
    const [togel, settogel] = useState(true);
    const [ident, setident] = useState(null);
    const [search, setsearch] = useState("");

    const itemEvent = (event) => {
        setinput(event.target.value)

    }

    const listitem = () => {
        setitem((olditem) => {
            const alldata = { id: new Date().getTime().toString(), name: inputList }
            return [...olditem, alldata];
        });
        setinput(" ");
    }


    const deleteitem = (id) => {
        console.log("delete")
        setitem((olditem) => {
            return olditem.filter((errelem) => {
                return id !== errelem.id;
            })
        })
    }

    const edititem = (id) => {
        const newedit = item.find((elem) => {
            return (
                elem.id === id
            )
        })
        console.log(newedit);
        settogel(false)
        setinput(newedit.name);
        setident(newedit.id);
    }

    const modifytitem = () => {
        if (!togel) {
            console.log("edit")
            setitem(
                item.map((elem) => {
                    if (elem.id === ident) {
                        return { ...elem, name: inputList }
                    }
                    return elem;
                })
            )
        }
        settogel(true)

        setinput("")
    }


    const searchitem = (e) => {
        setsearch(e.target.value);
    }

    return (
        <div className="App">
            <div className="main_div">
                <div className="center_div">
                    <input type="text" placeholder="search...." value={search} onChange={searchitem} />
                    <br />
                    <h1>Todo list</h1>
                    <br />
                    <input type="text" placeholder="enter your notes" value={inputList} onChange={itemEvent} />
                    {
                        togel ?
                            <button onClick={listitem}>+</button> : <button onClick={modifytitem}>edit</button>
                    }

                    <ol>
                        {
                            item.filter((errelem) => {
                                return errelem.name.toLowerCase().includes(search.toLowerCase())
                            }).map((itemval) => {
                                return <>
                                    <div key={itemval.id}>
                                        <li>
                                            <button onClick={() => edititem(itemval.id)}>edit</button>
                                            <button onClick={() =>
                                                deleteitem(itemval.id)}>-</button>
                                            {itemval.name}</li>
                                    </div>
                                </>
                            })
                        }
                    </ol>

                </div>

            </div>
        </div>
    );
}

export default App;
