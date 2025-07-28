import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import cn from 'classnames';

export class App {
  value = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.value++;
  }
}

export const AppView = observer(({ state }: { state: App }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-8'>
      <div className='text-xl font-bold'>Tiny SPA Template</div>
      <div className='text-4xl'>{state.value}</div>
      <button
        className={cn(
          'py-2 px-4 font-semibold bg-lime-500 rounded-xl cursor-pointer transition',
          'hover:brightness-110',
          'active:scale-95'
        )}
        onClick={() => state.increment()}
        children='Add one'
      />
    </div>
  );
});
