import Lead from '../models/Lead.js';

export const addLead = async (req, res) => {
    try {
        const { name, email, phone, businessType, message } = req.body;

        if (!name || !email || !businessType) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newLead = new Lead({ name, email, phone, businessType, message });
        await newLead.save();

        res.status(201).json({ message: 'Lead submitted successfully' });
    } catch (error) {
        console.error('Error saving lead:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};