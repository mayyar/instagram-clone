# instagram-clone

Due to release of Firebase SDK Version 9 on 25th August 2021,Apps currently using Firebase Web SDK version 8 or earlier should consider migrating to version 9 as follows:

Before: version 8 (Old)

```js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
```

After: version 9 compat (New)

```js
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
```

In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from
```js
import { Switch, Route } from "react-router-dom";
```
to
```js
import { Routes ,Route } from 'react-router-dom';
```
You also need to update the Route declaration from
```js
<Route path="/" component={Home} />
```
to
```js
<Route path='/welcome' element={<Home/>} />
```

In react-router-dom v6 `useHistory()` is replaced by `useNavigate()`.