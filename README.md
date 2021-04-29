# ReactJS Freshchat
=======================================

React component wrapper for Freshchat. The oficial documentation can be found here <https://developers.freshchat.com/web-sdk/>.

* * *

### List of features

*   Create a chat with anonymous user
*   Create a chat with Logged in user
*   Custom labeled chat
    * Add a label to your chat icon. If you use this option the colors need to be defined in the component, or it will be the default Freshchat colors.

### Code Demo

```tsx
  import { Freshchat } from 'reactjs-freshchat';
  import 'reactjs-freshchat/dist/index.css'

 //1. Anonymous User
    <Freshchat token={'YOUR-TOKEN-HERE'} />

 //2. Logged in User
    <Freshchat 
      token={'YOUR-TOKEN-HERE'}
      externalId={"john.doe1987"} 
      firstName={"John"}
      lastName={"Doe"}
    />
 //3. Labeled chat and styled colors
      <Freshchat 
        token={'YOUR-TOKEN-HERE'} 
        label="Label"
        ic_styles={{
          backgroundColor: '#002d85', 
          color: '#fff'
        }}
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

MIT © [ViniciusTei](https://github.com/ViniciusTei)
