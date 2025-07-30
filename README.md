# Quero Empada - Landing Page

Landing page moderna e responsiva para a Quero Empada, especializada na venda de empadas e tortas artesanais.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática para melhor desenvolvimento
- **Tailwind CSS** - Framework CSS utilitário
- **Vercel** - Plataforma de deploy

## 🎨 Design

A landing page utiliza as cores da marca Quero Empada:

- **Marrom Escuro**: `#5d3c0f`
- **Amarelo Vibrante**: `#ffb800`
- **Vermelho Forte**: `#b80900`
- **Off-White**: `#fff7ed`

## 📱 Funcionalidades

- ✅ Design responsivo para mobile, tablet e desktop
- ✅ Otimização para SEO com metadados completos
- ✅ Links funcionais para WhatsApp, Instagram e site oficial
- ✅ Animações suaves e interativas
- ✅ Performance otimizada com Next.js
- ✅ Compatível com Vercel para deploy

## 🛠️ Instalação

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
cd quero-empada-landing
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Execute o servidor de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
```

4. **Acesse a aplicação**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📸 Imagens

As imagens estão localizadas em `/public/img/`. Você precisa substituir os placeholders por imagens reais:

- `logo-quero.png` - Logo da empresa
- `empada-hero.jpg` - Imagem principal da empada
- `empada-tradicional.jpg` - Empada tradicional
- `mini-empadas.jpg` - Mini empadas (50 unidades)
- `mini-empadas-100.jpg` - Mini empadas (100 unidades)
- `torta.jpg` - Torta artesanal

**Dimensões recomendadas:**

- Hero: 1200x800px
- Produtos: 400x300px
- Logo: 200x200px

## 🚀 Deploy na Vercel

1. **Conecte seu repositório à Vercel**

   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "New Project"
   - Importe o repositório

2. **Configure as variáveis de ambiente (se necessário)**

   - Na dashboard da Vercel, vá em Settings > Environment Variables

3. **Deploy automático**
   - A Vercel fará deploy automático a cada push para a branch main
   - O domínio será gerado automaticamente

## 📋 Estrutura do Projeto

```
quero-empada-landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Products.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   └── img/
│       ├── logo-quero.png
│       ├── empada-hero.jpg
│       ├── empada-tradicional.jpg
│       ├── mini-empadas.jpg
│       ├── mini-empadas-100.jpg
│       └── torta.jpg
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎯 Seções da Landing Page

1. **Header** - Logo, navegação e CTA principal
2. **Hero** - Headline impactante e imagem principal
3. **Produtos** - Cards com todos os produtos e preços
4. **Sabores** - Lista de sabores disponíveis
5. **Contato** - Informações de contato e CTAs
6. **Footer** - Links e informações da empresa

## 📞 Informações de Contato

- **WhatsApp**: (19) 98601-5465
- **Instagram**: [@queroempada.com.br](https://www.instagram.com/queroempada.com.br/)
- **Site**: [www.queroempada.com.br](https://www.queroempada.com.br)

## 🛒 Produtos

- **Empada Tradicional**: R$ 8,00/unidade
- **Mini Empadas (50 un)**: R$ 40,00
- **Mini Empadas (100 un)**: R$ 80,00
- **Torta (~500g)**: R$ 30,00

**Sabores**: Frango, Palmito, Pernil desfiado com barbecue, Costela desfiada, Queijo

## 📝 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

Desenvolvido com ❤️ para a Quero Empada
