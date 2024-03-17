import { PersonCard } from '@/entities/person';
import css from './photo-collage.module.css';
import { PhotoCollageProps } from './photo-collage.types';

export const PhotoCollage: React.FC<PhotoCollageProps> = ({ team }) => {
  return (
    <ul className={css.collage}>
      {team.map(person => (
        <li key={person.id}>
          <PersonCard person={person} />
        </li>
      ))}
    </ul>
  );
};
