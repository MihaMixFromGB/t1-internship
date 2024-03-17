export type Tag = {
  label: string;
};

export type TagProps = {
  tag: Tag;
  active?: boolean;
};

export type TagsProps = {
  tags: Tag[];
};
