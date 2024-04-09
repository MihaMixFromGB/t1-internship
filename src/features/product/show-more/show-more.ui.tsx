import { Button, ButtonProps } from '@/shared/ui';

export const ShowMore: React.FC<ButtonProps> = ({ className, onClick }) => {
  return (
    <Button className={className} onClick={onClick}>
      Show more
    </Button>
  );
};
