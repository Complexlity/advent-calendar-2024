const Header = () => {
  return (
    <nav className="px-5 bg-gray-800">
      <div className="relative text-white flex h-16 items-center justify-end">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Header;