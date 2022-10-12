### Contexts 

- **Context or Context api** are used to share data among hierarchally unrelated components by creating a subscription based mechanisim.

- There are three major steps in using contexts - 
    1. Create a context.
        - `const userContext = React.createContext();`
          every component create with the `createContext()` function has a **provider** and **consumer** components, 
          
          `export { UserContextProvider, UserContextConsumer }`
          and needs to be exported for further use.

        - we can pass a default value to the `createContext()` function which is passed to the counsumer in case the provider fails to pass the correct value or configured incorrectly.

    2. Provide a context value.
        - Wrap the parent (recommended - topmost) in the Provider component of the context created. `value=""` keyword is used to pass the value that is to be injected in the tree.

            ```
                <UserContextProvider value='{"userFullName":"Makarand Patil","userName":"Mac21"}' >
                    <ParentLvl1 />    
                </UserContextProvider>
            ```
    3. Consume the context value.
        - Wrap the component in the same way as the parent but in the body you have to pass a function which will return the desired jsx to render.
        - The value passed in `value` attribute of the provider function is received as a argument in the internal function of the consumer function.

            ```
                <UserContextConsumer>
                    {
                        (user) => {
                            return (
                                <div>
                                    Hello {user}!!
                                </div>    
                            )
                        }
                    }
                </UserContextConsumer>
            ```

- There is another way to use Context, i.e by using the `contextType` - 
    1. Export the context component itself.
        `export default UserContext;`

    2. Set the context to the `contextType` of the component you want to use it in. Import the context component in the present component- 

        - if you application supports public class view syntax, before the `render()`, you can use - 
         `static contextType = UserContext;`
         
        -Else, after the class component code, set its contextType - 
         `ParentLvl2.contextType = UserContext;` 

    3. Step 2 sets the context value to `this.context` of the component, use it as follows - 
        ```
            render() {
                return (
                <div>
                    {this.context}
                </div>
                )
            }
        ```

### Limitations to the contextType method:

1. It can only be used in class components.
2. You can only subscribe to **one context**  at a time.

for using multiple contexts, follow the following code -
```
// A component may consume multiple contexts
function Content() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}
```
### HTTP Requests

- React is a library is used to create excellent UI, and takes no interest in  connecting to or fetching data from servers.

- Here, we are using `axios library` to handle our HTTP needs:
    
    `npm install axios`

- For more information [Axios Library](https://www.npmjs.com/package/axios#axios-api)

This had nothing to do with react except installing and using the library. I have created projects uing this library and also `fetch()` api of JS helps to replace this library. Please learn this on your own