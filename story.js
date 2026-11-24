/*
 CARA PAKAI: ganti isi file ini untuk setiap naskah/tema. Gaya visual ada di index.html.
 Versi Test Render 3D Lengkap (5 Adegan / 15 Detik).
*/
window.STORY = {
  scenes: [
    // ADEGAN 1: Establishing Shot (Mood: day, ramai props & warga)
    {
      dur: 3.5,
      mood: 'day',
      say: 'In this town the mayor banned sleep forever',
      props: [
        { t: 'road', p: [0, 0, 6], ry: 1.5708, w: 6, len: 120 },
        { t: 'path', p: [0, 0, -2], ry: 0, w: 3.5, len: 12 },
        { t: 'house', p: [0, 0, -13], w: 11, d: 8, h: 8, color: 0xf5e6c8, roof: 0xb03a2e, door: 0x5d4037 },
        { t: 'house', p: [-15, 0, -10], w: 8, d: 7, h: 6, color: 0xd6eaf8, roof: 0x2e4053, door: 0x784212 },
        { t: 'house', p: [15, 0, -10], w: 8, d: 7, h: 6, color: 0xfadbd8, roof: 0x641e16, door: 0x4a235a },
        { t: 'fence', p: [-8, 0, 2], ry: 0, len: 8 },
        { t: 'fence', p: [8, 0, 2], ry: 0, len: 8 },
        { t: 'sign', p: [-4.5, 0, 1.5], ry: 0.25, w: 4, h: 2.5, text: 'NO\nSLEEPING', bg: '#ffffff', fg: '#c0392b' },
        { t: 'lamp', p: [5.5, 0, 2.5] },
        { t: 'lamp', p: [-9, 0, 2.5] },
        { t: 'tree', p: [-11, 0, -4] },
        { t: 'tree', p: [11, 0, -4] },
        { t: 'tree', p: [13, 0, 2] },
        { t: 'bush', p: [-3.5, 0, -7] },
        { t: 'bush', p: [3.5, 0, -7] },
        { t: 'bush', p: [7, 0, 1] }
      ],
      chars: [
        { outfit: 'suit', accent: 0xe74c3c, shirt: 0x17202a, pants: 0x17202a, skin: 0xf5cba7, hat: 'top', hatColor: 0x17202a, face: 'smug', p: [1.5, 0, 1], ry: -0.2, anim: 'wave' },
        { outfit: 'hoodie', shirt: 0x2980b9, pants: 0x2c3e50, skin: 0xedbb99, hat: 'cap', hatColor: 0x1f618d, face: 'shock', p: [-2.5, 0, 3.5], ry: 0.6, anim: 'idle' },
        { outfit: 'tee', longSleeve: true, shirt: 0x27ae60, pants: 0x34495e, skin: 0xdca77b, hat: 'hair', hatColor: 0x3e2723, face: 'sad', p: [6.5, 0, 5.5], to: [2.5, 0, 5.5], ry: -1.57, anim: 'walk' }
      ],
      cam: { from: [-2, 6, 18], to: [0.5, 4.8, 10.5], look: [0, 3.8, -1], fov: 50 }
    },

    // ADEGAN 2: Dramatic Zoom (Tes FOV 42, animasi point, & tumpukan box)
    {
      dur: 2.5,
      mood: 'day',
      say: 'Fourteen thousand days without closing his eyes',
      props: [
        { t: 'sign', p: [0, 0, -1], w: 7.5, h: 4.2, text: 'DAYS AWAKE\n14,610', bg: '#0d1117', fg: '#ff3b30' },
        { t: 'box', p: [-5.2, 0, 0], w: 2.2, h: 2.2, d: 2.2, color: 0xb9770e },
        { t: 'box', p: [-5.2, 2.2, 0], w: 1.8, h: 1.8, d: 1.8, color: 0xd68910 },
        { t: 'box', p: [5.5, 0, -0.5], w: 2.5, h: 2, d: 2, color: 0x566573 },
        { t: 'lamp', p: [6.5, 0, 2] },
        { t: 'bush', p: [-6.5, 0, 2] },
        { t: 'bush', p: [4.5, 0, 2.5] }
      ],
      chars: [
        { outfit: 'suit', accent: 0xe74c3c, shirt: 0x17202a, pants: 0x17202a, skin: 0xf5cba7, hat: 'top', hatColor: 0x17202a, face: 'smug', p: [2.6, 0, 2.2], ry: -0.55, anim: 'point' }
      ],
      cam: { from: [3.5, 4.6, 10.5], to: [1.8, 4.4, 7.2], look: [0.8, 4.2, 0], fov: 42 }
    },

    // ADEGAN 3: Sunset Action (Tes mood sunset, multi-walk, panic, look2, & camera shake)
    {
      dur: 3,
      mood: 'sunset',
      say: 'Until the sirens echoed across the square',
      props: [
        { t: 'road', p: [0, 0, 6], ry: 1.5708, w: 6, len: 120 },
        { t: 'house', p: [0, 0, -13], w: 11, d: 8, h: 8, color: 0xf5e6c8, roof: 0xb03a2e, door: 0x5d4037 },
        { t: 'box', p: [-1.5, 0, 2.5], w: 2.5, h: 1.2, d: 1, color: 0xe67e22 },
        { t: 'box', p: [1.5, 0, 2.5], w: 2.5, h: 1.2, d: 1, color: 0xe67e22 },
        { t: 'lamp', p: [-7, 0, 2.5] },
        { t: 'lamp', p: [7, 0, 2.5] },
        { t: 'tree', p: [-10, 0, -5] },
        { t: 'tree', p: [10, 0, -5] }
      ],
      chars: [
        { outfit: 'uniform', shirt: 0x154360, pants: 0x154360, skin: 0xf0b27a, hat: 'cop', hatColor: 0x154360, face: 'angry', p: [-8, 0, 6], to: [-2.2, 0, 3.2], ry: 0.8, anim: 'walk' },
        { outfit: 'uniform', shirt: 0x154360, pants: 0x154360, skin: 0xdca77b, hat: 'cop', hatColor: 0x154360, face: 'angry', p: [-10.5, 0, 7.5], to: [-4.5, 0, 4.5], ry: 0.8, anim: 'walk' },
        { outfit: 'jacket', longSleeve: true, shirt: 0x7d3c98, pants: 0x212f3d, skin: 0xf5cba7, hat: 'hair', hatColor: 0x1c2833, face: 'shock', p: [4, 0, 2.2], to: [6.5, 0, 1.5], ry: -0.7, anim: 'panic' }
      ],
      cam: { from: [-4.5, 4.2, 13.5], to: [1.5, 4.5, 11], look: [-1, 3.8, 2.5], look2: [1.5, 4, 2], shake: 0.06 }
    },

    // ADEGAN 4: Indoor Bunker (Tes mood indoor, scenery:false, floor:'tile')
    {
      dur: 3,
      mood: 'indoor',
      scenery: false,
      floor: 'tile',
      say: 'Inside his bunker they found the real secret',
      props: [
        { t: 'box', p: [0, 0, -7], w: 20, h: 10, d: 1, color: 0x2c3e50 },
        { t: 'box', p: [-9.5, 0, 0], w: 1, h: 10, d: 16, color: 0x34495e },
        { t: 'box', p: [9.5, 0, 0], w: 1, h: 10, d: 16, color: 0x34495e },
        { t: 'box', p: [0, 0, -2.5], w: 6, h: 1.8, d: 2.2, color: 0x7f8c8d },
        { t: 'box', p: [-1.2, 1.8, -2.5], w: 1.4, h: 2.2, d: 1.4, color: 0x00e5ff },
        { t: 'box', p: [5.5, 0, -4.5], w: 2.5, h: 5.5, d: 2, color: 0x1c2833 },
        { t: 'sign', p: [0, 2.5, -6.2], w: 5.5, h: 2.6, text: 'PROJECT\nINSOMNIA', bg: '#111111', fg: '#00e5ff' }
      ],
      chars: [
        { outfit: 'uniform', shirt: 0x154360, pants: 0x154360, skin: 0xf0b27a, hat: 'cop', hatColor: 0x154360, face: 'shock', p: [-3.2, 0, 1.2], ry: 0.5, anim: 'point' },
        { outfit: 'suit', accent: 0xe74c3c, shirt: 0x17202a, pants: 0x17202a, skin: 0xf5cba7, hat: 'top', hatColor: 0x17202a, face: 'shock', p: [3.2, 0, 0.8], ry: -0.6, anim: 'panic' }
      ],
      cam: { from: [0, 4.8, 9.5], to: [0, 4.2, 6.2], look: [0, 3.6, -2.5], fov: 48, shake: 0.03 }
    },

    // ADEGAN 5: Night Outro (Tes mood night, floor:'plank', & camera pull-back)
    {
      dur: 3,
      mood: 'night',
      floor: 'plank',
      say: 'Because once the machine stopped nobody woke up',
      props: [
        { t: 'lamp', p: [-4.5, 0, 1] },
        { t: 'lamp', p: [4.5, 0, -4] },
        { t: 'fence', p: [-5, 0, -6], ry: 0, len: 10 },
        { t: 'fence', p: [5, 0, -6], ry: 0, len: 10 },
        { t: 'box', p: [4.2, 0, 1.5], w: 2.2, h: 1.8, d: 2, color: 0x5d4037 },
        { t: 'sign', p: [-3.5, 0, -2.5], ry: 0.3, w: 3.6, h: 2.2, text: 'SYSTEM\nOFFLINE', bg: '#090d16', fg: '#5dade2' }
      ],
      chars: [
        { outfit: 'hoodie', shirt: 0x2e86c1, pants: 0x1b2631, skin: 0xedbb99, hat: 'cap', hatColor: 0x1b4f72, face: 'sad', p: [0.5, 0, 2.5], ry: 0.15, anim: 'idle' }
      ],
      cam: { from: [0, 4.2, 12], to: [0, 6.5, 15.5], look: [0, 3.8, 0], look2: [0, 4.8, -2], fov: 50 }
    }
  ]
};
