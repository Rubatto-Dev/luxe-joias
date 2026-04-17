"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, QrCode } from "lucide-react";

export function CheckoutForm() {
  const [cardNumber, setCardNumber] = useState("");

  function formatCardNumber(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
  }

  return (
    <div className="bg-bg-card rounded-xl border border-border-subtle p-6">
      <h2 className="text-lg text-silver font-medium mb-6">Pagamento</h2>
      <Tabs defaultValue="credito" className="w-full">
        <TabsList className="w-full bg-bg border border-border-subtle">
          <TabsTrigger value="credito" className="flex-1 data-[state=active]:bg-gold/10 data-[state=active]:text-gold">
            <CreditCard className="w-4 h-4 mr-2" />Crédito
          </TabsTrigger>
          <TabsTrigger value="debito" className="flex-1 data-[state=active]:bg-gold/10 data-[state=active]:text-gold">
            <CreditCard className="w-4 h-4 mr-2" />Débito
          </TabsTrigger>
          <TabsTrigger value="pix" className="flex-1 data-[state=active]:bg-gold/10 data-[state=active]:text-gold">
            <QrCode className="w-4 h-4 mr-2" />Pix
          </TabsTrigger>
        </TabsList>

        <TabsContent value="credito" className="space-y-4 mt-6">
          <div>
            <label className="text-sm text-muted-custom mb-1.5 block">Número do cartão</label>
            <Input placeholder="0000 0000 0000 0000" value={cardNumber} onChange={(e) => setCardNumber(formatCardNumber(e.target.value))} className="bg-bg border-border-subtle text-silver" />
          </div>
          <div>
            <label className="text-sm text-muted-custom mb-1.5 block">Nome no cartão</label>
            <Input placeholder="Como está no cartão" className="bg-bg border-border-subtle text-silver" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-custom mb-1.5 block">Validade</label>
              <Input placeholder="MM/AA" className="bg-bg border-border-subtle text-silver" />
            </div>
            <div>
              <label className="text-sm text-muted-custom mb-1.5 block">CVV</label>
              <Input placeholder="123" className="bg-bg border-border-subtle text-silver" />
            </div>
          </div>
          <div>
            <label className="text-sm text-muted-custom mb-1.5 block">Parcelas</label>
            <select className="w-full h-10 px-3 rounded-md bg-bg border border-border-subtle text-silver text-sm">
              {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                <option key={n} value={n}>{n}x sem juros</option>
              ))}
            </select>
          </div>
          <Button className="w-full bg-gold hover:bg-gold-dark text-bg font-semibold py-3 mt-4">Finalizar compra</Button>
        </TabsContent>

        <TabsContent value="debito" className="space-y-4 mt-6">
          <div>
            <label className="text-sm text-muted-custom mb-1.5 block">Número do cartão</label>
            <Input placeholder="0000 0000 0000 0000" className="bg-bg border-border-subtle text-silver" />
          </div>
          <div>
            <label className="text-sm text-muted-custom mb-1.5 block">Nome no cartão</label>
            <Input placeholder="Como está no cartão" className="bg-bg border-border-subtle text-silver" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-custom mb-1.5 block">Validade</label>
              <Input placeholder="MM/AA" className="bg-bg border-border-subtle text-silver" />
            </div>
            <div>
              <label className="text-sm text-muted-custom mb-1.5 block">CVV</label>
              <Input placeholder="123" className="bg-bg border-border-subtle text-silver" />
            </div>
          </div>
          <Button className="w-full bg-gold hover:bg-gold-dark text-bg font-semibold py-3 mt-4">Finalizar compra</Button>
        </TabsContent>

        <TabsContent value="pix" className="mt-6">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-48 h-48 bg-white rounded-xl mx-auto">
              <div className="w-40 h-40 grid grid-cols-8 grid-rows-8 gap-0.5">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className={`${Math.random() > 0.4 ? "bg-black" : "bg-white"} rounded-[1px]`} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-muted-custom text-sm mb-2">Chave Pix</p>
              <div className="flex items-center justify-center gap-2 bg-bg rounded-md border border-border-subtle px-4 py-2 max-w-sm mx-auto">
                <code className="text-silver text-sm">luxejoias@pix.com.br</code>
                <button onClick={() => navigator.clipboard.writeText("luxejoias@pix.com.br")} className="text-gold text-xs hover:underline">Copiar</button>
              </div>
            </div>
            <p className="text-muted-custom text-sm">Após o pagamento, confirme pelo WhatsApp</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
