/* Countdown Town — story.js (37 adegan, lokasi & properti disesuaikan per babak) */
const SH=[0xc0392b,0x8e44ad,0x27ae60,0xe67e22,0x16a085,0x7f8c8d,0xd35400];
const GREEN='#3ddc84';
const RED='#ff3b30';
const AMBER='#ffb020';

const crowd=(tags,o={})=>{
  const dx=o.dx??3;
  return tags.map((tg,i)=>({
    shirt:SH[i%7],
    pants:[0x2c3e50,0x34495e,0x5d4037][i%3],
    hat:[undefined,'hair','cap'][i%3],
    hatColor:[0,0x4a2f1b,0x2d7dd2][i%3],
    outfit:['tee','jacket','hoodie'][i%3],
    face:'smile',
    tag:tg,
    p:[(o.x??-(tags.length-1)*dx/2)+i*dx,0,o.z??0],
    ry:0,
    anim:'idle',
    ...o.c
  }));
};

const E=(p,x)=>({shirt:0x2d7dd2,pants:0x2c3e50,hat:'hair',hatColor:0x3b2a1a,face:'smile',talk:true,s:.85,p,ry:0,...x});
const BOSS=(p,x)=>({shirt:0x111111,pants:0x111111,outfit:'suit',hat:'top',hatColor:0x111111,face:'smug',p,ry:0,...x});
const K=(f,t,l,x)=>({from:f,to:t,look:l,...x});
const cl=(x,d=7)=>K([x+1.5,5,d+3],[x+.6,5.2,d],[x,4.6,0],{fov:42});
const sg=(text,o={})=>({t:'sign',p:[0,0,0],w:6,h:4.5,text,bg:'#06121f',fg:GREEN,...o});

/* Babak 1: Alun-Alun & Jalan Utama Kota */
const TOWN=[
  {t:'road',p:[0,0,9],ry:1.5708,w:6,len:120},
  {t:'house',p:[-14,0,-10],color:0xd6e4f0,roof:0x34495e},
  {t:'house',p:[14,0,-10],color:0xf1c6a0,roof:0xb03a2e},
  {t:'box',p:[0,0,-11],w:4.5,h:11,d:4.5,color:0xeaecee,k:'brick'},
  {t:'lamp',p:[8,0,-4]},
  {t:'lamp',p:[-8,0,-4]},
  {t:'bush',p:[-7,0,-6]},
  {t:'bush',p:[7,0,-6]},
  {t:'tree',p:[-19,0,-4]},
  {t:'tree',p:[19,0,-4]}
];

/* Babak 2: Lingkungan Rumah Kosong */
const EMPTY_TOWN=[
  {t:'road',p:[0,0,9],ry:1.5708,w:6,len:120},
  {t:'house',p:[-13,0,-10],color:0x6c757d,roof:0x2b2d42,door:0x1a1a1a},
  {t:'house',p:[13,0,-10],color:0x7f8c8d,roof:0x2c3e50,door:0x1a1a1a},
  {t:'lamp',p:[8,0,-4]},
  {t:'tree',p:[-18,0,-4]}
];

/* Babak 4: Ruang Kontrol Utama (Mainframe & Dinding Ribuan Monitor) */
const ROOM=[
  {t:'box',p:[0,0,-9],w:46,h:15,d:1,color:0x1c222d,k:'brick'},
  {t:'box',p:[0,0,-3.2],w:10,h:2.2,d:2.4,color:0x11161d},
  ...[...Array(11)].map((_,i)=>({
    t:'sign',
    p:[-18+i*3.6,0,-7.5],
    w:2.6,
    h:2,
    text:String(1000+i*137),
    bg:'#06121f',
    fg:GREEN
  }))
];

const sc=(say,o)=>({dur:3,mood:'day',props:TOWN,say,...o});
const rm=(say,o)=>sc(say,{mood:'indoor',props:ROOM,...o});

