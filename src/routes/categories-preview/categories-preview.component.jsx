import { Fragment, useContext } from 'react';
import CategoryPreview from '../../components/category-preview/categroy-preview.component';

import { CategoriesContext } from '../../context/categories.context';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      <h1>Klik op categorie voor meer artikelen</h1>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
