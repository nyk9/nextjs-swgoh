export type CounterTable = {
  id: number;
  user_name: string;
  allied_leader: string;
  allied_characters?: string[];
  enemy_leader: string;
  enemy_characters?: string[];
  description?: string;
};
