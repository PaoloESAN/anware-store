const WHATSAPP_NUMBER = "51993401046";
const BASE_URL = "https://wa.me";

export function useWhatsApp() {
    /**
     * Genera una URL de WhatsApp con un mensaje predefinido.
     * @param message El mensaje que se enviará.
     * @returns La URL completa de WhatsApp.
     */
    const getWhatsAppUrl = (message: string) => {
        return `${BASE_URL}/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    };

    return {
        getWhatsAppUrl
    };
}
