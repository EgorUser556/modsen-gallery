interface FooterColumn {
  title: string;
  items: string[];
}

const columns: FooterColumn[] = [
  { title: 'COMPANY', items: ['About', 'Features', 'Works', 'Career'] },
  {
    title: 'HELP',
    items: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'],
  },
  { title: 'FAQ', items: ['Account', 'Manage Deliveries', 'Orders', 'Payments'] },
  {
    title: 'RESOURCES',
    items: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'],
  },
];

export default columns;
