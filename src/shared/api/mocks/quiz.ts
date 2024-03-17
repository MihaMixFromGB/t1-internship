const stub = { label: 'sneakers', status: false };

export const quiz = {
  question: 'What type of product are you considering?',
  variants: Array.from({ length: 22 }).map(() => stub),
};
