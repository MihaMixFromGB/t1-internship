import { navigationMenu } from '@/shared/model';

export const menu = navigationMenu.filter(item => item.label !== 'For staff');
