import { PropsWithClassName } from '@/shared/config';
import { Button } from '@/shared/ui';

export const ShowMore: React.FC<PropsWithClassName> = ({ className }) => {
  return <Button className={className}>Show more</Button>;
};
