// Database of Chibimusu Drill materials mapped to JLPT levels
const materialsData = [
  // =================== JLPT N5 ===================
  {
    id: "n5-hiragana",
    level: "n5",
    category: "文字與基礎",
    title: "平假名五十音練習表",
    titleJa: "ひらがな練習プリント 50音別",
    description: "學習平假名的基礎清音、濁音與半濁音。提供標準筆順指引、描紅練習與空白練習格，非常適合零基礎入門者。",
    url: "https://happylilac.net/50hiragana-a.html",
    badge: "Basics",
    pdfs: [
      { name: "平假名練習「あ」", file: "50hiragana-a-.pdf", desc: "平假名「あ」的筆順、運筆練習及單字練習（如：あめ）。" },
      { name: "平假名練習「い」", file: "50hiragana-i-.pdf", desc: "平假名「い」的筆順、運筆練習及單字練習（如：いちご）。" },
      { name: "平假名練習「う」", file: "50hiragana-u-.pdf", desc: "平假名「う」的筆順、運筆練習及單字練習（如：うし）。" },
      { name: "平假名練習「え」", file: "50hiragana-e-.pdf", desc: "平假名「え」的筆順、運筆練習及單字練習（如：えんぴつ）。" },
      { name: "平假名練習「お」", file: "50hiragana-o-.pdf", desc: "平假名「お」的筆順、運筆練習及單字練習（如：おにぎり）。" },
      { name: "平假名「あ～の」一括下載", file: "matome-50hiragana-a-no.pdf", desc: "一次打包下載平假名「あ」到「の」的完整書寫練習單。" },
      { name: "平假名「は～ん」一括下載", file: "matome-50hiragana-ha-n.pdf", desc: "一次打包下載平假名「は」到「ん」的完整書寫練習單。" }
    ]
  },
  {
    id: "n5-katakana",
    level: "n5",
    category: "文字與基礎",
    title: "片假名五十音練習表",
    titleJa: "カタカナ練習プリント 50音別",
    description: "針對片假名進行筆順與字型書寫練習。包含豐富的單詞練習（如外來語、動物名），強化片假名記憶與書寫規範。",
    url: "https://happylilac.net/50katakana-a.html",
    badge: "Basics",
    pdfs: [
      { name: "片假名練習「ア」", file: "50katakana-a-.pdf", desc: "片假名「ア」的筆順、運筆練習及外來語單字練習（如：アイス）。" },
      { name: "片假名練習「イ」", file: "50katakana-i-.pdf", desc: "片假名「イ」的筆順、運筆練習及外來語單字練習（如：インク）。" },
      { name: "片假名練習「ウ」", file: "50katakana-u-.pdf", desc: "片假名「ウ」的筆順、運筆練習及外來語單字練習（如：ウサギ）。" },
      { name: "片假名練習「エ」", file: "50katakana-e-.pdf", desc: "片假名「エ」的筆順、運筆練習及外來語單字練習（如：エアコン）。" },
      { name: "片假名練習「オ」", file: "50katakana-o-.pdf", desc: "片假名「オ」的筆順、運筆練習及外來語單字練習（如：オレンジ）。" },
      { name: "片假名「ア～ノ」一括下載", file: "matome-50katakana-a-no.pdf", desc: "一次打包下載片假名「ア」到「ノ」的完整書寫練習單。" },
      { name: "片假名「ハ～ン」一括下載", file: "matome-50katakana-ha-n.pdf", desc: "一次打包下載片假名「ハ」到「ン」的完整書寫練習單。" }
    ]
  },
  {
    id: "n5-chart",
    level: "n5",
    category: "文字與基礎",
    title: "五十音對照與單字海報",
    titleJa: "五十音表ポスター・練習プリント",
    description: "高畫質的平假名、片假名對照表，並附有可愛的插圖與日常單字，適合列印出來張貼，隨時隨地複習與朗讀。",
    url: "https://happylilac.net/50onhyo-a.html",
    badge: "Basics",
    pdfs: [
      { name: "平假名對照表（標準版 A4）", file: "50onhyo-hiragana-a4.pdf", desc: "彩色標準平假名五十音圖表，附有拼音與插圖。" },
      { name: "片假名對照表（標準版 A4）", file: "50onhyo-katakana-a4.pdf", desc: "彩色標準片假名五十音圖表，附有拼音與插圖。" },
      { name: "濁音・半濁音表（A4）", file: "50onhyo-dakuon-a4.pdf", desc: "包含「が、ざ、だ、ば」行與半濁音「ぱ」行的發音對照圖。" }
    ]
  },
  {
    id: "n5-kanji-g1",
    level: "n5",
    category: "漢字練習",
    title: "小學一年級漢字練習表",
    titleJa: "小学1年生の漢字 練習プリント",
    description: "學習日文最基礎的 80 個漢字（如：數字、日月火水木金土、大小、上下左右、天地人等），包含詳細筆順與簡單造詞練習。",
    url: "https://happylilac.net/sy-k1kanzi.html",
    badge: "Kanji",
    pdfs: [
      { name: "小一漢字練習 (1) 一～十", file: "sy-k1kanzi-01.pdf", desc: "數值漢字「一、二、三、四、五、六、七、八、九、十」的筆順與書寫練習。" },
      { name: "小一漢字練習 (2) 日月火水", file: "sy-k1kanzi-02.pdf", desc: "時間與自然元素「日、月、火、水、木、金、土、山、川」練習。" },
      { name: "小一漢字練習 (3) 大小上下", file: "sy-k1kanzi-03.pdf", desc: "基礎相對概念與方位「大、小、上、下、左、右、中」練習。" }
    ]
  },
  {
    id: "n5-grammar-subject",
    level: "n5",
    category: "語彙與文法",
    title: "日文主語與述語練習單",
    titleJa: "主語・述語の練習問題プリント",
    description: "日文句子的核心架構學習。透過連線與填空遊戲，學習劃分句子的『主語』（誰/什麼）與『述語』（做什麼/怎麼樣），建立正確語感。",
    url: "https://happylilac.net/kokugo-syugozyutsugo.html",
    badge: "Grammar",
    pdfs: [
      { name: "找出句子裡的主語", file: "kokugo-syugozyutsugo-01.pdf", desc: "給定簡單句子，練習找出「誰が」「何が」（主語）的填空題。" },
      { name: "找出句子裡的述語", file: "kokugo-syugozyutsugo-02.pdf", desc: "給定簡單句子，練習找出「どうする」「どんなだ」（述語）的填空題。" },
      { name: "主語與述語綜合搭配練習", file: "kokugo-syugozyutsugo-matome.pdf", desc: "將主語與相對應的述語畫線連結，並組合出完整句子的練習。" }
    ]
  },
  {
    id: "n5-clock",
    level: "n5",
    category: "語彙與文法",
    title: "時間與時鐘看圖表達",
    titleJa: "時計の読み方・時間の問題",
    description: "練習閱讀指針時鐘，並學習日文中『時、分、半』等時間量詞。這是 JLPT N5 聽力與閱讀測驗的必考核心生活詞彙。",
    url: "https://happylilac.net/kisetsu-tokei.html",
    badge: "Vocabulary",
    pdfs: [
      { name: "整點時間判讀 (幾點整)", file: "kisetsu-tokei-01.pdf", desc: "看時鐘寫出「～時（じ）」或畫出對應的短針與長針。" },
      { name: "半點與幾分時間判讀", file: "kisetsu-tokei-02.pdf", desc: "包含「～時半（じはん）」與「～分（ふん/ぷん）」的時鐘指針判讀與書寫。" },
      { name: "一日生活時間順序連連看", file: "kisetsu-tokei-nazo.pdf", desc: "結合起床、上學、吃晚餐等日常作息圖案與時鐘時間的連線題。" }
    ]
  },
  {
    id: "n5-reading-g1",
    level: "n5",
    category: "文章閱讀",
    title: "小學一年級短篇讀解 (Z會)",
    titleJa: "小学1年生 文章読解プリント (Z会)",
    description: "與知名教育集團 Z會 合作的閱讀教材。精選童話故事與生活對話，配有簡單的閱讀測驗，訓練初學者在短文中抓取關鍵資訊的能力。",
    url: "https://happylilac.net/sy-k1dokkai.html",
    badge: "Reading",
    pdfs: [
      { name: "文章讀解「うさぎとかめ」", file: "sy-k1dokkai-01.pdf", desc: "經典童話故事《兔子與烏龜》極簡版閱讀，附帶 3 題基礎細節理解問答。" },
      { name: "文章讀解「きたかぜとたいよう」", file: "sy-k1dokkai-02.pdf", desc: "經典童話故事《北風與太陽》極簡版閱讀，測試對故事結局與主旨的理解。" },
      { name: "短文讀解「ぼくのにっき」", file: "sy-k1dokkai-03.pdf", desc: "以第一人稱寫的簡單生活日記，測試對日常語境與時間線的把握。" }
    ]
  },

  // =================== JLPT N4 ===================
  {
    id: "n4-kanji-g2",
    level: "n4",
    category: "漢字練習",
    title: "小學二年級漢字練習表",
    titleJa: "小学2年生の漢字 練習プリント",
    description: "掌握小學二年級必學的 160 個常用漢字。包含筆順演示、漢字讀音填空、句子造詞演練，幫助突破初級日語的漢字難關。",
    url: "https://happylilac.net/sy-k2kanzi.html",
    badge: "Kanji",
    pdfs: [
      { name: "小二漢字練習 (1) 數・時・方角", file: "sy-k2kanzi-01.pdf", desc: "方向「東、西、南、北」、時間與度量衡漢字的讀音與寫法練習。" },
      { name: "小二漢字練習 (2) 体・顔・動作", file: "sy-k2kanzi-02.pdf", desc: "身體器官「頭、顔、首、足」及常用動作動詞漢字的學習單。" },
      { name: "小二漢字讀音與筆順綜合測試", file: "sy-k2kanzi-test.pdf", desc: "混合測試卷，考查讀音填空與糾正錯誤筆順。" }
    ]
  },
  {
    id: "n4-kanji-g3",
    level: "n4",
    category: "漢字練習",
    title: "小學三年級漢字練習表",
    titleJa: "小学3年生の漢字 練習プリント",
    description: "進一步延伸學習 200 個常用漢字。針對漢字的多種讀音（音讀與訓讀）進行對比練習，並配有複習漢字的綜合小測驗。",
    url: "https://happylilac.net/sy-k3kanzi.html",
    badge: "Kanji",
    pdfs: [
      { name: "小三漢字練習 (1) 自然・生き物", file: "sy-k3kanzi-01.pdf", desc: "與動植物、天氣、地理相關漢字的音讀訓讀對照練習。" },
      { name: "小三漢字練習 (2) 社会・生活", file: "sy-k3kanzi-02.pdf", desc: "日常生活與社會結構漢字（如：駅、港、館、院）的學習單。" },
      { name: "小三漢字音訓讀對比測試", file: "sy-k3kanzi-test.pdf", desc: "針對同一個漢字在不同詞彙中音讀與訓讀的辨析測驗。" }
    ]
  },
  {
    id: "n4-grammar-particles",
    level: "n4",
    category: "語彙與文法",
    title: "基礎助詞辨析與用法練習",
    titleJa: "助詞の使い分け 練習プリント",
    description: "針對日文核心助詞（如：は與が的區分、に與で的區分、を、へ、と等）進行填空與糾錯練習，全面打通初級文法關卡。",
    url: "https://happylilac.net/kokugo-zyosi.html",
    badge: "Grammar",
    pdfs: [
      { name: "助詞區分「は」與「が」", file: "kokugo-zyosi-01.pdf", desc: "專項練習主格助詞「が」與提示主題助詞「は」的語境填空。" },
      { name: "助詞區分「に」與「で」", file: "kokugo-zyosi-02.pdf", desc: "對比時間/場所對象助詞「に」與動作發生點/工具助詞「で」用法。" },
      { name: "初級助詞綜合挑錯練習", file: "kokugo-zyosi-test.pdf", desc: "閱讀短文並找出被錯誤使用的助詞，培養自我糾錯的日文思維。" }
    ]
  },
  {
    id: "n4-reading-g2",
    level: "n4",
    category: "文章閱讀",
    title: "小學二年級文章讀解",
    titleJa: "小学2年生 文章読解プリント",
    description: "包含稍長篇的科普小常識、寓言故事。引導學習者理解複句結構，練習分析文章中因果關係與指示代名詞所指代的名詞。",
    url: "https://happylilac.net/sy-k2dokkai.html",
    badge: "Reading",
    pdfs: [
      { name: "物語讀解「したきりすずめ」", file: "sy-k2dokkai-01.pdf", desc: "經典民間故事《舌切雀》閱讀理解，考查故事主角的行為因果關係。" },
      { name: "說明文讀解「つばめのくらし」", file: "sy-k2dokkai-02.pdf", desc: "介紹燕子生活史的自然說明文，考查資訊提取與圖表對應能力。" },
      { name: "應用文讀解「まちのマーク」", file: "sy-k2dokkai-03.pdf", desc: "解讀街頭常見指示標誌的含意，貼近 JLPT N4 實用閱讀題型。" }
    ]
  },

  // =================== JLPT N3 ===================
  {
    id: "n3-kanji-g4",
    level: "n3",
    category: "漢字練習",
    title: "小學四年級漢字練習表",
    titleJa: "小学4年生の漢字 練習プリント",
    description: "深入學習 202 個中級難度漢字。本階段著重於漢字部首的理解、部首聯想、形近字對比辨析，有效提升漢字識字量。",
    url: "https://happylilac.net/sy-k4kanzi.html",
    badge: "Kanji",
    pdfs: [
      { name: "小四漢字 (1) 部首與漢字結構", file: "sy-k4kanzi-01.pdf", desc: "學習漢字部首（如：偏、旁、冠、腳）的拆解與部首聯想書寫。" },
      { name: "小四漢字 (2) 形聲文字與同音字", file: "sy-k4kanzi-02.pdf", desc: "辨析形體相似或發音完全相同的漢字（如：求與救、料與科）。" },
      { name: "小四常用漢字綜合測試卷", file: "sy-k4kanzi-test.pdf", desc: "中級漢字聽寫、改錯字與選詞填空綜合考查。" }
    ]
  },
  {
    id: "n3-kanji-g5",
    level: "n3",
    category: "漢字練習",
    title: "小學五年級漢字練習表",
    titleJa: "小学5年生の漢字 練習プリント",
    description: "掌握 193 個中高級漢字。此時漢字更具抽象性，練習表包含漢字在書面報導、科學小短文中的運用，強化實際閱讀連結。",
    url: "https://happylilac.net/sy-k5kanzi.html",
    badge: "Kanji",
    pdfs: [
      { name: "小五漢字 (1) 書面語與書信漢字", file: "sy-k5kanzi-01.pdf", desc: "應用於書信、報導中的中高級漢字，加強日文寫作漢字精準度。" },
      { name: "小五漢字 (2) 四字熟語與漢字源流", file: "sy-k5kanzi-02.pdf", desc: "學習漢字組合成熟語的規律，並認識部分漢字演變歷程。" },
      { name: "小五漢字讀音與近義詞替換", file: "sy-k5kanzi-test.pdf", desc: "測試漢字在多字詞彙中的特殊發音，以及同義詞替換測試。" }
    ]
  },
  {
    id: "n3-grammar-keigo",
    level: "n3",
    category: "語彙與文法",
    title: "敬語基礎與日常變化練習",
    titleJa: "敬語の基本 練習プリント",
    description: "系統化整理丁寧語、尊敬語與謙讓語的規則變化表。提供辦公室、服務業日常情境題，是 N3/N2 商務日語與敬語考題的最佳對策。",
    url: "https://happylilac.net/kokugo-keigo.html",
    badge: "Grammar",
    pdfs: [
      { name: "敬語三種類變化對照表", file: "kokugo-keigo-01.pdf", desc: "清晰整理「行く、来る、言う」等常用動詞的尊敬與謙讓對照表。" },
      { name: "職場商務情境敬語選擇題", file: "kokugo-keigo-02.pdf", desc: "模擬接聽電話、接待客戶時的正確敬語用法選擇題。" },
      { name: "敬語錯誤糾正與綜合測驗", file: "kokugo-keigo-test.pdf", desc: "糾正日常生活中容易混淆的「過度敬語」或不當敬語的改正單。" }
    ]
  },
  {
    id: "n3-grammar-conjunctions",
    level: "n3",
    category: "語彙與文法",
    title: "指示語與接續詞關聯練習",
    titleJa: "指示語・接続語の練習プリント",
    description: "精準剖析指示代名詞（こそあど）與句間接續詞（如：しかし、つまり、そこで）。加強學習者對文章上下文連貫性的掌握。",
    url: "https://happylilac.net/kokugo-setuzokugo.html",
    badge: "Grammar",
    pdfs: [
      { name: "指示代名詞指向分析", file: "kokugo-setuzokugo-01.pdf", desc: "練習在句子中圈出「これ、それ、あれ」所替代的具體人或事物。" },
      { name: "接續詞邏輯分類與填空", file: "kokugo-setuzokugo-02.pdf", desc: "將接續詞分類為「順接、逆接、並列、說明」，進行連貫填空。" },
      { name: "文章段落銜接綜合測試", file: "kokugo-setuzokugo-test.pdf", desc: "完整段落閱讀，選擇最適合的接續詞填入，考驗文章前後邏輯。" }
    ]
  },
  {
    id: "n3-reading-g3",
    level: "n3",
    category: "文章閱讀",
    title: "小學三年級文章讀解",
    titleJa: "小学3年生 文章読解プリント",
    description: "提供中短篇敘事文與小論文。題目要求找出段落核心主題、作者的心境變化等，適合準備 N3 文章理解的熱身訓練。",
    url: "https://happylilac.net/sy-k3dokkai.html",
    badge: "Reading",
    pdfs: [
      { name: "故事讀解「ちいちゃんのかげおくり」", file: "sy-k3dokkai-01.pdf", desc: "閱讀文學故事《小千的影子送行》，分析角色情感起伏與心理特徵。" },
      { name: "說明文讀解「めだかの観察」", file: "sy-k3dokkai-02.pdf", desc: "青鱂魚的生物觀察文，訓練如何快速抓取文章關鍵數據與結論。" }
    ]
  },
  {
    id: "n3-reading-g4",
    level: "n3",
    category: "文章閱讀",
    title: "小學四年級文章與說明文讀解",
    titleJa: "小学4年生 文章読解・説明文プリント",
    description: "文章篇幅加長，主題擴展至自然科學與歷史小品。著重訓練提煉段落大意，理解各段落間的轉折與遞進關係。",
    url: "https://happylilac.net/sy-k4dokkai.html",
    badge: "Reading",
    pdfs: [
      { name: "文學小說讀解「ごんぎつね」", file: "sy-k4dokkai-01.pdf", desc: "經典短篇小說《小狐狸阿權》段落理解，回答關於伏筆與結局的考題。" },
      { name: "科普說明文「花を見にくる虫たち」", file: "sy-k4dokkai-02.pdf", desc: "分析昆蟲傳粉與花朵演化的關係，訓練段落大意提煉與因果推導。" }
    ]
  },

  // =================== JLPT N2 ===================
  {
    id: "n2-kanji-g6",
    level: "n2",
    category: "漢字練習",
    title: "小學六年級漢字練習表",
    titleJa: "小学6年生の漢字 練習プリント",
    description: "學習小學階段最後的 191 個漢字。本練習表專注於同音異義漢字的辨析、複合漢字詞彙的應用，打下穩固的中高級語彙根基。",
    url: "https://happylilac.net/sy-k6kanzi.html",
    badge: "Kanji",
    pdfs: [
      { name: "小六漢字 (1) 同訓異字用法區分", file: "sy-k6kanzi-01.pdf", desc: "釐清同一發音在不同語境對應的漢字（如：『あつい』寫成熱い、暑い、厚い）。" },
      { name: "小六漢字 (2) 熟語構成與意義", file: "sy-k6kanzi-02.pdf", desc: "分析雙字或三字漢語詞彙的構造關係（主賓、修飾、並列）。" },
      { name: "小六畢業漢字綜合能力測試", file: "sy-k6kanzi-test.pdf", desc: "檢測小學階段所有核心漢字的讀寫熟練度，適合 N2 等級複習。" }
    ]
  },
  {
    id: "n2-grammar-junior",
    level: "n2",
    category: "語彙與文法",
    title: "國中一年級國語文法練習",
    titleJa: "中学生 国語文法 基礎練習問題",
    description: "涵蓋日文詞類的細緻劃分（名詞、動詞活用、副詞、形容詞）。對於欲理解複雜句型、精準分析 N2 考題語法的學習者極具幫助。",
    url: "https://happylilac.net/junior-kokugo.html",
    badge: "Grammar",
    pdfs: [
      { name: "言語單位：文・文節・單語", file: "junior-kokugo-bun-01.pdf", desc: "將日文長句以「文節」（Ne標記）及「單語」為單位切分，掌握句構。" },
      { name: "品詞分類：自立語與附屬語", file: "junior-kokugo-hinsi-01.pdf", desc: "系統學習動詞活用形（未然、連用、終止等）及助詞助動詞用法分類。" },
      { name: "中學生語法綜合實戰測驗", file: "junior-kokugo-grammar-test.pdf", desc: "針對複合句、修飾關係以及被動/使役等高級句型結構的綜合挑戰。" }
    ]
  },
  {
    id: "n2-reading-g5",
    level: "n2",
    category: "文章閱讀",
    title: "小學五年級論說文與小說讀解",
    titleJa: "小学5年生 文章読解・論説文プリント",
    description: "長篇論說文與文學小說摘錄。學習在沒有注音的生難漢字中，透過上下文推敲詞義，並理解作者較複雜的思想論證邏輯。",
    url: "https://happylilac.net/sy-k5dokkai.html",
    badge: "Reading",
    pdfs: [
      { name: "小說讀解「大造じいさんとガン」", file: "sy-k5dokkai-01.pdf", desc: "閱讀經典小說《大造爺爺與雁》，分析主角殘雪的心理活動與對比寫法。" },
      { name: "論說文讀解「言葉の力」", file: "sy-k5dokkai-02.pdf", desc: "閱讀哲理性論說文，練習剖析作者的論證論據以及文章的主旨結論。" }
    ]
  },
  {
    id: "n2-reading-g6",
    level: "n2",
    category: "文章閱讀",
    title: "小學六年級長篇綜合文章讀解",
    titleJa: "小学6年生 文章読解・総合プリント",
    description: "難度已非常接近日語報紙社論與生活散文。包含抽象詞彙與倒裝、省略等修辭，是從中級邁入高級日文閱讀的必修關鍵。",
    url: "https://happylilac.net/sy-k6dokkai.html",
    badge: "Reading",
    pdfs: [
      { name: "隨筆讀解「生きるということ」", file: "sy-k6dokkai-01.pdf", desc: "閱讀充滿感悟的心靈隨筆，解讀倒裝、省略等修辭背後的深層語氣。" },
      { name: "環境論說文「地球環境を守るために」", file: "sy-k6dokkai-02.pdf", desc: "探討氣候變遷與環境保護的議論性文章，學習歸納長篇論文的中心大意。" }
    ]
  },

  // =================== JLPT N1 ===================
  {
    id: "n1-kanji-junior",
    level: "n1",
    category: "漢字練習",
    title: "中學生常用漢字與生字練習",
    titleJa: "中学生の漢字 常用漢字プリント",
    description: "學習國中階段追加的 1130 個常用漢字。滿足閱讀日文原文書籍、學術論文、政治經濟新聞等 N1 高級漢字認讀需求。",
    url: "https://happylilac.net/junior-kanji.html",
    badge: "Kanji",
    pdfs: [
      { name: "國中漢字 (1) 常用漢字聽寫", file: "junior-kanji-write-01.pdf", desc: "國中必學的 1000 多個常用漢字的讀音與漢字形體書寫聽寫練習。" },
      { name: "國中漢字 (2) 漢字成語應用", file: "junior-kanji-idiom-01.pdf", desc: "以成語為載體學習生僻漢字，掌握高級文筆中漢字的精緻搭配。" }
    ]
  },
  {
    id: "n1-idiom-yojijukugo",
    level: "n1",
    category: "語彙與文法",
    title: "常用四字熟語海報與練習單",
    titleJa: "四字熟語 ポスター＆練習プリント",
    description: "整理日語高級寫作中不可或缺的四字成語。附帶詳細的語源典故解釋與填空複習題，加深字義理解，豐富日文表達層次。",
    url: "https://happylilac.net/yojijukugo-hyo.html",
    badge: "Vocabulary",
    pdfs: [
      { name: "常用四字熟語精選海報", file: "yojijukugo-poster-01.pdf", desc: "高質感 A4 海報，收錄 N1 必考四字熟語的正確讀音、出處與語意解析。" },
      { name: "四字熟語拼寫填空練習", file: "yojijukugo-practice-01.pdf", desc: "配合釋義填寫漢字的練習題，考查成語拼寫完整度。" },
      { name: "四字熟語同義反義辨析測試", file: "yojijukugo-test.pdf", desc: "進階測驗題，辨別在不同情境中成語的細微褒貶與邏輯關聯。" }
    ]
  },
  {
    id: "n1-proverb-kotowaza",
    level: "n1",
    category: "語彙與文法",
    title: "日本諺語與故事成語彙整",
    titleJa: "ことわざ・故事成語 練習プリント",
    description: "學習日本人日常對話及文章中頻繁使用的俗諺與歷史典故。掌握隱含文化寓意的詞彙，讓日文溝通更加道地與典雅。",
    url: "https://happylilac.net/kotowaza-hyo.html",
    badge: "Vocabulary",
    pdfs: [
      { name: "ことわざ (俗語) 精選海報", file: "kotowaza-poster-01.pdf", desc: "彙整日本傳統諺語，附插圖與白話文意義對照，提升口語道地性。" },
      { name: "故事成語搭配填空練習", file: "kotowaza-practice-01.pdf", desc: "學習源自中國及日本本土歷史典故的成語搭配與填空習題。" },
      { name: "諺語情境會話綜合應用測驗", file: "kotowaza-test.pdf", desc: "考查在日常交際、工作討論中合適使用諺語的情境對話題。" }
    ]
  },
  {
    id: "n1-reading-junior",
    level: "n1",
    category: "文章閱讀",
    title: "中學生高級文章讀解與邏輯訓練",
    titleJa: "中学生 国語文章読解問題・古典基礎",
    description: "提供邏輯思辨文章、哲學議論段落、以及古典文言文基礎。適合需要應付 JLPT N1 級別極高長度與深度閱讀測驗的挑戰者。",
    url: "https://happylilac.net/junior-kokugo.html",
    badge: "Reading",
    pdfs: [
      { name: "國中讀解：社會與科技議論文章", file: "junior-kokugo-reading-01.pdf", desc: "閱讀結構嚴密、用詞深奧的論說文，剖析作者如何遞進闡述複雜社會議題。" },
      { name: "古典語文基礎：文言文假名讀音", file: "junior-kokugo-classic-01.pdf", desc: "日文古典語法入門練習，解析歷史假名遣（ハ行轉音等）與基础古文閱讀。" }
    ]
  }
];

