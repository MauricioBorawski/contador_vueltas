import { useState } from 'react';
import { Card, Icon, Heading, Button } from '@chakra-ui/react';
import { RepeatIcon, DeleteIcon } from '@chakra-ui/icons';
import { useCounterStore } from '../store/counter';
import { Alert } from '../components';
import { SecondaryCounter } from '../types';

export interface CounterProps {
    counter: SecondaryCounter;
    title: string;
    variant: 'primary' | 'secondary';
}

export const Counter = ({ title, counter, variant }: CounterProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const { delete: deleteCounter, updateValue } = useCounterStore();

    const { value, id } = counter;

    const cardSize = variant === 'primary' ? 'sm:w-[450px]' : 'sm:w-[250px]';

    return (
        <Card
            className={`w-3/4 ${cardSize} justify-center items-center p-8 gap-5`}
        >
            <Heading size="sm" className="w-full text-pastelRed">
                {title}
            </Heading>
            <div className="text-[48px] flex gap-10">
                <button
                    className="cursor-pointer text-pastelYellow"
                    onClick={() => {
                        updateValue('decrease', id);
                    }}
                >
                    -
                </button>
                <p className="text-pastelRed">{value}</p>
                <button
                    className="cursor-pointer text-pastelYellow"
                    onClick={() => {
                        updateValue('increase', id);
                    }}
                >
                    +
                </button>
            </div>
            <div className="w-full flex gap-1 items-center justify-between">
                <button
                    className="flex gap-1 items-center justify-center"
                    onClick={() => {
                        updateValue('reset', id);
                    }}
                >
                    <Icon as={RepeatIcon} />
                    Reset
                </button>
                {variant === 'secondary' && (
                    <Button
                        colorScheme="red"
                        onClick={() => {
                            setIsOpen(true);
                        }}
                    >
                        <Icon as={DeleteIcon} />
                        Delete
                    </Button>
                )}
            </div>
            <Alert
                title="Delete counter"
                label="Are you sure? You can't undo this action afterwards."
                actionLabel="Delete"
                isOpen={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}
                variant="delete"
                deleteCounter={() => {
                    if (id && deleteCounter) deleteCounter(id);
                    setIsOpen(false);
                }}
            />
        </Card>
    );
};
