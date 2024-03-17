import { ourTeam } from '@/shared/api';
import { Person } from './person.types';

export const useTeam = (): Person[] => {
  return ourTeam;
};
