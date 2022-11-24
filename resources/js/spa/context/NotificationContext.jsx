import { createContext, useState } from 'react';


const NotificationContext = createContext({
    type: null,
    text: null,
    success: () => {},
    error: () => {},
});

const NotificationProvider = (props) => {
    const [type, setType] = useState(null);
    const [text, setText] = useState(null);

    const success = (message) => {
        setType('success');
        setText(message);
    }

    const error = (message) => {
        setType('danger');
        setText(message);
    }

    return (
        <NotificationContext.Provider value={{ type, text, success, error }}>
            {props.children}
        </NotificationContext.Provider>
    );
};

export { NotificationProvider };

export default NotificationContext;
