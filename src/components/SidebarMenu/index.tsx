import 'tailwindcss/tailwind.css';
// import './index.css';

const SidebarMenu = () => {
  return (
    <div>
      <div className="flex flex-col">
        <button> Button 1 </button>
        <button> Button 2 </button>
        <button> Button 3 </button>
      </div>
      <div className="shadow-sm bg-white rounded-lg">shadow-sm</div>
    </div>
  );
};

export { SidebarMenu };
