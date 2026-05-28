export type WorldSection = 'factions' | 'terms' | 'ego' | 'characters';

export interface CharacterProfile {
  gender?: string;
  department?: string;
  weapon?: string;
  personalityKeywords?: string[];
  features?: string[];
}

export interface LoreEntry {
  id: string;
  title: string;
  description: string;
  subContent?: LoreEntry[];
  example?: string;
  color?: string;
  profile?: CharacterProfile;
}

export const FACTIONS: LoreEntry[] = [
  {
    id: 'psyche',
    title: 'P.S.Y.C.H.E',
    description: '정신 공간 인지 재해 집행부 (Psycho Spatial Yield Cognitive Hazard Executive). 개방된 자아심도를 닫는 프시케들의 본부.',
  },
  {
    id: 'schadenfreude',
    title: '샤덴프로이데 (Schadenfreude)',
    description: '가스라이터들이 소속된 곳. 점 조직이기에 서로가 서로를 알지 못할 때도 있다.',
  }
];

export const EGO_DEPTH: LoreEntry[] = [
  {
    id: 'ego-depth',
    title: '자아심도 (Ego Depth)',
    description: '감정과 기억, 무의식이 현실 구조처럼 굳어져 형성된 또 하나의 차원. 특정 조건 아래에서 균열처럼 열리기도 하며, 감정이 강할수록 선명하고 거대해진다.'
  },
  {
    id: 'ego-abyss',
    title: '자아심층 (Ego Abyss)',
    description: '자아심도의 가장 깊은 곳. 드림 코어가 위치해 있으며, 인물을 형성한 핵심 감정과 근원적 기억이 잠들어 있다.'
  },
  {
    id: 'phenomena',
    title: '현상체 (Phenomena Entity)',
    description: '과거의 기억이나 왜곡된 인식 등으로부터 자아심도 내부에 만들어진 존재. 인간의 형태로 나타나며 진입자와 상호작용한다.'
  },
  {
    id: 'status',
    title: '상태 유형',
    description: '자아심도의 안정성에 따른 분류.',
    subContent: [
      { id: 'superego', title: '초자아 (Superego)', description: '완전한 자아심도. 드림 코어로 도달하는 과정이 비정상적으로 길다.' },
      { id: 'id', title: '이드 (Id)', description: '불안정한 자아심도. 현실에도 물리적인 영향을 미친다.' }
    ]
  }
];

export const TERMS: LoreEntry[] = [
  {
    id: 'opening',
    title: '개방 (Open Depth)',
    description: '자아심도를 여는 행위.',
    subContent: [
      { id: 'gaslighting', title: '가스라이팅 (Gaslighting)', description: '타인이 트라우마를 자극하여 강제로 개방시키는 행위. 매우 위험하다.' },
      { id: 'submergence', title: '침잠 (Submergence)', description: '감정이 극한에 달해 한계를 넘어 자아심도가 개방되는 일반적인 현상.' }
    ]
  },
  {
    id: 'closing',
    title: '자아심도를 닫는 방법',
    description: '드림 코어에 접근해 감정을 받아들이게 유도한다.',
    subContent: [
      { id: 'accept', title: '받아들일 경우', description: '자아심도가 닫히고 주인이 정상으로 돌아온다. 드림 코어는 장신구 형태로 남는다.' },
      { id: 'reject', title: '받아들이지 않을 경우', description: '현실까지 침식된다. 주인을 죽이거나 드림 코어를 파괴해야 한다 (파괴 시 주인은 감정을 상실함).' }
    ]
  },
  {
    id: 'roles',
    title: '역할군',
    description: '자아심도와 연관된 존재들.',
    subContent: [
      { id: 'psyche-term', title: '프시케', description: '자아심도를 닫는 자들을 칭한다.' },
      { id: 'gaslighter-term', title: '가스라이터', description: '타인의 자아심도를 강제로 개방시키는 자들을 칭한다.' }
    ]
  }
];

