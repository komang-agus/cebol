export const siteConfig = {
  // Isi dengan format kode negara tanpa tanda +, contoh: "6281234567890".
  // Semua tombol WhatsApp otomatis disembunyikan selama nilai ini kosong.
  whatsappNumber: "",
  price: {
    id: "Rp20.000",
    en: "IDR 20K",
  },
  launchPeriod: {
    id: "September 2026",
    en: "September 2026",
  },
  whatsappMessage: {
    general: {
      id: "Halo, saya tertarik dengan blind box gantungan kunci ceBol. Apakah produknya masih tersedia?",
      en: "Hi, I'm interested in the ceBol blind box keychain. Is it currently available?",
    },
    single: {
      id: "Halo, saya tertarik memesan ceBol satuan (1 blind box acak). Apakah produknya masih tersedia?",
      en: "Hi, I'm interested in ordering a single ceBol blind box. Is it currently available?",
    },
    pack: {
      id: "Halo, saya tertarik memesan paket ceBol isi 4 dengan empat karakter berbeda. Apakah paketnya masih tersedia?",
      en: "Hi, I'm interested in ordering the ceBol 4-pack with four different characters. Is it currently available?",
    },
  },
  instagramUrl: "",
  tiktokUrl: "",
};

export function createWhatsAppUrl(language, product = "general") {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");

  if (!number) {
    return null;
  }

  const message = siteConfig.whatsappMessage[product] ?? siteConfig.whatsappMessage.general;

  return `https://wa.me/${number}?text=${encodeURIComponent(message[language])}`;
}
