---
name: Brincante
colors:
  surface: '#f8f9ff'
  surface-dim: '#d8dae1'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3fb'
  surface-container: '#ecedf5'
  surface-container-high: '#e6e8ef'
  surface-container-highest: '#e1e2e9'
  on-surface: '#191c21'
  on-surface-variant: '#414751'
  inverse-surface: '#2e3036'
  inverse-on-surface: '#eff0f8'
  outline: '#717783'
  outline-variant: '#c1c7d3'
  surface-tint: '#0060ac'
  primary: '#005da7'
  on-primary: '#ffffff'
  primary-container: '#2976c7'
  on-primary-container: '#fdfcff'
  inverse-primary: '#a4c9ff'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fdd73b'
  on-secondary-container: '#715d00'
  tertiary: '#006b28'
  on-tertiary: '#ffffff'
  tertiary-container: '#21863b'
  on-tertiary-container: '#f7fff2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a4c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004883'
  secondary-fixed: '#ffe173'
  secondary-fixed-dim: '#e8c426'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#554500'
  tertiary-fixed: '#96f89f'
  tertiary-fixed-dim: '#7bdb85'
  on-tertiary-fixed: '#002107'
  on-tertiary-fixed-variant: '#00531d'
  background: '#f8f9ff'
  on-background: '#191c21'
  surface-variant: '#e1e2e9'
typography:
  display-lg:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  body-lg:
    fontFamily: Quicksand
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  label-lg:
    fontFamily: Quicksand
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  touch-target-min: 64px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
---

## Brand & Style
O objetivo central é criar um ambiente digital que se assemelhe a um brinquedo físico. O design deve evocar segurança, criatividade e alegria, capturando a imaginação de crianças de até 7 anos. 

A estética adotada é uma mistura de **Minimalismo Tátil** e elementos inspirados no **Neomorfismo Suave**. As superfícies devem parecer macias ao toque, com elementos volumosos que convidam à interação imediata. A interface atua como uma moldura secundária, garantindo que o foco principal permaneça sempre na tela de desenho (o "papel"), enquanto as ferramentas ao redor são representadas de forma lúdica e funcional.

## Colors
A paleta é fundamentada em cores primárias vibrantes para ação e tons pastéis suaves para áreas de descanso visual.

- **Azul Brilhante (#4A90E2):** Utilizado para navegação e ferramentas principais de seleção.
- **Amarelo Ensolarado (#FFD93D):** Cor de destaque para celebrações e botões de "próximo".
- **Verde Grama (#6BCB77):** Associado a ações positivas, como salvar ou concluir.
- **Vermelho Brincalhão (#FF6B6B):** Destinado a ações de cancelamento ou exclusão, mas mantendo um tom amigável.
- **Fundos Pastéis:** As áreas ao redor do desenho utilizam tons como creme suave ou azul céu pálido para evitar o cansaço visual e destacar a "folha de papel" branca central.

## Typography
Utilizamos exclusivamente a família **Quicksand** devido às suas terminações arredondadas e formas geométricas amigáveis, que facilitam a leitura para crianças em fase de alfabetização.

A hierarquia é simplificada: textos curtos, diretos e em tamanhos generosos. O peso "Bold" (700) é a norma para botões e títulos, garantindo legibilidade e uma aparência robusta. Evitamos blocos densos de texto, priorizando comandos de voz ou ícones acompanhados de etiquetas curtas em português.

## Layout & Spacing
O layout utiliza um modelo de **Grade Flexível Contextual**. Dado que o público-alvo possui coordenação motora em desenvolvimento, todos os alvos de toque (touch targets) devem ter no mínimo 64px.

- **Zonas de Interação:** As ferramentas de desenho devem ser agrupadas em barras laterais ou inferiores largas.
- **Margens de Segurança:** Espaçamento generoso entre botões para evitar toques acidentais.
- **Responsividade:** Em tablets, as ferramentas ocupam as laterais para facilitar o uso com as duas mãos. Em celulares, as ferramentas se deslocam para a base em um carrossel horizontal de ícones grandes.

## Elevation & Depth
A profundidade é comunicada através de **Camadas Tonais e Sombras Ambiente Difusas**.

- **Efeito "Pressione":** Os botões utilizam sombras internas e externas para parecerem objetos 3D reais. Quando pressionados, a sombra diminui e o elemento reduz levemente de escala (95%), simulando a compressão física de um botão de plástico macio.
- **Superfícies:** Os painéis de ferramentas flutuam sobre o fundo com sombras largas e suaves (blur alto, opacidade baixa em torno de 10-15%), sugerindo que estão "acima" do papel de desenho.
- **Bordas:** Usamos contornos finos (2px) com uma cor levemente mais escura que o preenchimento para definir melhor a silhueta dos elementos.

## Shapes
O sistema de formas é inteiramente baseado no nível **Pill-shaped (3)**. Não existem ângulos retos nesta interface. 

Cantos extremamente arredondados transmitem segurança e suavidade. Os botões de ferramentas (pincel, borracha) são círculos perfeitos ou pílulas alongadas, reforçando a natureza tátil e lúdica do aplicativo.

## Components

- **Botões "Chunky":** Devem ter um preenchimento sólido de cor primária com uma borda inferior mais escura (3-4px) para criar um efeito de profundidade 3D simples.
- **Seletores de Cores:** Grandes círculos dispostos em uma paleta horizontal. O círculo selecionado deve "pular" para fora (escala 1.2x) e exibir um halo branco.
- **Ícones Ilustrativos:** Devem ser ícones de linha grossa com preenchimento colorido, representando objetos reais (um balde de tinta derramando, um lápis de cera, uma lixeira amigável).
- **Cards de Galeria:** Bordas arredondadas (24px+), com sombras suaves e uma prévia generosa do desenho da criança.
- **Modais e Diálogos:** Devem cobrir a tela com um fundo translúcido (backdrop blur) e apresentar apenas duas opções claras (ex: "Sim" em verde, "Não" em vermelho) com ícones grandes como ✔️ e ❌.
- **Feedback Visual:** Faíscas, estrelas ou pequenas animações de "pulo" devem ocorrer sempre que uma ferramenta for selecionada ou um desenho for salvo.