export const PSYCHE_DEPTS: LoreEntry[] = [
  { 
    id: 'dep-identity', 
    title: '인격 소실 관찰부', 
    description: '자아 해리성 정체감 중첩도를 담당하는 부서. 가스라이터와 샤덴프로이데의 검거를 담당하기도 한다.', 
    color: '#9CA3AF',
    subContent: [
      { 
        id: 'member-1', 
        title: '에이달라나', 
        description: '소속 요원',
        profile: {
          gender: '女',
          department: '인격 소실 관찰부',
          weapon: '너클, 전기충격기',
          personalityKeywords: ['능글맞은', '여유로운', '불안정한'],
          features: [
            '에이프릴을 자주 괴롭힌다',
            '경미한 우울증을 보인다'
          ]
        }
      },
      { 
        id: 'member-2', 
        title: '에이프릴', 
        description: '소속 요원',
        profile: {
          gender: '女',
          department: '인격 소실 관찰부',
          weapon: '톤파',
          personalityKeywords: ['츤데례', '내향적인', '공감하는'],
          features: [
            '인격 소실 관찰부 막내',
            '머리를 기르고 있다',
            '여러모로 과거에 머무는 경향이 강하다',
            '날붙이를 싫어한다'
          ]
        }
      },
      { 
        id: 'member-3', 
        title: '밀리건', 
        description: '소속 요원',
        profile: {
          gender: '男',
          department: '인격 소실 관찰부',
          weapon: '진압방패',
          personalityKeywords: ['느긋한', '귀찮음이 강한', '어른의 여유'],
          features: [
            '중년. 인격 소실 관찰부 최연장자',
            '담배를 물지 않았을 때를 찾기 힘든 애연가',
            '과거의 일인지 양 팔뚝에 잔상처가 있다'
          ]
        }
      },
      { 
        id: 'p-seonsaeng', 
        title: "'선생'", 
        description: '소속 요원',
        profile: {
          gender: '女',
          department: '인격 소실 관찰부',
          weapon: '권총',
          personalityKeywords: ['유순한', '공감하는', '다정한'],
          features: [
            '포스트잇으로 얼굴을 가려 좀처럼 눈을 볼 수 없다',
            '본명은 밝히지 않고 있다',
            '누군가를 부를 때 ~씨를 붙인다 (ex: 에이프릴 씨, 밀리건 씨)'
          ]
        }
      }
    ]
  },
  { 
    id: 'dep-bender', 
    title: '벤더 게슈탈트 부서', 
    description: '프시케의 교육을 담당하는 부서. Bender-Gestalt Test, 일명 BGT를 통해 프시케를 교육시킨다.', 
    color: '#22C55E',
    subContent: [
      { id: 'member-1', title: '라포', description: '소속 요원' },
      { id: 'member-2', title: '비제트', description: '소속 요원' },
      { id: 'member-3', title: '미노', description: '소속 요원' },
      { id: 'member-4', title: '베이머', description: '소속 요원' }
    ]
  },
  { 
    id: 'dep-thematic', 
    title: '주제통각 정보부', 
    description: '정신 공간 인지 재해 집행부 내부의 정보를 정리하는 부서. 커피를 달고 산다.', 
    color: '#C6A34F',
    subContent: [
      { id: 'member-1', title: '슈와므', description: '소속 요원' },
      { id: 'member-2', title: '하레노이', description: '소속 요원' },
      { id: 'member-3', title: '쟌', description: '소속 요원' },
      { id: 'member-4', title: '이노', description: '소속 요원' }
    ]
  },
  { 
    id: 'dep-rorschach', 
    title: '로르샤흐 부서', 
    description: '정신 공간 인지 재해 집행부 내부의 상담을 담당하는 부서이자 침잠으로 개방된 자아심도를 담당한다. 자아심도 내부의 현상체와 상호작용 하여 드림 코어로 접근한다.', 
    color: '#FEF08A',
    subContent: [
      { id: 'member-1', title: '티란', description: '소속 요원' },
      { id: 'member-2', title: '데시마', description: '소속 요원' },
      { id: 'member-3', title: '르셰', description: '소속 요원' },
      { id: 'member-4', title: '아즈와', description: '소속 요원' }
    ]
  },
  { 
    id: 'dep-htp', 
    title: 'H.T.P 부서', 
    description: '예술가들로 이루어진 부서. 자아심도 내부의 배경을 분석하여 어느 감정들이 섞여 만들어진 자아심도인지를 추론해 드림 코어로 한결 수월하게 접근한다.', 
    color: '#A855F7',
    subContent: [
      { id: 'member-1', title: '호넷', description: '소속 요원' },
      { id: 'member-2', title: '스카라무슈', description: '소속 요원' },
      { id: 'member-3', title: '트리비아', description: '소속 요원' }
    ]
  },
  { 
    id: 'dep-wais-wisc', 
    title: 'WAIS, WISC 부서', 
    description: '보통 \'웩슬러 부서\' 또는 \'쌍둥이 부서\'라고 불린다. 본래 떨어져있던 두 부서가 통합된 것으로, 초자아 또는 이드를 담당한다.', 
    color: 'mint-black',
    subContent: [
      { id: 'member-1', title: '이혜인', description: '소속 요원' },
      { id: 'member-2', title: '이다인', description: '소속 요원' },
      { id: 'member-3', title: '베니', description: '소속 요원' },
      { id: 'member-4', title: '바이스', description: '소속 요원' }
    ]
  },
  { 
    id: 'dep-superego', 
    title: '초자아 징계부', 
    description: '정신 공간 인지 재해 집행부 내부의 질서를 바로잡는 부서. 자아심도를 받아들여 장신구가 있는 자들로 구성된다.', 
    color: '#991B1B',
    subContent: [
      { id: 'member-1', title: '마우그리스', description: '소속 요원' },
      { id: 'member-2', title: '캐러독', description: '소속 요원' },
      { id: 'member-3', title: '로베이라', description: '소속 요원' },
      { id: 'member-4', title: '막야', description: '소속 요원' }
    ]
  },
  { 
    id: 'dep-sigmund', 
    title: '지그문트 부서', 
    description: '새로 창설된 부서. 포괄적인 업무를 담당받는다.', 
    color: '#FFFFFF',
    subContent: [
      { id: 'member-1', title: '태아', description: '소속 요원' },
      { id: 'member-2', title: '마거릿', description: '소속 요원' },
      { id: 'member-3', title: '독타', description: '소속 요원' }
    ]
  }
];

