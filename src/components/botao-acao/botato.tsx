import { CTAButton } from '@/components/ui/CTAButton';

const whatsappLink =
  'https://wa.me/5519986011419?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20agendar%20um%20diagn%C3%B3stico%20com%20a%20Koru%20Company.';

export default function BotaoWhatsapp() {
  return (
    <div className="flex w-full justify-center">
      <CTAButton href={whatsappLink}>Agendar diagnóstico</CTAButton>
    </div>
  );
}
