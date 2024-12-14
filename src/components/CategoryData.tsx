import DataTable from './DataTable';
import { getAllCategories } from '@/lib/queries/categories/queries';

export default async function CategoryData() {
  const categories = await getAllCategories();

  return <DataTable data={categories} type="categories" />;
}
