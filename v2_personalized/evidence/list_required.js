// List required evidence files
const sellers = Object.keys(mockData.getAllSellers());
const requiredFiles = new Set();

sellers.forEach(sellerId => {
    const seller = mockData.currentSeller;
    const disputes = [...seller.disputes.open, ...seller.disputes.history];
    
    disputes.forEach(dispute => {
        if (dispute.evidence) {
            Object.entries(dispute.evidence).forEach(([type, info]) => {
                if (info.exists) {
                    requiredFiles.add(`${type}/${sellerId}_${type}.html`);
                }
            });
        }
    });
});

console.log('Required evidence files:');
console.log([...requiredFiles].sort().join('\n'));