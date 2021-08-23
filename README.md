## 04-Accordion

#### Idea

[uidesigndaily](https://uidesigndaily.com/posts/sketch-accordion-website-day-1175)

![](./04-accordion/idea.png)

#### React Icons

[react icons](https://react-icons.github.io/react-icons/)

```
npm install react-icons --save
```

```javascript
import { FaHome } from "react-icons/fa";
const Component = () => {
  return <FaHome className="icon"></FaHome>;
};
```

#### Content

- spread ... to child component
- useState
- ternary
- show\hide short-circuit-and

---

## 05-Menu

#### Content

- useState
- filtering components
- pattern to extract objects unique values to array.

```
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

```

---

## 06-Tabs

#### IN ACTION

[Portfolio](https://gatsby-strapi-portfolio-project.netlify.app/)

#### Content

- fetch data from external url async, await.
- useEffect for initialization
- conditional rendering
- conditional styling

---

## 07-Slider

#### IN ACTION

[Gatsby-Airtable Project](https://gatsby-airtable-design-project.netlify.app/)

#### Content

- multiple useEffect
- useEffect on specific var
- useEffect cleanup

---

## 08-Lorem-Ipsum

#### Content

- form handle single input
- handle submit -> preventDefault
- input return string
- parseInt

---

## 09-Color-Generator

#### Values JS

[values.js](https://github.com/noeldelgado/values.js)

#### Content

- form handle single input
- handle submit -> preventDefault
- input return string
- parseInt
- fragment component
- conditional class

```
className={`color ${index > 10 && "color-light"}`}
```

- array.join()

```
  const arr = [3,4,5];
  const join_arr = arr.join('.') // join_arr = '3.4.5'
```

- inline compoponent style

```
<article
  className={`color`}
  style={{ backgroundColor: `rgb(${bcg})` }}
>
</article>

```

- rgbToHex function
- copy value to clipboard

```
navigator.clipboard.writeText(hexValue)
```

- color.hex -> not possible to destructure nont iterable property. instead send it to child as specific param.

```
<SingleColor
              key={index}
              {...color}
              hex={color.hex}
              index={index}
            >
</SingleColor>
```

- useEffect cleanup, activated if component is unmounted.

---

## 10-Grocery-Bud

#### Content

- conditional rendering
- list managment, add ,edit ,delete.
- function default values
- array.filter
- array.find
- componenet useEffect dependancy
- localStorage
- useEffect for initialization

## 11-navbar

#### Content

- img import

```
import logo from "./logo.svg";

<img src={logo} alt="logo" />
```

- useRef to get element ref , for styling

## 12-sidebar-modal

#### Content

- context hook
- AppContext
- children
- custom hook
- pass object in hook

## 13-stripe-submenus

#### Content

- context hook
- useRef
- useContext
- inline style
- events mouseover, click
- getBoundingClientRect for location ref.

## 14-cart

#### Content

- useReducer - used for state managment

  state - object of states
  dispatch - functionality for updating states.

  - type -> action type
  - action -> arguments

```
  const [state, dispatch] = useReducer(reducer, initialState);
```

## 15-cocktails

#### React Router Fix

(Fix)[https://dev.to/dance2die/page-not-found-on-netlify-with-react-router-58mc]

#### CRA Fix

```

"build": "CI= react-scripts build",

```

#### Content

- ##### Route (react-route-dom)

  - BrowserRouter contain

    - linking components

      ```
      <Link to="{destination}"></dd>
      ```

    - routing components destinations

      - **Switch** to select from **Route** options , similar to reguler switch
      - **path="\*"** similar to regular switch default
      - **exact** if not used it will be routed when it is part of other path like "/about" will call "/" and "/about"

      ```
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
      ```

      - extract api data to more convinient object by destructure and build new object

      ```
      const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
      ```

      - context provider to transfer objects without prop drilling

      - uncontrolled input with useRef

      ```
        const searchValue = React.useRef("");
        .
        const searchCocktail = () => {
          setSearchTerm(searchValue.current.value);
          };
        .
        <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
      ```

      - useParams - to use url trnsfered params
        App.js

      ```
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
      ```

      SingleCocktail.js

      ```
        const { id } = useParams();
      ```

## 16-Markdown-Preview

#### markdown cheetsheet

- [cheet-sheet](https://www.markdownguide.org/cheat-sheet)

#### Content

- use markdown component package
  ```
    npm install react-markdown
  ```
- controlled input

  ```
    useState(markdown, setMardown)

    <textarea>
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
    </textarea>
  ```

  - convert to markdown

  ```
    <ReactMarkdown>{markdown}</ReactMarkdown>
  ```

## 17-Random-Person

- [random user api](https://randomuser.me/api)

#### Content

- conditional render (loading)
- useState
- useEffect
- destructure api object
- read data dom object value

  - component

  ```
  <button
        key={index}
        className="icon"
        data-label={`${label}`}
        onMouseEnter={handleValue}
      ></button>
  ```

  - js read data value

  ```
  const newTitle = e.target.dataset.label;
  ```