export const EMOTIONS: LoreEntry[] = [
  { 
    id: 'guilt', 
    title: '죄책감', 
    description: '좁고 긴 복도', 
    example: '복도는 지나치게 좁았어. 숨을 들이쉴 때마다 벽이 조금씩 가까워지는 기분이 들었지.', 
    color: 'rgba(128, 128, 128, 0.4)',
    profile: {
      features: [
        '압박감과 정체감을 가진다',
        '쉽게 떠날 수 있지만 떠나선 안 될 것 같은 느낌이 수시로 든다',
        '죄책감의 공간은 과거의 흔적이나 사용감이 남아있다',
        '소리, 발자국, 숨소리 등이 비정상적으로 크게 느껴진다',
        '빛이 희미하거나 불완전하다'
      ]
    }
  },
  { 
    id: 'anger', 
    title: '분노', 
    description: '화염', 
    example: '불길은 무언가를 태우기 위해 존재하는 게 아니었어. 그저 멈추지 못한 채 타오르고 있었지.', 
    color: 'rgba(220, 38, 38, 0.4)',
    profile: {
      features: [
        '공간은 날카롭고 공격적인 구조를 가진다',
        '붉거나 과열된 색감, 금속성 질감, 깨진 구조물 등이 나타난다',
        '만져도 뜨겁지 않은 불길이 있다',
        '불안정한 소리(진동, 파열음, 금속 마찰음 등)가 반복된다',
        '억눌린 폭발 직전의 분위기를 풍긴다',
        '무언가 부서졌거나 부서질 것 같은 긴장감이 계속해서 느껴진다'
      ]
    }
  },
  { 
    id: 'loss', 
    title: '상실', 
    description: '새하얀 방안, 검은 소파 두 개', 
    example: '새하얀 방 안에는 서로를 마주보는 소파 두 개만 있었어. 하지만 그 어디에도 사람은 없었지.', 
    color: 'noise',
    profile: {
      features: [
        '공간은 비어있거나 지나치게 넓게 느껴진다',
        '누군가 있었던 흔적만 남아있다',
        '소리는 멀고 희미하며 공허하게 퍼진다',
        '이미 끝난 장소 같은 분위기를 가진다',
        '부재감이 남아있다'
      ]
    }
  },
  { 
    id: 'obsession', 
    title: '집착', 
    description: '무한 반복 복도', 
    example: '몇 번을 걸어도 같은 문, 같은 조명, 같은 발소리였어.', 
    color: 'rgba(239, 68, 68, 0.2)',
    profile: {
      features: [
        '동일한 구조나 사물이 반복된다',
        '특정 대상이나 장소가 과하게 강조된다',
        '반복되는 듯한 느낌이 든다',
        '정돈되어 있으나 비정상적으로 강박적이다',
        '시선이 붙잡히는 특정 요소가 있다'
      ]
    }
  },
  { 
    id: 'fear', 
    title: '공포', 
    description: '어둠', 
    example: '아무것도 보이지 않았어. 그런데 분명 어딘가에서 숨소리가 들려왔지. 문제는 방향조차 알 수 없다는 거야.', 
    color: 'rgba(147, 51, 234, 0.2)',
    profile: {
      features: [
        '시야가 제한되거나 구조가 불분명하다',
        '인기척과 침묵이 반복된다',
        '무언가 가까이 있는 듯하지만 명확히 보이지 않는다',
        '안전지대가 존재하지 않는 느낌이 든다',
        '어둠 속 방향이 특정되지 않는 곳에서 소리가 들려온다'
      ]
    }
  },
  { id: 'love', title: '사랑', description: '체온이 남은 공간', example: '누군가는 이미 떠났는데도 방 안은 아직 따뜻했어.', color: 'rgba(244, 114, 182, 0.05)' },
  { id: 'sadness', title: '슬픔', description: '비와 회색빛 거리', example: '회색 도시 위로 비가 내리고 있었어. 누구도 하늘을 올려다보진 않았지.', color: 'rgba(59, 130, 246, 0.05)' },
  { id: 'sorrow', title: '비애', description: '어두운 바다', example: '바다는 너무 검어서 깊이조차 보이지 않았어.', color: 'rgba(30, 58, 138, 0.05)' },
  { id: 'loneliness', title: '고독', description: '텅 빈 도시', example: '도시에는 삶의 흔적이 있었지만, 아무 목소리도 들리지 않았지.', color: 'rgba(55, 65, 81, 0.05)' },
  { id: 'regret', title: '후회', description: '한 장면만 반복되는 영화관', example: '스크린 속 사람은 같은 말을 끝없이 반복하고 있었어.', color: 'rgba(100, 116, 139, 0.05)' },
  { id: 'hatred', title: '증오', description: '금이 간 거울이 가득한 공간', example: '거울 속 얼굴은 전부 조금씩 망가져 있었지.', color: 'rgba(127, 29, 29, 0.05)' },
  { id: 'hope', title: '희망', description: '아주 멀리 있는 빛', example: '닿을 수 있을지조차 모르겠지만, 사람은 결국 저 빛을 향해 걷게 되더라.', color: 'rgba(234, 179, 8, 0.05)' },
  { id: 'greed', title: '탐욕', description: '끝이 보이지 않는 구덩이', example: '아래를 내려다봤지만 바닥은 보이지 않았어.', color: 'rgba(198, 163, 79, 0.08)' },
  { id: 'nostalgia', title: '향수', description: '체취가 남은 공간', example: '오래전에 잊었다고 생각했던 냄새가 아직 공간에 남아 있었지.', color: 'rgba(254, 252, 232, 0.15)' },
  { id: 'sloth', title: '나태', description: '멈춰버린 시계탑', example: '시간은 멈춘 게 아니었어. 그저 흐르길 거부하고 있을 뿐이었지.', color: 'rgba(234, 179, 8, 0.08)' },
  { id: 'ennui', title: '권태', description: '색이 바랜 정원', example: '아름다웠을 꽃들은 이제 아무런 감흥도 주지 못한 채 시들어 있었지.', color: 'rgba(161, 161, 170, 0.08)' },
  { id: 'jealousy', title: '질투', description: '어긋난 조각들', example: '그것이 내 것이어야만 했다는 생각이 머릿속을 독처럼 파고들었어.', color: 'rgba(147, 51, 234, 0.08)' },
  { id: 'anxiety', title: '불안', description: '바닥이 보이지 않는 계단', example: '다음 발을 내디딜 때 그곳에 바닥이 있을지 확신할 수 없었어.', color: 'rgba(139, 126, 126, 0.1)' },
  { id: 'attachment', title: '애착', description: '엉켜버린 붉은 실', example: '끊어내려 할수록 실은 살을 파고들며 더욱 단단히 묶여왔지.', color: 'rgba(236, 72, 153, 0.08)' },
  { id: 'self-loathing', title: '자기혐오', description: '깨진 거울 밑바닥', example: '거울 속에 비친 것은 도저히 사랑할 수 없는 무언가의 파편이었어.', color: 'rgba(0, 0, 0, 0.15)' },
  { id: 'craving', title: '갈망', description: '마를 줄 모르는 샘물', example: '마실수록 목마름은 더해졌고, 갈증은 영혼까지 태워버릴 듯했지.', color: 'rgba(249, 115, 22, 0.08)' }
];
