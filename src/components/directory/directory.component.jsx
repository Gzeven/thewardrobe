import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const categories = [
  {
    id: 1,
    title: 'Hoeden',
    imageUrl:
      'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80',
    route: 'winkel/hoeden',
  },
  {
    id: 2,
    title: 'Jassen',
    imageUrl:
      'https://images.unsplash.com/photo-1521402966881-852a3b2551fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    route: 'winkel/jassen',
  },
  {
    id: 3,
    title: 'Schoenen',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1658506694240-d91679c24e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80',
    route: 'winkel/schoenen',
  },
  {
    id: 4,
    title: 'Dames',
    imageUrl:
      'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    route: 'winkel/dames',
  },
  {
    id: 5,
    title: 'Heren',
    imageUrl:
      'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    route: 'winkel/heren',
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
