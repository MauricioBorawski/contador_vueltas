import { Card, Heading } from '@chakra-ui/react';

export interface CustomCardProps {
    title: string;
    children?: React.ReactNode;
    variant: 'primary' | 'secondary';
}

export const CustomCard = ({ title, children, variant }: CustomCardProps) => {
    const cardSize = variant === 'primary' ? 'sm:w-[450px]' : 'sm:w-[250px]';
    return (
        <Card
            className={`w-3/4 ${cardSize} justify-center items-center p-8 gap-5`}
        >
            <Heading size="sm" className="w-full text-pastelRed">
                {title}
            </Heading>
            <div className="text-[48px] flex gap-10">{children}</div>
        </Card>
    );
};
