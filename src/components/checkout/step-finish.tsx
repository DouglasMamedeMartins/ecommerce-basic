import { useCheckoutStore } from "@/stores/checkout-store";
import { Button } from "../ui/button";
import Link from "next/link";
import { generateMessage } from "@/lib/generate-message";

export const StepFinish = () => {
  const { name } = useCheckoutStore((state) => state);

  const message = generateMessage();
  const linkZap = `https:/wa.me//${
    process.env.NEXT_PUBLIC_ZAP
  }?text=${encodeURI(message)}`;

  return (
    <div className="text-center flex flex-col gap-5">
      <p>
        Perfeito <strong>{name}</strong>!
      </p>
      <p>
        Agora envie seu pedido ao nosso WhatsApp para concluir. Irei te atender
        e informar o andamento do pedido.
      </p>
      <Button>
        <a href={linkZap} target="_blank" rel="noopener noreferrer">
          Enviar para o WhatsApp
        </a>
      </Button>
    </div>
  );
};
