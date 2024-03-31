import { Paragraph } from '@/shared/ui';
import { PersonCardProps } from '../person.types';
import css from './person-card.module.css';

export const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  return (
    <div className={css.personCard}>
      <img
        src={person.photo}
        width={380}
        height={400}
        alt={`${person.name}, ${person.position}`}
        loading='lazy'
      />
      <div className={css.info} aria-hidden={true}>
        <Paragraph className={css.info__name} color='secondary'>
          {person.name}
        </Paragraph>
        <Paragraph color='secondary'>{person.position}</Paragraph>
      </div>
    </div>
  );
};
