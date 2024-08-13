import CardList from '@/components/cards/card-list';
import { Category } from '@/components/categories/category';

export default function Home() {
  return (
    <div className='grid grid-cols-6 gap-1 wm:grid-cols-1'>
      <div className='col-start-1 col-span-1 wm:hidden'></div>
      <div className='col-start-2 col-span-1 bg-white rounded-xl mt-2 p-2 wm:hidden'>
        <Category />
      </div>
      <div className='col-start-3 col-span-3 justify-items-center bg-white rounded-xl mt-2 p-2'>
        <CardList />
      </div>
      <div className='col-start-11 col-span-1 wm:hidden'></div>
    </div>
  );
}
