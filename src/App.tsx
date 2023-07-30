import {MainCounter} from "./components";
import { Button } from '@chakra-ui/react'

function App() {

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pastelLilac gap-10">
        <MainCounter />
    <div className="w-3/4">
        <h2 className='text-xl text-slate-50 font-bold'>Secondary Counters</h2>
        <Button sx={{background: "#D9D8A9", color: "white"}} size="sm" >New</Button>
    </div>
    </div>
  );
}

export default App;
