import { Checkbox } from '@/shared/ui';
import { CheckVariantProps } from './check-variant.types';

export const CheckVariant: React.FC<CheckVariantProps> = ({
  variant,
  onChange,
}) => {
  return (
    <Checkbox
      name='quiz'
      value={variant.label}
      checked={variant.status}
      onChange={onChange}
    />
  );
};
