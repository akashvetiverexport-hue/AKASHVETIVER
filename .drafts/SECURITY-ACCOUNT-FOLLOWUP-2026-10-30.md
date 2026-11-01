# Security account follow-up — 30 October 2026

Confirmed via Supabase organization API: this project's organization is on the Free plan. Supabase documents that leaked-password protection is available on Pro and higher; it cannot be turned on on the present Free tier. No plan change has been made. https://supabase.com/docs/guides/auth/password-security

The website's current admin sign-in uses an email magic link. This does not by itself establish that password-based auth is disabled for the project. Protect the owner email account with MFA and store recovery methods securely. Protect the Supabase dashboard account separately using https://supabase.com/dashboard/account/security. Supabase dashboard MFA and website admin MFA are different controls.

Website admin MFA requires enrollment, challenge and verification screens, plus tested authorization enforcing the appropriate assurance level. The current application has not implemented these flows; enabling a policy that requires MFA prematurely can block the owner. Setup must be staged and include an owner-controlled authenticator and a tested recovery path. https://supabase.com/docs/guides/auth/auth-mfa

On the Free plan, provider automated database backups are not included. Establish an owner-held backup and restoration procedure before launch. The admin invoice JSON/CSV archive is useful for invoices but does not back up the entire database or image storage. Database backups do not include storage objects. https://supabase.com/docs/guides/platform/backups

No actual account settings were changed, no authentication message sent, and no production customer records were queried or modified. Existing RLS, rate limiting and admin checks remain in place. Security still requires live sign-in and recovery testing, provider-level review and independent penetration testing.
