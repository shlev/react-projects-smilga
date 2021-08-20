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
