import { useState } from 'react';
import { useSecondaryCounters } from './hooks';
import { Button } from '@chakra-ui/react';
import { Alert, SecondaryCounters, MainCounter } from './components';

function App() {
    const { counters, create } = useSecondaryCounters();

    const [isOpen, setIsOpen] = useState(false);

    const handleToggleAlert = (state: boolean) => {
        setIsOpen(state);
    };

    const totalCountValue = counters.reduce((acc, counter) => {
        return acc + counter.value;
    }, 0);

    return (
        <div className="min-h-screen h-full flex flex-col items-center justify-center gap-10 py-10">
            <MainCounter total={totalCountValue} />
            <div className="w-3/4 md:w-[450px] flex justify-between items-center">
                <h2 className="text-xl text-slate-50 font-bold">
                    Secondary Counters
                </h2>
                <Button
                    sx={{ background: '#D9D8A9', color: 'white' }}
                    size="sm"
                    onClick={() => {
                        handleToggleAlert(true);
                    }}
                >
                    New
                </Button>
            </div>
            <SecondaryCounters counters={counters} />
            <Alert
                title={'Add new counter'}
                label={'You can put a name to the counter'}
                actionLabel="Create"
                variant="create"
                isOpen={isOpen}
                onClose={() => {
                    handleToggleAlert(false);
                }}
                createNewCounter={create}
            />
        </div>
    );
}

export default App;
