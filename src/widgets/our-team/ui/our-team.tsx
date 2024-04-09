import { useTeam } from '@/entities/person';
import { anchors } from '@/shared/model';
import { Container, Wrapper, Heading } from '@/shared/ui';
import css from './our-team.module.css';
import { PhotoCollage } from './photo-collage';

export const OurTeam: React.FC = () => {
  const team = useTeam();

  return (
    <Container className={css.ourTeam}>
      <Wrapper className={`${css.ourTeamWrapper}`}>
        <Heading
          id={anchors.ourTeam}
          className={css.ourTeam__title}
          tag='h2'
          color='secondary'
        >
          Our team
        </Heading>
        <PhotoCollage team={team} />
      </Wrapper>
    </Container>
  );
};
