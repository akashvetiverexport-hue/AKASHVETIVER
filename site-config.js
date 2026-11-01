// Set the real WhatsApp business number here, including country code, digits only.
// Example format: country code followed by the business number, without + or spaces.
// Set feedbackEndpoint only after the admin approval API is deployed.
// It must be a same-origin path. The server must create reviews as pending.
// requestsEndpoint stays empty until a real, protected same-origin API is deployed.
// Never put Resend keys, database credentials or admin secrets in this public file.
window.VETTIVER_CONFIG = Object.freeze({
  whatsappNumber: '',
  supabaseUrl: 'https://lgkkjubwdxdfpmoxkrmd.supabase.co',
  supabasePublishableKey: '', // Public key only; never a secret or service-role key.
  catalogSource: 'local', // Switch to supabase after migrations, seed and access checks pass.
  feedbackEndpoint: '',
  requestsEndpoint: '',
  businessEmail: 'akashvetiverexport@gmail.com'
});
