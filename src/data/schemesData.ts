export interface Scheme {
  id: string;
  name: {
    en: string;
    ta?: string;
    hi?: string;
    te?: string;
  };
  category: 
    | 'financial' 
    | 'self_employment' 
    | 'education' 
    | 'health_maternity' 
    | 'child_welfare' 
    | 'housing' 
    | 'agriculture' 
    | 'skill_development' 
    | 'social_security';
  categoryLabel: {
    en: string;
    ta: string;
    hi: string;
  };
  state: string; // 'All India' or specific state like 'Tamil Nadu', 'Madhya Pradesh'
  ministry: string;
  simpleWhat: {
    en: string;
    ta: string;
    hi: string;
  };
  whoCanBenefit: {
    en: string[];
    ta: string[];
    hi: string[];
  };
  mainBenefits: {
    en: string[];
    ta: string[];
    hi: string[];
  };
  eligibility: {
    en: string[];
    ta: string[];
    hi: string[];
  };
  documentsRequired: {
    en: string[];
    ta: string[];
    hi: string[];
  };
  stepsToApply: {
    en: string[];
    ta: string[];
    hi: string[];
  };
  whereToApply: {
    en: string;
    ta: string;
    hi: string;
  };
  officialWebsite: string;
  isOfficialVerified: boolean;
  tollFreeHelpline?: string;
  tags: string[];
}

