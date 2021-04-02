export class MenuItem {
  constructor(
      public name: string,
      public route: string,
      public toolTip: string,
      public icon: string = ''
  ) {}
}

export const menuList = [
  new MenuItem('Gestion', 'gestion', 'gestion class material', 'precision_manufacturing'),
  new MenuItem('Statistiques', 'stat', 'stat class material', 'poll'),
  new MenuItem('Validation', 'validation', 'validation class material', 'check')

];
