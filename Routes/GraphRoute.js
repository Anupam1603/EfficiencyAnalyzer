const express = require('express');
const graphController = require('../Controllers/GraphCont');
const graphAnalyzer = require('../EfficiencyAnalyzers/GraphEff'); // Import the analyzer

const router = express.Router();

router.post('/add-vertex', graphController.addVertex);
router.post('/add-edge', graphController.addEdge);
router.get('/has-vertex/:vertex', graphController.hasVertex);
router.get('/has-edge/:vertex1/:vertex2', graphController.hasEdge);
router.post('/analyze-efficiency', graphAnalyzer.analyzeEfficiency);

module.exports = router;
