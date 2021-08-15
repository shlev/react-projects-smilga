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
