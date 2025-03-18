// State management
let selectedDisputeId = null;

// Format date to MM/DD/YYYY
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    });
}

// Render the disputes table
function renderDisputesTable() {
    const tableBody = document.getElementById('disputesTableBody');
    tableBody.innerHTML = mockData.disputes.map(dispute => `
        <tr class="${dispute.id === selectedDisputeId ? 'selected' : ''}" 
            onclick="selectDispute('${dispute.id}')">
            <td>${formatDate(dispute.dateDisputed)}</td>
            <td>${formatDate(dispute.dateOfPayment)}</td>
            <td>${dispute.location}</td>
            <td>
                <span class="status status-${dispute.status.toLowerCase()}">
                    ${dispute.status === 'ACTION_REQUIRED' ? 'Action required ⚠️' : dispute.status}
                </span>
            </td>
            <td>${formatDate(dispute.respondBy)}</td>
        </tr>
    `).join('');
}

// Render the detail blade
function renderDetailBlade(dispute) {
    const blade = document.getElementById('detailBlade');
    const content = blade.querySelector('.blade-content');
    const disputesList = document.querySelector('.disputes-list');
    
    const isUrgent = new Date(dispute.respondBy) <= new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
    
    content.innerHTML = `
        <div class="response-banner ${isUrgent ? 'urgent' : ''}">
            <p>Respond to dispute by ${formatDate(dispute.respondBy)}</p>
            <p class="hint">You should respond to this now and submit it if you want to increase your chances of winning a dispute. Learn more when you provide more information.</p>
            <button type="button">Complete your response</button>
        </div>

        <div class="dispute-details">
            <h3>Dispute for $${dispute.amount.toFixed(2)}</h3>
            
            <div class="dispute-section">
                <h4>REASON</h4>
                <p>${dispute.reason}</p>
            </div>

            <div class="dispute-section">
                <div class="amount-row">
                    <div>
                        <h4>PAYMENT AMOUNT</h4>
                        <p>$${dispute.paymentAmount.toFixed(2)}</p>
                    </div>
                    <div>
                        <h4>DISPUTED AMOUNT</h4>
                        <p>$${dispute.disputedAmount.toFixed(2)}</p>
                    </div>
                </div>

                <div class="dispute-section">
                    <h4>CARD</h4>
                    <p>${dispute.cardNumber}</p>
                </div>

                <div class="dispute-section">
                    <h4>AMOUNT HELD</h4>
                    <p>$${dispute.amountHeld.toFixed(2)}</p>
                </div>
            </div>

            <div class="timeline">
                <div class="timeline-header">
                    <h3>Timeline</h3>
                    <a href="#" class="learn-more">Learn more</a>
                </div>
                ${dispute.timeline.map(event => `
                    <div class="timeline-event">
                        <div class="event-icon ${event.type}"></div>
                        <div class="event-details">
                            <h4>${event.title}</h4>
                            <p>${event.description}</p>
                            <time>${formatDate(event.date)}</time>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    blade.classList.remove('hidden');
    disputesList.classList.add('blade-open');
}

// Select a dispute
function selectDispute(disputeId) {
    selectedDisputeId = disputeId;
    const dispute = mockData.disputes.find(d => d.id === disputeId);
    renderDisputesTable();
    renderDetailBlade(dispute);
}

// Close the detail blade
function closeDetailBlade() {
    selectedDisputeId = null;
    const blade = document.getElementById('detailBlade');
    const disputesList = document.querySelector('.disputes-list');
    
    blade.classList.add('hidden');
    disputesList.classList.remove('blade-open');
    renderDisputesTable();
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderDisputesTable();
});