// Create a separate namespace for access code functionality
window.AccessCodeHandler = {
    codes: [],
    
    async loadCodes() {
        try {
            const response = await fetch('./codes.json');
            const data = await response.json();
            this.codes = data.codes;
            console.log('Loaded codes:', this.codes);
        } catch (error) {
            console.error('Error loading access codes:', error);
            this.codes = [{
                code: 'newcode',
                type: 'default',
                description: 'Default access code'
            }];
        }
    },

    validate(inputCode) {
        console.log('Validating code:', inputCode);
        console.log('Available codes:', this.codes);
        const foundCode = this.codes.find(code => code.code === inputCode);
        console.log('Found code:', foundCode);
        if (foundCode) {
            return {
                isValid: true,
                type: foundCode.type,
                description: foundCode.description
            };
        }
        return {
            isValid: false,
            type: null,
            description: null
        };
    }
};

// Load codes when file is loaded
window.AccessCodeHandler.loadCodes(); 