window.STORY={scenes:[
  /* 1-8: Kehidupan Kota & Teror Angka Hitung Mundur */
  sc('In this town, everyone has a countdown above their head.',{
    chars:crowd(['14,610','3,204','22,000','900','31,500']),
    cam:K([0,6,24],[0,6,15],[0,4,0])
  }),
  sc('Nobody knows who created it.',{
    props:[...TOWN,sg('???',{p:[-5,0,2],w:4,h:3,bg:'#fff',fg:'#222'})],
    chars:crowd(['8,100'],{c:{face:'shock'}}),
    cam:cl(0)
  }),
  sc('And nobody knows what happens when it reaches zero.',{
    mood:'night',
    chars:crowd(['0'],{c:{face:'shock',tagColor:RED}}),
    cam:K([0,2,11],[0,3,8],[0,5,0],{shake:.04})
  }),
  sc('Every morning, people wake up, check their numbers, and continue living like nothing is wrong.',{
    dur:4.2,
    mood:'sunset',
    chars:crowd(['5,200','12,044','700','30,010'],{dx:4,c:{anim:'walk'}}),
    cam:K([-10,5,16],[8,5,16],[0,4,0])
  }),
  sc('Some have 40 years left.',{
    chars:crowd(['40 YEARS'],{c:{tagColor:GREEN}}),
    cam:cl(0)
  }),
  sc('Others have only a few days.',{
    chars:crowd(['3 DAYS'],{c:{anim:'panic',face:'shock',tagColor:RED}}),
    cam:K([0,4,12],[0,5,7],[0,4.5,0],{shake:.06})
  }),
  sc('But nobody talks about it.',{
    chars:crowd(['9,400','1,200','18,000'],{dx:4,c:{ry:3.14,face:'sad'}}),
    cam:K([-8,5,-14],[8,5,-14],[0,4,0])
  }),
  sc('Because everyone is terrified of the same thing.',{
    mood:'night',
    chars:crowd(['77','2,010','410'],{dx:3,c:{face:'shock',anim:'panic',tagColor:RED}}),
    cam:K([0,5,16],[0,5,9],[0,4.5,0],{shake:.05})
  }),

  /* 9-13: Keanehan Angka Ethan */
  sc('One day, a little boy named Ethan noticed something strange.',{
    chars:[E([0,0,2],{tag:'1,000',tagColor:GREEN}),...crowd(['5,000','880'],{x:-9,dx:18,z:-4})],
    cam:K([4,5,14],[1.5,5,8],[0,4,2])
  }),
  sc("While everyone else's numbers were going down...",{
    chars:crowd(['811','4,999','312','7,100'],{dx:4}),
    cam:K([0,6,20],[0,6,13],[0,4,0])
  }),
  sc('His number was going up.',{
    chars:[E([0,0,2],{tag:'1,001',tagColor:GREEN,face:'shock'})],
    cam:cl(0,6)
  }),
  sc('At first, he thought it was a glitch.',{
    chars:[E([0,0,2],{tag:'1,002',tagColor:GREEN,face:'sad'})],
    cam:K([-3,5,10],[3,5,10],[0,4,2])
  }),
  sc('But then, something even stranger happened.',{
    mood:'night',
    chars:[E([0,0,2],{face:'shock'})],
    cam:K([0,3,12],[0,5,8],[0,4.5,2],{shake:.05})
  }),

  /* 14-17: Rumah Kosong & Jejak yang Terhapus */
  sc("Every person whose countdown reached zero suddenly disappeared from the town's records.",{
    dur:4,
    mood:'night',
    props:[...EMPTY_TOWN,sg('RECORD\nNOT\nFOUND',{p:[4,0,2],fg:RED})],
    chars:crowd(['0'],{x:-3,c:{face:'shock',tagColor:RED}}),
    cam:K([0,5,16],[2,5,10],[1,4,0])
  }),
  sc('Their houses became empty.',{
    mood:'sunset',
    props:EMPTY_TOWN,
    chars:[],
    cam:K([0,4,22],[0,5,15],[0,4,-8])
  }),
  sc('Their photos vanished.',{
    mood:'indoor',
    props:[
      {t:'box',p:[0,0,-4],w:14,h:9,d:1,color:0x5a6270,k:'plank'},
      {t:'box',p:[0,3.5,-3.4],w:4.4,h:3.4,d:.2,color:0x1a1a1f},
      {t:'box',p:[0,3.5,-3.25],w:3.6,h:2.6,d:.2,color:0x2f3542},
      sg('MISSING',{p:[0,0,2],w:5,h:3.7,bg:'#222',fg:'#ddd'})
    ],
    chars:[],
    cam:K([0,5,12],[0,5,8],[0,4.5,0])
  }),
  sc('And nobody remembered they had ever existed.',{
    chars:crowd(['6,000','13,500','250'],{dx:4,c:{face:'sad'}}),
    cam:K([0,6,20],[0,5,12],[0,4,0])
  }),

  /* 18-19: Gedung Terbengkalai di Pinggir Kota */
  sc('Ethan decided to investigate.',{
    chars:[E([-6,0,4],{to:[6,0,4],ry:1.2,anim:'walk',face:'angry'})],
    cam:K([0,5,18],[3,5,16],[0,4,4])
  }),
  sc('He followed the numbers to an abandoned building outside town.',{
    mood:'night',
    scenery:false,
    props:[
      {t:'house',p:[0,0,-12],w:18,d:11,h:10,color:0x4a4a52,roof:0x222228,door:0x1a1a1a,wall:'brick'},
      {t:'box',p:[0,1.2,-6.3],w:2.2,h:2.4,d:.3,color:0x16a085},
      {t:'tree',p:[-13,0,-8]},
      {t:'tree',p:[13,0,-9]},
      {t:'bush',p:[-8,0,-6]},
      {t:'bush',p:[8,0,-6]}
    ],
    chars:[E([0,0,8],{to:[0,0,0],ry:3.14,anim:'walk'})],
    cam:K([-8,4,18],[0,5,16],[0,5,-4])
  }),

  /* 20-27: Ruang Kontrol Utama & Pesan Rahasia */
  rm("Inside, he discovered thousands of screens showing every citizen's countdown.",{
    dur:3.8,
    chars:[E([0,0,6],{face:'shock'})],
    cam:K([0,5,14],[0,6,10],[0,5,-4])
  }),
  rm('But one screen was different.',{
    props:[...ROOM,sg('????',{p:[0,0,-2],fg:RED})],
    chars:[E([-5,0,5],{face:'shock'})],
    cam:K([-3,5,12],[0,5,8],[0,5,-2])
  }),
  rm('It showed his name.',{
    props:[...ROOM,sg('ETHAN',{p:[0,0,-2],fg:RED})],
    chars:[E([-5,0,5],{face:'shock'})],
    cam:K([0,5,11],[0,5.2,6],[0,5,-2],{fov:42})
  }),
  rm('And underneath it was a message:',{
    props:[...ROOM,sg('ETHAN',{p:[0,0,-2],fg:RED})],
    chars:[E([-5,0,5])],
    cam:K([0,3,10],[0,3,7],[0,3,-2])
  }),
  rm('The system has been counting down for 100 years.',{
    props:[...ROOM,sg('COUNTING\nDOWN FOR\n100 YEARS',{p:[0,0,-2],fg:RED})],
    chars:[E([-5,0,5],{face:'shock'})],
    cam:K([0,5,12],[0,5,7],[0,5,-2],{shake:.03})
  }),
  rm('Ethan stepped closer.',{
    props:[...ROOM,sg('100 YEARS',{p:[0,0,-2],fg:RED})],
    chars:[E([-4,0,6],{to:[0,0,0],ry:3.14,anim:'walk'})],
    cam:K([5,5,12],[2,5,8],[0,5,-1])
  }),
  rm('Then the screen changed.',{
    props:[...ROOM,sg('ERROR',{p:[0,0,-2],fg:AMBER})],
    chars:[E([0,0,0],{ry:3.14,face:'shock'})],
    cam:K([0,5,9],[0,5,6],[0,5,-2],{shake:.08})
  }),
  rm('Countdown complete.',{
    props:[...ROOM,sg('COUNTDOWN\nCOMPLETE',{p:[0,0,-2],fg:GREEN})],
    chars:[E([0,0,0],{ry:3.14})],
    cam:K([0,5,8],[0,5,5],[0,5,-2],{fov:45})
  }),

  /* 28-31: Jam Kota Berhenti & Angka Berbalik Naik */
  sc('Suddenly, every clock in the city stopped.',{
    props:[
      ...TOWN,
      {t:'box',p:[0,0,-1],w:3.6,h:8.5,d:3.6,color:0xd5d8dc,k:'brick'},
      sg('12:00',{p:[0,0,2],w:5,h:3.7,bg:'#fff',fg:'#111'})
    ],
    chars:crowd(['0','0'],{x:-8,dx:16,c:{face:'shock',tagColor:RED}}),
    cam:K([0,5,14],[0,5,9],[0,4.6,2],{shake:.05})
  }),
  sc('Every citizen looked up.',{
    chars:crowd(['0','0','0','0'],{dx:3.5,c:{face:'shock'}}),
    cam:K([0,1.5,14],[0,2.5,11],[0,7,0])
  }),
  sc('And for the first time...',{
    mood:'sunset',
    chars:crowd(['0','0','0'],{dx:4,c:{face:'smile'}}),
    cam:K([0,5,18],[0,5,12],[0,5,0])
  }),
  sc('Their numbers started counting upward.',{
    mood:'sunset',
    chars:crowd(['1','2','1','3','2'],{dx:3.5,c:{tagColor:GREEN,anim:'wave'}}),
    cam:K([-10,6,18],[10,6,18],[0,5,0])
  }),

  /* 32-37: Plot Twist & Podium Admin */
  rm("But Ethan's screen displayed one final message:",{
    props:[...ROOM,sg('ETHAN',{p:[0,0,-2],fg:RED})],
    chars:[E([-5,0,5],{face:'shock'})],
    cam:K([0,5,12],[0,5,8],[0,5,-2])
  }),
  rm('The next reset begins in 10 seconds.',{
    props:[...ROOM,sg('NEXT\nRESET IN\n10 SEC',{p:[0,0,-2],fg:RED})],
    chars:[E([-5,0,5],{face:'shock',anim:'panic'})],
    cam:K([0,5,12],[0,5,6],[0,5,-2],{shake:.07})
  }),
  rm("And that's when he realized...",{
    chars:[E([0,0,2],{face:'shock'})],
    cam:cl(0,6)
  }),
  rm('His countdown was never counting his remaining time.',{
    chars:[E([0,0,2],{tag:'1,000',tagColor:GREEN,face:'shock'})],
    cam:K([3,5,10],[1,5.2,6],[0,5,2],{fov:42})
  }),
  rm('It was counting down to the moment he would replace whoever controlled the town.',{
    dur:4,
    props:[
      ...ROOM,
      {t:'box',p:[4,0,-1.5],w:3.2,h:1.8,d:2,color:0x111111},
      sg('ADMIN',{p:[4,0,-2],fg:AMBER})
    ],
    chars:[E([-4,0,5],{face:'shock'}),BOSS([4,0,2],{ry:-.3})],
    cam:K([0,6,16],[0,5,10],[0,4.5,1])
  }),
  rm('Would you accept the job?',{
    props:[
      ...ROOM,
      {t:'box',p:[0,0,-1.5],w:3.6,h:1.8,d:2,color:0x111111},
      sg('ACCEPT?',{p:[0,0,-2],fg:AMBER})
    ],
    chars:[E([-3,0,4],{ry:.3,face:'smile'}),BOSS([3,0,4],{ry:-.3,anim:'point'})],
    cam:K([0,4,13],[0,5,8],[0,4.5,4],{fov:45})
  })
]};
