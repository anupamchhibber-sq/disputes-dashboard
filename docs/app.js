// app.js - Add this to fix blade functionality

let selectedDisputeId = null;

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    });
}

function formatMoney(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(amount);
}

function renderTables() {
    const disputes = mockData.disputes;
    
    // Update total count
    document.querySelector('.disputes-count').textContent = 
        `${disputes.open.length + disputes.history.length} TOTAL DISPUTES`;

    // Render open disputes
    const openTable = document.getElementById('openDisputesTable');
    openTable.innerHTML = disputes.open.map(dispute => `
        <tr class="${dispute.id === selectedDisputeId ? 'selected' : ''}" 
            onclick="selectDispute('${dispute.id}')">
            <td>${formatDate(dispute.dateDisputed)}</td>
            <td>${formatDate(dispute.dateOfPayment)}</td>
            <td>${dispute.location}</td>
            <td>${formatMoney(dispute.amount)}</td>
            <td>
                <span class="status-${dispute.status.toLowerCase().replace(' ', '_')}">
                    ${dispute.status}
                </span>
            </td>
            <td>${dispute.respondBy ? formatDate(dispute.respondBy) : '—'}</td>
        </tr>
    `).join('');

    // Render dispute history
    const historyTable = document.getElementById('disputeHistoryTable');
    historyTable.innerHTML = disputes.history.map(dispute => `
        <tr class="${dispute.id === selectedDisputeId ? 'selected' : ''}"
            onclick="selectDispute('${dispute.id}')">
            <td>${formatDate(dispute.dateDisputed)}</td>
            <td>${formatDate(dispute.dateOfPayment)}</td>
            <td>${dispute.location}</td>
            <td>${formatMoney(dispute.amount)}</td>
            <td>
                <span class="resolution-${dispute.resolution.includes('your favor') ? 'success' : 'failure'}">
                    ${dispute.resolution}
                </span>
            </td>
        </tr>
    `).join('');
}

function renderDetailBlade() {
    const blade = document.getElementById('detailBlade');
    const content = blade.querySelector('.blade-content');
    const dispute = mockData.selectedDispute;
    
    if (!dispute) return;
    
    content.innerHTML = `
        <div class="challenge-banner ${dispute.status === 'Action required' ? 'action-required' : 'under-review'}">
            ${dispute.status === 'Action required' ? `
                <p class="days-left">You have ${dispute.daysLeft || '15'} days left to challenge this ${formatMoney(dispute.disputedAmount)} dispute</p>
                <p class="description">Your customer has initiated a dispute. Review the evidence and respond to increase your chances of winning.</p>
                <button class="challenge-button primary" onclick="showInterstitial()">Challenge dispute</button>
                <button class="challenge-button secondary">Accept dispute</button>
            ` : `
                <p class="days-left">This dispute is under bank review</p>
                <p class="description">We'll notify you when there's an update or if we need additional information.</p>
            `}
        </div>

        <div class="dispute-details">
            <div class="dispute-amount">Dispute for ${formatMoney(dispute.disputedAmount)}</div>
            
            <div class="detail-section">
                <h4>REASON</h4>
                <p>${dispute.disputeReason.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
            </div>

            <div class="detail-section">
                <div class="amount-row">
                    <div>
                        <h4>PAYMENT AMOUNT</h4>
                        <p class="amount-large">${formatMoney(dispute.amount)}</p>
                    </div>
                    <div>
                        <h4>DISPUTED AMOUNT</h4>
                        <p class="amount-large">${formatMoney(dispute.disputedAmount)}</p>
                    </div>
                </div>

                <div class="card-details">
                    <div>
                        <h4>CARD PRESENT</h4>
                        <p>${dispute.cardPresent ? 'Yes' : 'No'}</p>
                    </div>
                    <span class="unknown-badge">Unknown ⓘ</span>
                </div>

                <div>
                    <h4>AMOUNT HELD</h4>
                    <p class="amount-large">${formatMoney(dispute.disputedAmount)}</p>
                </div>
            </div>

            <div class="timeline">
                <div class="timeline-header">
                    <h3>Timeline</h3>
                    <a href="#" class="learn-more">Learn more</a>
                </div>
                ${(dispute.timeline || []).map(event => `
                    <div class="timeline-event">
                        <div class="event-icon ${event.type}"></div>
                        <div class="event-details">
                            <h4>${event.title || 'Dispute received'}</h4>
                            <p>${event.description || 'Card issuer initiated a dispute'}</p>
                            <time>${formatDate(event.date || dispute.dateDisputed)}</time>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    blade.classList.add('visible');
    document.querySelector('.disputes-list').classList.add('blade-open');
}

function showInterstitial() {
    const dispute = mockData.selectedDispute;
    const currentSeller = mockData.currentSeller;
    
    if (!dispute || !currentSeller) {
        console.error('Missing dispute or seller');
        return;
    }
    
    window.location.href = `interstitial.html?disputeId=${dispute.id}&sellerId=${currentSeller.id}`;
}

function selectDispute(disputeId) {
    selectedDisputeId = disputeId;
    mockData.selectedDispute = mockData.disputes.open.find(d => d.id === disputeId) || 
                             mockData.disputes.history.find(d => d.id === disputeId);
    renderTables();
    renderDetailBlade();
}

function closeDetailBlade() {
    selectedDisputeId = null;
    mockData.selectedDispute = null;
    document.getElementById('detailBlade').classList.remove('visible');
    document.querySelector('.disputes-list').classList.remove('blade-open');
    renderTables();
}

function changeSeller(sellerId) {
    mockData.setSeller(sellerId);
    selectedDisputeId = null;
    renderTables();
    closeDetailBlade();
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Populate seller dropdown
    const sellerSelect = document.getElementById('sellerSelect');
    const sellers = mockData.getAllSellers();
    sellers.forEach(seller => {
        const option = document.createElement('option');
        option.value = seller.id;
        option.textContent = seller.name;
        sellerSelect.appendChild(option);
    });
    
    // Set initial value
    sellerSelect.value = 'js_skincare';

    // Add change event listener
    sellerSelect.addEventListener('change', (e) => {
        changeSeller(e.target.value);
    });
    
    // Render initial tables
    renderTables();
});