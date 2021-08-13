
# Dropdown Selector ⌨ 

## Example

| android | -iOS- |
| :-------------: | :-------------: |
| ![image](https://user-images.githubusercontent.com/84458435/129288024-fad35708-4ebd-49dc-a78f-6194e781c9c6.png) | ![image](https://user-images.githubusercontent.com/84458435/129301120-07726b5f-6c91-4135-9e90-828e78a06080.png)
 |




## Source Code With Forkik
```js
import React from 'react';
import { DropdownSelector } from '@platformbuilders/react-native-ui';

const Home: React.FC = () => {
  return (
          <DropdownSelector
            options={[
              { label: 'a', value: 'b' },
              { label: 'Example Dropdown' },
            ]}
            selectedValue={values?.myField}
            setSelectedValue={handleChange('myField')}
            id="lg_my_field_input"
            accessibility="Example"
            label="Example"
            iconName="rocket"
            leftIconName="rocket"
            error='error example'
          />
  );
}

export default Home;
```
## Source Code With States
```js
import React from 'react';
import { DropdownSelector } from '@platformbuilders/react-native-ui';

const Home: React.FC = () => {
  return (
                <DropdownSelector
            options={[
              { label: 'a', value: 'b' },
              { label: 'Example Dropdown' },
            ]}
            selectedValue={myState}
            setSelectedValue={setMyState}
            id="lg_my_field_input"
            accessibility="Example"
            label="Example"
            iconName="rocket"
            leftIconName="rocket"
            error='error example'
          />
  );
}

export default Home;
```





