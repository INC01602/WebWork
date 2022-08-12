## lifecycle methods

- These are the methods provided by REACT which we can override at particular stages during the lifecycle of application

- These methods are usually used for the class components and are not availalbe for functional components. Hooks like `useEffects` are used in functional components to use lifecycle methods

- Mainly the lifecycle methods are classified into four parts - 
    - Mounting:
        When the instance of a component is being created or inserted into the DOM.
        Methods : 
        - constructor: Gets called when , static getDerivedStateFromProps, render and componentDidMount

    - Updating
        When the component is re-rendered as a change in `state` or `prop`
        Methods : static getDerivedStateFromProps, shouldComponentUpdate, render, getSnaphotBeforeUpdate and componentDidUpdate
    - Unmounting
        When component is being removed from the DOM tree
        Methods : componentWillMount

    - Error Handling
        When there is a error during rendering, in a lifecycle method, or in constructor of child
        Method : static getDerivedStateFromError and ComponentDidCatch