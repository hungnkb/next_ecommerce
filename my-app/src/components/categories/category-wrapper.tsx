import React from 'react';
export type ChildrenCategoryWrapper = {
  children: any;
};
export const CategoryWrapper = ({ children }: ChildrenCategoryWrapper) => (
  <div className='w-full max-w-[260px] px-1 py-2 rounded-small'>{children}</div>
);
