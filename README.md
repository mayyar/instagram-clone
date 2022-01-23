# instagram-clone

In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from

```js
import { Switch, Route } from 'react-router-dom';
```

to

```js
import { Routes, Route } from 'react-router-dom';
```

You also need to update the Route declaration from

```js
<Route path="/" component={Home} />
```

to

```js
<Route path="/welcome" element={<Home />} />
```

In react-router-dom v6 `useHistory()` is replaced by `useNavigate()`.