export const OFFICIAL_SCHEMES: Scheme[] = [
  {
    id: 'lakhpati-didi',
    name: {
      en: 'Lakhpati Didi Scheme',
      ta: 'இலட்சாதிபதி சகோதரி திட்டம் (Lakhpati Didi)',
      hi: 'लखपति दीदी योजना (Lakhpati Didi)',
      te: 'లక్షాధికారి దీదీ పథకం (Lakhpati Didi)'
    },
    category: 'self_employment',
    categoryLabel: {
      en: 'Self-Employment & Livelihood',
      ta: 'சுயதொழில் மற்றும் வாழ்வாதாரம்',
      hi: 'स्वरोजगार और आजीविका'
    },
    state: 'All India',
    ministry: 'Ministry of Rural Development, Govt of India',
    simpleWhat: {
      en: 'Special support to help rural women in Self-Help Groups earn at least ₹1 Lakh every year through small businesses and micro-enterprises.',
      ta: 'சுய உதவிக் குழுவில் உள்ள கிராமப்புற பெண்கள் சிறு தொழில் மூலம் ஆண்டுக்கு குறைந்தது ₹1 லட்சம் சம்பாதிக்க உதவும் அரசுத் திட்டம்.',
      hi: 'स्वयं सहायता समूह से जुड़ी ग्रामीण महिलाओं को छोटे व्यापार से साल में कम से कम ₹1 लाख कमाने के लिए सरकारी मदद।'
    },
    whoCanBenefit: {
      en: ['Women in rural areas', 'Members of Women Self-Help Groups (SHG)', 'Women who want to start tailoring, farming, or small shop'],
      ta: ['கிராமப்புற பெண்கள்', 'மகளிர் சுய உதவிக் குழுவில் உறுப்பினராக உள்ளவர்கள்', 'தையல், பால் பண்ணை, சிறு கடை தொடங்க விரும்பும் பெண்கள்'],
      hi: ['ग्रामीण महिलाएं', 'महिला स्वयं सहायता समूह (SHG) की सदस्य', 'सिलाई, खेती या छोटी दुकान शुरू करने की इच्छुक महिलाएं']
    },
    mainBenefits: {
      en: ['Interest-free loans up to ₹1 Lakh to ₹5 Lakh through SHG', 'Free training in skills like tailoring, food processing, animal husbandry and drone technology', 'Help with marketing your products'],
      ta: ['சுய உதவிக்குழு மூலம் ₹1 லட்சம் முதல் ₹5 லட்சம் வரை வட்டியில்லா கடன் வசதி', 'தையல், உணவு தயாரிப்பு, கால்நடை வளர்ப்பு போன்றவற்றில் இலவச பயிற்சி', 'தயாரிப்புகளை விற்க சந்தை உதவி'],
      hi: ['स्वयं सहायता समूह के जरिए ₹1 लाख से ₹5 लाख तक ब्याज-मुक्त कर्ज', 'सिलाई, खाद्य प्रसंस्करण, पशुपालन आदि में मुफ्त कौशल प्रशिक्षण', 'सामान बेचने में सरकारी सहायता']
    },
    eligibility: {
      en: ['Must be a woman living in India', 'Age between 18 and 55 years', 'Must be an active member of a registered Women Self-Help Group (SHG)'],
      ta: ['இந்தியாவில் வசிக்கும் பெண்ணாக இருக்க வேண்டும்', 'வயது 18 முதல் 55 வரை இருக்க வேண்டும்', 'பதிவு செய்யப்பட்ட மகளிர் சுய உதவிக்குழுவில் உறுப்பினராக இருக்க வேண்டும்'],
      hi: ['भारत की निवासी महिला', 'उम्र 18 से 55 वर्ष के बीच', 'पंजीकृत महिला स्वयं सहायता समूह की सक्रिय सदस्य होना जरूरी']
    },
    documentsRequired: {
      en: ['Aadhaar Card', 'Ration Card', 'Bank Account Passbook (linked with Aadhaar)', 'SHG Membership Passbook', '2 Passport size photographs'],
      ta: ['ஆதார் அட்டை', 'குடும்ப அட்டை (ரேஷன் கார்டு)', 'ஆதாருடன் இணைக்கப்பட்ட வங்கி கணக்கு புத்தகம்', 'சுய உதவிக்குழு சேமிப்பு புத்தகம்', '2 பாஸ்போர்ட் அளவு புகைப்படங்கள்'],
      hi: ['आधार कार्ड', 'राशन कार्ड', 'आधार से जुड़ा बैंक पासबुक', 'स्वयं सहायता समूह की पासबुक', '2 पासपोर्ट साइज फोटो']
    },
    stepsToApply: {
      en: [
        'Step 1: Keep your Aadhaar card and SHG passbook ready.',
        'Step 2: Attend your village Self-Help Group (SHG) meeting and express interest in starting a livelihood activity.',
        'Step 3: The SHG will submit your name to the Gram Panchayat / Block Mission Management Unit (BMMU).',
        'Step 4: Receive free skill training at the block center.',
        'Step 5: Get low-interest financial loan directly in your account to start work.'
      ],
      ta: [
        'படி 1: உங்கள் ஆதார் அட்டை மற்றும் சுய உதவிக்குழு புத்தகத்தை தயாராக வையுங்கள்.',
        'படி 2: உங்கள் கிராம மகளிர் சுய உதவிக் குழு கூட்டத்தில் உங்கள் தொழில் விருப்பத்தை தெரிவியுங்கள்.',
        'படி 3: குழுவினர் உங்கள் பெயரை வட்டார வளர்ச்சி அலுவலகத்திற்கு (BMMU) பரிந்துரைப்பார்கள்.',
        'படி 4: வட்டார மையத்தில் இலவச தொழில் பயிற்சி பெறுங்கள்.',
        'படி 5: தொழில் தொடங்க குறைந்த வட்டி கடன் நேரடியாக உங்கள் வங்கி கணக்கிற்கு வரும்.'
      ],
      hi: [
        'कदम 1: अपना आधार कार्ड और समूह की पासबुक तैयार रखें।',
        'कदम 2: अपने गांव के स्वयं सहायता समूह की बैठक में व्यवसाय शुरू करने की इच्छा बताएं।',
        'कदम 3: समूह आपके नाम का प्रस्ताव ब्लॉक मिशन कार्यालय (BMMU) में भेजेगा।',
        'कदम 4: ब्लॉक स्तर पर मुफ्त कौशल प्रशिक्षण प्राप्त करें।',
        'कदम 5: व्यवसाय शुरू करने के लिए सीधा बैंक खाते में ऋण प्राप्त करें।'
      ]
    },
    whereToApply: {
      en: 'Village Gram Panchayat / Nearby Anganwadi / Block Mission Management Unit (BMMU) or Village SHG Leader',
      ta: 'கிராம பஞ்சாயத்து அலுவலகம் / மகளிர் சுய உதவிக் குழு தலைவர் / வட்டார வளர்ச்சி அலுவலகம்',
      hi: 'ग्राम पंचायत कार्यालय / स्वयं सहायता समूह की अध्यक्षा / ब्लॉक विकास अधिकारी (BDO)'
    },
    officialWebsite: 'https://nrlm.gov.in',
    isOfficialVerified: true,
    tollFreeHelpline: '1800-180-6127',
    tags: ['self-employment', 'shg', 'loan', 'training', 'rural', 'business']
  },
  {
    id: 'pm-matru-vandana',
    name: {
      en: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
      ta: 'பிரதம மந்திரி மாத்ரு வந்தனா யோஜனா (PMMVY)',
      hi: 'प्रधानमंत्री मातृ वंदना योजना (PMMVY)',
      te: 'ప్రధాన మంత్రి మాతృ వందన యోజన'
    },
    category: 'health_maternity',
    categoryLabel: {
      en: 'Health & Maternity Support',
      ta: 'மகப்பேறு மற்றும் நல உதவி',
      hi: 'मातृत्व और स्वास्थ्य सहायता'
    },
    state: 'All India',
    ministry: 'Ministry of Women and Child Development, Govt of India',
    simpleWhat: {
      en: 'Direct cash financial help of ₹5,000 for pregnant women and lactating mothers for nutritious food and rest during childbirth.',
      ta: 'கர்ப்பிணி பெண்கள் சத்தான உணவு சாப்பிடவும் ஓய்வெடுக்கவும் அரசு நேரடியாக வங்கி கணக்கில் ₹5,000 வழங்கும் திட்டம்.',
      hi: 'गर्भवती महिलाओं और स्तनपान कराने वाली माताओं को पौष्टिक आहार और आराम के लिए सीधे खाते में ₹5,000 की नकद सहायता।'
    },
    whoCanBenefit: {
      en: ['Pregnant women aged 19 or older', 'For first living child (and ₹6,000 extra for second child if girl)', 'Families with annual income below ₹8 Lakhs or BPL/EWS card'],
      ta: ['19 வயது அல்லது அதற்கு மேற்பட்ட கர்ப்பிணி தாய்மார்கள்', 'முதல் குழந்தை பிறப்பிற்கு (இரண்டாவது பெண் குழந்தையாக இருந்தால் ₹6,000 கூடுதல்)', 'குடும்ப வருமானம் ஆண்டுக்கு ₹8 லட்சத்திற்கும் குறைவாக உள்ள குடும்பங்கள்'],
      hi: ['19 वर्ष या उससे अधिक उम्र की गर्भवती महिलाएं', 'पहले बच्चे के जन्म पर (दूसरी बेटी होने पर ₹6,000 अतिरिक्त)', 'बीपीएल राशन कार्ड या ई-श्रम कार्ड धारक महिलाएं']
    },
    mainBenefits: {
      en: ['₹5,000 paid directly into bank account in installments upon pregnancy registration and health check-ups', 'Additional ₹6,000 if the second child born is a girl child', 'Free vaccination and check-ups for mother and baby'],
      ta: ['வங்கி கணக்கில் நேரடியாக ₹5,000 தவணைகளில் வரவு வைக்கப்படும்', 'இரண்டாவதாக பெண் குழந்தை பிறந்தால் கூடுதலாக ₹6,000 நிதி உதவி', 'தாய் மற்றும் குழந்தைக்கு இலவச மருத்துவ பரிசோதனை மற்றும் தடுப்பூசி'],
      hi: ['गर्भावस्था पंजीकरण और टीकाकरण कराने पर सीधे बैंक खाते में ₹5,000 की राशि', 'दूसरी बेटी होने पर ₹6,000 की अतिरिक्त सहायता', 'माता और शिशु के लिए मुफ्त स्वास्थ्य जांच व टीकाकरण']
    },
    eligibility: {
      en: ['Age of mother must be 19 years or above at pregnancy date', 'Applicable for 1st live birth (or 2nd girl child)', 'Must not be a permanent employee of Central/State government or PSU'],
      ta: ['கர்ப்பம் தரித்த நாளில் தாய்க்கு 18 வயது முடிந்திருக்க வேண்டும் (19+)', 'முதல் குழந்தை பிறப்புக்கு (அல்லது 2வது பெண் குழந்தை)', 'அரசு நிரந்தர பணியாளராக இருக்கக்கூடாது'],
      hi: ['गर्भवती होने की तिथि पर उम्र 19 वर्ष या अधिक हो', 'पहले जीवित बच्चे के लिए (या दूसरी बेटी होने पर)', 'सरकारी या पीएसयू की नियमित कर्मचारी न हों']
    },
    documentsRequired: {
      en: ['Mother Aadhaar Card', 'Husband Aadhaar Card', 'Mother Bank Passbook (linked with Aadhaar DBT)', 'Mother & Child Protection (MCP) card from Anganwadi', 'Child Birth Certificate (for later installment)'],
      ta: ['தாயின் ஆதார் அட்டை', 'கணவரின் ஆதார் அட்டை', 'தாயின் வங்கி பாஸ்புக் (ஆதார் இணைக்கப்பட்டது)', 'அங்கன்வாடி தாய்-சேய் நல அட்டை (MCP Card)', 'குழந்தையின் பிறப்பு சான்றிதழ்'],
      hi: ['माता का आधार कार्ड', 'पति का आधार कार्ड', 'माता का आधार से जुड़ा बैंक खाता पासबुक', 'आंगनवाड़ी से बना मातृ-शिशु सुरक्षा (MCP) कार्ड', 'बच्चे का जन्म प्रमाण पत्र']
    },
    stepsToApply: {
      en: [
        'Step 1: As soon as pregnancy is confirmed, visit your local Anganwadi center or ASHA health worker.',
        'Step 2: Get your Mother & Child Protection (MCP) card issued.',
        'Step 3: The Anganwadi worker will fill Form 1-A online for free on the official portal (pmmvy.wcd.gov.in).',
        'Step 4: The 1st installment of ₹3,000 will be credited directly to your bank account after 1 antenatal checkup.',
        'Step 5: The 2nd installment of ₹2,000 will be credited after child birth registration and first cycle of vaccinations.'
      ],
      ta: [
        'படி 1: கர்ப்பம் உறுதியானவுடன் உங்கள் பகுதி அங்கன்வாடி மையம் அல்லது ஆஷா (ASHA) பணியாளரை அணுகுங்கள்.',
        'படி 2: தாய்-சேய் பாதுகாப்பு அட்டையை (MCP அட்டை) இலவசமாகப் பெறுங்கள்.',
        'படி 3: அங்கன்வாடி பணியாளர் அதிகாரப்பூர்வ தளத்தில் உங்களுக்காக விண்ணப்பத்தை இலவசமாக பதிவு செய்வார்.',
        'படி 4: முதல் தவணை ₹3,000 மருத்துவ பரிசோதனை முடிந்தவுடன் வங்கி கணக்கில் வரும்.',
        'படி 5: குழந்தை பிறந்து முதல் தடுப்பூசிகள் முடிந்தவுடன் இரண்டாம் தவணை ₹2,000 வங்கி கணக்கில் வரும்.'
      ],
      hi: [
        'कदम 1: गर्भावस्था की पुष्टि होते ही अपनी नजदीकी आंगनवाड़ी या आशा दीदी से संपर्क करें।',
        'कदम 2: अपना मातृ-शिशु सुरक्षा (MCP) कार्ड बनवाएं।',
        'कदम 3: आंगनवाड़ी कार्यकर्ता आपके लिए pmmvy.wcd.gov.in पोर्टल पर मुफ्त आवेदन भरेंगी।',
        'कदम 4: पहली स्वास्थ्य जांच के बाद ₹3,000 की पहली किस्त बैंक में आएगी।',
        'कदम 5: शिशु का जन्म पंजीकरण और टीकाकरण होने पर ₹2,000 की दूसरी किस्त आएगी।'
      ]
    },
    whereToApply: {
      en: 'Nearest Anganwadi Centre / Primary Health Centre (PHC) / ASHA Worker or pmmvy.wcd.gov.in',
      ta: 'அருகிலுள்ள அங்கன்வாடி மையம் / அரசு ஆரம்ப சுகாதார நிலையம் / ஆஷா பணியாளர்',
      hi: 'निकटतम आंगनवाड़ी केंद्र / प्राथमिक स्वास्थ्य केंद्र (PHC) / आशा कार्यकर्ता'
    },
    officialWebsite: 'https://pmmvy.wcd.gov.in',
    isOfficialVerified: true,
    tollFreeHelpline: '104 / 181 / 011-23382393',
    tags: ['maternity', 'pregnancy', 'cash', 'health', 'baby', 'mother']
  },
  {
    id: 'pm-mudra-women',
    name: {
      en: 'Pradhan Mantri Mudra Yojana for Women',
      ta: 'பெண்களுக்கான பிரதம மந்திரி முத்ரா கடன் திட்டம்',
      hi: 'महिलाओं के लिए प्रधानमंत्री मुद्रा योजना',
      te: 'మహిళల కోసం ప్రధాన మంత్రి ముద్రా యోజన'
    },
    category: 'financial',
    categoryLabel: {
      en: 'Financial Loans for Business',
      ta: 'சிறு தொழில் வணிகக் கடன்',
      hi: 'व्यवसाय के लिए आसान ऋण'
    },
    state: 'All India',
    ministry: 'Ministry of Finance, Govt of India',
    simpleWhat: {
      en: 'Collateral-free government bank loans from ₹50,000 up to ₹20 Lakhs with lower interest rates to start or grow your own business.',
      ta: 'பெண்கள் எந்த அடமானமும் சொத்து பத்திரமும் வைக்காமல் ₹50,000 முதல் ₹20 லட்சம் வரை குறைந்த வட்டியில் தொழில் கடன் பெறும் திட்டம்.',
      hi: 'बिना कोई गारंटी या जमीन गिरवी रखे, महिलाओं को नया व्यापार शुरू करने या बढ़ाने के लिए ₹50,000 से ₹20 लाख तक का सस्ता बैंक लोन।'
    },
    whoCanBenefit: {
      en: ['Women wanting to start tailoring, beauty parlour, grocery shop, pickle/papad making, handicraft, boutique, dairy', 'Existing women business owners wanting to buy machinery or stock'],
      ta: ['தையல் கடை, அழகு நிலையம், மளிகைக் கடை, அப்பளம்/ஊறுகாய் தயாரிப்பு, கைவினைப் பொருட்கள், துணிக்கடை ஆரம்பிக்க விரும்பும் பெண்கள்', 'தொழிலை விரிவுபடுத்த இயந்திரம் அல்லது மூலப்பொருள் வாங்க விரும்பும் பெண்கள்'],
      hi: ['सिलाई, ब्यूटी पार्लर, किराना दुकान, पापड़/अचार, हस्तशिल्प, बुटीक या डेयरी शुरू करने की इच्छुक महिलाएं', 'अपनी मौजूदा दुकान या उद्योग को बड़ा करने वाली महिलाएं']
    },
    mainBenefits: {
      en: ['No collateral or security needed', 'Zero processing fee for loans up to ₹50,000 (Shishu category)', 'Lower interest rate discount for women entrepreneurs', 'Repayment tenure up to 5 to 7 years'],
      ta: ['சொத்து அடமானம் அல்லது ஜாமீன் எதுவும் தேவையில்லை', '₹50,000 வரையிலான சிசு (Shishu) கடன்களுக்கு பிராசசிங் கட்டணம் இலவசம்', 'பெண்களுக்கு சிறப்பு வட்டி சலுகை', '5 முதல் 7 ஆண்டுகள் வரை திரும்ப செலுத்தும் கால அவகாசம்'],
      hi: ['कोई गारंटी या गिरवी रखने की आवश्यकता नहीं', '₹50,000 तक के शिशु ऋण पर कोई प्रोसेसिंग फीस नहीं', 'महिला उद्यमियों को ब्याज दर में विशेष छूट', 'लोन चुकाने के लिए 5 से 7 साल तक का आसान समय']
    },
    eligibility: {
      en: ['Any Indian woman citizen above 18 years of age', 'Should have a clear basic plan for the shop or enterprise', 'Should not have defaulted on any previous bank loan'],
      ta: ['18 வயது நிரம்பிய எந்தவொரு இந்திய பெண்மணியும் விண்ணப்பிக்கலாம்', 'செய்ய விரும்பும் தொழில் பற்றிய அடிப்படை திட்டம் இருக்க வேண்டும்', 'முந்தைய வங்கிக் கடன்களில் பாக்கி அல்லது தவணை தவறியவராக இருக்கக்கூடாது'],
      hi: ['18 वर्ष से अधिक उम्र की कोई भी भारतीय महिला', 'शुरू करने वाले व्यवसाय की सरल योजना हो', 'किसी पुराने बैंक लोन में डिफॉल्टर न हों']
    },
    documentsRequired: {
      en: ['Aadhaar Card or Voter ID', 'PAN Card (if available)', 'Bank Passbook (last 6 months statement)', 'Quotation for equipment or machinery to be purchased', 'Passport size photographs'],
      ta: ['ஆதார் அட்டை அல்லது வாக்காளர் அடையாள அட்டை', 'பான் கார்டு (இருந்தால்)', 'வங்கி கணக்கு புத்தகம் (கடந்த 6 மாத பரிவர்த்தனை விவரம்)', 'வாங்க விரும்பும் இயந்திரம் அல்லது பொருட்களுக்கான விலை பட்டியல் (Quotation)', '2 பாஸ்போர்ட் அளவு புகைப்படங்கள்'],
      hi: ['आधार कार्ड या वोटर कार्ड', 'पैन कार्ड (यदि उपलब्ध हो)', 'बैंक पासबुक (पिछले 6 महीने का स्टेटमेंट)', 'खरीदी जाने वाली मशीन या सामान का कोटेशन', '2 पासपोर्ट साइज फोटो']
    },
    stepsToApply: {
      en: [
        'Step 1: Decide on your business (e.g. tailor machine, small grocery shop, beauty parlour).',
        'Step 2: Collect quotations for the equipment or goods you want to buy.',
        'Step 3: Visit your nearby public sector bank branch (SBI, Canara, Indian Bank, etc.) or open the official Udyami Mitra portal (udyamimitra.in).',
        'Step 4: Ask the bank manager for the Mudra "Shishu" application form (up to ₹50,000) or "Kishor" form.',
        'Step 5: Submit the form with Aadhaar and quotation. The bank will process and disburse the loan directly without middlemen.'
      ],
      ta: [
        'படி 1: உங்கள் தொழில் திட்டத்தை முடிவு செய்யுங்கள் (உதாரணமாக: தையல் இயந்திரம், மளிகை கடை, அழகு நிலையம்).',
        'படி 2: நீங்கள் வாங்க விரும்பும் இயந்திரங்கள் அல்லது பொருட்களின் விலைப்பட்டியலை (Quotation) பெறுங்கள்.',
        'படி 3: உங்கள் அருகிலுள்ள அரசு வங்கி கிளைக்கு (SBI, Canara Bank, Indian Bank) செல்லுங்கள் அல்லது udyamimitra.in தளத்தை பார்வையிடுங்கள்.',
        'படி 4: வங்கி மேலாளரிடம் "முத்ரா சிசு கடன்" (Mudra Shishu Form) விண்ணப்பத்தைப் பெறுங்கள்.',
        'படி 5: ஆதார் மற்றும் விலைப்பட்டியலுடன் சமர்ப்பியுங்கள். வங்கி நேரடியாக உங்கள் கணக்கில் பணத்தை வழங்கும், புரோக்கர்களுக்கு பணம் கொடுக்க வேண்டாம்.'
      ],
      hi: [
        'कदम 1: अपने व्यवसाय का चयन करें (जैसे सिलाई मशीन, किराना दुकान, ब्यूटी पार्लर)।',
        'कदम 2: जो सामान या मशीन खरीदनी है उसका कोटेशन दुकान से लें।',
        'कदम 3: अपने नजदीकी सरकारी बैंक (SBI, PNB, केनरा बैंक) जाएं या udyamimitra.in पर जाएं।',
        'कदम 4: बैंक अधिकारी से मुद्रा "शिशु लोन" फॉर्म मांगें।',
        'कदम 5: आधार कार्ड व कोटेशन के साथ फॉर्म जमा करें। बैंक बिना किसी बिचौलिए के ऋण मंजूर करेगा।'
      ]
    },
    whereToApply: {
      en: 'Any Nationalized Commercial Bank, Regional Rural Bank, Small Finance Bank, or udyamimitra.in',
      ta: 'அனைத்து அரசு வங்கிகள், கிராமப்புற வங்கிகள் அல்லது udyamimitra.in',
      hi: 'कोई भी राष्ट्रीयकृत सरकारी बैंक, ग्रामीण बैंक या udyamimitra.in'
    },
    officialWebsite: 'https://udyamimitra.in',
    isOfficialVerified: true,
    tollFreeHelpline: '1800-180-1111 / 1800-11-0001',
    tags: ['loan', 'business', 'money', 'tailoring', 'shop', 'parlour']
  },
  {
    id: 'sukanya-samriddhi',
    name: {
      en: 'Sukanya Samriddhi Yojana (SSY)',
      ta: 'செல்வமகள் சேமிப்பு திட்டம் (Sukanya Samriddhi)',
      hi: 'सुकन्या समृद्धि योजना (SSY)',
      te: 'సుకన్య సమృద్ధి యోజన'
    },
    category: 'child_welfare',
    categoryLabel: {
      en: 'Girl Child Welfare & Education',
      ta: 'பெண் குழந்தை நலன் மற்றும் கல்வி',
      hi: 'बालिका कल्याण और शिक्षा'
    },
    state: 'All India',
    ministry: 'Ministry of Finance, Govt of India',
    simpleWhat: {
      en: 'High-interest government savings scheme to ensure guaranteed money for your daughter’s college education and future marriage.',
      ta: 'உங்கள் பெண் குழந்தையின் கல்லூரி படிப்பு மற்றும் எதிர்காலத்திற்கு அதிக வட்டியுடன் அரசு தரும் உத்தரவாத சேமிப்பு திட்டம்.',
      hi: 'अपनी बेटी की उच्च शिक्षा और सुरक्षित भविष्य के लिए सरकार द्वारा उच्चतम ब्याज वाली विशेष बचत योजना।'
    },
    whoCanBenefit: {
      en: ['Parents or legal guardians of girl children', 'Girl child age must be below 10 years at time of opening', 'Up to 2 girl children per family'],
      ta: ['10 வயதுக்குட்பட்ட பெண் குழந்தையைக் கொண்ட பெற்றோர் அல்லது பாதுகாவலர்கள்', 'ஒரு குடும்பத்தில் அதிகபட்சமாக இரண்டு பெண் குழந்தைகளுக்கு இத்திட்டம் பொருந்தும்'],
      hi: ['10 वर्ष से कम आयु की बेटी के माता-पिता या कानूनी अभिभावक', 'एक परिवार में अधिकतम दो बेटियों के लिए']
    },
    mainBenefits: {
      en: ['High guaranteed government interest rate (currently ~8.2% per year)', 'Start with as little as ₹250 per year', 'Complete tax-free interest and maturity amount', '50% withdrawal allowed when the girl turns 18 for higher education'],
      ta: ['அரசின் மிக உயர்ந்த உத்தரவாத வட்டி (ஆண்டுக்கு சுமார் 8.2%)', 'ஆண்டுக்கு வெறும் ₹250 முதல் சேமிக்க தொடங்கலாம்', 'முதிர்வு தொகை மற்றும் வட்டிக்கு முழு வரி விலக்கு', 'மகளுக்கு 18 வயது முடிந்ததும் கல்லூரி கல்விக்காக 50% தொகையை எடுத்துக்கொள்ளலாம்'],
      hi: ['सरकार द्वारा सर्वाधिक सुरक्षित ब्याज दर (~8.2% प्रति वर्ष)', 'मात्र ₹250 सालाना से भी खाता शुरू कर सकते हैं', 'ब्याज और अंतिम राशि पूरी तरह टैक्स फ्री', 'बेटी के 18 वर्ष का होने पर उच्च शिक्षा के लिए 50% राशि निकालने की सुविधा']
    },
    eligibility: {
      en: ['Girl child must be an Indian resident', 'Girl child age should not exceed 10 years on application date', 'One account per girl child'],
      ta: ['பெண் குழந்தை இந்தியாவில் வசிப்பவராக இருக்க வேண்டும்', 'விண்ணப்பிக்கும் போது குழந்தையின் வயது 10-க்குள் இருக்க வேண்டும்', 'ஒரு குழந்தைக்கு ஒரு கணக்கு மட்டுமே அனுமதிக்கப்படும்'],
      hi: ['बेटी भारत की निवासी होनी चाहिए', 'आवेदन के समय बेटी की उम्र 10 वर्ष से कम हो', 'एक बेटी के नाम पर सिर्फ एक खाता खोला जा सकता है']
    },
    documentsRequired: {
      en: ['Birth Certificate of the girl child', 'Parent or Guardian Aadhaar Card & Address proof', 'Parent Passport size photo', 'Initial deposit amount (minimum ₹250)'],
      ta: ['பெண் குழந்தையின் பிறப்பு சான்றிதழ்', 'பெற்றோர் அல்லது பாதுகாவலரின் ஆதார் அட்டை', 'பெற்றோரின் பாஸ்போர்ட் அளவு புகைப்படம்', 'தொடக்க சேமிப்பு தொகை (குறைந்தது ₹250)'],
      hi: ['बेटी का जन्म प्रमाण पत्र', 'माता-पिता/अभिभावक का आधार कार्ड व पता प्रमाण', 'माता-पिता की पासपोर्ट फोटो', 'खाता खोलने के लिए न्यूनतम ₹250']
    },
    stepsToApply: {
      en: [
        'Step 1: Get the original Birth Certificate of your girl child.',
        'Step 2: Take your Aadhaar card and 2 passport photos.',
        'Step 3: Visit your nearest India Post Office or nationalized bank branch (SBI, PNB, etc.).',
        'Step 4: Ask for the Sukanya Samriddhi Yojana Account Opening Form (Form-1).',
        'Step 5: Deposit ₹250 minimum cash and collect your passbook immediately.'
      ],
      ta: [
        'படி 1: உங்கள் பெண் குழந்தையின் அசல் பிறப்பு சான்றிதழை எடுங்கள்.',
        'படி 2: உங்கள் ஆதார் அட்டை மற்றும் 2 பாஸ்போர்ட் புகைப்படங்களை தயாராக வையுங்கள்.',
        'படி 3: உங்கள் அருகிலுள்ள தபால் நிலையத்திற்கு (Post Office) அல்லது அரசு வங்கிக்கு செல்லுங்கள்.',
        'படி 4: செல்வமகள் சேமிப்பு திட்ட விண்ணப்ப படிவத்தை (Form-1) கேட்டுப் பெறுங்கள்.',
        'படி 5: குறைந்தது ₹250 செலுத்தி உங்கள் பாஸ்புத்தகத்தை உடனே பெற்றுக்கொள்ளுங்கள்.'
      ],
      hi: [
        'कदम 1: अपनी बेटी का जन्म प्रमाण पत्र साथ रखें।',
        'कदम 2: अपना आधार कार्ड और 2 पासपोर्ट फोटो लें।',
        'कदम 3: अपने नजदीकी डाकघर (Post Office) या सरकारी बैंक शाखा जाएं।',
        'कदम 4: सुकन्या समृद्धि योजना खाता खोलने का फॉर्म मांगें।',
        'कदम 5: कम से कम ₹250 जमा करके तुरंत पासबुक प्राप्त करें।'
      ]
    },
    whereToApply: {
      en: 'Any India Post Office or authorized commercial bank branch (SBI, Canara, PNB, etc.)',
      ta: 'அனைத்து அஞ்சல் நிலையங்கள் (Post Office) அல்லது பொதுத்துறை வங்கிகள்',
      hi: 'कोई भी भारतीय डाकघर (Post Office) या अधिकृत सरकारी बैंक'
    },
    officialWebsite: 'https://www.indiapost.gov.in',
    isOfficialVerified: true,
    tollFreeHelpline: '1800-266-6868',
    tags: ['girl-child', 'savings', 'education', 'daughter', 'post-office']
  },
  {
    id: 'pm-vishwakarma-tailor',
    name: {
      en: 'PM Vishwakarma Scheme (Free Sewing Machine & Toolkit Grant for Tailors)',
      ta: 'பிரதம மந்திரி விஸ்வகர்மா திட்டம் (தையல் தொழில் இலவச கருவி மானியம் ₹15,000)',
      hi: 'पीएम विश्वकर्मा योजना (दर्जी/सिलाई कार्य हेतु ₹15,000 टूलकिट अनुदान)',
      te: 'పీఎం విశ్వకర్మ పథకం (టైలరింగ్ గ్రాంట్)'
    },
    category: 'skill_development',
    categoryLabel: {
      en: 'Skill Development & Equipment Grant',
      ta: 'தொழில் பயிற்சி மற்றும் கருவி மானியம்',
      hi: 'कौशल प्रशिक्षण व उपकरण अनुदान'
    },
    state: 'All India',
    ministry: 'Ministry of Micro, Small and Medium Enterprises (MSME)',
    simpleWhat: {
      en: 'Free government training for women tailors and craftswomen, plus ₹15,000 free grant for modern sewing machine/toolkit and ₹500 daily stipend during training.',
      ta: 'தையல் தொழில் செய்யும் பெண்களுக்கு 5 நாட்கள் இலவச அரசு பயிற்சி, روز ₹500 உதவித்தொகை, மற்றும் நவீன தையல் இயந்திரம் வாங்க ₹15,000 இலவச மானியம் தரும் திட்டம்.',
      hi: 'सिलाई और दर्जी काम करने वाली महिलाओं को 5 दिन का मुफ्त सरकारी प्रशिक्षण, ₹500 प्रतिदिन भत्ता, और आधुनिक सिलाई मशीन खरीदने के लिए ₹15,000 की मुफ्त सरकारी मदद।'
    },
    whoCanBenefit: {
      en: ['Women involved in tailoring, dressmaking, embroidery, weaving, or doll making', 'Rural and urban craftswomen wanting to upgrade equipment'],
      ta: ['தையல், எம்பிராய்டரி, துணி தைத்தல், பொம்மை செய்தல் போன்ற கைவினை தொழில் செய்யும் பெண்கள்', 'கிராமப்புற மற்றும் நகர்ப்புற பெண்கள்'],
      hi: ['सिलाई, कढ़ाई, कपड़े सिलने या हस्तशिल्प का काम करने वाली महिलाएं', 'अपनी खुद की आधुनिक सिलाई मशीन खरीदना चाहने वाली महिलाएं']
    },
    mainBenefits: {
      en: ['₹15,000 e-voucher/grant for sewing machine and toolkit', 'Free 5-7 days skill training with ₹500/day cash stipend', 'PM Vishwakarma Certificate & ID card', 'Subsequent loan up to ₹1 Lakh to ₹2 Lakh at low 5% interest rate without collateral'],
      ta: ['தையல் இயந்திரம் வாங்க ₹15,000 இலவச இ-வவுச்சர் மானியம்', '5-7 நாட்கள் இலவச பயிற்சி மற்றும் நாள் ஒன்றுக்கு ₹500 உதவித்தொகை', 'அரசு விஸ்வகர்மா அடையாள அட்டை மற்றும் சான்றிதழ்', 'தொழிலை விரிவுபடுத்த 5% குறைந்த வட்டியில் ₹1 முதல் 2 லட்சம் வரை பிணையில்லா கடன்'],
      hi: ['सिलाई मशीन व टूलकिट के लिए ₹15,000 का मुफ्त ई-वाउचर अनुदान', '5 से 7 दिन का मुफ्त प्रशिक्षण और प्रतिदिन ₹500 का स्टाइपेंड', 'सरकारी विश्वकर्मा आईडी कार्ड व प्रमाण पत्र', 'बिना गारंटी मात्र 5% ब्याज पर ₹1 लाख से ₹2 लाख तक का आसान ऋण']
    },
    eligibility: {
      en: ['Applicant age must be 18 years or above', 'Engaged in tailor (Darzi) or artisan trade', 'Only one member per family', 'Family members should not be government servants'],
      ta: ['விண்ணப்பதாரரின் வயது 18 அல்லது அதற்கு மேல் இருக்க வேண்டும்', 'தையல் அல்லது பாரம்பரிய கைவினை தொழில் செய்பவராக இருக்க வேண்டும்', 'குடும்பத்தில் ஒருவருக்கு மட்டுமே பொருந்தும்', 'குடும்பத்தில் அரசு ஊழியர் இருக்கக்கூடாது'],
      hi: ['आवेदक की आयु 18 वर्ष या उससे अधिक हो', 'दर्जी या पारंपरिक शिल्प कार्य से जुड़े हों', 'एक परिवार में एक ही सदस्य को लाभ', 'परिवार का कोई सदस्य सरकारी सेवा में न हो']
    },
    documentsRequired: {
      en: ['Aadhaar Card with mobile linkage', 'Bank Account Passbook (with Aadhaar seeding)', 'Ration Card', 'Passport size photograph'],
      ta: ['மொபைல் எண்ணுடன் இணைக்கப்பட்ட ஆதார் அட்டை', 'ஆதாருடன் இணைக்கப்பட்ட வங்கி கணக்கு புத்தகம்', 'குடும்ப அட்டை (ரேஷன் கார்டு)', 'பாஸ்போர்ட் புகைப்படம்'],
      hi: ['मोबाइल से लिंक आधार कार्ड', 'आधार से जुड़ा बैंक पासबुक', 'राशन कार्ड', 'पासपोर्ट साइज फोटो']
    },
    stepsToApply: {
      en: [
        'Step 1: Take your Aadhaar linked with mobile and bank passbook.',
        'Step 2: Visit your nearby Common Service Center (CSC / e-Sevai / e-Mitra).',
        'Step 3: Tell the operator you want to apply for "PM Vishwakarma - Tailor (Darzi) Trade".',
        'Step 4: Complete biometric fingerprint verification.',
        'Step 5: Gram Panchayat / Urban local body verifies your application, after which you attend training and get ₹15,000 toolkit voucher.'
      ],
      ta: [
        'படி 1: மொபைலுடன் இணைக்கப்பட்ட ஆதார் அட்டை மற்றும் வங்கி பாஸ்புக்கை எடுங்கள்.',
        'படி 2: அருகிலுள்ள இ-சேவை மையம் (CSC / e-Sevai) செல்லுங்கள்.',
        'படி 3: "பிரதம மந்திரி விஸ்வகர்மா - தையல் தொழில் (Tailor Trade)" விண்ணப்பம் செய்ய வேண்டும் என்று கூறுங்கள்.',
        'படி 4: விரல் ரேகை (Biometric) பதிவு செய்து இலவசமாக விண்ணப்பியுங்கள்.',
        'படி 5: பஞ்சாயத்து சரிபார்ப்பிற்கு பின், பயிற்சி பெற்று ₹15,000 தையல் இயந்திர மானியம் பெறுங்கள்.'
      ],
      hi: [
        'कदम 1: आधार कार्ड और बैंक पासबुक लेकर जाएं।',
        'कदम 2: अपने नजदीकी जन सेवा केंद्र (CSC / ग्राहक सेवा केंद्र) जाएं।',
        'कदम 3: ऑपरेटर से कहें कि "पीएम विश्वकर्मा - दर्जी (Tailor) ट्रेड" में आवेदन करना है।',
        'कदम 4: फिंगरप्रिंट बायोमेट्रिक से फॉर्म भरें।',
        'कदम 5: पंचायत सत्यापन के बाद ट्रेनिंग पूरी करें और ₹15,000 टूलकिट वाउचर पाएं।'
      ]
    },
    whereToApply: {
      en: 'Nearest Common Service Centre (CSC) / e-Sevai Kendra or pmvishwakarma.gov.in',
      ta: 'அருகிலுள்ள இ-சேவை மையம் (CSC) அல்லது pmvishwakarma.gov.in',
      hi: 'निकटतम जन सेवा केंद्र (CSC / ग्राहक सेवा केंद्र) या pmvishwakarma.gov.in'
    },
    officialWebsite: 'https://pmvishwakarma.gov.in',
    isOfficialVerified: true,
    tollFreeHelpline: '1800-267-7777 / 17923',
    tags: ['tailoring', 'sewing-machine', 'free-machine', 'grant', 'skill', 'vishwakarma']
  },
  {
    id: 'pm-ujjwala',
    name: {
      en: 'Pradhan Mantri Ujjwala Yojana (PMUY - Free Gas Connection)',
      ta: 'பிரதம மந்திரி உஜ்வாலா திட்டம் (இலவச சமையல் எரிவாயு இணைப்பு)',
      hi: 'प्रधानमंत्री उज्ज्वला योजना (मुफ्त गैस कनेक्शन)',
      te: 'ప్రధాన మంత్రి ఉజ్జ్వల యోజన'
    },
    category: 'health_maternity',
    categoryLabel: {
      en: 'Health, Clean Energy & Kitchen Support',
      ta: 'சமையல் எரிவாயு மற்றும் ஆரோக்கியம்',
      hi: 'स्वच्छ रसोई गैस व स्वास्थ्य'
    },
    state: 'All India',
    ministry: 'Ministry of Petroleum and Natural Gas, Govt of India',
    simpleWhat: {
      en: 'Completely free LPG gas cylinder connection, free stove, and 1st cylinder refill in the name of the adult woman of the house, plus ₹300 subsidy per refill.',
      ta: 'குடும்பத் தலைவி பெயரில் இலவச சமையல் கேஸ் சிலிண்டர் இணைப்பு, இலவச அடுப்பு, முதல் சிலிண்டர் இலவசம் மற்றும் ஒவ்வொரு சிலிண்டருக்கும் ₹300 அரசு மானியம்.',
      hi: 'घर की महिला मुखिया के नाम पर पूरी तरह मुफ्त एलपीजी गैस कनेक्शन, चूल्हा, पहली रिफिल और हर सिलेंडर पर ₹300 की सीधी सरकारी सब्सिडी।'
    },
    whoCanBenefit: {
      en: ['Adult women from low-income or BPL households', 'SC/ST households, PMAY beneficiaries, Forest dwellers, Tea gardens', 'Households currently with no existing LPG gas connection'],
      ta: ['குறைந்த வருமானம் அல்லது வறுமைக்கோட்டிற்கு கீழ் (BPL) உள்ள குடும்ப பெண்கள்', 'வீட்டில் இதுவரை எந்த சமையல் எரிவாயு இணைப்பும் இல்லாத குடும்பங்கள்', 'SC / ST மற்றும் அரசு வீட்டு வசதி பயனாளிகள்'],
      hi: ['गरीब व निम्न आय वर्ग की वयस्क महिलाएं', 'जिनके घर में पहले से कोई गैस कनेक्शन नहीं है', 'एससी/एसटी, पीएम आवास लाभार्थी व बीपीएल परिवार']
    },
    mainBenefits: {
      en: ['100% free LPG connection in woman’s name with zero security deposit', 'Free gas stove (chulha) and safety regulator/pipe', 'First LPG refill cylinder completely free', '₹300 direct cash subsidy in bank account on every cylinder purchase'],
      ta: ['பெண் பெயரில் 100% இலவச கேஸ் இணைப்பு (வைப்புத் தொகை எதுவும் தேவையில்லை)', 'இலவச எரிவாயு அடுப்பு மற்றும் குழாய்/ரெகுலேட்டர்', 'முதல் சிலிண்டர் முற்றிலும் இலவசம்', 'ஒவ்வொரு முறை சிலிண்டர் வாங்கும் போதும் ₹300 அரசு மானியம் வங்கி கணக்கில் வரும்'],
      hi: ['महिला के नाम पर बिना किसी सिक्योरिटी डिपॉजिट के बिल्कुल मुफ्त गैस कनेक्शन', 'मुफ्त गैस चूल्हा, सुरक्षा पाइप व रेगुलेटर', 'पहला भरा हुआ गैस सिलेंडर पूरी तरह मुफ्त', 'हर सिलेंडर पर ₹300 की सीधी सरकारी सब्सिडी बैंक खाते में']
    },
    eligibility: {
      en: ['Woman must be aged 18 years or above', 'No other LPG connection in the same household', 'Must belong to eligible category (BPL, SECC, PMAY, SC/ST)'],
      ta: ['விண்ணப்பிக்கும் பெண்ணிற்கு 18 வயது முடிந்திருக்க வேண்டும்', 'குடும்பத்தில் வேறு யாரிடமும் சமையல் கேஸ் இணைப்பு இருக்கக்கூடாது', 'ரேஷன் அட்டை அல்லது வறுமைக்கோட்டுப் பட்டியலில் பெயர் இருக்க வேண்டும்'],
      hi: ['महिला की उम्र 18 वर्ष या उससे अधिक हो', 'घर में किसी अन्य सदस्य के नाम पर गैस कनेक्शन न हो', 'राशन कार्ड में नाम दर्ज हो']
    },
    documentsRequired: {
      en: ['Aadhaar Card of the woman applicant', 'Ration Card showing all adult family members', 'Bank Account Passbook (DBT-enabled)', 'Passport size photo of applicant'],
      ta: ['விண்ணப்பிக்கும் பெண்ணின் ஆதார் அட்டை', 'குடும்ப உறுப்பினர்களின் பெயர் உள்ள குடும்ப அட்டை (ரேஷன் கார்டு)', 'வங்கி கணக்கு புத்தகம் (ஆதார் இணைக்கப்பட்டது)', 'பாஸ்போர்ட் புகைப்படம்'],
      hi: ['महिला का आधार कार्ड', 'परिवार के सदस्यों के नाम वाला राशन कार्ड', 'आधार से जुड़ा बैंक खाता पासबुक', 'पासपोर्ट साइज फोटो']
    },
    stepsToApply: {
      en: [
        'Step 1: Gather your Aadhaar card, Ration card, and Bank passbook.',
        'Step 2: Visit your nearby Indane, Bharat Gas, or HP Gas distributor office.',
        'Step 3: Ask for the "PM Ujjwala 2.0 Application Form".',
        'Step 4: Fill the basic details (the agency will help you fill it for free).',
        'Step 5: The agency will deliver your new gas cylinder and stove to your home.'
      ],
      ta: [
        'படி 1: ஆதார் அட்டை, ரேஷன் கார்டு, வங்கி பாஸ்புக் ஆகியவற்றை எடுங்கள்.',
        'படி 2: உங்கள் அருகிலுள்ள இந்தியன் (Indane), பாரத் கேஸ் (Bharat Gas) அல்லது ஹெச்பி (HP Gas) முகவர் அலுவலகத்திற்கு செல்லுங்கள்.',
        'படி 3: "பிரதம மந்திரி உஜ்வாலா 2.0 விண்ணப்ப படிவம்" கேளுங்கள்.',
        'படி 4: படிவத்தை பூர்த்தி செய்து சமர்ப்பியுங்கள் (அவர்களே இலவசமாக பூர்த்தி செய்ய உதவுவார்கள்).',
        'படி 5: எரிவாயு சிலிண்டர் மற்றும் அடுப்பு உங்கள் வீட்டிற்கு கொண்டு வந்து ஒப்படைக்கப்படும்.'
      ],
      hi: [
        'कदम 1: आधार कार्ड, राशन कार्ड और बैंक पासबुक साथ रखें।',
        'कदम 2: अपने नजदीकी इंडियन (Indane), भारत गैस (Bharat Gas) या एचपी गैस (HP Gas) एजेंसी जाएं।',
        'कदम 3: "उज्ज्वला 2.0" का मुफ्त फॉर्म मांगें।',
        'कदम 4: दस्तावेज संलग्न करके फॉर्म जमा करें।',
        'कदम 5: एजेंसी द्वारा गैस चूल्हा व भरा सिलेंडर आपके घर पहुंचा दिया जाएगा।'
      ]
    },
    whereToApply: {
      en: 'Nearest LPG Gas Distributor (Indane / Bharat / HP) or pmuy.gov.in',
      ta: 'அருகிலுள்ள சமையல் எரிவாயு முகவர் (Indane / Bharat / HP Gas) அல்லது pmuy.gov.in',
      hi: 'निकटतम एलपीजी गैस एजेंसी (Indane / Bharat / HP) या pmuy.gov.in'
    },
    officialWebsite: 'https://www.pmuy.gov.in',
    isOfficialVerified: true,
    tollFreeHelpline: '1800-266-6696 / 1906',
    tags: ['gas', 'cylinder', 'chulha', 'kitchen', 'free-gas', 'subsidy']
  },
  {
    id: 'pm-awas-women',
    name: {
      en: 'Pradhan Mantri Awas Yojana (PMAY - Pucca House in Woman’s Name)',
      ta: 'பிரதம மந்திரி ஆவாஸ் திட்டம் (பெண்களுக்கான இலவச கான்கிரீட் வீடு)',
      hi: 'प्रधानमंत्री आवास योजना (महिला के नाम पक्का मकान)',
      te: 'ప్రధాన మంత్రి ఆవాస్ యోజన'
    },
    category: 'housing',
    categoryLabel: {
      en: 'Housing & Shelter',
      ta: 'வீட்டு வசதி மற்றும் பாதுகாப்பு',
      hi: 'आवास व पक्का मकान'
    },
    state: 'All India',
    ministry: 'Ministry of Housing & Urban Affairs / Ministry of Rural Development',
    simpleWhat: {
      en: 'Government financial grant of up to ₹1.2 Lakh to ₹2.5 Lakh to build a solid permanent concrete house, registered in the name of the female head of the family.',
      ta: 'குடும்ப பெண் தலைவி பெயரில் நிரந்தர கான்கிரீட் வீடு கட்ட அரசு வழங்கும் ₹1.2 லட்சம் முதல் ₹2.5 லட்சம் வரையிலான நேரடி உதவித்தொகை.',
      hi: 'परिवार की महिला के नाम पर पक्का मकान बनाने के लिए ₹1.2 लाख से ₹2.5 लाख तक की सीधी सरकारी वित्तीय सहायता।'
    },
    whoCanBenefit: {
      en: ['Homeless families or families living in kutcha/mud houses', 'Preference to widows, single women, disabled women, and female-headed households', 'Families without any existing pucca house anywhere in India'],
      ta: ['வீடு இல்லாதவர்கள் அல்லது குடிசை/மண் வீட்டில் வசிக்கும் குடும்பங்கள்', 'விதவைகள், ஆதரவற்ற பெண்கள், பெண் தலைமைக் குடும்பங்களுக்கு முன்னுரிமை', 'இந்தியாவில் எங்கும் சொந்த கான்கிரீட் வீடு இல்லாதவர்கள்'],
      hi: ['कच्चे मकान या झोपड़ी में रहने वाले परिवार', 'विधवा, एकल व महिला मुखिया परिवारों को प्राथमिकता', 'जिनके पास देश में कहीं भी पक्का मकान न हो']
    },
    mainBenefits: {
      en: ['Direct grant of ₹1,20,000 to ₹1,30,000 for rural house construction', 'Additional 90 days MGNREGA wages (~₹25,000) for house building labor', '₹12,000 dedicated grant for building a safe toilet under Swachh Bharat', 'Mandatory registration in the woman’s name or joint ownership'],
      ta: ['கிராமப்புற வீடு கட்ட ₹1,20,000 முதல் ₹1,30,000 வரை நேரடி மானியம்', 'வீடு கட்டும் கூலியாக 90 நாட்கள் 100 நாள் வேலைத்திட்ட கூலி (சுமார் ₹25,000)', 'கழிப்பறை கட்ட கூடுதலாக ₹12,000 மானியம்', 'வீடு கட்டாயமாக குடும்ப பெண் பெயரில் அல்லது கூட்டுப் பெயரில் பதிவு செய்யப்படும்'],
      hi: ['ग्रामीण मकान निर्माण हेतु सीधे खाते में ₹1,20,000 से ₹1,30,000 की मदद', 'मजदूरी के लिए 90 दिन की मनरेगा मजदूरी (~₹25,000)', 'शौचालय निर्माण के लिए ₹12,000 की अलग से सहायता', 'मकान का मालिकाना हक महिला के नाम पर अनिवार्य रूप से']
    },
    eligibility: {
      en: ['Family must not own a pucca house in India', 'Name should be in Gram Panchayat housing priority list (SECC / Awas+)', 'Aadhaar linkage is mandatory'],
      ta: ['குடும்பத்திற்கு இந்தியாவில் சொந்தமாக கான்கிரீட் வீடு இருக்கக்கூடாது', 'கிராம சபை வீட்டு வசதி முன்னுரிமை பட்டியலில் பெயர் இருக்க வேண்டும்', 'ஆதார் கார்டு கட்டாயம் இணைக்கப்பட வேண்டும்'],
      hi: ['परिवार के पास कोई पक्का मकान न हो', 'ग्राम पंचायत या आवास+ सूची में नाम शामिल हो', 'आधार कार्ड अनिवार्य']
    },
    documentsRequired: {
      en: ['Aadhaar Card of all family members', 'Bank Account Passbook (linked with Aadhaar)', 'MGNREGA Job Card (for rural)', 'Patta/Land document or certificate of possession', 'Ration Card'],
      ta: ['அனைத்து குடும்ப உறுப்பினர்களின் ஆதார் அட்டை', 'ஆதாருடன் இணைக்கப்பட்ட வங்கி புத்தகம்', '100 நாள் வேலை அட்டை (MGNREGA Job Card)', 'மனை பட்டா அல்லது நில ஆவணம்', 'ரேஷன் அட்டை'],
      hi: ['सभी सदस्यों का आधार कार्ड', 'आधार से लिंक बैंक पासबुक', 'मनरेगा जॉब कार्ड (ग्रामीण)', 'जमीन/पट्टा दस्तावेज', 'राशन कार्ड']
    },
    stepsToApply: {
      en: [
        'Step 1: Check if your name is in the Awas+ list at your Gram Panchayat or ward office.',
        'Step 2: Submit Aadhaar card, Job Card, and bank details to your Panchayat Secretary or Ward Councillor.',
        'Step 3: A village officer will visit your mud house to take a geo-tagged photograph.',
        'Step 4: Once sanctioned, money is released directly to your bank account in 3-4 installments as the foundation, walls, and roof are built.',
        'Step 5: Move into your permanent concrete home safely!'
      ],
      ta: [
        'படி 1: உங்கள் கிராம பஞ்சாயத்து அலுவலகத்தில் உள்ள ஆவாஸ்+ பட்டியலில் உங்கள் பெயர் உள்ளதா என சரிபாருங்கள்.',
        'படி 2: ஆதார் அட்டை, 100 நாள் வேலை அட்டை மற்றும் வங்கி பாஸ்புக்கை பஞ்சாயத்து செயலாளரிடம் கொடுங்கள்.',
        'படி 3: அரசு அதிகாரி உங்கள் குடிசை வீட்டை நேரில் வந்து போட்டோ எடுப்பார்.',
        'படி 4: அனுமதி கிடைத்தவுடன், அஸ்திவாரம், சுவர் மற்றும் கூரை அமையும் நிலைகளுக்கு ஏற்ப தவணையாக வங்கி கணக்கில் பணம் வரும்.',
        'படி 5: பாதுகாப்பான சொந்த கான்கிரீட் வீட்டில் மகிழ்ச்சியாக வாழுங்கள்!'
      ],
      hi: [
        'कदम 1: अपनी ग्राम पंचायत में आवास+ सूची में अपना नाम देखें।',
        'कदम 2: पंचायत सचिव या वार्ड पार्षद को आधार, जॉब कार्ड और बैंक विवरण दें।',
        'कदम 3: अधिकारी आपके कच्चे घर का जियो-टैग्ड फोटो लेंगे।',
        'कदम 4: स्वीकृति के बाद नींव, दीवार व छत ढलाई के अनुसार किस्तों में सीधा पैसा बैंक में आएगा।',
        'कदम 5: अपने खुद के पक्के मकान में सुरक्षित रहें।'
      ]
    },
    whereToApply: {
      en: 'Village Gram Panchayat Office / Block Development Office (BDO) / Urban Local Municipality or pmayg.nic.in',
      ta: 'கிராம பஞ்சாயத்து அலுவலகம் / வட்டார வளர்ச்சி அலுவலகம் (BDO) / நகராட்சி அலுவலகம்',
      hi: 'ग्राम पंचायत कार्यालय / ब्लॉक विकास अधिकारी (BDO) / नगरपालिका कार्यालय'
    },
    officialWebsite: 'https://pmayg.nic.in',
    isOfficialVerified: true,
    tollFreeHelpline: '1800-11-6446',
    tags: ['house', 'housing', 'pucca-house', 'shelter', 'pmay', 'home']
  },
  {
    id: 'tn-kmut',
    name: {
      en: 'Kalaignar Magalir Urimai Thogai Thittam (Tamil Nadu)',
      ta: 'கலைஞர் மகளிர் உரிமைத் திட்டம் (தமிழ்நாடு)',
      hi: 'कलाईनार महिला अधिकार योजना (तमिलनाडु)',
      te: 'తమిళనాడు మహిళా హక్కు పథకం'
    },
    category: 'financial',
    categoryLabel: {
      en: 'Monthly Financial Dignity Grant',
      ta: 'மாதாந்திர உரிமைத் தொகை',
      hi: 'मासिक वित्तीय सम्मान राशि'
    },
    state: 'Tamil Nadu',
    ministry: 'Department of Social Welfare and Women Empowerment, Govt of Tamil Nadu',
    simpleWhat: {
      en: 'Direct monthly cash grant of ₹1,000 credited every single month into the bank account of the woman head of eligible households in Tamil Nadu.',
      ta: 'தமிழ்நாட்டில் தகுதியான குடும்ப பெண் தலைவிகளுக்கு மாதம் தோறும் ₹1,000 வங்கி கணக்கில் நேரடியாக வரவு வைக்கப்படும் உரிமைத் தொகை திட்டம்.',
      hi: 'तमिलनाडु में पात्र परिवारों की महिला मुखिया को हर महीने सीधे बैंक खाते में ₹1,000 की नकद वित्तीय सहायता।'
    },
    whoCanBenefit: {
      en: ['Female head of household in Tamil Nadu', 'Age 21 years or older', 'Family annual income below ₹2.5 Lakhs'],
      ta: ['தமிழ்நாட்டில் குடும்ப அட்டை வைத்துள்ள குடும்ப பெண் தலைவி', '21 வயது நிரம்பிய பெண்கள்', 'குடும்ப ஆண்டு வருமானம் ₹2.5 லட்சத்திற்குள் உள்ளவர்கள்'],
      hi: ['तमिलनाडु की महिला मुखिया', '21 वर्ष या उससे अधिक आयु', 'पारिवारिक वार्षिक आय ₹2.5 लाख से कम']
    },
    mainBenefits: {
      en: ['Guaranteed ₹1,000 every month on the 15th directly into woman’s bank account', 'Full financial freedom for daily kitchen, children essentials, and healthcare', 'Direct SMS alert on fund credit without middlemen'],
      ta: ['ஒவ்வொரு மாதமும் 15-ஆம் தேதி ₹1,000 நேரடியாக பெண்ணின் வங்கி கணக்கில் வரவு', 'தினசரி குடும்பத் தேவைகள், குழந்தைகளின் கல்வி மற்றும் மருத்துவத்திற்கு முழு சுதந்திரம்', 'புரோக்கர்கள் இன்றி வங்கி கணக்கிற்கே நேரடியாக பணம்'],
      hi: ['हर महीने की 15 तारीख को ₹1,000 सीधे महिला के बैंक खाते में', 'दैनिक खर्चों, बच्चों की जरूरतों व दवाओं के लिए वित्तीय संबल', 'सीधे बैंक खाते में बिना किसी बिचौलिए के']
    },
    eligibility: {
      en: ['Resident of Tamil Nadu with Smart Family Card', 'Age 21 years completed', 'Owns less than 5 acres of wetland or 10 acres of dryland', 'Annual electricity consumption below 3,600 units'],
      ta: ['தமிழ்நாடு ஸ்மார்ட் ரேஷன் கார்டு இருக்க வேண்டும்', '21 வயது பூர்த்தியடைந்திருக்க வேண்டும்', 'குடும்பத்திற்கு சொந்தமாக 5 ஏக்கருக்குள் நஞ்சை அல்லது 10 ஏக்கருக்குள் புஞ்சை நிலம் மட்டுமே இருக்க வேண்டும்', 'ஆண்டு மின்சார பயன்பாடு 3,600 யூனிட்டிற்குள் இருக்க வேண்டும்'],
      hi: ['तमिलनाडु का स्मार्ट राशन कार्ड हो', '21 वर्ष की आयु पूरी हो', 'वार्षिक आय ₹2.5 लाख से कम हो']
    },
    documentsRequired: {
      en: ['Tamil Nadu Smart Ration Card', 'Aadhaar Card of applicant', 'Electricity Consumer Service Number', 'Bank Account Passbook (linked with Aadhaar)'],
      ta: ['தமிழ்நாடு ஸ்மார்ட் குடும்ப அட்டை (ரேஷன் கார்டு)', 'விண்ணப்பிக்கும் பெண்ணின் ஆதார் அட்டை', 'மின் இணைப்பு அட்டை / நுகர்வோர் எண்', 'ஆதாருடன் இணைக்கப்பட்ட வங்கி கணக்கு புத்தகம்'],
      hi: ['तमिलनाडु स्मार्ट राशन कार्ड', 'महिला का आधार कार्ड', 'बिजली उपभोक्ता नंबर', 'आधार से लिंक बैंक पासबुक']
    },
    stepsToApply: {
      en: [
        'Step 1: Check your family ration card; the woman listed as family head is eligible.',
        'Step 2: Collect your Smart Ration card, Aadhaar card, electricity bill, and bank passbook.',
        'Step 3: Visit your nearest e-Sevai Kendra or Fair Price Shop special camp.',
        'Step 4: Give your fingerprint biometric for Aadhaar authentication.',
        'Step 5: You will get an instant SMS receipt. Once verified, ₹1,000 arrives in your bank account every month.'
      ],
      ta: [
        'படி 1: உங்கள் ஸ்மார்ட் ரேஷன் கார்டில் குடும்ப தலைவியாக உள்ள பெண் விண்ணப்பிக்கலாம்.',
        'படி 2: ஸ்மார்ட் ரேஷன் கார்டு, ஆதார் அட்டை, மின் கட்டண ரசீது, வங்கி பாஸ்புக் ஆகியவற்றை எடுங்கள்.',
        'படி 3: உங்கள் அருகிலுள்ள இ-சேவை மையம் (e-Sevai) அல்லது ரேஷன் கடை சிறப்பு முகாமுக்கு செல்லுங்கள்.',
        'படி 4: விரல்ரேகை பயோமெட்ரிக் பதிவு செய்து இலவசமாக விண்ணப்பிக்கவும்.',
        'படி 5: ஒப்புதல் பெற்றவுடன், ஒவ்வொரு மாதமும் ₹1,000 உங்கள் வங்கி கணக்கில் நேரடியாக வரவு வைக்கப்படும்.'
      ],
      hi: [
        'कदम 1: स्मार्ट राशन कार्ड में दर्ज महिला मुखिया आवेदन के लिए पात्र हैं।',
        'कदम 2: राशन कार्ड, आधार, बिजली बिल व बैंक पासबुक साथ रखें।',
        'कदम 3: नजदीकी ई-सेवा केंद्र (e-Sevai) जाएं।',
        'कदम 4: बायोमेट्रिक फिंगरप्रिंट से फॉर्म सबमिट करें।',
        'कदम 5: सत्यापन के बाद हर महीने ₹1,000 खाते में आने शुरू होंगे।'
      ]
    },
    whereToApply: {
      en: 'Tamil Nadu e-Sevai Centres / Taluk Office / kmut.tn.gov.in',
      ta: 'தமிழ்நாடு இ-சேவை மையங்கள் / வட்டாட்சியர் அலுவலகம் / kmut.tn.gov.in',
      hi: 'तमिलनाडु ई-सेवा केंद्र / तहसील कार्यालय / kmut.tn.gov.in'
    },
    officialWebsite: 'https://kmut.tn.gov.in',
    isOfficialVerified: true,
    tollFreeHelpline: '1800-425-1604 / 044-25619208',
    tags: ['tamil-nadu', 'monthly-cash', 'women-rights', '1000-rupees', 'kmut']
  },
  {
    id: 'tn-pudhumai-penn',
    name: {
      en: 'Pudhumai Penn Scheme (Higher Education Assurance for Girls - Tamil Nadu)',
      ta: 'புதுமைப் பெண் திட்டம் (மூவலூர் ராமாமிர்தம் உயர்கல்வி உறுதித் திட்டம்)',
      hi: 'पुधुमै पेन योजना (उच्च शिक्षा प्रोत्साहन - तमिलनाडु)',
      te: 'పుదుమై పెన్ పథకం (ఉన్నత విద్య)'
    },
    category: 'education',
    categoryLabel: {
      en: 'Higher Education for Girls',
      ta: 'பெண்களின் உயர்கல்வி உறுதி',
      hi: 'बालिका उच्च शिक्षा सहायता'
    },
    state: 'Tamil Nadu',
    ministry: 'Social Welfare and Women Empowerment, Govt of Tamil Nadu',
    simpleWhat: {
      en: '₹1,000 every single month directly into girl students’ bank accounts until they finish college or diploma, for girls who studied in government schools.',
      ta: 'அரசு பள்ளிகளில் படித்து கல்லூரி அல்லது பட்டயப்படிப்பில் சேரும் மாணவிகளுக்கு படிப்பு முடியும் வரை மாதம் தோறும் ₹1,000 வழங்கும் திட்டம்.',
      hi: 'सरकारी स्कूल से पढ़कर कॉलेज या डिप्लोमा करने वाली छात्राओं को पढ़ाई पूरी होने तक हर महीने ₹1,000 की सीधी छात्रवृत्ति।'
    },
    whoCanBenefit: {
      en: ['Girl students studying in recognized colleges/diplomas in Tamil Nadu', 'Must have studied 6th to 12th standard in Tamil Nadu Government schools'],
      ta: ['தமிழ்நாட்டில் உள்ள அங்கீகரிக்கப்பட்ட கல்லூரிகள் அல்லது பாலிடெக்னிக்கில் படிக்கும் மாணவிகள்', '6-ஆம் வகுப்பு முதல் 12-ஆம் வகுப்பு வரை அரசுப் பள்ளிகளில் படித்திருக்க வேண்டும்'],
      hi: ['तमिलनाडु के कॉलेजों या डिप्लोमा में पढ़ने वाली छात्राएं', 'कक्षा 6 से 12वीं तक सरकारी स्कूल से पढ़ी हों']
    },
    mainBenefits: {
      en: ['₹1,000 credited every month into student’s personal bank account', 'Valid for entire course duration (3 to 5 years)', 'Can be availed along with other scholarships without restriction'],
      ta: ['மாணவியின் சொந்த வங்கி கணக்கில் மாதந்தோறும் ₹1,000 வரவு', 'கல்லூரி படிப்பு முடியும் வரை (3 முதல் 5 ஆண்டுகள்)', 'மற்ற அரசு கல்வி உதவித்தொகைகளுடன் சேர்த்தும் இத்தொகையைப் பெறலாம்'],
      hi: ['छात्रा के निजी बैंक खाते में हर माह ₹1,000 की राशि', 'पूरे कॉलेज कोर्स (3 से 5 साल) तक निरंतर', 'अन्य स्कॉलरशिप के साथ भी इस योजना का लाभ मान्य']
    },
    eligibility: {
      en: ['Girl student enrolled in undergraduate degree, diploma, ITI, or engineering/medicine', 'Studied Class 6 to Class 12 in Tamil Nadu Government schools', 'No income ceiling restrictions'],
      ta: ['இளங்கலை பட்டப்படிப்பு, டிப்ளமோ, ஐடிஐ, பொறியியல் அல்லது மருத்துவ படிப்பில் சேர்ந்திருக்க வேண்டும்', '6 முதல் 12 ஆம் வகுப்பு வரை தமிழக அரசுப் பள்ளியில் படித்திருக்க வேண்டும்', 'வருமான வரம்பு கிடையாது'],
      hi: ['डिग्री, डिप्लोमा, आईटीआई या प्रोफेशनल कोर्स में प्रवेश लिया हो', 'कक्षा 6 से 12 तक तमिलनाडु सरकारी स्कूल से पढ़ाई की हो']
    },
    documentsRequired: {
      en: ['Student Aadhaar Card', '6th to 12th Government School Study/Transfer Certificate (EMIS number)', 'College Admission ID / Bonafide Certificate', 'Student Bank Passbook'],
      ta: ['மாணவியின் ஆதார் அட்டை', '6 முதல் 12 வரை அரசு பள்ளியில் படித்ததற்கான பள்ளி சான்றிதழ் (EMIS எண்)', 'கல்லூரி அடையாள அட்டை / சேர்க்கை ரசீது', 'மாணவியின் வங்கி கணக்கு புத்தகம்'],
      hi: ['छात्रा का आधार कार्ड', 'कक्षा 6 से 12 सरकारी स्कूल प्रमाण पत्र (EMIS)', 'कॉलेज एडमिशन रसीद/आईडी', 'छात्रा का बैंक पासबुक']
    },
    stepsToApply: {
      en: [
        'Step 1: Secure admission in any recognized College, Polytechnic, or ITI.',
        'Step 2: Approach your college Pudhumai Penn Nodal Officer / Principal office.',
        'Step 3: Submit your school EMIS certificate proving you studied 6th-12th in govt school.',
        'Step 4: The college verifies and uploads your application on pudhumaipenn.tn.gov.in portal.',
        'Step 5: ₹1,000 starts crediting to your account every month.'
      ],
      ta: [
        'படி 1: ஏதேனும் ஒரு கல்லூரி, பாலிடெக்னிக் அல்லது ஐடிஐ-யில் சேருங்கள்.',
        'படி 2: உங்கள் கல்லூரியின் புதுமைப் பெண் ஒருங்கிணைப்பாளர் (Nodal Officer) அல்லது முதல்வர் அலுவலகத்தை அணுகுங்கள்.',
        'படி 3: 6 முதல் 12 வரை அரசுப் பள்ளியில் படித்த பள்ளி சான்றிதழ் மற்றும் வங்கி கணக்கு விவரத்தை கொடுங்கள்.',
        'படி 4: கல்லூரியே அதிகாரப்பூர்வ தளத்தில் உங்கள் விவரங்களை இலவசமாக பதிவேற்றும்.',
        'படி 5: மாதம் தோறும் ₹1,000 உங்கள் சொந்த வங்கி கணக்கிற்கு வந்துவிடும்.'
      ],
      hi: [
        'कदम 1: कॉलेज, पॉलिटेक्निक या आईटीआई में एडमिशन लें।',
        'कदम 2: अपने कॉलेज के नोडल अधिकारी से संपर्क करें।',
        'कदम 3: 6वीं से 12वीं तक सरकारी स्कूल का प्रमाण पत्र और बैंक विवरण जमा करें।',
        'कदम 4: कॉलेज द्वारा सीधे पोर्टल पर आवेदन सत्यापित किया जाएगा।',
        'कदम 5: हर महीने ₹1,000 आपके खाते में आने लगेंगे।'
      ]
    },
    whereToApply: {
      en: 'Through your College / Polytechnic Nodal Officer or pudhumaipenn.tn.gov.in',
      ta: 'உங்கள் கல்லூரி அல்லது பாலிடெக்னிக் முதல்வர் அலுவலகம் / pudhumaipenn.tn.gov.in',
      hi: 'अपने कॉलेज/पॉलिटेक्निक के माध्यम से या pudhumaipenn.tn.gov.in'
    },
    officialWebsite: 'https://pudhumaipenn.tn.gov.in',
    isOfficialVerified: true,
    tollFreeHelpline: '1800-425-1604 / 14417',
    tags: ['education', 'college', 'girl-student', 'scholarship', 'pudhumai-penn']
  },
  {
    id: 'ignwps-widow-pension',
    name: {
      en: 'Indira Gandhi National Widow Pension Scheme (IGNWPS)',
      ta: 'விதவை பெண்கள் முதியோர் மாதாந்திர ஓய்வூதியத் திட்டம் (IGNWPS)',
      hi: 'इंदिरा गांधी राष्ट्रीय विधवा पेंशन योजना',
      te: 'విధవ పింఛను పథకం'
    },
    category: 'social_security',
    categoryLabel: {
      en: 'Social Security & Monthly Pension',
      ta: 'சமூக பாதுகாப்பு மற்றும் மாதாந்திர ஓய்வூதியம்',
      hi: 'सामाजिक सुरक्षा व मासिक पेंशन'
    },
    state: 'All India',
    ministry: 'Ministry of Rural Development, Govt of India',
    simpleWhat: {
      en: 'Monthly pension directly into the bank account for widowed women living in low-income conditions to help them live with independence and dignity.',
      ta: 'கணவரை இழந்த குறைந்த வருமானம் கொண்ட பெண்கள் சுயமரியாதையுடன் வாழ அரசு வழங்கும் மாதாந்திர ஓய்வூதியத் திட்டம்.',
      hi: 'पति की मृत्यु के बाद आर्थिक रूप से कमजोर विधवा महिलाओं को सम्मान से जीने के लिए सरकार द्वारा मासिक पेंशन।'
    },
    whoCanBenefit: {
      en: ['Widowed women', 'Age 40 years or older (up to 79 years)', 'Belonging to BPL (Below Poverty Line) household'],
      ta: ['கணவரை இழந்த விதவை பெண்கள்', 'வயது 40 முதல் 79 வரை', 'வறுமைக்கோட்டிற்கு கீழ் வாழும் குடும்பத்தினர்'],
      hi: ['विधवा महिलाएं', 'आयु 40 से 79 वर्ष के बीच', 'बीपीएल राशन कार्ड धारक परिवार']
    },
    mainBenefits: {
      en: ['Monthly pension of ₹300 to ₹1,500 credited directly into bank account (varies with state government top-up, e.g. ₹1,000+ in TN/KA/MH)', 'Direct financial dignity without dependency on relatives', 'Free medicines in primary health centres'],
      ta: ['மாதாந்திர ஓய்வூதியம் நேரடியாக வங்கி கணக்கில் வரவு (மாநில அரசு கூடுதல் நிதியுடன் ₹1,000 முதல் ₹1,500 வரை)', 'உறவினர்களை எதிர்பார்க்காமல் சுதந்திரமாக வாழ நிதி ஆதரவு', 'அரசு மருத்துவமனைகளில் இலவச மருந்துகள்'],
      hi: ['हर महीने सीधे बैंक खाते में ₹300 से ₹1,500 तक की पेंशन (राज्य के अनुसार)', 'परिवार पर निर्भर रहे बिना स्वाभिमान से जीवन यापन', 'सरकारी अस्पतालों में मुफ्त इलाज']
    },
    eligibility: {
      en: ['Woman whose husband is deceased', 'Age between 40 and 79 years', 'Family holds BPL card or meets low income criteria', 'Not remarried'],
      ta: ['கணவர் இறந்த பெண்மணியாக இருக்க வேண்டும்', 'வயது 40 முதல் 79 வரை இருக்க வேண்டும்', 'வறுமைக்கோட்டு அட்டை வைத்திருக்க வேண்டும்', 'மறுமணம் செய்திருக்கக்கூடாது'],
      hi: ['महिला विधवा हो', 'आयु 40 से 79 वर्ष के बीच हो', 'बीपीएल राशन कार्ड या आय प्रमाण पत्र हो', 'पुनर्विवाह न किया हो']
    },
    documentsRequired: {
      en: ['Husband Death Certificate', 'Applicant Aadhaar Card', 'Age Proof (Voter card or School/Birth certificate)', 'BPL Ration Card or Income Certificate', 'Bank Account Passbook'],
      ta: ['கணவரின் இறப்பு சான்றிதழ்', 'விண்ணப்பதாரரின் ஆதார் அட்டை', 'வயது சான்று (வாக்காளர் அட்டை அல்லது மருத்துவ சான்று)', 'பிபிஎல் குடும்ப அட்டை அல்லது வருமான சான்றிதழ்', 'வங்கி கணக்கு புத்தகம்'],
      hi: ['पति का मृत्यु प्रमाण पत्र', 'महिला का आधार कार्ड', 'आयु प्रमाण (वोटर कार्ड या मेडिकल सर्टिफिकेट)', 'बीपीएल राशन कार्ड या आय प्रमाण पत्र', 'बैंक पासबुक']
    },
    stepsToApply: {
      en: [
        'Step 1: Get the death certificate of husband and your Aadhaar card.',
        'Step 2: Visit your Village Gram Panchayat / Block Development Office / Taluk Revenue Office.',
        'Step 3: Collect the National Social Assistance Programme (NSAP) pension form.',
        'Step 4: Submit the form with your bank passbook and BPL card.',
        'Step 5: Village Administrative Officer (VAO) verifies, and monthly pension begins in your account.'
      ],
      ta: [
        'படி 1: கணவரின் இறப்பு சான்றிதழ் மற்றும் உங்கள் ஆதார் அட்டையை எடுங்கள்.',
        'படி 2: உங்கள் கிராம நிர்வாக அலுவலர் (VAO), வட்டாட்சியர் அலுவலகம் (Taluk Office) அல்லது இ-சேவை மையம் செல்லுங்கள்.',
        'படி 3: விதவை ஓய்வூதிய விண்ணப்ப படிவத்தைப் பூர்த்தி செய்யுங்கள்.',
        'படி 4: வங்கி பாஸ்புக் மற்றும் குடும்ப அட்டையுடன் சமர்ப்பியுங்கள்.',
        'படி 5: அதிகாரி சரிபார்த்த பின், மாதம் தோறும் ஓய்வூதியம் உங்கள் கணக்கில் வரத் தொடங்கும்.'
      ],
      hi: [
        'कदम 1: पति का मृत्यु प्रमाण पत्र और अपना आधार कार्ड लें।',
        'कदम 2: ग्राम पंचायत / ब्लॉक कार्यालय / तहसील कार्यालय या ग्राहक सेवा केंद्र जाएं।',
        'कदम 3: विधवा पेंशन का फॉर्म भरें।',
        'कदम 4: बैंक पासबुक और राशन कार्ड के साथ जमा करें।',
        'कदम 5: सत्यापन के बाद हर माह पेंशन बैंक खाते में आनी शुरू होगी।'
      ]
    },
    whereToApply: {
      en: 'Village Panchayat Office / Taluk Office / Common Service Centre (CSC) or nsap.nic.in',
      ta: 'கிராம நிர்வாக அலுவலர் (VAO) / வட்டாட்சியர் அலுவலகம் / இ-சேவை மையம் அல்லது nsap.nic.in',
      hi: 'ग्राम पंचायत / ब्लॉक कार्यालय / तहसील / जन सेवा केंद्र या nsap.nic.in'
    },
    officialWebsite: 'https://nsap.nic.in',
    isOfficialVerified: true,
    tollFreeHelpline: '1800-11-1967 / 14567',
    tags: ['widow-pension', 'pension', 'financial-security', 'elderly', 'nsap']
  },
  {
    id: 'stand-up-india',
    name: {
      en: 'Stand-Up India Scheme for Women Entrepreneurs',
      ta: 'பெண்களுக்கான ஸ்டாண்ட்-அப் இந்தியா பெருந்தொழில் கடன் திட்டம்',
      hi: 'स्टैंड-अप इंडिया योजना (महिला उद्यमी)',
      te: 'స్టాండప్ ఇండియా పథకం'
    },
    category: 'self_employment',
    categoryLabel: {
      en: 'Greenfield Business & Enterprise Loans',
      ta: 'புதிய தொழில் மற்றும் உற்பத்தி நிறுவனம்',
      hi: 'नया उद्योग व व्यापार ऋण'
    },
    state: 'All India',
    ministry: 'Ministry of Finance / SIDBI, Govt of India',
    simpleWhat: {
      en: 'Substantial bank loans between ₹10 Lakhs and ₹1 Crore for women setting up manufacturing, trading, services, or agricultural businesses for the very first time.',
      ta: 'உற்பத்தி, வர்த்தகம் அல்லது சேவைத் துறையில் முதன்முறையாக புதிய தொழில் நிறுவனங்களை தொடங்கும் பெண்களுக்கு ₹10 லட்சம் முதல் ₹1 கோடி வரை வங்கி கடன் வழங்கும் திட்டம்.',
      hi: 'पहली बार कोई फैक्ट्री, दुकान, सेवा या कृषि-आधारित उद्योग लगाने वाली महिलाओं को ₹10 लाख से ₹1 करोड़ तक का बड़ा बैंक लोन।'
    },
    whoCanBenefit: {
      en: ['Any woman citizen of India above 18 years of age', 'Setting up a brand-new (greenfield) enterprise in manufacturing, services, agri-allied or trading sectors'],
      ta: ['18 வயது நிரம்பிய இந்திய பெண்கள்', 'உற்பத்தி, சேவை, விவசாயம் சார்ந்த தொழில் அல்லது வர்த்தகத்தில் புதிய நிறுவனம் தொடங்குபவர்கள்'],
      hi: ['18 वर्ष से अधिक आयु की भारतीय महिलाएं', 'मैन्युफैक्चरिंग, सर्विस या ट्रेडिंग में नई कंपनी शुरू करने वाली उद्यमी']
    },
    mainBenefits: {
      en: ['Bank loan ranging from ₹10 Lakh to ₹1 Crore', 'Covers up to 85% of total project cost', 'Repayment tenure up to 7 years with 18-month moratorium', 'Free handholding and technical mentoring support by SIDBI'],
      ta: ['₹10 லட்சம் முதல் ₹1 கோடி வரையிலான தொழில் கடன்', 'திட்ட மதிப்பீட்டில் 85% வரை கடன் உதவி', '7 ஆண்டுகள் வரை திருப்பி செலுத்தும் அவகாசம் (18 மாத சலுகை காலத்துடன்)', 'SIDBI மூலம் இலவச வழிகாட்டுதல் மற்றும் தொழில்நுட்ப ஆலோசனை'],
      hi: ['₹10 लाख से ₹1 करोड़ तक का बैंक लोन', 'परियोजना लागत का 85% तक बैंक सहायता', '7 साल तक चुकाने का आसान समय', 'सिडबी (SIDBI) द्वारा तकनीकी व व्यापारिक मार्गदर्शन']
    },
    eligibility: {
      en: ['Woman entrepreneur holding at least 51% of shareholding and controlling stake', 'Must be a greenfield enterprise (first-time business venture)', 'No previous loan default in any bank'],
      ta: ['தொழில் நிறுவனத்தில் குறைந்தது 51% பங்கு பெண்ணின் பெயரில் இருக்க வேண்டும்', 'புதிய தொழில் முயற்சியாக (Greenfield) இருக்க வேண்டும்', 'வங்கியில் முந்தைய கடன் பாக்கி இருக்கக்கூடாது'],
      hi: ['कंपनी में कम से कम 51% हिस्सेदारी महिला की होनी चाहिए', 'नया (ग्रीनफील्ड) व्यवसाय होना चाहिए', 'किसी बैंक में डिफाल्टर न हों']
    },
    documentsRequired: {
      en: ['Aadhaar Card and PAN Card', 'Detailed Project Report (DPR) / Business Plan', 'Proof of Business Address / Proposed Premise', 'Bank Account Statement (last 6 months)', 'Partnership deed / MSME Udyam registration (if registered)'],
      ta: ['ஆதார் அட்டை மற்றும் பான் கார்டு', 'தொழில் திட்ட அறிக்கை (DPR)', 'தொழில் தொடங்கும் இடத்திற்கான சான்று', 'கடந்த 6 மாத வங்கி கணக்கு அறிக்கை', 'எம்.எஸ்.எம்.இ உத்யம் பதிவு சான்றிதழ்'],
      hi: ['आधार कार्ड व पैन कार्ड', 'प्रोजेक्ट रिपोर्ट (बिजनेस प्लान)', 'व्यापार स्थल का प्रमाण', '6 महीने का बैंक स्टेटमेंट', 'उद्यम पंजीकरण']
    },
    stepsToApply: {
      en: [
        'Step 1: Prepare a basic project report outlining what business you want to start.',
        'Step 2: Visit standupmitra.in portal or visit the Lead District Manager (LDM) at your local lead bank.',
        'Step 3: Register on standupmitra.in and select "Borrower".',
        'Step 4: Receive handholding assistance from designated agency to complete the loan file.',
        'Step 5: Bank branch sanctions the term loan and working capital.'
      ],
      ta: [
        'படி 1: நீங்கள் தொடங்க விரும்பும் தொழில் பற்றிய திட்ட அறிக்கையைத் தயார் செய்யுங்கள்.',
        'படி 2: standupmitra.in தளத்திற்கு செல்லுங்கள் அல்லது மாவட்ட முன்னணி வங்கியை (Lead Bank) அணுகுங்கள்.',
        'படி 3: தளத்தில் பதிவு செய்து உங்கள் தொழில் விவரங்களை நிரப்புங்கள்.',
        'படி 4: வழிகாட்டுதல் ஏஜென்சி உங்களுக்கு ஆவணங்களை தயார் செய்ய உதவும்.',
        'படி 5: வங்கி கிளை கடனை அனுமதித்து உங்கள் தொழில் கனவை நிறைவேற்றும்.'
      ],
      hi: [
        'कदम 1: अपने व्यवसाय की विस्तृत प्रोजेक्ट रिपोर्ट तैयार करें।',
        'कदम 2: standupmitra.in पोर्टल पर जाएं या जिले के लीड बैंक से संपर्क करें।',
        'कदम 3: पोर्टल पर "Borrower" के रूप में रजिस्टर करें।',
        'कदम 4: बैंक व सिडबी से निशुल्क मार्गदर्शन लें।',
        'कदम 5: बैंक द्वारा ऋण स्वीकृत होने के बाद व्यवसाय शुरू करें।'
      ]
    },
    whereToApply: {
      en: 'standupmitra.in or any Scheduled Commercial Bank branch across India',
      ta: 'standupmitra.in அல்லது ஏதேனும் ஒரு வணிக வங்கி கிளை',
      hi: 'standupmitra.in या किसी भी राष्ट्रीयकृत बैंक शाखा में'
    },
    officialWebsite: 'https://www.standupmitra.in',
    isOfficialVerified: true,
    tollFreeHelpline: '1800-180-1111 / 1800-11-2211',
    tags: ['big-loan', 'business', 'entrepreneur', 'stand-up-india', 'factory', 'startup']
  }
];

export const SAFETY_GUIDELINES = {
  rule1: 'DISA and Indian Government never ask for your ATM PIN, UPI PIN, Passwords, or OTP.',
  rule2: 'All official government applications are free or have nominal standard government fees. Never pay money to middlemen or unauthorized agents.',
  rule3: 'Always verify final eligibility at the official government office (Gram Panchayat, e-Sevai, CSC, or official portal).',
  freeTollFreeHelpline: 'National Citizen Helpline: 14449 / Women Helpline: 181 / Childline: 1098'
};
