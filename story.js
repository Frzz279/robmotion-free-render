/*
 CARA PAKAI: ganti isi file ini untuk setiap naskah/tema. Gaya visual ada di index.html.
 Skenario Test Render: Konspirasi Truk Tengah Malam (Leo, Maya, & Mayor Vance)
 Total Durasi: 13 Detik (4 Adegan)
*/
window.STORY = {
  scenes: [
    // ADEGAN 1: Test mood 'night', prop padat (truk rakitan box + mansion), & dolly zoom
    {
      dur: 3.5,
      mood: 'night',
      say: 'In this town nobody drives past midnight',
      props: [
        // Mansion Mayor Vance & pepohonan latar
        { t: 'house', p: [0, 0, -14], w: 10, d: 7, h: 6, color: 0x2c3e50, roof: 0x1a252f, door: 0x8e44ad },
        { t: 'tree', p: [-10, 0, -8] },
        { t: 'tree', p: [10, 0, -9] },
        { t: 'tree', p: [-12, 0, 2] },
        // Rakitan Truk Box & Kargo Misterius
        { t: 'box', p: [-5.5, 0, -3], w: 5.5, h: 3.2, d: 2.6, color: 0x34495e },
        { t: 'box', p: [-1.8, 0, -3], w: 2.2, h: 2.4, d: 2.5, color: 0xc0392b },
        { t: 'box', p: [3.5, 0, -2], w: 1.6, h: 1.6, d: 1.6, color: 0xb9770e },
        { t: 'box', p: [5.3, 0, -2.5], w: 1.4, h: 1.4, d: 1.4, color: 0x9c640c },
        // Papan Peringatan
        { t: 'sign', p: [-4.5, 0, 3], w: 3.2, h: 2.2, text: 'RESTRICTED\nAREA', bg: '#111111', fg: '#ff3b30', ry: 0.3 }
      ],
      chars: [
        // Leo (Sopir truk) kaget melihat muatan
        { shirt: 0x2980b9, pants: 0x1c2833, hat: 'cap', hatColor: 0xc0392b, face: 'shock', p: [1.5, 0, 1.5], to: [2.2, 0, 0.5], ry: -0.5, anim: 'walk' }
      ],
      cam: { from: [0, 5.5, 16], to: [1, 4.8, 9.5], look: [0, 3.2, -1], fov: 50, shake: 0.02 }
    },

    // ADEGAN 2: Test mood 'indoor', close-up FOV, animasi 'point' vs 'angry', & pan kamera
    {
      dur: 3,
      mood: 'indoor',
      say: 'Mayor Vance was hiding the secret inside',
      props: [
        // Dinding & tumpukan peti gudang
        { t: 'box', p: [0, 0, -8], w: 18, h: 7, d: 1, color: 0x424949 },
        { t: 'box', p: [-5, 0, -4], w: 2.5, h: 2.5, d: 2.5, color: 0x7e5109 },
        { t: 'box', p: [-5, 0, -1.2], w: 2, h: 1.8, d: 2, color: 0x935116 },
        { t: 'box', p: [5.5, 0, -3], w: 3, h: 3, d: 2.5, color: 0x6e2c00 },
        { t: 'sign', p: [0, 0, -6.5], w: 5, h: 2.8, text: 'PROJECT\nMIDNIGHT', bg: '#1c1c1c', fg: '#f1c40f' }
      ],
      chars: [
        // Mayor Vance (Top hat, wajah licik, menunjuk)
        { shirt: 0x111111, pants: 0x111111, hat: 'top', hatColor: 0x111111, face: 'smug', p: [-1.8, 0, 0], ry: 0.6, anim: 'point' },
        // Leo (Marah)
        { shirt: 0x2980b9, pants: 0x1c2833, hat: 'cap', hatColor: 0xc0392b, face: 'angry', p: [2.2, 0, 0.5], ry: -0.7, anim: 'idle' }
      ],
      cam: { from: [0.5, 4.2, 9.5], to: [-0.5, 4.2, 7.5], look: [-1, 3.5, 0], look2: [1, 3.5, 0], fov: 42 }
    },

    // ADEGAN 3: Test mood 'sunset', multi-karakter berlari (p -> to), animasi 'panic' & 'wave', plus camera shake
    {
      dur: 3.5,
      mood: 'sunset',
      say: 'Then his guards chased Leo down the street',
      props: [
        { t: 'house', p: [-7, 0, -11], w: 7, d: 6, h: 5, color: 0xd6eaf8, roof: 0x2e4053, door: 0x922b21 },
        { t: 'house', p: [7, 0, -11], w: 7, d: 6, h: 5.5, color: 0xfdebd0, roof: 0x78281f, door: 0x1f618d },
        { t: 'tree', p: [0, 0, -9] },
        { t: 'box', p: [-3, 0, 4], w: 2.2, h: 1, d: 0.6, color: 0xf39c12 },
        { t: 'box', p: [3.5, 0, 4.5], w: 2.2, h: 1, d: 0.6, color: 0xf39c12 }
      ],
      chars: [
        // Dua Polisi/Penjaga mengejar
        { shirt: 0x14284b, pants: 0x14284b, hat: 'cop', face: 'angry', p: [-7, 0, 1], to: [-2.5, 0, 1.5], ry: 1.4, anim: 'walk' },
        { shirt: 0x14284b, pants: 0x14284b, hat: 'cop', face: 'angry', p: [-9.5, 0, 2.5], to: [-5, 0, 2.5], ry: 1.4, anim: 'walk' },
        // Leo lari panik
        { shirt: 0x2980b9, pants: 0x1c2833, hat: 'cap', hatColor: 0xc0392b, face: 'shock', p: [-1, 0, 1.5], to: [3.5, 0, 1.5], ry: 1.5, anim: 'panic' },
        // Maya melambai memanggil Leo
        { shirt: 0x8e44ad, pants: 0x2c3e50, hat: 'hair', hatColor: 0x3e2723, face: 'shock', p: [5.5, 0, 2.5], ry: -1.2, anim: 'wave' }
      ],
      cam: { from: [-2, 4.5, 14], to: [3, 4.5, 11.5], look: [0, 3.2, 1.5], shake: 0.08 }
    },

    // ADEGAN 4: Test mood 'day', wajah 'sad', & camera pull-back akhir
    {
      dur: 3,
      mood: 'day',
      say: 'Now Maya is the only witness left',
      props: [
        { t: 'house', p: [0, 0, -13], w: 8, d: 6, h: 5, color: 0xe8d9b5, roof: 0xb03a2e, door: 0x5d4037 },
        { t: 'tree', p: [-9, 0, -5] },
        { t: 'tree', p: [9, 0, -5] },
        { t: 'sign', p: [4.2, 0, 2.5], w: 3.4, h: 2.2, text: 'NO TURNING\nBACK', bg: '#ffffff', fg: '#c0392b', ry: -0.35 }
      ],
      chars: [
        { shirt: 0x8e44ad, pants: 0x2c3e50, hat: 'hair', hatColor: 0x3e2723, face: 'sad', p: [-1.5, 0, 2], ry: 0.2, anim: 'idle' },
        { shirt: 0x2980b9, pants: 0x1c2833, hat: 'cap', hatColor: 0xc0392b, face: 'sad', p: [0.8, 0, 2.3], ry: -0.2, anim: 'idle' }
      ],
      cam: { from: [0, 4, 9], to: [0, 6.5, 17], look: [0, 3.5, 0], look2: [0, 4.2, -2] }
    }
  ]
};
