/*! cityselector - v1.0 - 2013-07-16 4:39:31 PM
* Copyright (c) 2013 baxian; Licensed  */
KISSY.add("1.0/domestic",function(){"use strict";var a=[{name:"\u5b89\u5fbd",pinyin:"anhui",spy:"ah",code:"30509",city:[{name:"\u5b89\u5e86",pinyin:"anqing",spy:"aq",code:"45959"},{name:"\u868c\u57e0",pinyin:"bangbu",spy:"bb",code:"45961"},{name:"\u4eb3\u5dde",pinyin:"bozhou",spy:"bz",code:"45966"},{name:"\u5de2\u6e56",pinyin:"chaohu",spy:"ch",code:"45964"},{name:"\u6ec1\u5dde",pinyin:"chuzhou",spy:"cz",code:"110249"},{name:"\u6c60\u5dde",pinyin:"chizhou",spy:"cz",code:"110252"},{name:"\u961c\u9633",pinyin:"fuyang",spy:"fy",code:"45963"},{name:"\u6dee\u5317",pinyin:"huaibei",spy:"hb",code:"110247"},{name:"\u5408\u80a5",pinyin:"hefei",spy:"hf",code:"29413"},{name:"\u6dee\u5357",pinyin:"huainan",spy:"hn",code:"45962"},{name:"\u9ec4\u5c71",pinyin:"huangshan",spy:"hs",code:"38723"},{name:"\u516d\u5b89",pinyin:"liuan",spy:"la",code:"110250"},{name:"\u9a6c\u978d\u5c71",pinyin:"maanshan",spy:"mas",code:"45968"},{name:"\u5bbf\u5dde",pinyin:"suzhou",spy:"sz",code:"45965"},{name:"\u94dc\u9675",pinyin:"tongling",spy:"tl",code:"110248"},{name:"\u829c\u6e56",pinyin:"wuhu",spy:"wh",code:"45960"},{name:"\u5ba3\u57ce",pinyin:"xuancheng",spy:"xc",code:"110253"}]},{name:"\u5317\u4eac",pinyin:"beijing",spy:"bj",code:"29400"},{name:"\u91cd\u5e86",pinyin:"chongqing",spy:"cq",code:"29404"},{name:"\u798f\u5efa",pinyin:"fujian",spy:"fj",code:"30519",city:[{name:"\u798f\u5dde",pinyin:"fuzhou",spy:"fz",code:"29406"},{name:"\u9f99\u5ca9",pinyin:"longyan",spy:"ly",code:"82717644"},{name:"\u5b81\u5fb7",pinyin:"ningde",spy:"nd",code:"45973"},{name:"\u5357\u5e73",pinyin:"nanping",spy:"np",code:"46213"},{name:"\u8386\u7530",pinyin:"putian",spy:"pt",code:"45972"},{name:"\u6cc9\u5dde",pinyin:"quanzhou",spy:"qz",code:"38742"},{name:"\u53a6\u95e8",pinyin:"shamen",spy:"sm",code:"29431"},{name:"\u4e09\u660e",pinyin:"sanming",spy:"sm",code:"46212"},{name:"\u6f33\u5dde",pinyin:"zhangzhou",spy:"zz",code:"45975"}]},{name:"\u5e7f\u4e1c",pinyin:"guangdong",spy:"gd",code:"30517",city:[{name:"\u6f6e\u5dde",pinyin:"chaozhou",spy:"cz",code:"46008"},{name:"\u4e1c\u839e",pinyin:"dongguan",spy:"dg",code:"84746"},{name:"\u4f5b\u5c71",pinyin:"foshan",spy:"fs",code:"31961"},{name:"\u5e7f\u5dde",pinyin:"guangzhou",spy:"gz",code:"29407"},{name:"\u6cb3\u6e90",pinyin:"heyuan",spy:"hy",code:"46003"},{name:"\u60e0\u5dde",pinyin:"huizhou",spy:"hz",code:"46000"},{name:"\u6c5f\u95e8",pinyin:"jiangmen",spy:"jm",code:"45996"},{name:"\u63ed\u9633",pinyin:"jieyang",spy:"jy",code:"46009"},{name:"\u8302\u540d",pinyin:"maoming",spy:"mm",code:"45998"},{name:"\u6885\u5dde",pinyin:"meizhou",spy:"mz",code:"46001"},{name:"\u6e05\u8fdc",pinyin:"qingyuan",spy:"qy",code:"46005"},{name:"\u97f6\u5173",pinyin:"shaoguan",spy:"sg",code:"45995"},{name:"\u6c55\u5934",pinyin:"shantou",spy:"st",code:"45994"},{name:"\u6c55\u5c3e",pinyin:"shanwei",spy:"sw",code:"46002"},{name:"\u6df1\u5733",pinyin:"shenzhen",spy:"sz",code:"29425"},{name:"\u4e91\u6d6e",pinyin:"yunfu",spy:"yf",code:"46010"},{name:"\u9633\u6c5f",pinyin:"yangjiang",spy:"yj",code:"46004"},{name:"\u73e0\u6d77",pinyin:"zhuhai",spy:"zh",code:"31960"},{name:"\u6e5b\u6c5f",pinyin:"zhanjiang",spy:"zj",code:"45997"},{name:"\u8087\u5e86",pinyin:"zhaoqing",spy:"zq",code:"45999"},{name:"\u4e2d\u5c71",pinyin:"zhongshan",spy:"zs",code:"31962"}]},{name:"\u7518\u8083",pinyin:"gansu",spy:"gs",code:"30505",city:[{name:"\u767d\u94f6",pinyin:"baiyin",spy:"by",code:"45985"},{name:"\u6566\u714c",pinyin:"dunhuang",spy:"dh",code:"45989"},{name:"\u5b9a\u897f",pinyin:"dingxi",spy:"dx",code:"45986"},{name:"\u7518\u5357",pinyin:"gannan",spy:"gn",code:"45992"},{name:"\u91d1\u660c",pinyin:"jinchang",spy:"jc",code:"45979"},{name:"\u9152\u6cc9",pinyin:"jiuquan",spy:"jq",code:"45982"},{name:"\u5609\u5cea\u5173",pinyin:"jiayuguan",spy:"jyg",code:"45978"},{name:"\u9647\u5357",pinyin:"longnan",spy:"ln",code:"45987"},{name:"\u4e34\u590f",pinyin:"linxia",spy:"lx",code:"45990"},{name:"\u5170\u5dde",pinyin:"lanzhou",spy:"lz",code:"29417"},{name:"\u5e73\u51c9",pinyin:"pingliang",spy:"pl",code:"45984"},{name:"\u5e86\u9633",pinyin:"qingyang",spy:"qy",code:"45983"},{name:"\u5929\u6c34",pinyin:"tianshui",spy:"ts",code:"45977"},{name:"\u6b66\u5a01",pinyin:"wuwei",spy:"ww",code:"45980"},{name:"\u5f20\u6396",pinyin:"zhangye",spy:"zy",code:"45981"}]},{name:"\u5e7f\u897f",pinyin:"guangxi",spy:"gx",code:"30518",city:[{name:"\u5317\u6d77",pinyin:"beihai",spy:"bh",code:"38716"},{name:"\u767e\u8272",pinyin:"baise",spy:"bs",code:"46018"},{name:"\u5d07\u5de6",pinyin:"chongzuo",spy:"cz",code:"46022"},{name:"\u9632\u57ce\u6e2f",pinyin:"fangchenggang",spy:"fcg",code:"46014"},{name:"\u8d35\u6e2f",pinyin:"guigang",spy:"gg",code:"46016"},{name:"\u6842\u6797",pinyin:"guilin",spy:"gl",code:"29408"},{name:"\u6cb3\u6c60",pinyin:"hechi",spy:"hc",code:"46020"},{name:"\u8d3a\u5dde",pinyin:"hezhou",spy:"hz",code:"46019"},{name:"\u6765\u5bbe",pinyin:"laibin",spy:"lb",code:"46021"},{name:"\u67f3\u5dde",pinyin:"liuzhou",spy:"lz",code:"46012"},{name:"\u5357\u5b81",pinyin:"nanning",spy:"nn",code:"29421"},{name:"\u94a6\u5dde",pinyin:"qinzhou",spy:"qz",code:"46015"},{name:"\u68a7\u5dde",pinyin:"wuzhou",spy:"wz",code:"46013"},{name:"\u7389\u6797",pinyin:"yulin",spy:"yl",code:"46017"}]},{name:"\u8d35\u5dde",pinyin:"guizhou",spy:"gz",code:"30516",city:[{name:"\u5b89\u987a",pinyin:"anshun",spy:"as",code:"82719621"},{name:"\u6bd5\u8282",pinyin:"bijie",spy:"bj",code:"46029"},{name:"\u8d35\u9633",pinyin:"guiyang",spy:"gy",code:"29409"},{name:"\u516d\u76d8\u6c34",pinyin:"liupanshui",spy:"lps",code:"46026"},{name:"\u9ed4\u4e1c\u5357",pinyin:"qiandongnan",spy:"qdn",code:"110231"},{name:"\u9ed4\u5357",pinyin:"qiannan",spy:"qn",code:"110232"},{name:"\u9ed4\u897f\u5357",pinyin:"qianxinan",spy:"qxn",code:"110230"},{name:"\u94dc\u4ec1",pinyin:"tongren",spy:"tr",code:"46027"},{name:"\u9075\u4e49",pinyin:"zunyi",spy:"zy",code:"46024"}]},{name:"\u6e56\u5317",pinyin:"hubei",spy:"hb",code:"30513",city:[{name:"\u6069\u65bd",pinyin:"enshi",spy:"es",code:"46063"},{name:"\u9102\u5dde",pinyin:"ezhou",spy:"ez",code:"110236"},{name:"\u9ec4\u5188",pinyin:"huanggang",spy:"hg",code:"110238"},{name:"\u9ec4\u77f3",pinyin:"huangshi",spy:"hs",code:"110235"},{name:"\u8346\u95e8",pinyin:"jingmen",spy:"jm",code:"46062"},{name:"\u8346\u5dde",pinyin:"jingzhou",spy:"jz",code:"46058"},{name:"\u5341\u5830",pinyin:"shiyan",spy:"sy",code:"46061"},{name:"\u968f\u5dde",pinyin:"suizhou",spy:"sz",code:"110240"},{name:"\u6b66\u6c49",pinyin:"wuhan",spy:"wh",code:"29429"},{name:"\u8944\u6a0a",pinyin:"xiangfan",spy:"xf",code:"46060"},{name:"\u5b5d\u611f",pinyin:"xiaogan",spy:"xg",code:"110237"},{name:"\u54b8\u5b81",pinyin:"xianning",spy:"xn",code:"110239"},{name:"\u5b9c\u660c",pinyin:"yichang",spy:"yc",code:"46059"}]},{name:"\u6cb3\u5317",pinyin:"hebei",spy:"hb",code:"30499",city:[{name:"\u4fdd\u5b9a",pinyin:"baoding",spy:"bd",code:"46040"},{name:"\u627f\u5fb7",pinyin:"chengde",spy:"cd",code:"38717"},{name:"\u6ca7\u5dde",pinyin:"cangzhou",spy:"cz",code:"110288"},{name:"\u90af\u90f8",pinyin:"handan",spy:"hd",code:"46042"},{name:"\u8861\u6c34",pinyin:"hengshui",spy:"hs",code:"46041"},{name:"\u5eca\u574a",pinyin:"langfang",spy:"lf",code:"46039"},{name:"\u79e6\u7687\u5c9b",pinyin:"qinhuangdao",spy:"qhd",code:"46034"},{name:"\u77f3\u5bb6\u5e84",pinyin:"shijiazhuang",spy:"sjz",code:"29426"},{name:"\u5510\u5c71",pinyin:"tangshan",spy:"ts",code:"46037"},{name:"\u90a2\u53f0",pinyin:"xingtai",spy:"xt",code:"46036"},{name:"\u5f20\u5bb6\u53e3",pinyin:"zhangjiakou",spy:"zjk",code:"38744"}]},{name:"\u9ed1\u9f99\u6c5f",pinyin:"heilongjiang",spy:"hlj",code:"30496",city:[{name:"\u5927\u5e86",pinyin:"daqing",spy:"dq",code:"46055"},{name:"\u5927\u5174\u5b89\u5cad",pinyin:"daxinganling",spy:"dxal",code:"110299"},{name:"\u54c8\u5c14\u6ee8",pinyin:"haerbin",spy:"heb",code:"29410"},{name:"\u9e64\u5c97",pinyin:"hegang",spy:"hg",code:"110295"},{name:"\u9ed1\u6cb3",pinyin:"heihe",spy:"hh",code:"84742"},{name:"\u4f73\u6728\u65af",pinyin:"jiamusi",spy:"jms",code:"84743"},{name:"\u9e21\u897f",pinyin:"jixi",spy:"jx",code:"110294"},{name:"\u7261\u4e39\u6c5f",pinyin:"mudanjiang",spy:"mdj",code:"46054"},{name:"\u9f50\u9f50\u54c8\u5c14",pinyin:"qiqihaer",spy:"qqhe",code:"46056"},{name:"\u4e03\u53f0\u6cb3",pinyin:"qitaihe",spy:"qth",code:"110297"},{name:"\u7ee5\u5316",pinyin:"suihua",spy:"sh",code:"110298"},{name:"\u53cc\u9e2d\u5c71",pinyin:"shuangyashan",spy:"sys",code:"110296"},{name:"\u4f0a\u6625",pinyin:"yichun",spy:"yc",code:"84744"}]},{name:"\u6e56\u5357",pinyin:"hunan",spy:"hn",code:"30514",city:[{name:"\u5e38\u5fb7",pinyin:"changde",spy:"cd",code:"110224"},{name:"\u957f\u6c99",pinyin:"changsha",spy:"cs",code:"29402"},{name:"\u90f4\u5dde",pinyin:"chenzhou",spy:"cz",code:"110226"},{name:"\u6000\u5316",pinyin:"huaihua",spy:"hh",code:"110228"},{name:"\u8861\u9633",pinyin:"hengyang",spy:"hy",code:"82718143"},{name:"\u5a04\u5e95",pinyin:"loudi",spy:"ld",code:"110229"},{name:"\u90b5\u9633",pinyin:"shaoyang",spy:"sy",code:"110222"},{name:"\u6e58\u6f6d",pinyin:"xiangtan",spy:"xt",code:"46067"},{name:"\u6e58\u897f",pinyin:"xiangxi",spy:"xx",code:"82718147"},{name:"\u5cb3\u9633",pinyin:"yueyang",spy:"yy",code:"110223"},{name:"\u76ca\u9633",pinyin:"yiyang",spy:"yy",code:"110225"},{name:"\u6c38\u5dde",pinyin:"yongzhou",spy:"yz",code:"110227"},{name:"\u5f20\u5bb6\u754c",pinyin:"zhangjiajie",spy:"zjj",code:"29436"},{name:"\u682a\u6d32",pinyin:"zhuzhou",spy:"zz",code:"110220"}]},{name:"\u6d77\u5357",pinyin:"hainan",spy:"hn",code:"30520",city:[{name:"\u6d77\u53e3",pinyin:"haikou",spy:"hk",code:"29411"},{name:"\u4e09\u6c99\u5e02",pinyin:"sanshashi",spy:"sss",code:"155258206"},{name:"\u4e09\u4e9a",pinyin:"sanya",spy:"sy",code:"38732"},{name:"\u4e94\u6307\u5c71",pinyin:"wuzhishan",spy:"wzs",code:"57228"},{name:"\u5174\u9686",pinyin:"xinglong",spy:"xl",code:"3278613"}]},{name:"\u6cb3\u5357",pinyin:"henan",spy:"hn",code:"30500",city:[{name:"\u5b89\u9633",pinyin:"anyang",spy:"ay",code:"110280"},{name:"\u767b\u5c01",pinyin:"dengfeng",spy:"df",code:"82717870"},{name:"\u9e64\u58c1",pinyin:"hebi",spy:"hb",code:"46051"},{name:"\u7126\u4f5c",pinyin:"jiaozuo",spy:"jz",code:"46052"},{name:"\u5f00\u5c01",pinyin:"kaifeng",spy:"kf",code:"46045"},{name:"\u6f2f\u6cb3",pinyin:"luohe",spy:"lh",code:"131759"},{name:"\u6d1b\u9633",pinyin:"luoyang",spy:"ly",code:"38729"},{name:"\u5357\u9633",pinyin:"nanyang",spy:"ny",code:"46048"},{name:"\u5e73\u9876\u5c71",pinyin:"pingdingshan",spy:"pds",code:"57255"},{name:"\u6fee\u9633",pinyin:"puyang",spy:"py",code:"46047"},{name:"\u4e09\u95e8\u5ce1",pinyin:"sanmenxia",spy:"smx",code:"110283"},{name:"\u5546\u4e18",pinyin:"shangqiu",spy:"sq",code:"110284"},{name:"\u8bb8\u660c",pinyin:"xuchang",spy:"xc",code:"110281"},{name:"\u65b0\u4e61",pinyin:"xinxiang",spy:"xx",code:"46046"},{name:"\u4fe1\u9633",pinyin:"xinyang",spy:"xy",code:"110285"},{name:"\u5468\u53e3",pinyin:"zhoukou",spy:"zk",code:"110286"},{name:"\u9a7b\u9a6c\u5e97",pinyin:"zhumadian",spy:"zmd",code:"110287"},{name:"\u90d1\u5dde",pinyin:"zhengzhou",spy:"zz",code:"29437"}]},{name:"\u5409\u6797",pinyin:"jilin",spy:"jl",code:"30497",city:[{name:"\u767d\u57ce",pinyin:"baicheng",spy:"bc",code:"110293"},{name:"\u767d\u5c71",pinyin:"baishan",spy:"bs",code:"82717105"},{name:"\u957f\u6625",pinyin:"changchun",spy:"cc",code:"29401"},{name:"\u5409\u6797",pinyin:"jilin",spy:"jl",code:"30497"},{name:"\u8fbd\u6e90",pinyin:"liaoyuan",spy:"ly",code:"110290"},{name:"\u56db\u5e73",pinyin:"siping",spy:"sp",code:"110289"},{name:"\u677e\u539f",pinyin:"songyuan",spy:"sy",code:"110292"},{name:"\u901a\u5316",pinyin:"tonghua",spy:"th",code:"110291"},{name:"\u5ef6\u8fb9",pinyin:"yanbian",spy:"yb",code:"84745"}]},{name:"\u6c5f\u82cf",pinyin:"jiangsu",spy:"js",code:"30511",city:[{name:"\u5e38\u5dde",pinyin:"changzhou",spy:"cz",code:"31949"},{name:"\u6dee\u5b89",pinyin:"huaian",spy:"ha",code:"46092"},{name:"\u8fde\u4e91\u6e2f",pinyin:"lianyungang",spy:"lyg",code:"31951"},{name:"\u5357\u4eac",pinyin:"nanjing",spy:"nj",code:"29420"},{name:"\u5357\u901a",pinyin:"nantong",spy:"nt",code:"31948"},{name:"\u5bbf\u8fc1",pinyin:"suqian",spy:"sq",code:"108722"},{name:"\u82cf\u5dde",pinyin:"suzhou",spy:"sz",code:"30378"},{name:"\u6cf0\u5dde",pinyin:"taizhou",spy:"tz",code:"46084"},{name:"\u65e0\u9521",pinyin:"wuxi",spy:"wx",code:"31947"},{name:"\u5f90\u5dde",pinyin:"xuzhou",spy:"xz",code:"31950"},{name:"\u76d0\u57ce",pinyin:"yancheng",spy:"yc",code:"46085"},{name:"\u626c\u5dde",pinyin:"yangzhou",spy:"yz",code:"46078"},{name:"\u9547\u6c5f",pinyin:"zhenjiang",spy:"zj",code:"46079"}]},{name:"\u6c5f\u897f",pinyin:"jiangxi",spy:"jx",code:"30512",city:[{name:"\u629a\u5dde",pinyin:"fuzhou",spy:"fz",code:"110246"},{name:"\u8d63\u5dde",pinyin:"ganzhou",spy:"gz",code:"110243"},{name:"\u5409\u5b89",pinyin:"jian",spy:"ja",code:"82717706"},{name:"\u666f\u5fb7\u9547",pinyin:"jingdezhen",spy:"jdz",code:"46073"},{name:"\u4e5d\u6c5f",pinyin:"jiujiang",spy:"jj",code:"46072"},{name:"\u5357\u660c NANCHANG",pinyin:"nanchang NANCHANG",spy:"nc NANCHANG",code:"38730"},{name:"\u840d\u4e61",pinyin:"pingxiang",spy:"px",code:"46076"},{name:"\u4e0a\u9976(\u5a7a\u6e90)",pinyin:"shangrao(wuyuan)",spy:"sr(wy)",code:"46074"},{name:"\u65b0\u4f59",pinyin:"xinyu",spy:"xy",code:"110241"},{name:"\u5b9c\u6625",pinyin:"yichun",spy:"yc",code:"110245"},{name:"\u9e70\u6f6d",pinyin:"yingtan",spy:"yt",code:"110242"}]},{name:"\u8fbd\u5b81",pinyin:"liaoning",spy:"ln",code:"30498",city:[{name:"\u978d\u5c71",pinyin:"anshan",spy:"as",code:"46104"},{name:"\u672c\u6eaa",pinyin:"benxi",spy:"bx",code:"46106"},{name:"\u671d\u9633",pinyin:"chaoyang",spy:"cy",code:"46110"},{name:"\u4e39\u4e1c",pinyin:"dandong",spy:"dd",code:"46103"},{name:"\u5927\u8fde",pinyin:"dalian",spy:"dl",code:"29405"},{name:"\u629a\u987a",pinyin:"fushun",spy:"fs",code:"46107"},{name:"\u961c\u65b0",pinyin:"fuxin",spy:"fx",code:"46109"},{name:"\u846b\u82a6\u5c9b",pinyin:"huludao",spy:"hld",code:"46099"},{name:"\u9526\u5dde",pinyin:"jinzhou",spy:"jz",code:"46100"},{name:"\u8fbd\u9633",pinyin:"liaoyang",spy:"ly",code:"46105"},{name:"\u76d8\u9526",pinyin:"panjin",spy:"pj",code:"46101"},{name:"\u6c88\u9633",pinyin:"shenyang",spy:"sy",code:"29424"},{name:"\u94c1\u5cad",pinyin:"tieling",spy:"tl",code:"46108"},{name:"\u8425\u53e3",pinyin:"yingkou",spy:"yk",code:"46102"}]},{name:"\u5185\u8499\u53e4",pinyin:"neimenggu",spy:"nmg",code:"30495",city:[{name:"\u963f\u62c9\u5584\u76df",pinyin:"alashanmeng",spy:"alsm",code:"131754"},{name:"\u5305\u5934",pinyin:"baotou",spy:"bt",code:"46112"},{name:"\u5df4\u5f66\u6dd6\u5c14",pinyin:"bayannaoer",spy:"byne",code:"46118"},{name:"\u8d64\u5cf0",pinyin:"chifeng",spy:"cf",code:"46114"},{name:"\u9102\u5c14\u591a\u65af",pinyin:"eerduosi",spy:"eeds",code:"46116"},{name:"\u547c\u548c\u6d69\u7279",pinyin:"huhehaote",spy:"hhht",code:"29414"},{name:"\u547c\u4f26\u8d1d\u5c14",pinyin:"hulunbeier",spy:"hlbe",code:"46117"},{name:"\u901a\u8fbd",pinyin:"tongliao",spy:"tl",code:"46115"},{name:"\u4e4c\u6d77",pinyin:"wuhai",spy:"wh",code:"46113"},{name:"\u4e4c\u5170\u5bdf\u5e03",pinyin:"wulanchabu",spy:"wlcb",code:"46119"},{name:"\u5174\u5b89\u76df",pinyin:"xinganmeng",spy:"xam",code:"131752"},{name:"\u9521\u6797\u90ed\u52d2\u76df",pinyin:"xilinguolemeng",spy:"xlglm",code:"131753"}]},{name:"\u5b81\u590f",pinyin:"ningxia",spy:"nx",code:"30507",city:[{name:"\u56fa\u539f",pinyin:"guyuan",spy:"gy",code:"46123"},{name:"\u77f3\u5634\u5c71",pinyin:"shizuishan",spy:"szs",code:"46121"},{name:"\u5434\u5fe0",pinyin:"wuzhong",spy:"wz",code:"46122"},{name:"\u94f6\u5ddd",pinyin:"yinchuan",spy:"yc",code:"29434"},{name:"\u4e2d\u536b",pinyin:"zhongwei",spy:"zw",code:"46124"}]},{name:"\u9752\u6d77",pinyin:"qinghai",spy:"qh",code:"30504",city:[{name:"\u679c\u6d1b",pinyin:"guoluo",spy:"gl",code:"110272"},{name:"\u6d77\u5317",pinyin:"haibei",spy:"hb",code:"110270"},{name:"\u6d77\u4e1c",pinyin:"haidong",spy:"hd",code:"46126"},{name:"\u9ec4\u5357",pinyin:"huangnan",spy:"hn",code:"110271"},{name:"\u6d77\u5357",pinyin:"hainan",spy:"hn",code:"30520"},{name:"\u6d77\u897f",pinyin:"haixi",spy:"hx",code:"110274"},{name:"\u897f\u5b81",pinyin:"xining",spy:"xn",code:"29433"},{name:"\u7389\u6811",pinyin:"yushu",spy:"ys",code:"110273"}]},{name:"\u56db\u5ddd",pinyin:"sichuan",spy:"sc",code:"30508",city:[{name:"\u963f\u575d\u5dde",pinyin:"abazhou",spy:"abz",code:"82719357"},{name:"\u5df4\u4e2d",pinyin:"bazhong",spy:"bz",code:"110260"},{name:"\u6210\u90fd",pinyin:"chengdou",spy:"cd",code:"29403"},{name:"\u5fb7\u9633",pinyin:"deyang",spy:"dy",code:"46173"},{name:"\u8fbe\u5dde",pinyin:"dazhou",spy:"dz",code:"110257"},{name:"\u5e7f\u5b89",pinyin:"guangan",spy:"ga",code:"110256"},{name:"\u5e7f\u5143",pinyin:"guangyuan",spy:"gy",code:"46175"},{name:"\u7518\u5b5c\u5dde",pinyin:"ganzizhou",spy:"gzz",code:"3297267"},{name:"\u4e50\u5c71",pinyin:"leshan",spy:"ls",code:"38726"},{name:"\u51c9\u5c71\u5dde",pinyin:"liangshanzhou",spy:"lsz",code:"3297268"},{name:"\u6cf8\u5dde",pinyin:"luzhou",spy:"lz",code:"46172"},{name:"\u7709\u5c71",pinyin:"meishan",spy:"ms",code:"82719356"},{name:"\u7ef5\u9633",pinyin:"mianyang",spy:"my",code:"46174"},{name:"\u5357\u5145",pinyin:"nanchong",spy:"nc",code:"110254"},{name:"\u5185\u6c5f",pinyin:"neijiang",spy:"nj",code:"46177"},{name:"\u6500\u679d\u82b1",pinyin:"panzhihua",spy:"pzh",code:"46171"},{name:"\u9042\u5b81",pinyin:"suining",spy:"sn",code:"46176"},{name:"\u96c5\u5b89",pinyin:"yaan",spy:"ya",code:"110259"},{name:"\u5b9c\u5bbe",pinyin:"yibin",spy:"yb",code:"110255"},{name:"\u81ea\u8d21",pinyin:"zigong",spy:"zg",code:"46170"},{name:"\u8d44\u9633",pinyin:"ziyang",spy:"zy",code:"110261"}]},{name:"\u5c71\u4e1c",pinyin:"shandong",spy:"sd",code:"30501",city:[{name:"\u6ee8\u5dde",pinyin:"binzhou",spy:"bz",code:"46144"},{name:"\u4e1c\u8425",pinyin:"dongying",spy:"dy",code:"46136"},{name:"\u5fb7\u5dde",pinyin:"dezhou",spy:"dz",code:"46138"},{name:"\u83cf\u6cfd",pinyin:"heze",spy:"hz",code:"46142"},{name:"\u6d4e\u5357",pinyin:"jinan",spy:"jn",code:"29415"},{name:"\u6d4e\u5b81",pinyin:"jining",spy:"jn",code:"110278"},{name:"\u804a\u57ce",pinyin:"liaocheng",spy:"lc",code:"46143"},{name:"\u83b1\u829c",pinyin:"laiwu",spy:"lw",code:"110279"},{name:"\u4e34\u6c82",pinyin:"linyi",spy:"ly",code:"46137"},{name:"\u9752\u5c9b",pinyin:"qingdao",spy:"qd",code:"29422"},{name:"\u65e5\u7167",pinyin:"rizhao",spy:"rz",code:"46141"},{name:"\u6cf0\u5b89",pinyin:"taian",spy:"ta",code:"82717789"},{name:"\u6f4d\u574a",pinyin:"weifang",spy:"wf",code:"46134"},{name:"\u5a01\u6d77",pinyin:"weihai",spy:"wh",code:"38734"},{name:"\u70df\u53f0",pinyin:"yantai",spy:"yt",code:"38738"},{name:"\u6dc4\u535a",pinyin:"zibo",spy:"zb",code:"46135"},{name:"\u67a3\u5e84",pinyin:"zaozhuang",spy:"zz",code:"110277"}]},{name:"\u4e0a\u6d77",pinyin:"shanghai",spy:"sh",code:"29423"},{name:"\u5c71\u897f",pinyin:"shanxi",spy:"sx",code:"30502",city:[{name:"\u957f\u6cbb",pinyin:"changzhi",spy:"cz",code:"46153"},{name:"\u5927\u540c",pinyin:"datong",spy:"dt",code:"46150"},{name:"\u664b\u57ce",pinyin:"jincheng",spy:"jc",code:"46154"},{name:"\u664b\u4e2d",pinyin:"jinzhong",spy:"jz",code:"110275"},{name:"\u4e34\u6c7e",pinyin:"linfen",spy:"lf",code:"46155"},{name:"\u5415\u6881",pinyin:"lu:liang",spy:"ll",code:"110276"},{name:"\u5e73\u9065",pinyin:"pingyao",spy:"py",code:"8517582"},{name:"\u6714\u5dde",pinyin:"shuozhou",spy:"sz",code:"46158"},{name:"\u592a\u539f",pinyin:"taiyuan",spy:"ty",code:"29427"},{name:"\u5ffb\u5dde",pinyin:"xinzhou",spy:"xz",code:"46159"},{name:"\u8fd0\u57ce",pinyin:"yuncheng",spy:"yc",code:"46157"},{name:"\u9633\u6cc9",pinyin:"yangquan",spy:"yq",code:"46151"}]},{name:"\u9655\u897f",pinyin:"shanxi",spy:"sx",code:"30503",city:[{name:"\u5b89\u5eb7",pinyin:"ankang",spy:"ak",code:"46167"},{name:"\u5b9d\u9e21",pinyin:"baoji",spy:"bj",code:"46162"},{name:"\u6c49\u4e2d",pinyin:"hanzhong",spy:"hz",code:"46165"},{name:"\u5546\u6d1b",pinyin:"shangluo",spy:"sl",code:"46168"},{name:"\u94dc\u5ddd",pinyin:"tongchuan",spy:"tc",code:"46161"},{name:"\u6e2d\u5357",pinyin:"weinan",spy:"wn",code:"82720044"},{name:"\u897f\u5b89",pinyin:"xian",spy:"xa",code:"29432"},{name:"\u54b8\u9633",pinyin:"xianyang",spy:"xy",code:"46163"},{name:"\u5ef6\u5b89",pinyin:"yanan",spy:"ya",code:"38739"},{name:"\u6986\u6797",pinyin:"yulin",spy:"yl",code:"46166"}]},{name:"\u5929\u6d25",pinyin:"tianjin",spy:"tj",code:"29428"},{name:"\u65b0\u7586",pinyin:"xinjiang",spy:"xj",code:"30506",city:[{name:"\u963f\u514b\u82cf",pinyin:"akesu",spy:"aks",code:"46189"},{name:"\u963f\u52d2\u6cf0",pinyin:"aletai",spy:"alt",code:"46197"},{name:"\u535a\u5c14\u5854\u62c9",pinyin:"boertala",spy:"betl",code:"110268"},{name:"\u5df4\u97f3\u90ed\u695e",pinyin:"bayinguoleng",spy:"bygl",code:"110266"},{name:"\u660c\u5409",pinyin:"changji",spy:"cj",code:"110267"},{name:"\u54c8\u5bc6",pinyin:"hami",spy:"hm",code:"46187"},{name:"\u548c\u7530",pinyin:"hetian",spy:"ht",code:"46188"},{name:"\u514b\u62c9\u739b\u4f9d",pinyin:"kelamayi",spy:"klmy",code:"46186"},{name:"\u5580\u4ec0",pinyin:"kashen",spy:"ks",code:"46190"},{name:"\u514b\u5b5c\u52d2\u82cf",pinyin:"kezilesu",spy:"kzls",code:"110265"},{name:"\u5854\u57ce",pinyin:"tacheng",spy:"tc",code:"46196"},{name:"\u5410\u9c81\u756a",pinyin:"tulufan",spy:"tlf",code:"38733"},{name:"\u4e4c\u9c81\u6728\u9f50",pinyin:"wulumuqi",spy:"wlmq",code:"29430"},{name:"\u4f0a\u7281",pinyin:"yili",spy:"yl",code:"20328"}]},{name:"\u897f\u85cf",pinyin:"xizang",spy:"xz",code:"27009",city:[{name:"\u963f\u91cc",pinyin:"ali",spy:"al",code:"46183"},{name:"\u660c\u90fd",pinyin:"changdou",spy:"cd",code:"46179"},{name:"\u62c9\u8428",pinyin:"lasa",spy:"ls",code:"29418"},{name:"\u6797\u829d",pinyin:"linzhi",spy:"lz",code:"46184"},{name:"\u90a3\u66f2",pinyin:"neiqu",spy:"nq",code:"46182"},{name:"\u65e5\u5580\u5219",pinyin:"rikaze",spy:"rkz",code:"46181"},{name:"\u5c71\u5357",pinyin:"shannan",spy:"sn",code:"46180"}]},{name:"\u4e91\u5357",pinyin:"yunnan",spy:"yn",code:"30515",city:[{name:"KPC/\u6606\u660e",pinyin:"KPC/kunming",spy:"KPC/km",code:"29416"},{name:"\u4fdd\u5c71",pinyin:"baoshan",spy:"bs",code:"46201"},{name:"\u695a\u96c4",pinyin:"chuxiong",spy:"cx",code:"46207"},{name:"\u5fb7\u5b8f",pinyin:"dehong",spy:"dh",code:"46208"},{name:"\u5927\u7406",pinyin:"dali",spy:"dl",code:"38718"},{name:"\u8fea\u5e86",pinyin:"diqing",spy:"dq",code:"82719678"},{name:"\u7ea2\u6cb3",pinyin:"honghe",spy:"hh",code:"46206"},{name:"\u4e34\u6ca7",pinyin:"lincang",spy:"lc",code:"46204"},{name:"\u6cf8\u6cbd\u6e56",pinyin:"luguhu",spy:"lgh",code:"17955681"},{name:"\u4e3d\u6c5f",pinyin:"lijiang",spy:"lj",code:"29419"},{name:"\u6012\u6c5f",pinyin:"nujiang",spy:"nj",code:"110234"},{name:"\u666e\u6d31",pinyin:"puer",spy:"pe",code:"110233"},{name:"\u66f2\u9756",pinyin:"qujing",spy:"qj",code:"46199"},{name:"\u6587\u5c71",pinyin:"wenshan",spy:"ws",code:"46205"},{name:"\u897f\u53cc\u7248\u7eb3",pinyin:"xishuangbanna",spy:"xsbn",code:"38736"},{name:"\u7389\u6eaa",pinyin:"yuxi",spy:"yx",code:"46200"},{name:"\u662d\u901a",pinyin:"zhaotong",spy:"zt",code:"46202"}]},{name:"\u6d59\u6c5f",pinyin:"zhejiang",spy:"zj",code:"30510",city:[{name:"Cheerday/\u5343\u5c9b\u6e56",pinyin:"Cheerday/qiandaohu",spy:"Cheerday/qdh",code:"57362"},{name:"\u676d\u5dde",pinyin:"hangzhou",spy:"hz",code:"29412"},{name:"\u6e56\u5dde",pinyin:"huzhou",spy:"hz",code:"31955"},{name:"\u91d1\u534e",pinyin:"jinhua",spy:"jh",code:"31953"},{name:"\u5609\u5174\uff08\u4e4c\u9547/\u897f\u5858\uff09",pinyin:"jiaxing\uff08wuzhen/xitang\uff09",spy:"jx\uff08wz/xt\uff09",code:"31956"},{name:"\u4e3d\u6c34",pinyin:"lishui",spy:"ls",code:"31959"},{name:"\u5b81\u6ce2",pinyin:"ningbo",spy:"nb",code:"30379"},{name:"\u8862\u5dde",pinyin:"quzhou",spy:"qz",code:"46210"},{name:"\u7ecd\u5174",pinyin:"shaoxing",spy:"sx",code:"31954"},{name:"\u53f0\u5dde",pinyin:"taizhou",spy:"tz",code:"31958"},{name:"\u6e29\u5dde",pinyin:"wenzhou",spy:"wz",code:"82717293"},{name:"\u821f\u5c71",pinyin:"zhoushan",spy:"zs",code:"82717294"}]}];return a});