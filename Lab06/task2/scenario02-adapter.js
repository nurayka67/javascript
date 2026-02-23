/**
 * SCENARIO 02: Payment Gateway - ADAPTER
 */

// LEGACY SYSTEM
const LegacyGateway = {
    processPayment(cardNumber, amount, currency) {
        console.log(`\n[LEGACY GATEWAY] Processing...`);
        console.log(`  Card: ****${String(cardNumber).slice(-4)}`);
        console.log(`  Amount: ${amount} ${currency}`);
        
        return { 
            success: true, 
            transactionId: `TXN-${Date.now()}`,
            timestamp: new Date().toISOString()
        };
    }
};

// ADAPTER
class PaymentAdapter {
    constructor(gateway) { 
        this.gateway = gateway;
        console.log('Adapter created');
    }
    
    charge({ amount, currency, cardToken }) {
        console.log('\n[ADAPTER] Translating request...');
        console.log(`  Modern: charge({amount:${amount}, currency:${currency}, cardToken:${cardToken}})`);
        console.log(`  Legacy: processPayment(${cardToken}, ${amount}, ${currency})`);
        
        const result = this.gateway.processPayment(cardToken, amount, currency);
        
        return {
            success: result.success,
            transactionId: result.transactionId
        };
    }
}

// DEMO
console.log('=== ADAPTER PATTERN DEMO ===\n');

const adapter = new PaymentAdapter(LegacyGateway);

console.log('\n Modern checkout:');
const result = adapter.charge({
    amount: 15000,
    currency: 'KZT',
    cardToken: '4111111111111111'
});

console.log('\n Result for modern client:');
console.log(result);

console.log('\n Adapter works! Modern client can use legacy system');