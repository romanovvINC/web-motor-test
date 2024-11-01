import cls from './App.module.scss';
import {Tabs} from "./modules/Tabs/Tabs.tsx";
import {Content} from "./modules/Content/Content.tsx";

function App() {
  return (
    <div className={cls.wrapper}>
      <Tabs />
      <Content />
    </div>
  )
}

export default App
