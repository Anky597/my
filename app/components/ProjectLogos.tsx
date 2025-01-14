import { SVGProps } from 'react';

// Social Network Analysis Tool Logo
export const SocialNetworkLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <circle cx="8" cy="10" r="2" fill="currentColor" />
    <circle cx="16" cy="10" r="2" fill="currentColor" />
    <circle cx="12" cy="16" r="2" fill="currentColor" />
    <path d="M8 10L12 16M12 16L16 10M12 16L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Loan Approval System Logo
export const LoanApprovalLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M6 12L10 16L18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Smart Agriculture Logo
export const SmartAgricultureLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M12 12C13.3807 12 14.5 10.8807 14.5 9.5C14.5 8.11929 13.3807 7 12 7C10.6193 7 9.5 8.11929 9.5 9.5C9.5 10.8807 10.6193 12 12 12Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path d="M7 14H17C18 14 20 16 20 17V21H4V17C4 16 6 14 7 14Z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path
      d="M6 8C6 7 8 5 9 5C10 5 12 7 12 8C12 9 10 10 9 10C8 10 6 9 6 8Z"
      fill="currentColor"
    />
  </svg>
);

