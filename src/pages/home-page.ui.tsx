import { AboutUs } from '@/widgets/about-us';
import { Catalog } from '@/widgets/catalog';
import { FAQ } from '@/widgets/faq';
import { Footer } from '@/widgets/footer';
import { MainHeader } from '@/widgets/header-main';
import { OurTeam } from '@/widgets/our-team';
import { Quiz } from '@/widgets/quiz';

export const HomePage: React.FC = () => {
  const content = [
    <Catalog />,
    <AboutUs />,
    <Quiz />,
    <OurTeam />,
    <FAQ />,
  ].map((item, idx) => <section key={idx}>{item}</section>);

  return (
    <>
      <header>
        <MainHeader />
      </header>
      <main>{content}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
