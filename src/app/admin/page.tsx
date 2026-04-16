"use client";

import { useState, useEffect } from "react";
import {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  resetProducts,
} from "@/lib/products";
import { formatCurrency, slugify } from "@/lib/utils";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/logo";
import {
  Plus,
  Pencil,
  Trash2,
  LogOut,
  RotateCcw,
  Save,
  X,
  Package,
  Eye,
  Upload,
} from "lucide-react";
import Link from "next/link";

const ADMIN_PASSWORD = "luxe2024";
const AUTH_KEY = "luxe-admin-auth";

const categoriaOptions = [
  "aliancas",
  "aneis",
  "correntes",
  "brincos",
  "pingentes",
];

interface ProductFormData {
  nome: string;
  categoria: string;
  preco: string;
  preco_original: string;
  descricao: string;
  imagem: string;
  tamanhos: string;
  frete_gratis: boolean;
}

const emptyForm: ProductFormData = {
  nome: "",
  categoria: "aliancas",
  preco: "",
  preco_original: "",
  descricao: "",
  imagem: "",
  tamanhos: "",
  frete_gratis: true,
};

function productToForm(p: Product): ProductFormData {
  return {
    nome: p.nome,
    categoria: p.categoria,
    preco: String(p.preco),
    preco_original: p.preco_original ? String(p.preco_original) : "",
    descricao: p.descricao,
    imagem: p.imagem,
    tamanhos: p.tamanhos ? p.tamanhos.join(", ") : "",
    frete_gratis: p.frete_gratis,
  };
}

