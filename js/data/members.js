// 団員データ
// leadership: 団長・副団長など全体役職
// leader / brass / cheer: 各部員（year: 学年 1〜4）
const MEMBERS_DATA = {

 // ===== 全体役職 =====
 leadership: [
  {
   role: "団長",
   name: "桂 大貴",
   department: "",
   year: 4,
   image: "images/members/leadership-01.jpg",
   comment: ""
  },
  {
   role: "副団長",
   name: "玉田 陽平",
   department: "",
   year: 4,
   image: "images/members/leadership-02.jpg",
   comment: ""
  },
  {
   role: "主務",
   name: "水野 颯士",
   department: "",
   year: 4,
   image: "images/members/leadership-03.jpg",
   comment: ""
  },
  {
   role: "副務",
   name: "水澤 日女香",
   department: "",
   year: 4,
   image: "images/members/leadership-04.jpg",
   comment: ""
  },
  {
   role: "副務",
   name: "山田 小道",
   department: "",
   year: 4,
   image: "images/members/leadership-05.jpg",
   comment: ""
  }
 ],

 // ===== リーダー部 =====
 leader: [
  // 4年生
  { role: "団長",                       name: "桂 大貴",     year: 4, image: "images/members/leader-y4-01.jpg" },
  { role: "副団長",                     name: "玉田 陽平",   year: 4, image: "images/members/leader-y4-02.jpg" },
  { role: "新人勧誘責任者",             name: "平松 那奈",   year: 4, image: "images/members/leader-y4-03.jpg" },
  { role: "リーダー部観客動員対策責任者", name: "山村 優人", year: 4, image: "images/members/leader-y4-04.jpg" },
  // 3年生
  { role: "", name: "小笠原 照弥",  year: 3, image: "images/members/leader-y3-01.jpg" },
  { role: "", name: "東出 壽一郎",  year: 3, image: "images/members/leader-y3-02.jpg" },
  { role: "", name: "武藤 光",      year: 3, image: "images/members/leader-y3-03.jpg" },
  // 2年生
  { role: "", name: "菅野 圭祐", year: 2, image: "images/members/leader-y2-01.jpg" },
  { role: "", name: "芹澤 琢海", year: 2, image: "images/members/leader-y2-02.jpg" },
  { role: "", name: "中塚 雄哉", year: 2, image: "images/members/leader-y2-03.jpg" },
  { role: "", name: "平井 和貴", year: 2, image: "images/members/leader-y2-04.jpg" },
  { role: "", name: "堀田 和来", year: 2, image: "images/members/leader-y2-05.jpg" },
  { role: "", name: "森川 瑛太", year: 2, image: "images/members/leader-y2-06.jpg" },
  // 1年生
  { role: "", name: "河野 碧範",    year: 1, image: "images/members/leader-y1-02.jpg" },
  { role: "", name: "田畑 蹴翔",    year: 1, image: "images/members/leader-y1-03.jpg" },
  { role: "", name: "多和田 功",    year: 1, image: "images/members/leader-y1-04.jpg" },
  { role: "", name: "鳥越 咲太郎",  year: 1, image: "images/members/leader-y1-05.jpg" },
  { role: "", name: "柗本 透海",    year: 1, image: "images/members/leader-y1-07.jpg" },
  { role: "", name: "三宅 遥人",    year: 1, image: "images/members/leader-y1-08.jpg" }
 ],

 // ===== ブラスバンド部 =====
 brass: [
  // 4年生
  { role: "主務",                         name: "水野 颯士",   year: 4, image: "images/members/brass-y4-01.jpg" },
  { role: "ブラスバンド部長",             name: "藤井 理沙子", year: 4, image: "images/members/brass-y4-02.jpg" },
  { role: "副務",                         name: "水澤 日女香", year: 4, image: "images/members/brass-y4-03.jpg" },
  { role: "ブラスバンド部総務",           name: "古屋 琢人",   year: 4, image: "images/members/brass-y4-04.jpg" },
  { role: "会計責任者",                   name: "岡田 美紀",   year: 4, image: "images/members/brass-y4-05.jpg" },
  { role: "新人勧誘責任者",               name: "大森 悠生",   year: 4, image: "images/members/brass-y4-06.jpg" },
  { role: "ブラスバンド部観客動員対策責任者", name: "稲垣 颯太", year: 4, image: "images/members/brass-y4-07.jpg" },
  { role: "指揮",                         name: "保村 美里",   year: 4, image: "images/members/brass-y4-08.jpg" },
  // 3年生
  { role: "", name: "阿加井 淳大",  year: 3, image: "images/members/brass-y3-01.jpg" },
  { role: "", name: "糸見 晃来",    year: 3, image: "images/members/brass-y3-15.jpg" },
  { role: "", name: "奥平 禎大",    year: 3, image: "images/members/brass-y3-02.jpg" },
  { role: "", name: "木下 心晴",    year: 3, image: "images/members/brass-y3-03.jpg" },
  { role: "", name: "黒川 美桜",    year: 3, image: "images/members/brass-y3-04.jpg" },
  { role: "", name: "榊原 大生",    year: 3, image: "images/members/brass-y3-05.jpg" },
  { role: "", name: "坂本 十桜子",  year: 3, image: "images/members/brass-y3-06.jpg" },
  { role: "", name: "髙橋 陽菜詩",  year: 3, image: "images/members/brass-y3-07.jpg" },
  { role: "", name: "張 悠然",      year: 3, image: "images/members/brass-y3-08.jpg" },
  { role: "", name: "鶴間 仁那",    year: 3, image: "images/members/brass-y3-09.jpg" },
  { role: "", name: "ハシミ ワイズ", year: 3, image: "images/members/brass-y3-10.jpg" },
  { role: "", name: "古田 奏帆",    year: 3, image: "images/members/brass-y3-11.jpg" },
  { role: "", name: "三谷 和暖",    year: 3, image: "images/members/brass-y3-12.jpg" },
  { role: "", name: "森 舞衣弥",    year: 3, image: "images/members/brass-y3-13.jpg" },
  { role: "", name: "山田 莉央",    year: 3, image: "images/members/brass-y3-14.jpg" },
  // 2年生
  { role: "", name: "和泉 陽葵",  year: 2, image: "images/members/brass-y2-01.jpg" },
  { role: "", name: "井上 幹都",  year: 2, image: "images/members/brass-y2-02.jpg" },
  { role: "", name: "大崎 瑶代",  year: 2, image: "images/members/brass-y2-03.jpg" },
  { role: "", name: "角田 勇登",  year: 2, image: "images/members/brass-y2-04.jpg" },
  { role: "", name: "川口 蒼空",    year: 2, image: "images/members/brass-y2-05.jpg" },
  { role: "", name: "髙橋 奈々子", year: 2, image: "images/members/brass-y2-15.jpg" },
  { role: "", name: "高橋 勇磨",   year: 2, image: "images/members/brass-y2-06.jpg" },
  { role: "", name: "手嶋 大智",  year: 2, image: "images/members/brass-y2-07.jpg" },
  { role: "", name: "遠山 紗希",  year: 2, image: "images/members/brass-y2-08.jpg" },
  { role: "", name: "野村 花乃",  year: 2, image: "images/members/brass-y2-09.jpg" },
  { role: "", name: "長谷 圭悟",  year: 2, image: "images/members/brass-y2-10.jpg" },
  { role: "", name: "藤田 愛子",  year: 2, image: "images/members/brass-y2-11.jpg" },
  { role: "", name: "堀木 優来",  year: 2, image: "images/members/brass-y2-12.jpg" },
  { role: "", name: "前田 壮良",  year: 2, image: "images/members/brass-y2-13.jpg" },
  { role: "", name: "森家 千晴",  year: 2, image: "images/members/brass-y2-14.jpg" },
  // 1年生
  { role: "", name: "池田 菜穂",  year: 1, image: "images/members/brass-y1-01.jpg" },
  { role: "", name: "伊藤 和希",  year: 1, image: "images/members/brass-y1-02.jpg" },
  { role: "", name: "鵜飼 太智",  year: 1, image: "images/members/brass-y1-03.jpg" },
  { role: "", name: "江幡 朱莉",  year: 1, image: "images/members/brass-y1-04.jpg" },
  { role: "", name: "楠智 尋",    year: 1, image: "images/members/brass-y1-05.jpg" },
  { role: "", name: "小関 理心",  year: 1, image: "images/members/brass-y1-06.jpg" },
  { role: "", name: "後藤 宏平",  year: 1, image: "images/members/brass-y1-07.jpg" },
  { role: "", name: "三田 真愛",  year: 1, image: "images/members/brass-y1-08.jpg" },
  { role: "", name: "島井 涼也",  year: 1, image: "images/members/brass-y1-09.jpg" },
  { role: "", name: "田上 陽翔",  year: 1, image: "images/members/brass-y1-10.jpg" },
  { role: "", name: "中西 悠斗",  year: 1, image: "images/members/brass-y1-11.jpg" },
  { role: "", name: "藤井 めい",  year: 1, image: "images/members/brass-y1-12.jpg" },
  { role: "", name: "寳達 万緒",  year: 1, image: "images/members/brass-y1-13.jpg" },
  { role: "", name: "堀 拓海",    year: 1, image: "images/members/brass-y1-14.jpg" },
  { role: "", name: "三浦 秀斗",  year: 1, image: "images/members/brass-y1-15.jpg" },
  { role: "", name: "横田 潤地",  year: 1, image: "images/members/brass-y1-17.jpg" }
 ],

 // ===== チアリーダー部 =====
 cheer: [
  // 4年生
  { role: "チアリーダー部長",     name: "魚谷 美咲",  year: 4, image: "images/members/cheer-y4-01.jpg" },
  { role: "副務",                 name: "山田 小道",  year: 4, image: "images/members/cheer-y4-02.jpg" },
  { role: "チアリーダー部総務",             name: "岩松 里奈",  year: 4, image: "images/members/cheer-y4-03.jpg" },
  { role: "チアリーダー部観客動員対策責任者", name: "地主 優音",  year: 4, image: "images/members/cheer-y4-05.jpg" },
  { role: "チアリーダー部新人監督",          name: "古賀 陽花",  year: 4, image: "images/members/cheer-y4-04.jpg" },
  // 3年生
  { role: "", name: "安達 智美",  year: 3, image: "images/members/cheer-y3-01.jpg" },
  { role: "", name: "大橋 礼奈",  year: 3, image: "images/members/cheer-y3-02.jpg" },
  { role: "", name: "西村 汐織",  year: 3, image: "images/members/cheer-y3-03.jpg" },
  // 2年生
  { role: "", name: "伊藤 百恵",  year: 2, image: "images/members/cheer-y2-01.jpg" },
  { role: "", name: "戎本 ひなの", year: 2, image: "images/members/cheer-y2-02.jpg" },
  { role: "", name: "竹内 潤",    year: 2, image: "images/members/cheer-y2-03.jpg" },
  { role: "", name: "田中 柚らら", year: 2, image: "images/members/cheer-y2-04.jpg" },
  { role: "", name: "中田 春瑠",  year: 2, image: "images/members/cheer-y2-05.jpg" },
  { role: "", name: "西原 万結",  year: 2, image: "images/members/cheer-y2-06.jpg" },
  { role: "", name: "藤嶋 紗也花", year: 2, image: "images/members/cheer-y2-07.jpg" },
  // 1年生
  { role: "", name: "岩﨑 柚月",  year: 1, image: "images/members/cheer-y1-01.jpg" },
  { role: "", name: "浦田 芽依",  year: 1, image: "images/members/cheer-y1-02.jpg" },
  { role: "", name: "尾関 真央",  year: 1, image: "images/members/cheer-y1-03.jpg" },
  { role: "", name: "久米 かのこ", year: 1, image: "images/members/cheer-y1-04.jpg" },
  { role: "", name: "倉田 芽依",  year: 1, image: "images/members/cheer-y1-05.jpg" },
  { role: "", name: "田原 沙衣",  year: 1, image: "images/members/cheer-y1-06.jpg" },
  { role: "", name: "辻本 奈津実", year: 1, image: "images/members/cheer-y1-07.jpg" },
  { role: "", name: "中野 莉緒",  year: 1, image: "images/members/cheer-y1-08.jpg" },
  { role: "", name: "野﨑 万央",  year: 1, image: "images/members/cheer-y1-09.jpg" },
  { role: "", name: "平野 ましろ", year: 1, image: "images/members/cheer-y1-10.jpg" }
 ]
};