// State Management
let currentLevel = "n5";
let searchQuery = "";
let completedItems = [];

// DOM Elements
const searchBar = document.getElementById("search-bar");
const tabButtons = document.querySelectorAll(".tab-btn");
const materialsContainer = document.getElementById("materials-container");
const progressStatsLabel = document.getElementById("progress-percentage-label");
const progressBarFill = document.getElementById("progress-bar-fill");

// Initialize application
function init() {
  loadProgress();
  setupEventListeners();
  render();
}

// Load progress from LocalStorage
function loadProgress() {
  try {
    const saved = localStorage.getItem("chibiNavi_progress");
    if (saved) {
      completedItems = JSON.parse(saved);
      // Filter out any IDs that might no longer exist in our database
      const validIds = materialsData.map(item => item.id);
      completedItems = completedItems.filter(id => validIds.includes(id));
    } else {
      completedItems = [];
    }
  } catch (e) {
    console.error("Failed to load progress from localStorage:", e);
    completedItems = [];
  }
}

// Save progress to LocalStorage
function saveProgress() {
  try {
    localStorage.setItem("chibiNavi_progress", JSON.stringify(completedItems));
  } catch (e) {
    console.error("Failed to save progress to localStorage:", e);
  }
}

// Event Listeners setup
function setupEventListeners() {
  // Search bar input listener
  searchBar.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    render();
  });

  // Tab buttons click listeners
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // If a search query is active, clear it first for better UX when switching tabs
      if (searchQuery !== "") {
        searchQuery = "";
        searchBar.value = "";
      }
      
      // Update state
      currentLevel = btn.dataset.level;
      
      // Update UI active states
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      render();
    });
  });
}

