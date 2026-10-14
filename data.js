const MEMORY = {
  name: "Dile",
  subtitle: "Happy Birthday",
  seconds: 8, // happy photo එකක් පෙන්නන තත්පර ගණන

  cover: "https://res.cloudinary.com/bra0tufr/image/upload/v1791986779/PXL_20260306_053231941.PORTRAIT_2.jpg",

  // Happy කොටසේ music (කලින් එකම)
  music: "https://res.cloudinary.com/bra0tufr/video/upload/v1791987233/Experience_love_and_longing_with_Ae_Dil_Hai_Mushkil_%EF%B8%8F_aedilhaimushkil_arijitsingh_pritam.mp3",

  // ---------- SAD කොටස ----------
  sad: {
    video: "https://res.cloudinary.com/bra0tufr/video/upload/v1791988274/video_2026-10-14_20-00-46.mp4",
    music: "https://res.cloudinary.com/bra0tufr/video/upload/v1791988752/Hmm_%EF%B8%8F__vayralshorts_lovestatus_love_sad.mp3",
    rain: true, // වැස්සේ effect එක ඕන නැත්නම් false කරන්න

    photos: [
      "https://res.cloudinary.com/bra0tufr/image/upload/v1791988733/photo_2026-10-14_20-08-10_2.jpg",
      "https://res.cloudinary.com/bra0tufr/image/upload/v1791988734/photo_2026-10-14_20-08-10.jpg",
      "https://res.cloudinary.com/bra0tufr/image/upload/v1791988733/photo_2026-10-14_20-08-10_2.jpg" // ⚠ මේක පළවෙනි එකම. වෙනස් photo එකක link එක දාන්න
    ],

    // Gold අකුරින් පෙනෙන text. t = පටන් ගන්න තත්පරය, d = පෙනෙන තත්පර ගණන
    // මේ පේළි placeholder විතරයි. ඔයාගේම වචනවලින් වෙනස් කරන්න.
    lyrics: [
      { t: 2,    d: 5, text: "ඔයා නැති හැම මොහොතක්ම හිතට බරයි" },
      { t: 7.5,  d: 5, text: "පරණ මතක ආයෙත් ආයෙත් ළඟට එනවා" },
      { t: 13,   d: 5, text: "ඔයා එක්ක හිටපු දවස් අමතක වෙන්නේ නෑ" },
      { t: 18.5, d: 5, text: "හිනාව පිටිපස්සේ කඳුළක් හැංගිලා" },
      { t: 24,   d: 5, text: "කියන්න බැරි දේවල් හිතේ ගොඩක් තියෙනවා" },
      { t: 29.5, d: 5, text: "කාලය ගියත් මතකය නම් මැකෙන්නේ නෑ" },
      { t: 35,   d: 5, text: "ඔයා කොහේ හිටියත් මගේ හිතේ ඔයා ඉන්නවා" },
      { t: 40.5, d: 5, text: "ආයෙත් එක පාරක් ඔයාව දකින්න ආසයි" },
      { t: 46,   d: 4, text: "ඒ මතක තමයි මගේ ලොකුම වටිනාකම" }
    ]
  },

  // ---------- HAPPY කොටස ----------
  slides: [
    {
      photo: "https://res.cloudinary.com/bra0tufr/image/upload/v1791986780/PXL_20260306_053237165.PORTRAIT_2.jpg",
      title: "අපේ කතාව පටන් ගත්තා",
      text: "ඔයාව මුලින්ම දැක්ක දවසේ ඉඳන්ම මගේ හිත කිව්වා, මේක තමයි මගේ ලස්සනම කතාව පටන් ගන්න තැන කියලා."
    },
    {
      photo: "https://res.cloudinary.com/bra0tufr/image/upload/v1791986781/PXL_20260306_050419373_2.jpg",
      title: "ඔයාගේ හිනාව",
      text: "ඔයාගේ හිනාව දකිනකොට මගේ ලෝකෙම නිසල වෙනවා. ඒ පුංචි හිනාවෙන්ම මම ආදරේට වැටුණා."
    },
    {
      photo: "https://res.cloudinary.com/bra0tufr/image/upload/v1791986781/PXL_20260306_053136652.PORTRAIT_2.jpg",
      title: "සුන්දර මොහොත්",
      text: "ඔයා එක්ක ගත කරපු හැම මොහොතක්ම මට වටිනවා. සාමාන්‍ය දවසක් පවා ඔයා ළඟ ඉන්නකොට සුන්දර වෙනවා."
    },
    {
      photo: "https://res.cloudinary.com/bra0tufr/image/upload/v1791986781/PXL_20260306_060254045.PORTRAIT_2.jpg",
      title: "හැමදාම ළඟින්",
      text: "සතුටේදීත් දුකේදීත් ඔයා මගේ ළඟම හිටියා. ඒ ආදරේට මම හැමදාමත් ස්තූතිවන්තයි."
    },
    {
      photo: "https://res.cloudinary.com/bra0tufr/image/upload/v1791986782/PXL_20260306_053013517.PORTRAIT_2.jpg",
      title: "මගේ ජීවිතේ",
      text: "ඔයා නිසා මගේ ජීවිතේ කොච්චර වෙනස් වුණාද කියලා ඔයා කවදාවත් දන්නේ නැතුව ඇති. ඔයා තමයි මගේ ලොකුම වාසනාව."
    }
  ],

  finale: {
    cover: "https://res.cloudinary.com/bra0tufr/image/upload/v1791986782/PXL_20260306_053250510.PORTRAIT_2.jpg",
    sub: "Happy Birthday",
    text: "උපන්දිනයට හදවතින්ම සුබ පැතුම්! ඉදිරි හැම අවුරුද්දකම, හැම මොහොතකම මම ඔයා එක්කයි. ♥"
  }
};