import { useState } from "react";
import { Card, Icon, Heading, Button } from "@chakra-ui/react";
import { RepeatIcon, DeleteIcon } from '@chakra-ui/icons';
import { Alert } from "../components"

export interface CounterProps {
    variant: "primary" | "secondary";
    counter: number;
    title: string;
    id: string;
    deleteCounter?: (id: string) => void;
    updateCounter: (action: "increase" | "decrease" | "reset", id: string) => void;
}

export const Counter = ({ title, counter, variant, id, deleteCounter, updateCounter }: CounterProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const increaseCounter = () => {
         updateCounter("increase", id);
    };

    const decreaseCounter = () => {
        if (counter > 0) updateCounter("decrease", id);
    };

    const resetCounter = () => {
        if (counter > 0 && updateCounter) updateCounter("reset", id)
    }

    const cardSize = variant === "primary" ?
        "sm:w-[450px]" : "sm:w-[250px]";

    return (
        <Card className={`w-3/4 ${cardSize} justify-center items-center p-8 gap-5`}>
            <Heading
                size='sm'
                className="w-full text-pastelRed">
                {title}
            </Heading>
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
            <div className="w-full flex gap-1 items-center justify-between">
                <button className="flex gap-1 items-center justify-center" onClick={resetCounter}>
                    <Icon as={RepeatIcon} />
                    Reset
                </button>
                {variant === "secondary" &&
                    <Button colorScheme="red" onClick={
                        () => {
                            setIsOpen(true);
                        }
                    }>
                        <Icon as={DeleteIcon} />
                        Delete
                    </Button>
                }
            </div>
            <Alert
                title="Delete counter"
                label="Are you sure? You can't undo this action afterwards."
                actionLabel="Delete"
                isOpen={isOpen}
                onClose={() => {
                    setIsOpen(false)
                }}
                variant="delete"
                deleteCounter={
                    () => {
                        if (id && deleteCounter) deleteCounter(id);
                        setIsOpen(false);
                    }
                }
            />
        </Card>)
}
