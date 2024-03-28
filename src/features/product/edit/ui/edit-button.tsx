import { Button, ButtonProps } from '@/shared/ui';
import css from './edit.module.css';

export const EditButton: React.FC<ButtonProps> = ({
  className,
  type,
  onClick,
  children,
}) => {
  return (
    <Button
      className={`${css.editButton} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
