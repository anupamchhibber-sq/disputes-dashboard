// data.js

const mockSellers = {
    "js_skincare": {
        name: "J's Skincare Shop",
        audience: 'beauty_and_personal_care',
        disputes: {
            open: [
                {
                    id: "disp_001",
                    dateDisputed: "2024-03-10",
                    dateOfPayment: "2024-02-15",
                    location: "San Francisco Store",
                    status: "Under bank review",
                    respondBy: "2024-03-25",
                    amount: 250.00,
                    disputedAmount: 250.00,
                    cardPresent: false,
                    disputeReason: "services_not_received",
                    evidence: {
                        appointment_confirmation: {
                            exists: true,
                            date: "2024-02-15",
                            type: "appointment_confirmation"
                        },
                        payment_receipt: {
                            exists: true,
                            date: "2024-02-15",
                            type: "payment_receipt"
                        },
                        customer_agreement: {
                            exists: true,
                            date: "2024-02-15",
                            type: "customer_agreement"
                        }
                    }
                },
                {
                    id: "disp_002",
                    dateDisputed: "2024-03-12",
                    dateOfPayment: "2024-02-20",
                    location: "Berkeley Store",
                    status: "Action required",
                    respondBy: "2024-03-27",
                    amount: 175.50,
                    disputedAmount: 175.50,
                    cardPresent: true,
                    disputeReason: "not_as_described",
                    evidence: {
                        product_description: {
                            exists: true,
                            date: "2024-02-20",
                            type: "product_description"
                        },
                        payment_receipt: {
                            exists: true,
                            date: "2024-02-20",
                            type: "payment_receipt"
                        }
                    }
                }
            ],
            history: [
                {
                    id: "disp_003",
                    dateDisputed: "2024-02-01",
                    dateOfPayment: "2024-01-15",
                    location: "San Francisco Store",
                    resolution: "Resolved in your favor",
                    amount: 450.00,
                    disputedAmount: 450.00,
                    cardPresent: false,
                    disputeReason: "fraudulent"
                }
            ]
        }
    },
    "fresh_bites": {
        name: "Fresh Bites Catering",
        audience: 'food_and_beverage',
        disputes: {
            open: [
                {
                    id: "disp_004",
                    dateDisputed: "2024-03-15",
                    dateOfPayment: "2024-03-01",
                    location: "Downtown Kitchen",
                    status: "Action required",
                    respondBy: "2024-03-30",
                    amount: 750.00,
                    disputedAmount: 750.00,
                    cardPresent: false,
                    disputeReason: "product_not_received",
                    evidence: {
                        order_confirmation: {
                            exists: true,
                            date: "2024-03-01"
                        },
                        payment_receipt: {
                            exists: true,
                            date: "2024-03-01"
                        }
                    }
                }
            ],
            history: [
                {
                    id: "disp_005",
                    dateDisputed: "2024-02-15",
                    dateOfPayment: "2024-02-01",
                    location: "Downtown Kitchen",
                    resolution: "Resolved in your favor",
                    amount: 1200.00,
                    disputedAmount: 1200.00,
                    cardPresent: false,
                    disputeReason: "product_not_received"
                }
            ]
        }
    },
    "tech_hub": {
        name: "Tech Hub Electronics",
        audience: 'electronics_retail',
        disputes: {
            open: [
                {
                    id: "disp_006",
                    dateDisputed: "2024-03-14",
                    dateOfPayment: "2024-02-28",
                    location: "Main Store",
                    status: "Action required",
                    respondBy: "2024-03-29",
                    amount: 1299.99,
                    disputedAmount: 1299.99,
                    cardPresent: true,
                    disputeReason: "not_as_described",
                    evidence: {
                        payment_receipt: {
                            exists: true,
                            date: "2024-02-28",
                            type: "payment_receipt"
                        },
                        product_description: {
                            exists: true,
                            date: "2024-02-28",
                            type: "product_description"
                        }
                    }
                },
                {
                    id: "disp_007",
                    dateDisputed: "2024-03-13",
                    dateOfPayment: "2024-02-25",
                    location: "Online Store",
                    status: "Under bank review",
                    respondBy: "2024-03-28",
                    amount: 899.99,
                    disputedAmount: 899.99,
                    cardPresent: false,
                    disputeReason: "product_not_received",
                    evidence: {
                        shipping_confirmation: {
                            exists: true,
                            date: "2024-02-26"
                        }
                    }
                }
            ],
            history: []
        }
    },
    "fitness_first": {
        name: "Fitness First Gym",
        audience: 'health_and_fitness',
        disputes: {
            open: [
                {
                    id: "disp_008",
                    dateDisputed: "2024-03-12",
                    dateOfPayment: "2024-01-01",
                    location: "Downtown Gym",
                    status: "Action required",
                    respondBy: "2024-03-27",
                    amount: 600.00,
                    disputedAmount: 600.00,
                    cardPresent: false,
                    disputeReason: "subscription_cancelled",
                    evidence: {
                        membership_agreement: {
                            exists: true,
                            date: "2024-01-01",
                            type: "membership_agreement"
                        },
                        payment_history: {
                            exists: true,
                            date: "2024-03-18",
                            type: "payment_history"
                        }
                    }
                }
            ],
            history: []
        }
    },
    "urban_threads": {
        name: "Urban Threads Boutique",
        audience: 'fashion_retail',
        disputes: {
            open: [
                {
                    id: "disp_009",
                    dateDisputed: "2024-03-11",
                    dateOfPayment: "2024-02-20",
                    location: "Mall Location",
                    status: "Action required",
                    respondBy: "2024-03-26",
                    amount: 245.00,
                    disputedAmount: 245.00,
                    cardPresent: true,
                    disputeReason: "not_as_described",
                    evidence: {
                        product_photos: {
                            exists: true,
                            date: "2024-02-20"
                        }
                    }
                }
            ],
            history: []
        }
    },
    "auto_care": {
        name: "Auto Care Plus",
        audience: 'automotive',
        disputes: {
            open: [
                {
                    id: "disp_010",
                    dateDisputed: "2024-03-10",
                    dateOfPayment: "2024-02-15",
                    location: "Main Shop",
                    status: "Action required",
                    respondBy: "2024-03-25",
                    amount: 1500.00,
                    disputedAmount: 1500.00,
                    cardPresent: true,
                    disputeReason: "services_not_received",
                    evidence: {
                        service_record: {
                            exists: true,
                            date: "2024-02-15"
                        }
                    }
                },
                {
                    id: "disp_011",
                    dateDisputed: "2024-03-09",
                    dateOfPayment: "2024-02-10",
                    location: "Main Shop",
                    status: "Under bank review",
                    respondBy: "2024-03-24",
                    amount: 800.00,
                    disputedAmount: 800.00,
                    cardPresent: true,
                    disputeReason: "not_as_described",
                    evidence: {
                        repair_documentation: {
                            exists: true,
                            date: "2024-02-10"
                        }
                    }
                }
            ],
            history: []
        }
    },
    "pet_paradise": {
        name: "Pet Paradise Store",
        audience: 'pet_supplies',
        disputes: {
            open: [
                {
                    id: "disp_012",
                    dateDisputed: "2024-03-08",
                    dateOfPayment: "2024-02-20",
                    location: "Main Store",
                    status: "Action required",
                    respondBy: "2024-03-23",
                    amount: 350.00,
                    disputedAmount: 350.00,
                    cardPresent: false,
                    disputeReason: "product_not_received",
                    evidence: {
                        shipping_confirmation: {
                            exists: true,
                            date: "2024-02-21"
                        }
                    }
                }
            ],
            history: []
        }
    },
    "home_decor": {
        name: "Home Decor & More",
        audience: 'home_furnishing',
        disputes: {
            open: [
                {
                    id: "disp_013",
                    dateDisputed: "2024-03-07",
                    dateOfPayment: "2024-02-15",
                    location: "Showroom",
                    status: "Action required",
                    respondBy: "2024-03-22",
                    amount: 2500.00,
                    disputedAmount: 2500.00,
                    cardPresent: true,
                    disputeReason: "not_as_described",
                    evidence: {
                        product_photos: {
                            exists: true,
                            date: "2024-02-15"
                        }
                    }
                }
            ],
            history: []
        }
    },
    "garden_center": {
        name: "Green Thumb Garden Center",
        audience: 'garden_and_outdoor',
        disputes: {
            open: [
                {
                    id: "disp_014",
                    dateDisputed: "2024-03-06",
                    dateOfPayment: "2024-02-20",
                    location: "Main Center",
                    status: "Action required",
                    respondBy: "2024-03-21",
                    amount: 450.00,
                    disputedAmount: 450.00,
                    cardPresent: true,
                    disputeReason: "product_not_received",
                    evidence: {
                        delivery_confirmation: {
                            exists: true,
                            date: "2024-02-21"
                        }
                    }
                }
            ],
            history: []
        }
    },
    "art_supplies": {
        name: "Creative Art Supplies",
        audience: 'art_and_craft',
        disputes: {
            open: [
                {
                    id: "disp_015",
                    dateDisputed: "2024-03-05",
                    dateOfPayment: "2024-02-15",
                    location: "Downtown Store",
                    status: "Action required",
                    respondBy: "2024-03-20",
                    amount: 150.00,
                    disputedAmount: 150.00,
                    cardPresent: false,
                    disputeReason: "product_not_received",
                    evidence: {
                        shipping_confirmation: {
                            exists: true,
                            date: "2024-02-16"
                        }
                    }
                }
            ],
            history: []
        }
    },
    "yoga_studio": {
        name: "Zen Yoga Studio",
        audience: 'health_and_fitness',
        disputes: {
            open: [
                {
                    id: "disp_016",
                    dateDisputed: "2024-03-04",
                    dateOfPayment: "2024-02-01",
                    location: "Main Studio",
                    status: "Action required",
                    respondBy: "2024-03-19",
                    amount: 200.00,
                    disputedAmount: 200.00,
                    cardPresent: false,
                    disputeReason: "subscription_cancelled",
                    evidence: {
                        membership_agreement: {
                            exists: true,
                            date: "2024-02-01"
                        }
                    }
                }
            ],
            history: []
        }
    },
    "music_store": {
        name: "Melody Music Shop",
        audience: 'entertainment',
        disputes: {
            open: [
                {
                    id: "disp_017",
                    dateDisputed: "2024-03-03",
                    dateOfPayment: "2024-02-15",
                    location: "Main Store",
                    status: "Action required",
                    respondBy: "2024-03-18",
                    amount: 899.99,
                    disputedAmount: 899.99,
                    cardPresent: true,
                    disputeReason: "not_as_described",
                    evidence: {
                        product_description: {
                            exists: true,
                            date: "2024-02-15"
                        }
                    }
                }
            ],
            history: []
        }
    },
    "coffee_shop": {
        name: "Daily Grind Coffee",
        audience: 'food_and_beverage',
        disputes: {
            open: [
                {
                    id: "disp_018",
                    dateDisputed: "2024-03-02",
                    dateOfPayment: "2024-02-15",
                    location: "Downtown Shop",
                    status: "Action required",
                    respondBy: "2024-03-17",
                    amount: 150.00,
                    disputedAmount: 150.00,
                    cardPresent: false,
                    disputeReason: "duplicate",
                    evidence: {
                        transaction_records: {
                            exists: true,
                            date: "2024-02-15"
                        }
                    }
                }
            ],
            history: []
        }
    },
    "dance_studio": {
        name: "Rhythm Dance Academy",
        audience: 'education',
        disputes: {
            open: [
                {
                    id: "disp_019",
                    dateDisputed: "2024-03-01",
                    dateOfPayment: "2024-02-01",
                    location: "Main Studio",
                    status: "Action required",
                    respondBy: "2024-03-16",
                    amount: 300.00,
                    disputedAmount: 300.00,
                    cardPresent: false,
                    disputeReason: "subscription_cancelled",
                    evidence: {
                        class_registration: {
                            exists: true,
                            date: "2024-02-01"
                        }
                    }
                }
            ],
            history: []
        }
    },
    "bike_shop": {
        name: "City Cycles",
        audience: 'sporting_goods',
        disputes: {
            open: [
                {
                    id: "disp_020",
                    dateDisputed: "2024-02-29",
                    dateOfPayment: "2024-02-15",
                    location: "Main Shop",
                    status: "Action required",
                    respondBy: "2024-03-15",
                    amount: 1200.00,
                    disputedAmount: 1200.00,
                    cardPresent: true,
                    disputeReason: "not_as_described",
                    evidence: {
                        product_description: {
                            exists: true,
                            date: "2024-02-15"
                        }
                    }
                }
            ],
            history: []
        }
    },
    "dental_clinic": {
        name: "Bright Smile Dental",
        audience: 'healthcare',
        disputes: {
            open: [
                {
                    id: "disp_021",
                    dateDisputed: "2024-02-28",
                    dateOfPayment: "2024-02-15",
                    location: "Main Clinic",
                    status: "Action required",
                    respondBy: "2024-03-14",
                    amount: 800.00,
                    disputedAmount: 800.00,
                    cardPresent: true,
                    disputeReason: "services_not_received",
                    evidence: {
                        appointment_record: {
                            exists: true,
                            date: "2024-02-15"
                        }
                    }
                }
            ],
            history: []
        }
    },
    "book_store": {
        name: "Chapter One Books",
        audience: 'retail',
        disputes: {
            open: [
                {
                    id: "disp_022",
                    dateDisputed: "2024-02-27",
                    dateOfPayment: "2024-02-15",
                    location: "Main Store",
                    status: "Action required",
                    respondBy: "2024-03-13",
                    amount: 125.00,
                    disputedAmount: 125.00,
                    cardPresent: false,
                    disputeReason: "product_not_received",
                    evidence: {
                        shipping_confirmation: {
                            exists: true,
                            date: "2024-02-16"
                        }
                    }
                }
            ],
            history: []
        }
    },
    "hotel": {
        name: "City View Hotel",
        audience: 'hospitality',
        disputes: {
            open: [
                {
                    id: "disp_023",
                    dateDisputed: "2024-02-26",
                    dateOfPayment: "2024-02-15",
                    location: "Main Hotel",
                    status: "Action required",
                    respondBy: "2024-03-12",
                    amount: 450.00,
                    disputedAmount: 450.00,
                    cardPresent: false,
                    disputeReason: "services_not_received",
                    evidence: {
                        booking_confirmation: {
                            exists: true,
                            date: "2024-02-15"
                        }
                    }
                }
            ],
            history: []
        }
    },
    "cleaning_service": {
        name: "Spotless Cleaning",
        audience: 'home_services',
        disputes: {
            open: [
                {
                    id: "disp_024",
                    dateDisputed: "2024-02-25",
                    dateOfPayment: "2024-02-15",
                    location: "Service Area",
                    status: "Action required",
                    respondBy: "2024-03-11",
                    amount: 200.00,
                    disputedAmount: 200.00,
                    cardPresent: false,
                    disputeReason: "services_not_received",
                    evidence: {
                        service_agreement: {
                            exists: true,
                            date: "2024-02-15"
                        }
                    }
                }
            ],
            history: []
        }
    },
    "jewelry_store": {
        name: "Golden Gems Jewelry",
        audience: 'luxury_retail',
        disputes: {
            open: [
                {
                    id: "disp_025",
                    dateDisputed: "2024-02-24",
                    dateOfPayment: "2024-02-15",
                    location: "Main Store",
                    status: "Action required",
                    respondBy: "2024-03-10",
                    amount: 5000.00,
                    disputedAmount: 5000.00,
                    cardPresent: true,
                    disputeReason: "not_as_described",
                    evidence: {
                        product_certificate: {
                            exists: true,
                            date: "2024-02-15"
                        }
                    }
                }
            ],
            history: []
        }
    }
};

// Selected seller state
let selectedSeller = "js_skincare";

// Export the mock data
const mockData = {
    selectedDispute: null,
    get disputes() {
        return mockSellers[selectedSeller].disputes;
    },
    get currentSeller() {
        return {
            ...mockSellers[selectedSeller],
            id: selectedSeller  // Add the ID to the seller object
        };
    },
    setSeller(sellerId) {
        if (!sellerId || !mockSellers[sellerId]) {
            console.error('Invalid seller ID:', sellerId);
            return false;
        }
        selectedSeller = sellerId;
        this.selectedDispute = mockSellers[selectedSeller].disputes.open[0];
        return true;
    },
    getAllSellers() {
        return Object.entries(mockSellers).map(([id, seller]) => ({
            id,
            name: seller.name
        }));
    },
    updateDisputeStatus(disputeId, newStatus) {
        const dispute = mockSellers[selectedSeller].disputes.open.find(d => d.id === disputeId);
        if (dispute) {
            dispute.status = newStatus;
            return true;
        }
        return false;
    },
    getCurrentDisputeId() {
        return this.selectedDispute?.id;
    }
};