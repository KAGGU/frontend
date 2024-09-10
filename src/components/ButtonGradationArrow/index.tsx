import type { Props } from '@/components/ButtonGradation';
import ButtonGradation from '@/components/ButtonGradation';

const ButtonGradationArrow = ({ children, onClick }: Props) => {
  return (
    <ButtonGradation onClick={onClick}>
      <span className='ml-1 w-40'>{children}</span>
      <svg
        className='ml-2 w-6 h-6 text-gray-800 dark:text-white'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M19 12H5m14 0-4 4m4-4-4-4'
        />
      </svg>
    </ButtonGradation>
  );
};

export default ButtonGradationArrow;
