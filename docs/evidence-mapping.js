// evidence-mapping.js

// Base evidence requirements by dispute reason
const BASE_EVIDENCE = {
    'services_not_received': {
        square_provided: [
            {
                type: 'appointment_confirmation',
                name: 'Service Appointment/Booking Confirmation',
                description: 'Confirmation of scheduled service',
                is_key: true,
                file_exists: true  // Add this flag to track actual file existence
            },
            {
                type: 'payment_receipt',
                name: 'Payment Receipt',
                description: 'Detailed receipt of services',
                is_key: true,
                file_exists: true
            },
            {
                type: 'customer_agreement',
                name: 'Service Agreement',
                description: 'Terms of service accepted by customer',
                is_key: true,
                file_exists: true
            }
        ],
        merchant_provided: [
            {
                type: 'service_delivery_proof',
                name: 'Proof of Service Delivery',
                description: 'Documentation showing service was provided',
                help_text: 'Evidence showing the service was delivered (e.g., signed completion form, service log)',
                is_key: false,
                file_exists: false
            }
        ]
    },
    'product_not_received': {
        square_provided: [
            {
                type: 'order_confirmation',
                name: 'Order Confirmation',
                description: 'Order details and time',
                is_key: true,
                file_exists: true
            },
            {
                type: 'payment_receipt',
                name: 'Payment Receipt',
                description: 'Detailed receipt of order',
                is_key: true,
                file_exists: true
            }
        ],
        merchant_provided: [
            {
                type: 'delivery_confirmation',
                name: 'Delivery Confirmation',
                description: 'Proof of delivery',
                help_text: 'Tracking information or delivery confirmation showing the product was delivered',
                is_key: false,
                file_exists: false
            }
        ]
    },
    'not_as_described': {
        square_provided: [
            {
                type: 'product_description',
                name: 'Product Description',
                description: 'Detailed product specifications and details',
                is_key: true,
                file_exists: true
            },
            {
                type: 'payment_receipt',
                name: 'Payment Receipt',
                description: 'Detailed receipt showing what was purchased',
                is_key: true,
                file_exists: true
            }
        ],
        merchant_provided: [
            {
                type: 'product_photos',
                name: 'Product Photos',
                description: 'Photos showing the product condition',
                help_text: 'Visual evidence showing the product matches the description',
                is_key: false,
                file_exists: false
            }
        ]
    }
};

// Industry-specific evidence additions
const INDUSTRY_EVIDENCE = {
    'beauty_and_personal_care': {
        'services_not_received': {
            square_provided: [
                {
                    type: 'service_description',
                    name: 'Service Description',
                    description: 'Detailed service specifications',
                    is_key: true,
                    file_exists: true
                }
            ]
        },
        'not_as_described': {
            square_provided: [
                {
                    type: 'product_ingredients',
                    name: 'Product Ingredients',
                    description: 'Complete ingredients list and certifications',
                    is_key: true,
                    file_exists: false
                }
            ]
        }
    },
    'electronics_retail': {
        'not_as_described': {
            square_provided: [
                {
                    type: 'product_description',
                    name: 'Product Specifications',
                    description: 'Detailed technical specifications and features',
                    is_key: true,
                    file_exists: true
                },
                {
                    type: 'payment_receipt',
                    name: 'Payment Receipt with Serial Number',
                    description: 'Receipt showing product details and serial number',
                    is_key: true,
                    file_exists: true
                }
            ]
        }
    },
    'health_and_fitness': {
        'subscription_cancelled': {
            square_provided: [
                {
                    type: 'membership_agreement',
                    name: 'Membership Agreement',
                    description: 'Signed membership contract with cancellation terms',
                    is_key: true,
                    file_exists: true
                },
                {
                    type: 'payment_history',
                    name: 'Payment History',
                    description: 'Record of membership payments',
                    is_key: true,
                    file_exists: true
                }
            ],
            merchant_provided: [
                {
                    type: 'cancellation_policy',
                    name: 'Cancellation Policy',
                    description: 'Gym\'s official cancellation policy',
                    help_text: 'Include your standard cancellation policy and terms',
                    is_key: false,
                    file_exists: false
                }
            ]
        }
    }
};

// Helper functions - make them globally available
window.getEvidenceRequirements = function(audience, reason) {
    console.log('Getting evidence requirements for:', { audience, reason });
    
    // Start with base evidence for the dispute reason
    const baseEvidence = JSON.parse(JSON.stringify(BASE_EVIDENCE[reason] || {
        square_provided: [],
        merchant_provided: []
    }));
    console.log('Base evidence:', baseEvidence);

    // Add any industry-specific evidence
    const industryEvidence = INDUSTRY_EVIDENCE[audience]?.[reason];
    if (industryEvidence) {
        if (industryEvidence.square_provided) {
            baseEvidence.square_provided = [...baseEvidence.square_provided, ...industryEvidence.square_provided];
        }
        if (industryEvidence.merchant_provided) {
            baseEvidence.merchant_provided = [...baseEvidence.merchant_provided, ...industryEvidence.merchant_provided];
        }
    }
    console.log('Final evidence:', baseEvidence);

    return baseEvidence;
};