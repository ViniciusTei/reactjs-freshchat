# ReactJS Freshchat
=======================================

React component wrapper for Freshchat. The oficial documentation can be found here <https://developers.freshchat.com/web-sdk/>.

* * *

### List of features

*   Create a chat with anonymous user
*   Create a chat with Logged in user

### Code Demo

```tsx
  import { Freshchat } from 'reactjs-freshchat';

 //1. Anonymous User
    <Freshchat token={'YOUR-TOKEN-HERE'} />

 //2. Logged in User
    <Freshchat 
      token={'YOUR-TOKEN-HERE'}
      externalId={"john.doe1987"} 
      firstName={"John"}
      lastName={"Doe"}
    />

```

### Download & Installation

```shell 
$ npm i reactjs-freshchat
```

### Contributing

Keep it simple. Keep it minimal. Don't put every single feature just because you can. Have fun 🚀!

### Authors or Acknowledgments

*   Vinicius Teixeira

### License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
