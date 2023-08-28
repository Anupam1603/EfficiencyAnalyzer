const express = require('express');
const arrayController = require('../Controllers/ArrayCont');
const arrayAnalyzer = require('../EfficiencyAnalyzers/arrayEff'); // Import the analyzer

const router = express.Router();

router.post('/insert', arrayController.insertValue);
router.get('/search/:value',arrayController.searchValue);
router.delete('/delete/:value', arrayController.deleteValue);
router.post('/analyze-efficiency', arrayAnalyzer.analyzeEfficiency);

module.exports = router;
