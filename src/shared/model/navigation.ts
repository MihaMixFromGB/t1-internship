import type { MenuItem } from '../ui';

export const anchors = {
  catalog: 'catalog',
  aboutUs: 'about-us',
  productSelection: 'product-selection',
  ourTeam: 'our-team',
  faq: 'faq',
};

export const paths = {
  home: '/',
  catalog: `#${anchors.catalog}`,
  aboutUs: `#${anchors.aboutUs}`,
  productSelection: `#${anchors.productSelection}`,
  ourTeam: `#${anchors.ourTeam}`,
  faq: `#${anchors.faq}`,
  forStaff: '/admin',

  product: (id?: string | number) => `/products/${id ?? ':productId'}`,
};

export const navigationMenu: MenuItem[] = [
  { label: 'Catalog', href: paths.catalog },
  { label: 'About us', href: paths.aboutUs },
  { label: 'Product selection', href: paths.productSelection },
  { label: 'Our team', href: paths.ourTeam },
  { label: 'FAQ', href: paths.faq },
  { label: 'For staff', href: paths.forStaff },
];
