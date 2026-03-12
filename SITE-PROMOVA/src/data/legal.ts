export interface LegalSection {
  title: string;
  content: string[];
}

export const legalContent: Record<string, LegalSection> = {
  'Termos de Uso': {
    title: 'Termos de Uso',
    content: [
      'Bem-vindo ao site da Promova Produções. Ao acessar este site, você concorda em cumprir estes termos de uso.',
      '1. Aceitação dos Termos: O uso deste site constitui sua aceitação total destes termos.',
      '2. Propriedade Intelectual: Todo o conteúdo deste site, incluindo vídeos, fotos, textos e logotipos, é propriedade da Promova Produções ou licenciado para nós.',
      '3. Uso do Site: Você concorda em usar o site apenas para fins legais e de forma que não infrinja os direitos de terceiros.',
      '4. Limitação de Responsabilidade: A Promova Produções não será responsável por quaisquer danos resultantes do uso ou incapacidade de usar este site.',
      'Estes termos podem ser atualizados a qualquer momento sem aviso prévio.'
    ]
  },
  'Privacidade': {
    title: 'Política de Privacidade',
    content: [
      'A sua privacidade é importante para nós. Esta política explica como coletamos e usamos seus dados.',
      '1. Coleta de Informações: Coletamos informações que você nos fornece voluntariamente através de formulários de contato.',
      '2. Uso das Informações: Usamos seus dados para responder a solicitações e melhorar nossos serviços.',
      '3. Compartilhamento de Dados: Não vendemos ou compartilhamos seus dados pessoais com terceiros, exceto conforme exigido por lei.',
      '4. Segurança: Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado.',
      'Ao usar nosso site, você concorda com nossa política de privacidade.'
    ]
  },
  'Cookies': {
    title: 'Política de Cookies',
    content: [
      'Este site utiliza cookies para melhorar sua experiência de navegação.',
      '1. O que são cookies: Pequenos arquivos de texto armazenados no seu dispositivo.',
      '2. Como usamos cookies: Utilizamos cookies para entender como os visitantes interagem com o site e para lembrar suas preferências.',
      '3. Gerenciamento de Cookies: Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.',
      '4. Tipos de Cookies: Utilizamos cookies essenciais e de desempenho.',
      'Continuar a navegar no site implica na aceitação do uso de cookies.'
    ]
  },
  'LGPD': {
    title: 'Lei Geral de Proteção de Dados (LGPD)',
    content: [
      'Estamos comprometidos com a proteção de seus dados pessoais em conformidade com a LGPD (Lei nº 13.709/2018).',
      '1. Seus Direitos: Você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento.',
      '2. Finalidade do Tratamento: Os dados coletados destinam-se exclusivamente ao atendimento de suas solicitações e comunicações comerciais.',
      '3. Armazenamento: Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas.',
      '4. Contato: Para exercer seus direitos como titular de dados, entre em contato conosco através de nossos canais oficiais.',
      'Mantemos transparência total sobre o tratamento de seus dados.'
    ]
  }
};
