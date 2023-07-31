import { useState } from "react";
import { useSecondaryCounters } from "./hooks";
import { Button } from '@chakra-ui/react';
import { Counter, Alert, SecondaryCounters } from "./components";

function App() {
    const { counters, createNewSecondaryCounter, deleteCounter, updateCounterValue } = useSecondaryCounters();

    const [isOpen, setIsOpen] = useState(false);

    const handleToggleAlert = (state: boolean) => {
        setIsOpen(state);
    }

    return (
        <div className="min-h-screen h-full flex flex-col items-center justify-center bg-pastelLilac gap-10 py-10">
            <Counter variant="primary" title="Main Counter" counter={counters[0].value} id="maincounter" updateCounter={updateCounterValue}/>
            <div className="w-3/4 md:w-[450px] flex justify-between items-center">
                <h2 className='text-xl text-slate-50 font-bold'>
                    Secondary Counters
                </h2>
                <Button
                    sx={{ background: "#D9D8A9", color: "white" }}
                    size="sm"
                    onClick={() => { handleToggleAlert(true) }}
                >
                    New
                </Button>
            </div>
            <SecondaryCounters
                counters={counters}
                deleteCounter={deleteCounter}
                updateCounterValue={updateCounterValue}
            />
            <Alert
                title={"Add new counter"}
                label={"You can put a name to the counter"}
                actionLabel="Create"
                variant="create"
                isOpen={isOpen}
                onClose={() => { handleToggleAlert(false) }}
                createNewCounter={createNewSecondaryCounter}
            />
        </div>
    );
}

export default App;
