# ReactJS Freshchat
=======================================

React component wrapper for Freshchat. The oficial documentation can be found here <https://developers.freshchat.com/web-sdk/>.

* * *

### List of features

*   Create a chat with anonymous user
*   Create a chat with Logged in user
*   Custom labeled chat
    * Add a label to your chat icon. 
    * The ic_styles property can only be set with this option.

### Live examples

* Simple icon chat <br>
![Image of simple chat](https://firebasestorage.googleapis.com/v0/b/repfinder-450e2.appspot.com/o/simple-chat.png?alt=media&token=c99128ce-563c-416d-b3e8-cb099f4e543a)
* Labeled icon chat <br>
![Image of labeled chat](https://firebasestorage.googleapis.com/v0/b/repfinder-450e2.appspot.com/o/label-chat.png?alt=media&token=206efa72-8afb-44f8-b496-1126fb1f35e6)
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
