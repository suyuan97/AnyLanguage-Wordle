import { CONFIG } from './config'

export const WORDS = [
  'wuwaȼ̓', 
  'quqȼi', 
  'ʔikmu', 
  'ȼ̓inam', 
  'qsa·k̓u', 
  'ʔaⱡaw', 
  'taxta·', 
  'hakuⱡ', 
  'qasxa', 'q̓apiⱡ', 'qusqa', 'huwas', 'wamat̓', 'qakiⱡ', 'yapt̓a', 'wit̓qa', 'q̓apku', 'paⱡam̓', 'ȼ̓awum', 'pisxa', 'ȼ̓iquⱡ', 'sa·nma', 'ȼ̓ip̓iⱡ', 'hukiⱡ', 'ququq', 'ʔa·kuk̓', 'sukiⱡ', 'hawaȼ̓', 'pa·ȼk̓u', 'hawit̓', 'tupuq', 'ʔa·kⱡu', 'qasqa', 'ʔaȼ̓pu', 'q̓aȼku', 'ʔa·kaⱡ', 'nuʔⱡa', 'ʔi·kuⱡ', 'waⱡik', 'ʔuȼxa', 'ȼam̓na', 'wu·kat', 'haqaⱡ', 'qaⱡsa', 'ʔit̓wu', 'ȼik̓ku', 'huqaⱡ', 'kiⱡk̓u', 'skaka', 'xanis', 'xa·ȼaⱡ', 'kaxax', 'pik̓ak', 'yaq̓it', 'huwum', 'saⱡxu', 'qaⱡa·k', 'ȼuqk̓u', 'haʔum', 'ʔa·kam', 'ⱡuqaⱡ', 'qaham', 'taʔqa', 'ⱡanta', 'huⱡuq', 'waʔxa', 'ʔasiⱡ', 'ⱡuk̓mu', 'haⱡik', 'ȼaⱡik', 'waqay', 'saqna', 'ʔu·kxa', 'maⱡxu', 'ʔaȼqa', 'ȼ̓aqaⱡ', 'kitk̓u', 'ski·ku', 'yaȼ̓ak̓', 'ha·mit', 'taʔxu', 'wat̓ak', 'kiʔik', 'ⱡanna', 'k̓an̓mi', 'qakaⱡ', 'ʔisk̓u', 'ȼi·kat', 'sukma', 'ʔit̓uk', 'ʔuȼxu', 'wan̓mu', 'maⱡik', 'ʔiȼni', 'ʔupat̓', 'qa·ⱡin', 'qunaⱡ', 'watak', 'hank̓u', 'k̓it̓iq̓', 'taxta', 'ȼaqan', 'wa·ⱡat̓', 'paⱡya', 'huq̓xa', 'kitku', 'haquq̓', 'wiyaⱡ', 'wank̓u', 'ʔit̓xa', 'kaqay', 'q̓uȼk̓u', 'haq̓wu', 'yanmi', 'taȼ̓am̓', 'wuqt̓i', 'huȼam', 'knaⱡu', 'wuqat', 'wasiⱡ', 'wa·q̓nu', 'ʔitk̓u', 'kaq̓ni', 'wakxu', 'wa·mit', 'ʔu·kit', 'han̓xu', 'ⱡaxaⱡ', 'mat̓ma', 'saⱡam̓', 'taʔxa', 'ʔiʔⱡa', 'ȼahaⱡ', 'waⱡat̓', 'ʔupiⱡ', 'sinqa', 'kupxa', 'ʔit̓qa', 'ⱡuⱡut', 'kiⱡxu', 'ʔikmi', 't̓awas', 'q̓uq̓ni', 'k̓it̓wu', 'ȼmak̓i', 'maⱡam̓', 'saⱡik', 'nuktu', 'hut̓uk', 'pa·mik', 'ʔu·niⱡ', 'paⱡak', 'wukut', 'qsak̓u', 'q̓um̓ni', 'k̓ik̓um̓', 'qanta', 'naⱡⱡa', 'haⱡam̓', 'ȼ̓aqmi', 'siⱡxa', 'ʔiⱡwa', 'ʔaȼ̓k̓i', 'ʔa·q̓uⱡ', 'ⱡitaⱡ', 'ʔa·q̓an', 'waqxu', 'ȼ̓iⱡup̓', 'kiȼ̓xa', 'ka·mtu·', 'ʔaⱡna', 'ȼamna', 'paⱡki·', 'hukin', 'qasxu', 'ʔayut', 'paⱡka', 'wuk̓sa', 'ʔu·kxu', 'yaqak', 'snaxu', 'waq̓wu', 'ȼupȼi', 'haⱡxa', 'mu·q̓ni', 'huqna', 'ʔuyak', 'kinⱡa', 'yiski', 'ⱡa·tiⱡ', 'ʔinta', 'hupak', 'tuk̓ȼa', 'ya·qaⱡ', 'tun̓xa', 'wum̓aⱡ', 'wiȼxu', 'qu·qaⱡ', 'ʔumaȼ', 'ʔaqȼi', 'wa·qaⱡ', 'sanqa', 'saⱡat̓', 'sakiⱡ', 'ⱡihit', 'ⱡik̓uq̓', 'ya·q̓an', 'saⱡa·k', 'qakin', 'yiȼki', 'ⱡitiⱡ', 'ⱡatiⱡ', 'piȼxu', 'qa·qas', 'ʔuʔⱡa', 'matam', 'ʔa·kiȼ', 'ȼpuq̓i', 'ʔaq̓am', 'hanut', 'knuxu', 'ȼaⱡam̓', 'ʔaqti', 'wat̓am', 'pisxu', 'hut̓mi', 'ʔamȼ̓i', 'yawk̓u', 'yunnu', 'ȼiqaⱡ', 'k̓uq̓ni', 'kaquq̓', 'ʔaⱡⱡa', 'q̓aȼxa', 'ʔiⱡku', 'wiⱡxa', 'ⱡunaⱡ', 'ʔu·kku', 'ʔayma', 'ȼuⱡay', 'ȼ̓aqk̓u', 'yaniⱡ', 'ⱡuʔȼi', 'tinaⱡ', 'haxam̓', 'ⱡunqu', 'wiⱡku', 'ȼ̓inak', 'qanam', 'tiⱡna', 'saqk̓u', 'qahaq', 'ȼik̓xu', 'sanⱡa', 'wa·qⱡa', 'ninku', 'pa·ȼxu', 'xayut', 'sisup', 'ka·kin', 'wu·kak', 'napit', 'kwuqa', 'ⱡaqⱡi', 'haq̓ni', 'wisik', 'naʔka', 'q̓aquⱡ', 'hak̓am', 'kiⱡki', 'qa·kqa', 'sakqa', 'wukin', 'kiȼ̓qa', 'k̓uwat̓', 'qaqna', 'ⱡatuq̓', 'ȼ̓inuk', 'ⱡituk', 'kpa·ȼi', 'sq̓umu', 'swaka', 'haqⱡa', 'qask̓u', 'knuti', 'waq̓nu', 'miȼuq̓', 'na·k̓yu', 't̓anqu', 'ȼupqa', 'ʔikȼi', 'huȼki', 'ʔutmi', 'ȼuwak̓', 'wit̓xu', 'ʔukam', 'nupqu', 'q̓akuⱡ', 'nahuk', 'ʔupuq', 'kutit̓', 'saq̓an', 'q̓uwaⱡ', 'naʔta', 'matit̓', 'sa·niⱡ', 'ⱡuȼ̓iⱡ', 'ya·kiⱡ', 'qanaⱡ', 'waⱡk̓u', 'hiska', 'kuⱡiȼ', 'haq̓an', 'ʔaymu', 'haquⱡ', 'yuwat̓', 'nuʔki·', 'san̓qa', 'qukin', 'qa·mit', 'qaⱡin', 't̓uȼ̓ak̓', 'niⱡku', 'ȼakiⱡ', 'ʔasmu', 'piȼk̓u', 'sikⱡu', 'qaⱡqa', 'ȼaʔȼ̓a', 'ʔit̓ku', 'kaqȼ̓i', 'qa·qsa', 'tuk̓xu', 'haqȼ̓i', 'ȼink̓u', 'ʔupt̓i', 'mitxa', 'piȼqa', 'k̓awiȼ', 'ȼihaⱡ', 'ʔunam', 'kin̓mi', 'ʔatka', 'naxni', 'tapxu', 'haqat', 'manqa', 'ʔuk̓iⱡ', 'matxa', 'wiⱡki', 'ȼ̓ikam', 'siⱡk̓u', 'tak̓aȼ', 'ʔaqtu', 'sȼ̓i·p̓u', 'hawum', 'k̓aqsa', 'niⱡⱡi', 'pat̓xu', 'ȼinxu', 'ʔa·kuq̓', 'wan̓xu', 'qukaⱡ', 'ki·ki·s', 'kqaqa', 'kayak', 'yat̓ap', 'kupuk̓', 'kamki', 'ȼik̓xa', 'xawut', 'ȼumuk', 'ʔa·qaⱡ', 'ʔupxa', 'wukxu', 'ʔupam', 'maqak', 'qasiⱡ', 'tanaⱡ', 'ʔit̓xu', 'ʔa·qat', 'wanxu', 'k̓akin', 'hanqa', 'huȼuk', 'su·kin', 'ʔisin', 'kmiqa', 'wiⱡqa', 'yik̓ta', 'ʔa·q̓aⱡ', 'yanxu', 'ni·ȼ̓uq̓', 'kamin', 'ⱡkamu', 'ⱡitma', 'sahan', 'ʔaywu', 'waⱡxu', 'haq̓nu', 'xaxas', 'tuhuⱡ', 'ʔupxu', 'ʔikiⱡ', 'ⱡaxam', 'haqay', 'waʔta', 'qa·kiⱡ', 'ʔuxaⱡ', 'ʔiⱡki', 'ⱡukin', 'kak̓un', 'maʔka', 'maq̓an', 'ⱡuwaȼ̓', 'wisuk̓', 'sa·kⱡu', 'ⱡupⱡi', 'q̓apki', 'wiⱡiⱡ', 'q̓akin', 'ʔu·kiⱡ', 'ʔunik', 'tumik', 'ȼ̓inaⱡ', 'haⱡⱡa', 'huq̓ka', 'ⱡunnu', 'haⱡwi·', 'wusaq̓', 'k̓an̓ȼu', 'paq̓mi', 'q̓uȼaȼ', 'wukqa', 't̓apȼ̓i', 'piȼak', 'ȼik̓k̓u', 'wak̓xu', 'ȼuk̓na', 'su·kiⱡ', 'huq̓ku', 'ʔi·tqa', 'ʔa·quⱡ', 'ⱡukpu']

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
