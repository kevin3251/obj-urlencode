# obj-urlencode

A utility to encode or decode object value recursively.

``` javascript
import urlencode from 'obj-urlencode'

let data = urlencode.encode( { a: '#123'} )
// { a: '%23123' }
console.log( urlencode.decode(data) )
// { a: '#123' }
```

- **Methods**
    
    - `encode(obj)`

        |   param   |    type      |
        | --------- | ------------ |
        |   obj     |   `Object` (required)   |

        
    - `decode(obj)`
        
        |   param   |    type      |
        | --------- | ------------ |
        |   obj     |   `Object` (required)   |