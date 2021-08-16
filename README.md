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
