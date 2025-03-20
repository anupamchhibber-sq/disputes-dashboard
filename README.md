# Disputes Dashboard

A dashboard for Square sellers to manage and respond to payment disputes.

## Features

### Main Dashboard
- View open disputes and dispute history
- Switch between different sellers
- View dispute details in a side blade
- Filter and search functionality

### Evidence Collection
- View Square-collected evidence
- Personalized evidence requirements based on:
  - Business type (e.g., beauty, retail, food service)
  - Dispute reason (e.g., services not received, product not described)
- Evidence categorization:
  - Key evidence (required)
  - Supporting evidence (optional)
  - Not accepted evidence types

### Square Seller Protection (SSP) Form
- Multi-step form for dispute response
- Required and optional sections
- Evidence upload capability
- Progress tracking
- Save for later functionality

## Project Structure
```
disputes-dashboard/
├── v2_personalized/           # Latest version with personalization
│   ├── index.html            # Main dashboard
│   ├── interstitial.html     # Evidence review page
│   ├── ssp.html             # Square Seller Protection form
│   ├── data.js              # Mock data and state management
│   ├── evidence-mapping.js   # Evidence requirements mapping
│   └── evidence/            # Mock evidence files
│       ├── appointments/     # Appointment confirmations
│       ├── contracts/       # Service agreements
│       ├── descriptions/    # Product descriptions
│       ├── orders/         # Order confirmations
│       ├── receipts/       # Payment receipts
│       └── transactions/   # Transaction details
└── backup_v1/               # Backup of previous version
```

## Recent Updates
- Added personalized evidence requirements based on business type and dispute reason
- Enhanced evidence modal with:
  - Key evidence specific to dispute type
  - Combined supporting evidence list
  - Standard supporting evidence for all disputes
- Fixed duplicate evidence display
- Improved evidence categorization
- Added proper error handling and logging

## Development
The project uses vanilla JavaScript, HTML, and CSS. No build process required.

To run locally:
1. Clone the repository
2. Open index.html in a browser
3. Test with different seller types and dispute reasons

## GitHub Pages
The latest version is deployed at: https://anupamchhibber-sq.github.io/disputes-dashboard/