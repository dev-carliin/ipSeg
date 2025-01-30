
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Logo />
            </div>
            <p className="text-gray-400">
              Soluções inteligentes em segurança eletrônica para sua casa ou empresa.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Câmeras de Segurança</li>
              <li className="text-gray-400">Cerca Elétrica</li>
              <li className="text-gray-400">Controle de Acesso</li>
              <li className="text-gray-400">Automação Residencial</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">(11) 99999-9999</li>
              <li className="text-gray-400">contato@ipseg.com.br</li>
              <li className="text-gray-400">
                Av. Paulista, 1000 - Bela Vista<br />
                São Paulo - SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} IPSEG. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;