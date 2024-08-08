import CardList from '@/components/cards/card-list';

export default function Home() {
  return (
    <div className='grid grid-cols-7 gap-1'>
      <div className='col-start-1 col-span-1'></div>
      <div className='col-start-2 col-span-5 justify-items-center'>
        <CardList />
      </div>
      <div className='col-start-6 col-span-1'></div>
    </div>
  );
}
