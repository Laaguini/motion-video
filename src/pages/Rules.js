import Motion from '../components/Motion/motion.js'
import Rules from '../components/Rules/Rules.js';
import Costs from '../components/Costs/Costs.js'
import AffiliateProgram from '../components/AffiliateProgram/AffiliateProgram.js';
import BudgetAllocation from '../components/BudgetAllocation/BudgetAllocation.js'
import LevelStructure from '../components/LevelStructure/LevelStructure.js';
import '../index.css'

const RulesPage = () => <Motion>
    <Rules />
    <Costs />
    <AffiliateProgram />
    <BudgetAllocation />
    <LevelStructure />
</Motion>

export default RulesPage