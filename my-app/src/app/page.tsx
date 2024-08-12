import CardList from '@/components/cards/card-list';
import { Category } from '@/components/categories/category';

export default function Home() {
  return (
    <div className='grid grid-cols-7 gap-1'>
      <div className='col-start-1 col-span-1 bg-white rounded-xl mt-2 p-2'>
        <Category />
      </div>
      <div className='col-start-2 col-span-5 justify-items-center bg-white rounded-xl mt-2 p-2'>
        <CardList />
      </div>
      <div className='col-start-6 col-span-1'></div>
    </div>
  );
}
