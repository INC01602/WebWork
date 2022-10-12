## Fragments

- While returning a component, all the children elements need to be enclosed in one single parent tag.
- Fragments lets you group children elements without adding any extra nodes to the DOM tree.

- This is helpful when we need to create a component returning multiple elements and cannot be enclosed in a div tag due to element hierarchy issues like in tables.

```
return (
        <table>
            <tbody>
                <FragmentComp />
            </tbody>
        </table>
    );

return (
        <div>
            <td > Column 1 </td>
            <td > Column 2 </td>
            <td > Column 3 </td>
        </div>
    );

named-references.js:1 Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>.
                                at td
                                at div
                                at FragmentComp
                                at tbody
                                at table
                                at ParentTable
                                at div
                                at App
```

- Instead, we use a `<> </>` empty tag or `React.Fragment` tag to enclose such child elements.
- Fragment tag only supports one attribute, i.e `key` used when rendering lists.


## Refs

- `Refs` helps us to interact with the `DOM node` directly to which the `ref` is connected to.
- 