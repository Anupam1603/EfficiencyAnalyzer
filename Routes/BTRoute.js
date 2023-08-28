const express = require('express');
const BTreeCont = require('../Controllers/BTreeCont');
const BTEff = require('../EfficiencyAnalyzers/BTEff')
const router = express.Router();

router.post('/insert', BTreeCont.insertValue);
router.get('/search/:value', BTreeCont.searchValue);
router.delete('/delete/:value', BTreeCont.deleteValue);
router.post('/analyze-efficiency', BTEff.analyzeEfficiency);

module.exports = router;
