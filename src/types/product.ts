export interface Product {
  id: number;
  slug: string;
  nome: string;
  categoria: string;
  metal: string;
  preco: number;
  preco_original: number | null;
  frete_gratis: boolean;
  tamanhos: number[] | null;
  descricao: string;
  imagem: string;
}
