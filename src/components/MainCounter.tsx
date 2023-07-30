import {useState} from "react";
import { Card, Icon, Heading} from "@chakra-ui/react";
import { RepeatIcon } from '@chakra-ui/icons';

export const MainCounter = () => {
     
  const [counter, setCounter] = useState<number>(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    if (counter <= 0) return;
    setCounter(0);
      }

    return (<Card className="w-3/4 justify-center items-center p-8 gap-5">  
        <Heading size='sm' className="w-full text-pastelRed">Main Counter</Heading>
        <div className="text-[48px] flex gap-10">
	        <button
	          className="cursor-pointer text-pastelYellow"
	          onClick={decreaseCounter}
	        >
	          -
	        </button>
	        <p className="text-pastelRed">{counter}</p>
	        <button
	          className="cursor-pointer text-pastelYellow"
	          onClick={increaseCounter}
	        >
	          +
	        </button>
	    </div>
        <div className="w-full flex gap-1 items-center justify-start">
           <button className="flex gap-1 items-center justify-center" onClick={resetCounter}>
               <Icon as={RepeatIcon} />
               Reset
           </button> 
        </div>
    </Card>)
    }
