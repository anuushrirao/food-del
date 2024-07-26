import { createContext, useContext, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});


    const addToCart = (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    {/*State Management: addToCart manages the cartItems 
        state, ensuring items are added or their quantities 
        are incremented.
        Prop Passing: The parent component (App) passes the 
        addToCart function and cartItems state to the child component (Cart) as props. */}
    
    const removeFromCarts = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCarts
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

     Context in React is a mechanism to pass data through the component tree without having to 
     pass props down manually at every level. It allows you to share data (like state, functions, 
     or any other values) across many components without the need for prop drilling, which means 
     passing props down through multiple levels of nested components.

     example:
     react project  so if this is our project and we want to apply theme toggling 
          👇🏼        we will need to send props to every component
      dashboard     so as to avoid this we will use context provider
          👇🏼        A Context Provider is a component that makes the context available to all   
      component     its children. It "provides" the context value to any component within its 
          👇🏼        subtree that is interested in using the context.
      submit button      
 */}