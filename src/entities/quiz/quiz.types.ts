export type Quiz = {
  question: string;
  variants: Variant[];
};

export type Variant = {
  label: string;
  status: boolean;
};
