import { useState, useEffect, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import AddNewItem from "./components/ShoppingList/AddNewItem";
import Item from "./components/ShoppingList/Item";
import NotificationContext from "./context/NotificationContext";
import { getAllItems } from "./store/listSlice";


function ShoppingList() {
    const items = useSelector(getAllItems);

    return (
        <div className="">
            <h1 className="text-center">Shopping List</h1>
            <div className="lg-6 md-8 sm-10 m-5 justify-content-center">
                <AddNewItem />
                <div className="my-3 p-3">
                    <ul className="list-group">
                        {items.map((item, index) => <Item id={index} key={index} value={item.title} isDone={item.isDone} />)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ShoppingList;