// Toggle completion of a worksheet
function toggleItemCompletion(itemId) {
  const index = completedItems.indexOf(itemId);
  if (index === -1) {
    completedItems.push(itemId);
  } else {
    completedItems.splice(index, 1);
  }
  saveProgress();
  updateProgressBar();
}

// Calculate and update the progress bar UI
function updateProgressBar() {
  const total = materialsData.length;
  const completed = completedItems.length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  // Update labels
  progressStatsLabel.textContent = `已完成: ${completed} / ${total} (${percentage}%)`;
  
  // Update progress bar fill width and accessibility attribute
  progressBarFill.style.width = `${percentage}%`;
  progressBarFill.setAttribute("aria-valuenow", percentage);
}

// Render the main grid content
function render() {
  updateProgressBar();
  
  // Clear container
  materialsContainer.innerHTML = "";
  
  // Filter materials based on search query or current selected level
  let filteredData = [];
  let isSearchActive = searchQuery.length > 0;
  
  if (isSearchActive) {
    filteredData = materialsData.filter(item => {
      return (
        item.title.toLowerCase().includes(searchQuery) ||
        item.titleJa.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery) ||
        item.category.toLowerCase().includes(searchQuery) ||
        item.level.toLowerCase().includes(searchQuery) ||
        (item.pdfs && item.pdfs.some(pdf => 
          pdf.name.toLowerCase().includes(searchQuery) ||
          pdf.file.toLowerCase().includes(searchQuery) ||
          pdf.desc.toLowerCase().includes(searchQuery)
        ))
      );
    });
  } else {
    filteredData = materialsData.filter(item => item.level === currentLevel);
  }

  // Handle empty state
  if (filteredData.length === 0) {
    renderEmptyState();
    return;
  }

  // Group materials by category to render them in structured sections
  const groupedData = groupByCategory(filteredData);
  
  // Render each category block
  Object.keys(groupedData).forEach(category => {
    const categorySection = document.createElement("section");
    categorySection.className = "category-section";
    
    // Set customized CSS variable on the category container for active accent colors
    const activeColorVar = isSearchActive ? "var(--accent-default)" : `var(--color-${currentLevel})`;
    categorySection.style.setProperty("--level-color", activeColorVar);

    // Create Category Title
    const title = document.createElement("h3");
    title.className = "category-title";
    title.textContent = category;
    categorySection.appendChild(title);

    // Create Cards Grid
    const cardsGrid = document.createElement("div");
    cardsGrid.className = "cards-grid";

    // Create cards for each material
    groupedData[category].forEach(item => {
      const card = createMaterialCard(item);
      cardsGrid.appendChild(card);
    });

    categorySection.appendChild(cardsGrid);
    materialsContainer.appendChild(categorySection);
  });
}

