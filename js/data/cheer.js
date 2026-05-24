// 応援歌・メドレーデータ
// youtubeId は YouTube の VIDEO_ID のみ。lyrics は \n で改行
const CHEER_DATA = {

 // ===== 応援歌・学生歌 =====
 songs: [
  {
   category: "応援歌",
   title: "三重大学応援歌",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "三重大学を代表する応援歌です。試合の応援や式典で歌われます。",
   lyrics: "一、　緑したたる東海の\n伊勢湾上に波ゆらぎ\n金色の陽らんらんと\n昇る朝日の勢のごと\n血潮に燃ゆる健児らが\n結びてここに八百名\nエイ！意気は天をちゅうすなり\n\n二、　意気蒼天をちゅうすとき\n地もまたふして何かある\n我らがまもる鉄腕の\n選手ひとたび立つところ\nいかに恐るる強敵も\nしゅう雨に散りし落葉の\nエイ！荒野にまろぶ如くなり\n\n三、　熱血あふるる音高く\n健児八百青春の\n飛躍の思い耐え難く\n伊勢原頭に鍛えたる\n鉄腕撫して立つところ\n嵐の庭の花吹雪\nエイ！散らさずいかでかえすべき\n\n四、　戦わんかな時来たる\nああ戦いの時来たる\n戦わんかな時来たる\nああ戦いの時来たる\n戦わんかな時来たる\nああ戦いの時いたる\nエイ！戦わんかな時いたる\n\nフレー　フレー　三重大\nフレー　フレー　三重大"
  },
  {
   category: "応援歌",
   title: "勝利の翠風",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "スポーツ応援で多く演奏される応援歌です。",
   lyrics: "一、　勝利の翠風　背に受けて\n三翠魂　つきすすむ\nみなぎる闘志を　胸に秘め\n栄光この手に　つかむときまで\n\n二、　あふれる歓声　今ここに\nともに鍛えた　心を燃やす\n夢追い続けて　奇跡を起こせ\n目指す我らの理想は高く　遠く　高く"
  },
  {
   category: "応援歌",
   title: "我らの意気",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "力強い演奏で会場を盛り上げる応援歌です。",
   lyrics: "一、　雲湧き出づる　伊勢の海\n白砂まばゆき　青松に\n若人の声　こだまして\nここ三翠に　集いたる\n我らの意気や　天をつく\n\n二、　風誘う　鈴鹿峰に\n布引の山なみ　連なりて\n若人の声　鳴りひびき\nここ三翠に　集いたる\n我らの意気や　天をつく\n\n三、　伊勢原頭に　吹きすさぶ\n鈴鹿下ろしに　鍛えつつ\n若人の声　高らかに\nここ三翠に　集いたる\n我らの意気や　天をつく\n\n四、　春爛漫の　伊勢平野\n志登茂の河辺に　花吹雪\n若人の声　相和して\nここ三翠に　集いたる\n我らの意気や　天をつく\n我らの勇気　いざ見せん"
  },
  {
   category: "応援歌",
   title: "いざ行かん",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "試合の序盤に演奏されることが多い楽曲です。",
   lyrics: "一、　千鳥舞う　三重の浜と\n希望あふるる　学び舎で\n地域に根差し　歩み行く\n清き伝統　受継いで\nさあ　いざ行かん\n栄光の道へ\n進め　進め　三重大学\n\n二、　いかに強き　敵にも\n一心不乱に　突き進め\n快進撃の　始まりだ\n熱き伝統　受継いで\nさあ　いざ行かん\n勝利の道へ\n進め　進め　三重大学"
  },
  {
   category: "応援歌",
   title: "心をひとつに",
   note: "※平成26年度作成曲",
   youtubeId: "VIDEO_ID",
   description: "平成26年度に作成された比較的新しい応援歌です。",
   lyrics: "一、　三翠煌く地で　肩を組んで\n日々研鑽せし力　発揮せん\n翠旗の下に　勝利をつかめ\n我らの若き力　揮う時\n\n二、　学び舎に響き渡る　歌歌いて\nさぁ鍛錬せし技を　発揮せん\nいざ突き進み　栄光つかめ\n今こそ猛し想い　示す時\n心をいまひとつに　三重大学"
  },
  {
   category: "応援歌",
   title: "戦開始",
   note: "※令和8年度作成曲",
   youtubeId: "VIDEO_ID",
   description: "令和8年度に新たに作成された応援歌です。",
   lyrics: "（歌詞プレースホルダー）"
  },
  {
   category: "学生歌",
   title: "三重大学学生歌",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "三重大学に受け継がれる学生歌です。卒業式など式典で歌われます。",
   lyrics: "一、　瑞穂映ゆ　　伊勢の広野に\n集いこし　　若きいのちよ\nかげりなき　知性をみがき\n光ある　　　道を進まん\n\n二、　東海に　　　疾風けわしく\nくろき雲　　沖をおおうも\nたぎりたつ　怒涛をこえて\n人の世の　　自由守らん\n\n三、　布引の　　　山なみとおく\n若人の　　　瞳はすみつ\nゆるぎなき　まことを追いて\n三重大に　　偉業ほこらん"
  }
 ],

 // ===== ファンファーレ =====

 fanfares: [
  {
   category: "ファンファーレ",
   title: "応援歌ファンファーレ",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "",
   lyrics: ""
  },
  {
   category: "ファンファーレ",
   title: "翠風ファンファーレ",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "",
   lyrics: ""
  },
  {
   category: "ファンファーレ",
   title: "我らファンファーレ",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "",
   lyrics: ""
  },
  {
   category: "ファンファーレ",
   title: "いざ行かんファンファーレ",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "",
   lyrics: ""
  },
  {
   category: "ファンファーレ",
   title: "心をひとつにファンファーレ",
   note: "※平成26年度作成曲",
   youtubeId: "VIDEO_ID",
   description: "",
   lyrics: ""
  },
  {
   category: "ファンファーレ",
   title: "三重大マーチファンファーレ",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "",
   lyrics: ""
  },
  {
   category: "ファンファーレ",
   title: "Fighting Mie Fanfare(FMF)",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "",
   lyrics: ""
  }
 ],

 // ===== 必勝パターンメドレー =====
 victory: [
  {
   category: "定番",
   title: "グリーンファイト",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "三重大学応援団の必勝パターンメドレーの中核となる曲です。",
   lyrics: "オーオーオーオー　オオオー\nオーオーオーオー　オオオー\nグリーンファイト　グリーンファイト\n燃えろ燃えろよ　グリーンファイト\n勝利をつかめ"
  },
  {
   category: "定番",
   title: "スカイキッド",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "爽やかなリズムで会場を盛り上げるメドレー曲です。",
   lyrics: ""
  },
  {
   category: "定番",
   title: "ポパイ",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "テンポの良いリズムで知られるメドレー曲です。",
   lyrics: ""
  },
  {
   category: "定番",
   title: "No.1",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "",
   lyrics: ""
  },
  {
   category: "定番",
   title: "ストリーム",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "",
   lyrics: ""
  },
  {
   category: "定番",
   title: "TEMJIN",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "",
   lyrics: ""
  },
  {
   category: "定番",
   title: "SPLASH",
   note: "※平成12年度作成曲",
   youtubeId: "VIDEO_ID",
   description: "",
   lyrics: ""
  },
  {
   category: "定番",
   title: "紅",
   note: "※令和元年度作成曲",
   youtubeId: "VIDEO_ID",
   description: "",
   lyrics: ""
  },
  {
   category: "定番",
   title: "RUNNER",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "",
   lyrics: ""
  },
  {
   category: "定番",
   title: "IMPACT",
   note: "※令和7年度作成曲",
   youtubeId: "VIDEO_ID",
   description: "",
   lyrics: ""
  },
  {
   category: "定番",
   title: "ジョックロック",
   note: "※令和6年度作成曲",
   youtubeId: "VIDEO_ID",
   description: "",
   lyrics: ""
  },
  {
   category: "定番",
   title: "必勝マーチ",
   note: "※平成9年度作成曲",
   youtubeId: "VIDEO_ID",
   description: "パターンの締めとなるマーチ曲です。",
   lyrics: "（インスト曲）"
  },
  {
   category: "定番",
   title: "三重大マーチ",
   note: "",
   youtubeId: "VIDEO_ID",
   description: "行進や入場時に演奏されるマーチ曲です。",
   lyrics: "（インスト曲）"
  }
 ]
};
