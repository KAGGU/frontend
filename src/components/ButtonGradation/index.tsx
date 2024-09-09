interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const ButtonGradation = ({ children, onClick }: Props) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='relative inline-flex items-center justify-center p-0.5 my-1 overflow-hidden text-lg font-medium text-gray-900 rounded-full group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'
    >
      <span className='whitespace-nowrap relative px-6 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0'>
        {children}
      </span>
    </button>
  );
};

export default ButtonGradation;