// Group array items by category
function groupByCategory(array) {
  return array.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
}

// Create a DOM element for a material card
function createMaterialCard(item) {
  const card = document.createElement("div");
  card.className = "material-card";
  
  // Establish individual accent color based on item's level
  const itemColorVar = `var(--color-${item.level})`;
  card.style.setProperty("--level-color", itemColorVar);

  const isChecked = completedItems.includes(item.id);

  // Generate PDF list HTML if pdfs are available
  const pdfListHtml = item.pdfs && item.pdfs.length > 0
    ? `
      <details class="pdf-details">
        <summary class="pdf-summary">
          <span>📄 包含學習單 PDF 元件 (${item.pdfs.length})</span>
          <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <ul class="pdf-list">
          ${item.pdfs.map(pdf => `
            <li class="pdf-item">
              <div class="pdf-info">
                <span class="pdf-name">${pdf.name}</span>
                <span class="pdf-filename">${pdf.file}</span>
                <p class="pdf-desc">${pdf.desc}</p>
              </div>
              <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="pdf-download-btn" title="前往官網該單元下載頁">
                <span>下載頁 ↗</span>
              </a>
            </li>
          `).join('')}
        </ul>
      </details>
    `
    : '';

  card.innerHTML = `
    <div>
      <div class="card-top">
        <span class="card-badge">${item.level.toUpperCase()} · ${item.badge}</span>
        <label class="checkbox-container" title="標記為已完成">
          <input type="checkbox" class="progress-checkbox" data-id="${item.id}" ${isChecked ? 'checked' : ''} aria-label="標記為已完成: ${item.title}">
        </label>
      </div>
      <h4 class="card-title">${item.title}</h4>
      <p style="font-size: 0.8rem; font-style: italic; color: var(--text-secondary); margin-bottom: 0.5rem;" lang="ja">${item.titleJa}</p>
      <p class="card-desc">${item.description}</p>
      ${pdfListHtml}
    </div>
    <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="card-btn">
      <span>前往下載學習單</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  `;

  // Attach event listener to checkbox
  const checkbox = card.querySelector(".progress-checkbox");
  checkbox.addEventListener("change", () => {
    toggleItemCompletion(item.id);
  });

  return card;
}

// Render empty search results state
function renderEmptyState() {
  const emptyState = document.createElement("div");
  emptyState.className = "empty-state";
  emptyState.innerHTML = `
    <h3 class="empty-title">查無相關學習資源</h3>
    <p class="empty-desc">試試搜尋其他關鍵字，或者點選上方 JLPT 級別進行瀏覽。</p>
  `;
  materialsContainer.appendChild(emptyState);
}

// Start the app when DOM content is loaded
document.addEventListener("DOMContentLoaded", init);
