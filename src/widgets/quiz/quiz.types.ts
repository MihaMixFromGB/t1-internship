type PageProp = {
  page: number;
};

export type QuizHeaderProps = PageProp;

export type QuizFooterProps = PageProp & {
  onNext: () => void;
};
