import { colorDesc, desc, descPlural, format } from "PatternUtils";

/** 任何和主体角色有关的服装 */
export const patterns = [
    //头饰
    desc("hairband"), desc("hair ornament"), desc("headwear"),
    "hair intakes", "hair rings", "hair stick", "hairclip",
    "headband","head wreath",
    "sweatband",
    "headphones", "headphones around neck", "fake animal ears",
    "animal ear headphones",
    "tiara", "maid headdress",
    "hairpin",

    //帽子
    desc("hat"), desc("cape"), desc("cap"),
    desc("hood"), "hood up", "hood down",
    desc("scrunchie"),
    "beret","crown", "bonnet",
    "qing guanmao", "wataboushi", 

    //面部
    desc("mask"), /^mask .+$/,
    desc("veil"),
    desc("eyewear"),
    desc("earrings"),
    "glasses"   , "sunglasses",
    /^goggles.+ $/,
    "makeup"    ,
    "eyepatch",
    "blindfold",
    "medical eyepatch",
    "eyewear on head",
    "black blindfold",

    //脖子
    desc("bowtie"),
    desc("collar"),
    desc("neckerchief"),
    desc("necktie"),
    desc("choker"),
    desc("capelet"),
    desc("scarf"),
    "ascot", colorDesc("ascot"),
    "necklace",
    "shrug (clothing)", "feather boa",
    "turtleneck",

    //腰部
    desc("belt"),
    "clothes around waist",
    "obi", "sash",
    "loincloth",
    "leash",

    //上身服饰
    desc("clothes"),
    desc("kimono"),
    desc("leotard"),
    desc("uniform"),
    desc("hoodie"),
    desc("apron"),
    desc("jacket"), "jacket around waist",
    desc("shirt"),
    desc("shorts"),
    desc("dress"),
    desc("vest"),
    desc("coat"),
    desc("armor"),
    desc("sweater"),
    desc("bodysuit"),
    desc("suit"),
    "labcoat"   ,
    "midriff peek", "midriff",
    "halterneck", "corset",
    "center opening",
    "formal", "monocle", "casual",
    "spaghetti strap", "strap slip",
    "cloak",
    "crop top",
    "front-tie top",
    "innertube",
    "shawl", "criss-cross halter",
    "crop top overhang",
    "uchikake",
    "hagoromo",

    //臀部服饰
    "hip vent",
    desc("skirt"),
    "miniskirt",
    "microskirt",
    "sundress",
    desc("serafuku"),
    "fake tail",
    "tutu", "pelvic curtain",
    "sarong",
    "crotchless",
    "overalls",
    "open fly",
    "pants", "black pants", "grey pants", "shirt tucked in",

    //内衣
    desc("panties"),
    desc("swimsuit"),
    desc("bikini"),
    desc("bra"),
    "underwear" ,
    "bath towel", "towel", "beach towel",
    "maebari"   ,
    "covered navel", "sports bra",
    "bikini top only","sling bikini top","side-tie bikini bottom",
    desc("hakama"),
    "camisole", "pajamas",
    "panty straps",
    "pasties",
    "breast curtain", "breast curtains",
    "lingerie",
    "bodystocking", "naked bandage",
    "thong","crotch rope",
    "sarashi", "chest sarashi",

    //手部
    desc("gauntlets"),
    descPlural("glove"),
    desc("sleeves"),
    desc("bracelet"),
    desc("cuffs"),
    "bare arms", "sleeveless", "sleeves past wrists",
    "wristband","armlet",

    //腿部
    desc("legwear"),
    desc("pantyhose"),
    descPlural("thighhigh"),
    descPlural("kneehigh"),
    "bare legs", "garter straps",
    "thigh strap",
    "highleg",
    "fishnets",
    "thighlet",
    "bridal garter",

    //不定装饰/小型饰品
    desc("rose"),
    desc("ribbon"),
    desc("bell"),
    desc("flower"),
    desc("bow"),
    "bandaid"   , /^bandaid on .+$/,
    /^.+ \(symbol\)$/,
    "jewelry"   ,
    "bandages"  ,
    "tail ornament",
    "jingle bell", "floral print",
    "plaid", "o-ring",
    "frills",
    "weapon on back",
    "ring", "nipple rings",
    "piercing", "navel piercing", "nipple piercing", "pussy piercing",
    "tongue piercing", "ear piercing", "clitoris piercing", "tail piercing",
    "fur trim", "ribbon trim", "gold trim",
    "argyle", "tassel",
    "anklet", "bangle",
    "center frills", "brooch", "striped", "buttons",
    "polka dot", "flower knot",
    "buckle", "watch",
    "lace trim", "lace",
    "name tag", "id card",

    //穿着风格
    /^.+ cutout$/,
    "strapless",
    "off shoulder", "bare shoulders",
    "nude", "completely nude", "see-through",
    "no pants","bottomless","topless",
    "underwear only", "no bra",
    "cleavage cutout",
    "bare back",

    //风格套装
    "playboy bunny",
    "wa maid", "maid", "enmaided",
    "mummy", "jiangshi", "witch",
    /^.+ outfit$/,
    /^.+ costume$/,
    "bandaged leg", "bandaged head", "bandaged arm",
    "riding",
    "virtual youtuber",
    "lolita fashion",
    "race queen",
    "cheerleader", "pom pom (cheerleading)", "pom pom (clothes)",
]