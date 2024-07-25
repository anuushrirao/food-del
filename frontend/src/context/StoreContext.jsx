import { createContext } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const contextValue = {
        
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
{/*React Context is a critical concept to master once your 
    projects get to a certain size. Context can drastically improve
     your code readability, help you avoid prop-drilling (passing props 
     down through lots of components), and increase code maintainability.
 */}