import { remove, toogle as toogleItem } from "../../store/listSlice";
import { useDispatch } from "react-redux";


function Item({ id, value, isDone }) {
    const dispatch = useDispatch();

    // const toogle = () => {
    //     dispatch(toogleListItem(id));
    // };

    const deleteItem = () => {
        dispatch(remove(id));
    };

    return (
        <li className="list-group-item">
            <input onChange={() => dispatch(toogleItem(id))} checked={isDone} className="form-check-input me-1" type="checkbox" />
            {value}
            <button onClick={deleteItem} className="btn btn-danger">Delete</button>
        </li>
    );
}

export default Item;