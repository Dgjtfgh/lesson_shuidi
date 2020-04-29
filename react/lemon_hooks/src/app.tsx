import * as React from 'react';
// import { HelloComponent } from './hello';
import { Header } from './components';
export const App = () => {
    // const [name, setName] = React.useState('initName'); // react hoock
    // react新的函数， 改变组件的编写方式和redux 的新方式
    // const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setName(event.target.value);
    // }
    return (
        <div className="container-fluid">
            <Header />
            {/* <HelloComponent userName={name} /> */}
            {/* <NameEsitComponent userName={name} onChange={setUsernameState} /> */}
        </div>
    )
}