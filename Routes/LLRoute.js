const express = require('express');
const llController = require('../Controllers/LLCont');
const llAnalyzer = require('../EfficiencyAnalyzers/LLEff'); // Import the analyzer

const router = express.Router();

router.post('/append', llController.appendValue);
router.get('/search/:value', llController.searchValue);
router.delete('/delete/:value', llController.deleteValue);
router.post('/analyze-efficiency', llAnalyzer.analyzeEfficiency);

module.exports = router;
