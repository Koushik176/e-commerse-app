import React, { useState } from "react";

const EmailContext = React.createContext({
    email: '',
    login: (email) => {},
    logout: () => {},
});

export const EmailContextProvider = (props) => {
    const initialEmail = localStorage.getItem('email');
    const [email, setEmail] = useState(initialEmail);

    const loginHandler = (email) => {
        setEmail(email);
        localStorage.setItem('email', email);
        setTimeout(() => {
            logoutHandler();
            localStorage.removeItem('email');
        }, 1000*60*5);
    };

    const logoutHandler = () => {
        setEmail(null);
        localStorage.removeItem('email');
    };

    const contextValue = {
        email: email,
        login: loginHandler,
        logout: logoutHandler,
    };

    return <EmailContext.Provider value={contextValue}>
        {props.children}
    </EmailContext.Provider>;
};

export default EmailContext;