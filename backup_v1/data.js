// data.js
const mockSellers = {
    "js_skincare": {
        name: "J's Skincare Shop",
        audience: "beauty_and_personal_care",
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
                    disputedAmount: 250.00,  // Full amount disputed
                    cardPresent: false,
                    disputeReason: "Services not received"
                },
                {
                    id: "disp_002",
                    dateDisputed: "2024-03-12",
                    dateOfPayment: "2024-02-20",
                    location: "Berkeley Store",
                    status: "Action required",
                    respondBy: "2024-03-27",
                    amount: 175.50,
                    disputedAmount: 175.50,  // Full amount disputed
                    cardPresent: true,
                    disputeReason: "Product not as described"
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
                    disputedAmount: 450.00,  // Full amount disputed
                    cardPresent: false,
                    disputeReason: "Fraudulent transaction"
                }
            ]
        }
    },
    "fresh_bites": {
        name: "Fresh Bites Catering",
        audience: "food_and_beverage",
        disputes: {
            open: generateDisputes(7, "food_and_beverage", true),
            history: generateDisputes(8, "food_and_beverage", false)
        }
    },
    "tech_hub": {
        name: "Tech Hub Electronics",
        audience: "electronics",
        disputes: {
            open: generateDisputes(5, "electronics", true),
            history: generateDisputes(12, "electronics", false)
        }
    },
    "fitness_first": {
        name: "Fitness First Gym",
        audience: "health_and_fitness",
        disputes: {
            open: generateDisputes(6, "health_and_fitness", true),
            history: generateDisputes(9, "health_and_fitness", false)
        }
    },
    "urban_threads": {
        name: "Urban Threads Boutique",
        audience: "fashion_retail",
        disputes: {
            open: generateDisputes(4, "fashion_retail", true),
            history: generateDisputes(8, "fashion_retail", false)
        }
    },
    "auto_care": {
        name: "Auto Care Plus",
        audience: "automotive",
        disputes: {
            open: generateDisputes(8, "automotive", true),
            history: generateDisputes(7, "automotive", false)
        }
    },
    "pet_paradise": {
        name: "Pet Paradise Store",
        audience: "pet_supplies",
        disputes: {
            open: generateDisputes(3, "pet_supplies", true),
            history: generateDisputes(8, "pet_supplies", false)
        }
    },
    "home_decor": {
        name: "Home Decor & More",
        audience: "home_furnishing",
        disputes: {
            open: generateDisputes(6, "home_furnishing", true),
            history: generateDisputes(9, "home_furnishing", false)
        }
    },
    "garden_center": {
        name: "Green Thumb Garden Center",
        audience: "garden_and_outdoor",
        disputes: {
            open: generateDisputes(4, "garden_and_outdoor", true),
            history: generateDisputes(7, "garden_and_outdoor", false)
        }
    },
    "art_supplies": {
        name: "Creative Art Supplies",
        audience: "art_and_craft",
        disputes: {
            open: generateDisputes(5, "art_and_craft", true),
            history: generateDisputes(8, "art_and_craft", false)
        }
    },
    "book_nook": {
        name: "The Book Nook",
        audience: "books_and_media",
        disputes: {
            open: generateDisputes(3, "books_and_media", true),
            history: generateDisputes(7, "books_and_media", false)
        }
    }
};

// Helper function to generate random disputes
function generateDisputes(count, audience, isOpen) {
    const disputes = [];
    const locations = ["Main Store", "Downtown", "Mall Location", "Online"];
    const disputeReasons = [
        "Services not received",
        "Product not as described",
        "Fraudulent transaction",
        "Duplicate charge",
        "Credit not processed",
        "General"
    ];
    
    for (let i = 0; i < count; i++) {
        const date = new Date();
        date.setDate(date.getDate() - Math.floor(Math.random() * 30));
        const paymentDate = new Date(date);
        paymentDate.setDate(paymentDate.getDate() - Math.floor(Math.random() * 15));
        
        // Generate payment amount
        const amount = parseFloat((Math.random() * 9000 + 1000).toFixed(2));
        
        // Generate disputed amount (90% chance of full amount, 10% chance of partial)
        const isPartialDispute = Math.random() > 0.9;
        const disputedAmount = isPartialDispute ? 
            parseFloat((amount * (0.5 + Math.random() * 0.4)).toFixed(2)) : // 50-90% of full amount
            amount;
        
        const dispute = {
            id: `disp_${audience}_${Date.now()}_${i}`,
            dateDisputed: date.toISOString().split('T')[0],
            dateOfPayment: paymentDate.toISOString().split('T')[0],
            location: locations[Math.floor(Math.random() * locations.length)],
            amount: amount,
            disputedAmount: disputedAmount,
            cardPresent: Math.random() > 0.5,
            disputeReason: disputeReasons[Math.floor(Math.random() * disputeReasons.length)]
        };

        if (isOpen) {
            dispute.status = Math.random() > 0.5 ? "Under bank review" : "Action required";
            const respondDate = new Date(date);
            respondDate.setDate(respondDate.getDate() + 15);
            dispute.respondBy = respondDate.toISOString().split('T')[0];
        } else {
            dispute.resolution = Math.random() > 0.3 ? "Resolved in your favor" : "Resolved in bank's favor";
        }

        disputes.push(dispute);
    }

    return disputes;
}

// Selected seller state
let selectedSeller = "js_skincare";

// Export the mock data
const mockData = {
    selectedDispute: mockSellers[selectedSeller].disputes.open[0],
    get disputes() {
        return mockSellers[selectedSeller].disputes;
    },
    get currentSeller() {
        return mockSellers[selectedSeller];
    },
    setSeller(sellerId) {
        selectedSeller = sellerId;
    },
    getAllSellers() {
        return Object.entries(mockSellers).map(([id, seller]) => ({
            id,
            name: seller.name
        }));
    },
    updateDisputeStatus(disputeId, newStatus) {
        // Find the dispute in the current seller's open disputes
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