function parseTamanhos(str: string): number[] | null {
  if (!str.trim()) return null;
  return str
    .split(",")
    .map((s) => parseInt(s.trim()))
    .filter((n) => !isNaN(n));
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<ProductFormData>(emptyForm);
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAuthed(localStorage.getItem(AUTH_KEY) === "true");
    }
  }, []);

  useEffect(() => {
    if (authed) refreshProducts();
  }, [authed]);

  function refreshProducts() {
    setProducts(getAllProducts());
  }

  function handleLogin() {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem(AUTH_KEY, "true");
      setAuthed(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  }

  function handleLogout() {
    localStorage.removeItem(AUTH_KEY);
    setAuthed(false);
  }

  function handleEdit(product: Product) {
    setEditingId(product.id);
    setForm(productToForm(product));
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleNew() {
    setEditingId(null);
    setForm(emptyForm);
    setShowForm(true);
  }

  function handleSave() {
    const productData = {
      nome: form.nome.trim(),
      slug: slugify(form.nome),
      categoria: form.categoria,
      metal: "Prata 925",
      preco: parseFloat(form.preco) || 0,
      preco_original: form.preco_original
        ? parseFloat(form.preco_original)
        : null,
      frete_gratis: form.frete_gratis,
      tamanhos: parseTamanhos(form.tamanhos),
      descricao: form.descricao.trim(),
      imagem: form.imagem.trim() || "/produtos/placeholder.jpg",
    };

    if (!productData.nome || !productData.preco) return;

    if (editingId) {
      updateProduct(editingId, productData);
    } else {
      addProduct(productData);
    }

    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
    refreshProducts();
  }

  function handleDelete(id: number) {
    deleteProduct(id);
    setConfirmDelete(null);
    refreshProducts();
  }

  function handleReset() {
    if (confirm("Restaurar produtos originais? Isso apaga todas as alteracoes.")) {
      resetProducts();
      refreshProducts();
    }
  }

  // Login screen
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-sm p-8 bg-bg-card rounded-xl border border-border-subtle">
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 w-16">
              <Logo size={64} />
            </div>
            <h1 className="text-xl text-silver font-medium">Painel Administrativo</h1>
            <p className="text-muted-custom text-sm mt-1">Luxe Joias</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-custom mb-1.5 block">Senha</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                placeholder="Digite a senha"
                className="bg-bg border-border-subtle text-silver"
              />
              {passwordError && (
                <p className="text-red-400 text-xs mt-1">Senha incorreta</p>
              )}
            </div>
            <Button
              onClick={handleLogin}
              className="w-full bg-gold hover:bg-gold-dark text-bg font-semibold"
            >
              Entrar
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl text-silver font-light">Gerenciar Produtos</h1>
          <p className="text-muted-custom text-sm mt-1">
            {products.length} produto{products.length !== 1 && "s"} cadastrado
            {products.length !== 1 && "s"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/" target="_blank">
            <Button
              variant="outline"
              size="sm"
              className="border-border-subtle text-muted-custom hover:text-silver"
            >
              <Eye className="w-4 h-4 mr-2" />
              Ver loja
            </Button>
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="border-border-subtle text-muted-custom hover:text-silver"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Restaurar
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="border-border-subtle text-muted-custom hover:text-silver"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </div>

      {/* Add button */}
      {!showForm && (
        <Button
          onClick={handleNew}
          className="bg-gold hover:bg-gold-dark text-bg font-semibold mb-6"
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo produto
        </Button>
      )}

      {/* Product Form */}
      {showForm && (
        <div className="bg-bg-card rounded-xl border border-border-subtle p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg text-silver font-medium">
              {editingId ? "Editar produto" : "Novo produto"}
            </h2>
            <button
              onClick={() => {
                setShowForm(false);
                setEditingId(null);
              }}
              className="text-muted-custom hover:text-silver"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-custom mb-1.5 block">
                Nome do produto *
              </label>
              <Input
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                placeholder="Ex: Alianca classica cravejada"
                className="bg-bg border-border-subtle text-silver"
              />
            </div>
            <div>
              <label className="text-sm text-muted-custom mb-1.5 block">
                Categoria
              </label>
              <select
                value={form.categoria}
                onChange={(e) =>
                  setForm({ ...form, categoria: e.target.value })
                }
                className="w-full h-10 px-3 rounded-md bg-bg border border-border-subtle text-silver text-sm"
              >
                {categoriaOptions.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-custom mb-1.5 block">
                Preco (R$) *
              </label>
              <Input
                type="number"
                step="0.01"
                value={form.preco}
                onChange={(e) => setForm({ ...form, preco: e.target.value })}
                placeholder="189.00"
                className="bg-bg border-border-subtle text-silver"
              />
            </div>
            <div>
              <label className="text-sm text-muted-custom mb-1.5 block">
                Preco original (riscado, opcional)
              </label>
              <Input
                type="number"
                step="0.01"
                value={form.preco_original}
                onChange={(e) =>
                  setForm({ ...form, preco_original: e.target.value })
                }
                placeholder="240.00"
                className="bg-bg border-border-subtle text-silver"
              />
            </div>
            <div>
              <label className="text-sm text-muted-custom mb-1.5 block">
                Foto do produto
              </label>
              <div className="space-y-3">
                {form.imagem && (
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-border-subtle">
                    <img
                      src={form.imagem}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setForm({ ...form, imagem: "" })}
                      className="absolute top-1 right-1 w-5 h-5 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}
                <label className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg border border-dashed border-border-subtle hover:border-gold/30 bg-bg cursor-pointer transition-colors">
                  <Upload className="w-4 h-4 text-muted-custom" />
                  <span className="text-muted-custom text-sm">
                    {form.imagem ? "Trocar foto" : "Enviar foto do celular"}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      if (file.size > 2 * 1024 * 1024) {
                        alert("Imagem muito grande. Use uma foto de ate 2MB.");
                        return;
                      }
                      const reader = new FileReader();
                      reader.onload = () => {
                        setForm({ ...form, imagem: reader.result as string });
                      };
                      reader.readAsDataURL(file);
                    }}
                  />
                </label>
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-custom mb-1.5 block">
                Tamanhos (separados por virgula)
              </label>
              <Input
                value={form.tamanhos}
                onChange={(e) =>
                  setForm({ ...form, tamanhos: e.target.value })
                }
                placeholder="12, 14, 16, 18, 20"
                className="bg-bg border-border-subtle text-silver"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-muted-custom mb-1.5 block">
                Descricao
              </label>
              <textarea
                value={form.descricao}
                onChange={(e) =>
                  setForm({ ...form, descricao: e.target.value })
                }
                placeholder="Descricao do produto..."
                rows={3}
                className="w-full px-3 py-2 rounded-md bg-bg border border-border-subtle text-silver text-sm resize-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="frete"
                checked={form.frete_gratis}
                onChange={(e) =>
                  setForm({ ...form, frete_gratis: e.target.checked })
                }
                className="accent-gold"
              />
              <label htmlFor="frete" className="text-sm text-silver">
                Frete gratis
              </label>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button
              onClick={handleSave}
              className="bg-gold hover:bg-gold-dark text-bg font-semibold"
            >
              <Save className="w-4 h-4 mr-2" />
              {editingId ? "Salvar alteracoes" : "Adicionar produto"}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setShowForm(false);
                setEditingId(null);
              }}
              className="border-border-subtle text-muted-custom"
            >
              Cancelar
            </Button>
          </div>
        </div>
      )}

      {/* Product list */}
      <div className="space-y-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-4 p-4 bg-bg-card rounded-lg border border-border-subtle hover:border-gold/20 transition-colors"
          >
            {/* Thumbnail */}
            {product.imagem && (product.imagem.startsWith("http") || product.imagem.startsWith("data:")) ? (
              <img
                src={product.imagem}
                alt={product.nome}
                className="w-14 h-14 rounded-md object-cover shrink-0"
              />
            ) : (
              <div className="w-14 h-14 bg-[#1e1e1e] rounded-md flex items-center justify-center text-gold/40 text-xs font-serif shrink-0">
                LJ
              </div>
            )}

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-silver text-sm font-medium truncate">
                  {product.nome}
                </h3>
                <Badge
                  variant="outline"
                  className="text-gold/60 border-gold/20 text-[10px] px-1.5 py-0 shrink-0"
                >
                  {product.categoria}
                </Badge>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-gold text-sm font-semibold">
                  {formatCurrency(product.preco)}
                </span>
                {product.preco_original && (
                  <span className="text-muted-custom text-xs line-through">
                    {formatCurrency(product.preco_original)}
                  </span>
                )}
                {product.frete_gratis && (
                  <span className="text-turquoise text-xs">Frete gratis</span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <Link href={`/produtos/${product.slug}`} target="_blank">
                <button className="w-8 h-8 rounded-md flex items-center justify-center text-muted-custom hover:text-silver hover:bg-bg transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
              </Link>
              <button
                onClick={() => handleEdit(product)}
                className="w-8 h-8 rounded-md flex items-center justify-center text-muted-custom hover:text-gold hover:bg-gold/10 transition-colors"
              >
                <Pencil className="w-4 h-4" />
              </button>
              {confirmDelete === product.id ? (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-2 py-1 rounded text-xs bg-red-500/20 text-red-400 hover:bg-red-500/30"
                  >
                    Confirmar
                  </button>
                  <button
                    onClick={() => setConfirmDelete(null)}
                    className="px-2 py-1 rounded text-xs text-muted-custom hover:text-silver"
                  >
                    Cancelar
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmDelete(product.id)}
                  className="w-8 h-8 rounded-md flex items-center justify-center text-muted-custom hover:text-red-400 hover:bg-red-400/10 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}

        {products.length === 0 && (
          <div className="text-center py-16 text-muted-custom">
            <Package className="w-12 h-12 mx-auto mb-4" />
            <p>Nenhum produto cadastrado</p>
            <Button
              onClick={handleNew}
              className="mt-4 bg-gold hover:bg-gold-dark text-bg"
            >
              <Plus className="w-4 h-4 mr-2" />
              Adicionar primeiro produto
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
