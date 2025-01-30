import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex items-center justify-center p-3 mt-3">
      <Image 
        src="/logWeb.svg" 
        alt="Logo"
        width={150} 
        height={150}
        className="rounded-lg"
      />
    </div>
  );
};

export default Logo;
