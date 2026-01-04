export const BUSINESS_CONFIG = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '2348178694956',
  businessName: process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Pout & Polish',
  businessEmail:
    process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'info@poutandpolish.com',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://pout-polish.vercel.app',
  instagram: 'https://www.instagram.com/urfav_empress',
} as const;

export const createWhatsAppLink = (message: string) => {
  return `https://wa.me/${
    BUSINESS_CONFIG.whatsappNumber
  }?text=${encodeURIComponent(message)}`;
};

export const openWhatsApp = (message: string) => {
  window.open(createWhatsAppLink(message), '_blank');
};
